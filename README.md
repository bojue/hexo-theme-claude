# hexo-theme-claude

一个内容优先的 Hexo 博客主题，固定浅色，使用 Claude 暖陶土配色（#d97757）。

## 特性

- 首页直接输出文章列表，无额外首页
- 文章页右侧吸顶目录，带滚动定位，窄屏自动隐藏
- 本地全文搜索，按 `⌘K`（或 `/`）唤起，无需第三方服务
- 代码块一键复制，兼容 Hexo 自带的行号与语法高亮
- 内置中文与英文文案，跟随站点 `language` 配置

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

所有可配置项都在主题目录的 `_config.yml` 中，含注释说明：菜单、目录（`toc`）、阅读时长（`reading_info`，默认关）、上下篇导航（`post_nav`）、搜索（`search`）、GitHub 链接（`social`）、页脚（`footer`）。

配色不提供配置项，直接改 `source/css/claude.css` 顶部的 CSS 变量即可。

## License

[MIT](LICENSE)
