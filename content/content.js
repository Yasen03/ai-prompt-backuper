// content.js

// =================================================================================
// 🔧 开发者配置区 (Developer Configuration Area)
// 如果遇到通用规则无法适配的网站，请在此处添加特定规则
// If generic rules fail, add site-specific rules here.
// =================================================================================
const SITE_CONFIGS = [
  // 示例 (Example):
  // {
  //   domains: ['example.com', 'test.ai'], // 匹配的域名 keywords
  //   inputSelector: '#custom-input-id',    // (可选) 指定输入框选择器
  //   submitSelector: '.custom-send-btn'    // (可选) 指定发送按钮选择器
  // },
  
  // 你可以在这里新增配置...
];

// =================================================================================

let isEnabled = true;
let lastActiveInput = null;
let currentConfig = null;

// Initialize
function init() {
  // Check for site-specific config
  const hostname = window.location.hostname;
  currentConfig = SITE_CONFIGS.find(config => 
    config.domains.some(domain => hostname.includes(domain))
  );

  if (currentConfig) {
    console.log('[AI Prompt Backuper] Loaded custom config for:', currentConfig.domains);
  }

  chrome.storage.local.get(['enabled'], (result) => {
    isEnabled = result.enabled !== false;
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled) {
      isEnabled = changes.enabled.newValue;
    }
  });

  document.addEventListener('focusin', handleFocus, true);
  document.addEventListener('input', handleInput, true);
  document.addEventListener('keydown', handleKeydown, true);
  document.addEventListener('click', handleClick, true);
}

function handleFocus(e) {
  if (isInput(e.target)) {
    lastActiveInput = e.target;
  }
}

function handleInput(e) {
  if (isInput(e.target)) {
    lastActiveInput = e.target;
  }
}

function isInput(el) {
  if (!el) return false;

  // 1. Custom Config Check
  if (currentConfig && currentConfig.inputSelector) {
    if (el.matches(currentConfig.inputSelector)) return true;
  }

  // 2. Generic Heuristic
  const tagName = el.tagName.toLowerCase();
  const isTextarea = tagName === 'textarea';
  const isContentEditable = el.isContentEditable;
  const isInputText = tagName === 'input' && (el.type === 'text' || el.type === 'search');
  
  // Skip password inputs
  if (tagName === 'input' && el.type === 'password') return false;
  
  return isTextarea || isContentEditable || isInputText;
}

function getInputValue(el) {
  if (!el) return '';
  if (el.tagName.toLowerCase() === 'textarea' || el.tagName.toLowerCase() === 'input') {
    return el.value;
  } else if (el.isContentEditable) {
    return el.innerText || el.textContent;
  }
  return '';
}

function handleKeydown(e) {
  if (!isEnabled) return;
  
  // 🚫 Fix for IME (Input Method Editor)
  // When typing Chinese/Japanese, pressing Enter to confirm the text should NOT trigger backup.
  if (e.isComposing || e.keyCode === 229) {
    return;
  }
  
  // Enter key, no Shift, no Ctrl/Cmd (to avoid other shortcuts), no Alt
  if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
    // Check if target is input
    if (isInput(e.target)) {
      const text = getInputValue(e.target);
      if (text && text.trim().length > 0) {
        backup(text.trim());
      }
    }
  }
}

function handleClick(e) {
  if (!isEnabled) return;
  
  // 1. Custom Config Check
  if (currentConfig && currentConfig.submitSelector) {
    const customBtn = e.target.closest(currentConfig.submitSelector);
    if (customBtn) {
       // Need active input
       if (lastActiveInput && isInput(lastActiveInput) && document.body.contains(lastActiveInput)) {
          const text = getInputValue(lastActiveInput);
          if (text && text.trim().length > 0) {
             backup(text.trim());
             return; // Done
          }
       }
    }
  }

  // 2. Generic Heuristic Check
  // Check if clicked element is a button or looks like one
  const btn = e.target.closest('button, [role="button"], [type="submit"], input[type="submit"]');
  if (btn) {
    // If we have a last active input and it has content
    if (lastActiveInput && isInput(lastActiveInput)) {
      // Check if the input is still in the document
      if (!document.body.contains(lastActiveInput)) {
        lastActiveInput = null;
        return;
      }
      
      const text = getInputValue(lastActiveInput);
      if (text && text.trim().length > 0) {
         // Heuristic: Is the button "send-like"?
         const btnText = (btn.innerText + (btn.getAttribute('aria-label') || '') + (btn.getAttribute('title') || '')).toLowerCase();
         const likelySend = /send|submit|post|ask|chat|message|发送|提交|enter|go/.test(btnText) || 
                            btn.querySelector('svg') || // Often icons are SVGs
                            btn.classList.contains('send') || 
                            btn.id.includes('send') ||
                            btn.type === 'submit';
                            
         if (likelySend) {
             backup(text.trim());
         }
      }
    }
  }
}

function backup(text) {
  // 1. Copy to clipboard
  navigator.clipboard.writeText(text).then(() => {
    // Success
    showToast();
    saveToHistory(text);
  }).catch(err => {
    console.error('Backup failed:', err);
    // Even if clipboard fails (focus issues?), save to history
    saveToHistory(text);
  });
}

function saveToHistory(text) {
  // Check if extension context is valid
  try {
    if (!chrome.runtime || !chrome.runtime.id) {
      throw new Error('Extension context invalidated');
    }
    
    chrome.storage.local.get(['history'], (result) => {
      // Check for runtime errors inside callback
      if (chrome.runtime.lastError) {
        console.error('AI Prompt Backuper Storage Error:', chrome.runtime.lastError);
        return;
      }
      
      let history = result.history || [];
      
      // Avoid duplicates at the top
      if (history.length > 0 && history[0].content === text) {
        return;
      }
      
      const newItem = {
        content: text,
        timestamp: Date.now()
      };
      
      history.unshift(newItem);
      
      // Limit to 10
      if (history.length > 10) {
        history = history.slice(0, 10);
      }
      
      chrome.storage.local.set({ history: history });
    });
  } catch (e) {
    console.warn('[AI Prompt Backuper] Extension context invalidated. Please reload the page to restore functionality.');
  }
}

function showToast() {
  let toast = document.getElementById('ai-prompt-backup-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ai-prompt-backup-toast';
    toast.className = 'ai-prompt-backup-toast';
    // Add icon
    toast.innerHTML = `
      <svg class="ai-prompt-backup-icon" viewBox="0 0 24 24">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
      <span>Prompt Backed Up</span>
    `;
    document.body.appendChild(toast);
  }
  
  // Show
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  // Hide after 3s
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

init();
