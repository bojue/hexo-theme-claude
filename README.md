# Hexo Theme Claude ✨

> **极简、内容驱动（Content-First）的现代 Hexo 技术博客主题。**  
> 采用 **Claude 官方经典暖陶土配色**（`#D97757`），拥有桌面端自适应**右侧吸顶目录（TOC + ScrollSpy）**、全键盘快捷搜索（`⌘K`）与纯净浅色阅读界面。

---

## ✨ 特性一览 (Features)

- 🚀 **内容驱动（Content-First）**：移除传统臃肿的个人卡片与过渡首页，站点主入口直出高密度文章流，直奔核心技术内容。
- 🎨 **Claude 官方配色**：
  - 暖纸白背景（`#faf9f5`）搭配经典陶土橙主色（`#d97757`）；
  - 舒适对比度，适合开发者长时间沉浸阅读；
  - 固定浅色模式，不跟随系统切换，任何环境下表现一致。
- 📑 **右侧常驻目录（Sticky TOC）**：
  - 大屏（`>= 1024px`）自动展示在文章右侧固定吸顶；
  - 随滚动实时监听并点亮当前阅读章节，平直左侧指示条；
  - 小屏与移动端自动隐退，确保单栏极致阅读。
- 🔍 **全局即时搜索（Instant Search）**：
  - 快捷键唤起：按 `⌘K`、`Ctrl+K` 或 `/` 即可打开搜索浮层；
  - 本地毫秒级全文匹配（标题、正文、标签、分类）与关键词高亮。
- 📋 **代码一键复制**：
  - 代码块鼠标悬浮右上角浮现复制按钮，原生支持行号与各种编程语言语法高亮。
- 🧹 **零干扰纯粹排版**：
  - 拒绝花哨的阅读进度条、拒绝繁杂的分享/回顶浮动挂件，专注于最高密度的文字与代码表达。

---

## 📦 安装指南 (Installation)

### 1. 下载主题
在 Hexo 根目录下执行：

```bash
# 方式一：Git Clone 到 themes 目录
git clone https://github.com/bojue/hexo-theme-claude.git themes/hexo-theme-claude

# 方式二：直接复制 hexo-theme-claude 文件夹至您的 Hexo 站点 themes/hexo-theme-claude
```

### 2. 启用主题
打开 Hexo 根目录下的 `_config.yml`，修改主题配置：

```yaml
theme: hexo-theme-claude
```

默认导航包含「关于」页面，如需要请先创建（不需要可在主题配置的 `menu` 中删除）：

```bash
hexo new page about
```

### 3. 生成与本地预览

```bash
hexo clean && hexo s
```
打开浏览器访问 `http://localhost:4000` 即可体验。

---

## ⚙️ 主题配置 (`_config.yml`)

在 `themes/hexo-theme-claude/_config.yml` 中可自定义各项设置：

```yaml
# 站点品牌名（显示在导航栏与页脚）
brand:
  name: Claude

# 导航菜单项
menu:
  文章: /
  归档: /archives
  关于: /about

# 右侧目录（桌面端 >= 1024px 自动吸顶，小屏隐藏）
toc:
  enable: true
  max_depth: 3

# 阅读字数与预估时间统计
reading_info:
  enable: false
  words_per_minute: 400

# 上一篇 / 下一篇底部跳转卡片
post_nav:
  enable: true

# 本地搜索（内置生成器，无需额外依赖）
search:
  enable: true
  path: /search.json

# 社交链接（导航栏 GitHub 图标）
social:
  github: https://github.com/your-name

# 页脚配置
footer:
  license: MIT License
```

> 主题配色固定为 Claude 官方暖陶土调色板（浅色模式），定义在 `source/css/claude.css` 顶部的 CSS 变量中，可直接在该处自定义。
>
> 界面语言跟随站点根目录 `_config.yml` 的 `language` 配置，内置 `zh-CN`（默认）与 `en`。

---

## 📝 文章 Front-matter 示例

在每篇 Markdown 文章的开头，建议配置以下元数据：

```markdown
---
title: 浅谈现代前端架构演进：从单体 SPA 到微前端与 Islands
date: 2026-03-24 10:00:00
categories: 架构设计
tags:
  - Architecture
  - Frontend
  - Performance
description: 梳理现代前端十年架构演进脉络，深度剖析微前端、Islands 架构及全栈运行时核心取舍。
---
```

---

## 📁 目录结构 (Directory Structure)

```text
hexo-theme-claude/
├── _config.yml               # 主题配置文件
├── package.json              # 元信息
├── LICENSE                   # MIT 开源协议
├── README.md                 # 主题说明文档
├── languages/                # 国际化语言包
│   ├── default.yml
│   ├── zh-CN.yml             # 中文
│   └── en.yml                # 英文
├── layout/                   # EJS 模板引擎
│   ├── layout.ejs            # 基础骨架
│   ├── index.ejs             # 内容驱动文章流列表
│   ├── post.ejs              # 文章详情页（带右侧吸顶目录）
│   ├── archive.ejs           # 年份归档时间轴
│   ├── page.ejs              # 通用单页
│   └── _partial/
│       ├── head.ejs          # 页面头部与 SEO
│       ├── header.ejs        # 导航栏与工具栏
│       ├── footer.ejs        # 页脚
│       └── search.ejs        # Cmd+K 搜索模态框
├── scripts/                  # 模板增强与生成器
│   ├── generator-search.js   # 自动生成 search.json
│   └── helpers.js            # 字数、阅读时间、路径辅助函数
└── source/                   # 静态资源
    ├── css/
    │   └── claude.css        # 纯净响应式样式
    └── js/
        ├── main.js           # TOC 滚动监听、代码复制
        └── search.js         # 毫秒级本地全文搜索
```

---

## 📄 开源许可 (License)

[MIT License](LICENSE) © 2024-2026.
