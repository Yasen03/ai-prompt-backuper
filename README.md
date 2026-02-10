<div align="center">
  <img src="icons/icon128.png" width="100" height="100" alt="Logo">
  <h1>AI Prompt Backuper</h1>
  <p>
    <strong>Never lose your AI prompts again. Auto-backup to clipboard & local history.</strong>
  </p>
  <p>
    <a href="#-english">English</a> | <a href="#-中文说明">中文</a>
  </p>
</div>

---

<a name="-english"></a>
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
Since this extension is not yet in the Chrome Web Store, you can install it manually:

1.  **Download Code**: Clone this repository or download the ZIP.
2.  **Open Extensions Page**:
    *   Chrome: Go to `chrome://extensions`
    *   Edge: Go to `edge://extensions`
3.  **Enable Developer Mode**: Toggle the switch in the top-right corner.
4.  **Load Extension**: Click **"Load unpacked"** and select the `ai-prompt-backuper` folder from this project.
5.  **Pin It**: Pin the extension icon to your toolbar for easy access to history.

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
4.  Reload the extension in `chrome://extensions`.

### 🔒 Privacy Policy
*   **Storage Permission**: Used only to save your last 10 prompts locally on your device.
*   **Clipboard Permission**: Used to write your prompt to the clipboard for backup.
*   **All URLs Permission**: Required to inject the content script into various AI websites you visit.
*   **Data Handling**: We do **not** collect, transmit, or sell any user data. Everything stays in your browser.

---

<a name="-中文说明"></a>
## 🇨🇳 中文说明

### 简介
> “网络连接已断开，请重试。”
> —— *世界上最悲伤的短篇小说。*

**你是否有过这样的崩溃时刻？**

花费半小时精心打磨了一段几百字的超级 Prompt，满怀期待地点击“发送”，结果屏幕上弹出一行冷冰冰的报错，或者页面突然自动刷新——
**一瞬间，所有心血化为乌有。**

那种想砸键盘的无力感，我们都懂。

**AI Prompt Backuper** 就是你的**“后悔药”**。它是你浏览器里最安静的守护者，在你按下回车的那一刻，自动将你的灵感备份到剪贴板和本地保险箱。

**无论网页如何崩溃，你的 Prompt 永远都在。**

本插件会在你发送消息的瞬间，自动执行双重备份：
1.  **自动复制**到系统**剪贴板**。
2.  **自动保存**到插件的**本地历史记录**（最近10条）。

### ✨ 核心功能
*   **全平台通用**：完美支持 ChatGPT, Claude, Gemini, DeepSeek, 文心一言, 通义千问等，甚至支持搜索引擎（Google, 百度, Bing）。
*   **智能识别**：无需配置，自动识别网页上的输入框和发送按钮。
*   **隐私安全**：**纯本地运行**。绝不上传任何数据到服务器。自动忽略密码框。
*   **历史回溯**：点击插件图标即可查看最近 10 条记录。
*   **一键复用**：在历史记录中点击任意条目，即可重新复制到剪贴板。

### 🚀 安装指南 (开发者模式)
目前你可以通过源码直接安装使用：

1.  **下载代码**：克隆本仓库或下载 ZIP 包并解压。
2.  **打开扩展管理页**：
    *   Chrome 浏览器输入：`chrome://extensions`
    *   Edge 浏览器输入：`edge://extensions`
3.  **开启开发者模式**：点击页面右上角的 **“开发者模式” (Developer mode)** 开关。
4.  **加载插件**：点击左上角的 **“加载已解压的扩展程序” (Load unpacked)**。
5.  **选择目录**：选择本项目中的 `ai-prompt-backuper` 文件夹。
6.  **建议**：在浏览器右上角将本插件固定（Pin），方便随时查看历史。

### 📖 使用手册
1.  **正常对话**：在任意 AI 网页或搜索框输入文字。
2.  **触发备份**：按下 `Enter` 键（非换行）或点击发送按钮。
3.  **状态反馈**：页面顶部会弹出黑色的 "Prompt Backed Up" 提示，表示备份成功。
4.  **查看与复制**：
    *   点击浏览器右上角的插件图标。
    *   列表显示最近 10 条记录。
    *   **鼠标悬停**：显示 "Click to Copy"。
    *   **点击条目**：提示 "Copied!"，内容已复制到剪贴板。

### ⚙️ 高级配置 (开发者指南)
插件内置了通用的识别算法，如果遇到无法识别的特殊网站，你可以手动添加配置：

1.  打开项目中的 `content/content.js` 文件。
2.  找到顶部的 `SITE_CONFIGS` 数组。
3.  参考示例添加规则：
    ```javascript
    const SITE_CONFIGS = [
      {
        domains: ['example.com'],       // 网站域名关键词
        inputSelector: '#custom-input', // 输入框的 CSS 选择器
        submitSelector: '.send-btn'     // 发送按钮的 CSS 选择器
      }
    ];
    ```
4.  保存文件后，回到扩展管理页点击插件的 **“刷新” (Reload)** 按钮即可生效。

### 🔒 隐私与权限
*   **Storage (存储)**：仅用于在你的本地浏览器中保存历史记录和设置。
*   **Clipboard (剪贴板)**：仅用于写入备份数据，不会读取你的其他剪贴板内容。
*   **All Urls (所有网站)**：为了能适配未知的 AI 网站，需要此权限来注入自动检测脚本。
*   **绝对承诺**：本插件没有任何后台服务，不收集任何用户隐私数据。

---
<div align="center">
  <sub>Built with ❤️ by AI Prompt Backuper Team</sub>
</div>
