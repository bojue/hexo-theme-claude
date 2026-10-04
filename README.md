# hexo-theme-claude

English | [简体中文](README.zh-CN.md)

A content-first Hexo blog theme. Light mode only, styled with the Claude warm-clay palette (#d97757).

## Installation

```bash
git clone https://github.com/bojue/hexo-theme-claude.git themes/hexo-theme-claude
```

Enable it in your site's root `_config.yml`:

```yaml
theme: hexo-theme-claude
```

The menu includes an About page by default. Create it if needed, or remove the entry from the theme config:

```bash
hexo new page about
```

## Configuration

All options are in the theme's `_config.yml`:

- `menu`: navigation entries
- `toc`: table of contents (depth, on/off)
- `reading_info`: word count and reading time, disabled by default
- `post_nav`: previous/next post cards
- `search`: local search index path and on/off
- `social`: GitHub link shown in the header
- `footer`: footer license text

There is no config option for colors. Edit the CSS variables at the top of `source/css/claude.css` directly.

## License

[MIT](LICENSE)
