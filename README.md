<div align="center">
  <h1>
    <img src="icons/icon128.png" width="64" height="64" alt="Logo" style="vertical-align: middle;"> 
    <span style="vertical-align: middle;">AI Prompt Backuper</span>
  </h1>
  <p>
    <strong>Never lose your AI prompts again. Auto-backup to clipboard & local history.</strong>
  </p>
  <p>
    <strong>English</strong> | <a href="./README_CN.md">中文</a>
  </p>
</div>

---

## 🇬🇧 English

### Introduction
> "Network Error. Please try again." 
> — *The saddest short story ever told.*

**Have you ever spent 20 minutes crafting the *perfect* AI prompt, only to hit 'Send' and watch it vanish into thin air?** 

Maybe the page refreshed, the internet blinked, or you accidentally closed the tab. The pain of rewriting a complex thought from scratch is real.

**AI Prompt Backuper** is your **invisible safety net**. It silently watches your back, automatically saving every prompt you send to your local clipboard and history *the exact moment* you hit Enter. 

**Never let a browser crash or a flaky connection destroy your work again.**

Whenever you send a message to an AI (or search engine), this extension automatically:
1.  **Copies** your text to the system **clipboard**.
2.  **Saves** it to a **local history** (last 10 items).

### ✨ Key Features
*   **Universal Compatibility**: Works with ChatGPT, Claude, Gemini, DeepSeek, and even Search Engines (Google, Bing, Baidu).
*   **Zero-Config Auto-Detection**: Intelligently identifies input boxes and "Send" buttons.
*   **Privacy First**: **100% Local**. No data is sent to any server. Password inputs are strictly ignored.
*   **History Management**: Access your last 10 prompts via the popup menu. Click to copy them back.
*   **Smart Triggers**: Activates on `Enter` key (excluding Shift+Enter) or clicking the Send button.

### 🚀 Installation (Load Unpacked)
Since this extension is not yet in the Web Store, you can install it manually. Please follow the steps for your browser:

#### 1. Download Code
Clone this repository or download the ZIP and extract it.

#### 2. Load Extension

| ![Microsoft Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white) | ![Google Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white) |
| :--- | :--- |
| **Microsoft Edge** | **Google Chrome** |
| 1. Go to `edge://extensions` | 1. Go to `chrome://extensions` |
| 2. Toggle **"Developer mode"** in the **bottom-left** corner (or left sidebar). | 2. Toggle **"Developer mode"** in the **top-right** corner. |
| 3. Click **"Load unpacked"** button at the top. | 3. Click **"Load unpacked"** button in the **top-left** corner. |
| 4. Select the `ai-prompt-backuper` folder from this project. | 4. Select the `ai-prompt-backuper` folder from this project. |

#### 3. Pin It
Pin the extension icon to your toolbar for easy access to history.

### 📖 How to Use
1.  **Just Type & Send**: Use any AI website normally.
2.  **Visual Confirmation**: You'll see a subtle "Prompt Backed Up" toast notification at the top of the screen.
3.  **Retrieve History**: Click the extension icon. You'll see your recent prompts.
    *   **Hover**: See "Click to Copy".
    *   **Click**: The text is copied to your clipboard immediately.

### ⚙️ Advanced Configuration (For Developers)
The extension uses a generic heuristic to detect inputs. If you find a website that isn't supported, you can easily add it:

1.  Open `content/content.js`.
2.  Locate the `SITE_CONFIGS` array at the top.
3.  Add a new configuration object:
    ```javascript
    const SITE_CONFIGS = [
      {
        domains: ['example.com'],      // Domain keywords
        inputSelector: '#chat-input',  // CSS selector for the input box
        submitSelector: '.send-btn'    // CSS selector for the send button
      }
    ];
    ```
4.  Reload the extension in your browser's extension manager.

### 🔒 Privacy Policy
*   **Storage Permission**: Used only to save your last 10 prompts locally on your device.
*   **Clipboard Permission**: Used to write your prompt to the clipboard for backup.
*   **All URLs Permission**: Required to inject the content script into various AI websites you visit.
*   **Data Handling**: We do **not** collect, transmit, or sell any user data. Everything stays in your browser.

---

## ❤️ Support

If you find this extension helpful, please give us a **Star** ⭐️ on GitHub!

Issues and Pull Requests are welcome!

## Contributors

<a href="https://github.com/Yasen03/ai-prompt-backuper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Yasen03/ai-prompt-backuper" />
</a>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Yasen03/ai-prompt-backuper&type=Date)](https://star-history.com/#Yasen03/ai-prompt-backuper&Date)

---
<div align="center">
  <sub>Built with ❤️ by Yasen</sub>
</div>
