import { MetadataRoute } from 'next';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import { CHANNELS_DATA } from '@/lib/channels';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${CONSTANTS.DOMAIN}`;

  // Core static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/setup`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic channel category pages from lib/channels.ts
  const dynamicChannels = Object.keys(CHANNELS_DATA).map((slug) => ({
    url: `${baseUrl}/channels/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Dynamic blog posts
  const dynamicBlogPosts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicChannels, ...dynamicBlogPosts];
}