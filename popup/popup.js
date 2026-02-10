document.addEventListener('DOMContentLoaded', () => {
  const toggleBackup = document.getElementById('toggle-backup');
  const statusText = document.getElementById('status-text');
  const historyList = document.getElementById('history-list');
  const clearHistoryBtn = document.getElementById('clear-history');

  // Load settings
  chrome.storage.local.get(['enabled', 'history'], (result) => {
    const isEnabled = result.enabled !== false; // Default true
    toggleBackup.checked = isEnabled;
    updateStatusText(isEnabled);
    
    renderHistory(result.history || []);
  });

  // Toggle Listener
  toggleBackup.addEventListener('change', () => {
    const isEnabled = toggleBackup.checked;
    chrome.storage.local.set({ enabled: isEnabled }, () => {
      updateStatusText(isEnabled);
    });
  });

  // Clear History Listener
  clearHistoryBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear the history?')) {
      chrome.storage.local.set({ history: [] }, () => {
        renderHistory([]);
      });
    }
  });

  function updateStatusText(enabled) {
    statusText.textContent = enabled ? 'Enabled' : 'Disabled';
    statusText.style.color = enabled ? '#2196F3' : '#999';
  }

  function renderHistory(history) {
    historyList.innerHTML = '';
    
    if (!history || history.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'empty-state';
      emptyLi.textContent = 'No history yet.';
      historyList.appendChild(emptyLi);
      return;
    }

    history.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'history-item';
      
      // Allow clicking to copy again
      li.addEventListener('click', () => {
        navigator.clipboard.writeText(item.content).then(() => {
          // Visual feedback
          li.classList.add('copied');
          setTimeout(() => {
            li.classList.remove('copied');
          }, 1500);
        });
      });
      li.title = 'Click to copy to clipboard';

      const contentDiv = document.createElement('div');
      contentDiv.className = 'history-content';
      contentDiv.textContent = item.content;
      
      const metaDiv = document.createElement('div');
      metaDiv.className = 'history-meta';
      const date = new Date(item.timestamp);
      metaDiv.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      
      li.appendChild(contentDiv);
      li.appendChild(metaDiv);
      historyList.appendChild(li);
    });
  }
});
