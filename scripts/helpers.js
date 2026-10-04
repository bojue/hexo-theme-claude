/**
 * Hexo Theme Claude - Template Helpers
 */

/* global hexo */
hexo.extend.helper.register('claude_word_count', function (content) {
  if (!content) return 0;
  const clean = content.replace(/<[^>]+>/g, '').trim();
  // Count CJK characters and english words
  const cjk = (clean.match(/[\u4e00-\u9fa5]/g) || []).length;
  const nonCjk = (clean.replace(/[\u4e00-\u9fa5]/g, ' ').match(/[a-zA-Z0-9_\u0392-\u03c9\d]+|[\u3131-\uD79D]/g) || []).length;
  return cjk + nonCjk;
});

hexo.extend.helper.register('claude_read_time', function (content) {
  const words = hexo.extend.helper.get('claude_word_count').call(this, content);
  const wpm = (hexo.theme.config.reading_info && hexo.theme.config.reading_info.words_per_minute) || 400;
  const minutes = Math.ceil(words / wpm);
  return minutes > 0 ? minutes : 1;
});

hexo.extend.helper.register('claude_is_current', function (path) {
  const currentPath = this.path;
  if (path === '/') {
    return currentPath === '' || currentPath === 'index.html';
  }
  const target = path.replace(/^\//, '');
  return currentPath === target
    || currentPath.startsWith(target + '/')
    || currentPath.startsWith(target + '.html');
});
