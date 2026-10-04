# hexo-theme-claude

[English](README.md) | [简体中文](README.zh-CN.md)

一个内容优先的 Hexo 博客主题，固定浅色，使用 Claude 暖陶土配色（#d97757）。

## 安装

```bash
git clone https://github.com/bojue/hexo-theme-claude.git themes/hexo-theme-claude
```

在站点根目录 `_config.yml` 中启用：

```yaml
theme: hexo-theme-claude
```

菜单默认包含「关于」页，需要的话先创建，不需要就在主题配置中删掉该项：

```bash
hexo new page about
```

## 配置

所有配置项都在主题目录的 `_config.yml` 中：

- `menu`：导航菜单项
- `toc`：文章目录（层级、开关）
- `reading_info`：字数与阅读时长，默认关闭
- `post_nav`：上一篇/下一篇卡片
- `search`：本地搜索的索引路径与开关
- `social`：导航栏显示的 GitHub 链接
- `footer`：页脚版权文案

配色不提供配置项，直接改 `source/css/claude.css` 顶部的 CSS 变量即可。

## 开源协议

[MIT](LICENSE)
