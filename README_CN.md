<div align="center">
  <h1>
    <img src="icons/icon128.png" width="64" height="64" alt="Logo" style="vertical-align: middle;"> 
    <span style="vertical-align: middle;">AI Prompt Backuper</span>
  </h1>
  <p>
    <strong>再也不用担心丢失你的 AI 提示词。自动备份到剪贴板和本地历史记录。</strong>
  </p>
  <p>
    <a href="./README.md">English</a> | <strong>中文</strong>
  </p>
</div>

---

## 🇨🇳 中文说明

### 简介
> “网络连接已断开，请重试。”
> —— *世界上最悲伤的短篇小说。*

**你是否有过这样的崩溃时刻？**

花费半小时精心打磨了一段几百字的超级 Prompt，满怀期待地点击“发送”，结果屏幕上弹出一行冷冰冰的报错，或者页面突然自动刷新——
**一瞬间，所有心血化为乌有。**

那种想砸键盘的无力感，我们都懂。

**AI Prompt Backuper** 来帮助你。它是你与大模型对话时最安静的守护者，在你按下回车的那一刻，自动将你的 Prompt 备份到剪贴板和本地记录里。

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
目前你可以通过源码直接安装使用。请根据你的浏览器选择相应的安装步骤：

#### 1. 下载源码
克隆本仓库或下载 ZIP 包并解压到本地文件夹。

#### 2. 加载插件

| ![Microsoft Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white) | ![Google Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white) |
| :--- | :--- |
| **Microsoft Edge 浏览器** | **Google Chrome 浏览器** |
| 1. 在地址栏输入 `edge://extensions` 并回车。 | 1. 在地址栏输入 `chrome://extensions` 并回车。 |
| 2. 在页面**左下角**找到并打开 **“开发人员模式” (Developer mode)** 开关。 | 2. 在页面**右上角**找到并打开 **“开发者模式” (Developer mode)** 开关。 |
| 3. 点击页面顶部的 **“加载解压缩的扩展” (Load unpacked)** 按钮。 | 3. 点击页面左上角的 **“加载已解压的扩展程序” (Load unpacked)** 按钮。 |
| 4. 选择本项目中的 `ai-prompt-backuper` 文件夹。 | 4. 选择本项目中的 `ai-prompt-backuper` 文件夹。 |

#### 3. 固定插件
建议在浏览器右上角将本插件固定（Pin），方便随时查看历史记录。

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

## ❤️ 支持项目

如果这个插件对你有帮助，请在 GitHub 上点个 **Star** ⭐️ 支持一下！

欢迎提交 Issue 和 Pull Request！

## 贡献者

<a href="https://github.com/Yasen03/ai-prompt-backuper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Yasen03/ai-prompt-backuper" />
</a>

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=Yasen03/ai-prompt-backuper&type=Date)](https://star-history.com/#Yasen03/ai-prompt-backuper&Date)

---
<div align="center">
  <sub>Built with ❤️ by Yasen</sub>
</div>
