import { getAllPostsAcrossLocales } from "@/lib/posts";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPostsAcrossLocales();
  const baseUrl = "https://andersonvieira-dev.vercel.app";

  const itemsXml = posts
    .map((post) => {
      return `
    <item>
      <title>${post.title} [${post.locale.toUpperCase()}]</title>
      <link>${baseUrl}/${post.locale}/blog/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/${post.locale}/blog/${post.slug}</guid>
    </item>`;
    })
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Senior Engineer Blog</title>
    <link>${baseUrl}</link>
    <description>Writings on software architecture and backend engineering across locales.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
