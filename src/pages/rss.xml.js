import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "孙亖哥的博客",
    description: "孙亖哥的博客，谢谢技术笔记、生活随笔等等。",
    site: 'https://blog.side4u.cn',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
