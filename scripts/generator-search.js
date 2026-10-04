/**
 * Hexo Theme Claude - Search JSON Generator
 * Generates search.json containing titles, URLs, tags, categories, and plain text content
 */

/* global hexo */
hexo.extend.generator.register('claude_search_json', function (site) {
  const config = hexo.theme.config.search;
  if (!config || !config.enable) return;

  const posts = site.posts.sort('-date').toArray();
  const data = posts.map(post => {
    return {
      title: post.title || 'Untitled',
      url: hexo.config.root + post.path,
      content: post.content ? post.content.replace(/<[^>]+>/g, '').replace(/[\r\n\t]+/g, ' ').trim() : '',
      date: post.date.format('YYYY-MM-DD'),
      tags: post.tags ? post.tags.map(t => t.name) : [],
      categories: post.categories ? post.categories.map(c => c.name) : []
    };
  });

  return {
    path: config.path ? config.path.replace(/^\//, '') : 'search.json',
    data: JSON.stringify(data)
  };
});
