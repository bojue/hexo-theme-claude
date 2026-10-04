这是精简后的 README：

---

# Hexo Theme Claude ✨

> 极简、内容驱动的 Hexo 技术博客主题，采用 Claude 经典暖陶土配色（`#D97757`）。

---

## 特性

* **内容驱动**：无首页过渡和个人卡片，主页直出文章列表。
* **Claude 配色**：暖纸白背景（`#FAF9F5`）与陶土橙（`#D97757`），固定浅色模式。
* **右侧目录**：大屏（`>= 1024px`）右侧吸顶并支持滚动监听，移动端自动隐藏。
* **快捷搜索**：支持 `⌘K` / `Ctrl+K` / `/` 唤起本地全文搜索。
* **实用功能**：代码块悬浮一键复制、行号与语法高亮。

---

## 安装指南

### 1. 下载主题

```bash
git clone https://github.com/bojue/hexo-theme-claude.git themes/hexo-theme-claude

```

### 2. 启用主题

修改 Hexo 根目录下的 `_config.yml`：

```yaml
theme: hexo-theme-claude

```

如需「关于」页面，执行：

```bash
hexo new page about

```

### 3. 本地预览

```bash
hexo clean && hexo s

```

访问 `http://localhost:4000` 即可。

---

## 主题配置

编辑 `themes/hexo-theme-claude/_config.yml`：

```yaml
# 站点名称
brand:
  name: Claude

# 导航菜单
menu:
  文章: /
  归档: /archives
  关于: /about

# 右侧目录
toc:
  enable: true
  max_depth: 3

# 阅读统计
reading_info:
  enable: false
  words_per_minute: 400

# 上/下一篇跳转
post_nav:
  enable: true

# 本地搜索（内置生成器）
search:
  enable: true
  path: /search.json

# 社交链接
social:
  github: https://github.com/your-name

# 页脚
footer:
  license: MIT License

```

> **提示**：配色定义在 `source/css/claude.css` 的 CSS 变量中，可直接修改。语言支持 `zh-CN` 与 `en`。

---

## 文章 Front-matter 示例

```markdown
---
title: 示例文章标题
date: 2026-03-24 10:00:00
categories: 技术
tags:
  - Frontend
description: 文章简要描述。
---

```

---

## 目录结构

```text
hexo-theme-claude/
├── _config.yml               # 主题配置
├── languages/                # 国际化（zh-CN, en）
├── layout/                   # EJS 模板
│   ├── layout.ejs
│   ├── index.ejs
│   ├── post.ejs
│   └── _partial/             # 页面组件
├── scripts/                  # 搜索生成器与辅助函数
└── source/                   # 样式与脚本 (CSS / JS)

```

---

## 开源协议

[MIT](https://www.google.com/search?q=LICENSE) © 2024-2026