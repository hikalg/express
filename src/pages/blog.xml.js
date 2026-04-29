import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: `Everest's Blog`,
    description: `Just Everest Luong (and sometimes Ery) yapping`,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.data.shortid}/`,
      pubDate: post.data.date,
      content: post.data.content
    })),
    author: `everest@hikamarine.au`,
    customData: `<language>en-au</language>`,
  });
}