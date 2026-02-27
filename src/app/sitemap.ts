import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/posts";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andersonvieira-dev.vercel.app";

  let posts: MetadataRoute.Sitemap = [];
  let routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const localePosts = getAllPostSlugs(locale).map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(),
    }));
    posts = [...posts, ...localePosts];

    const localeRoutes = [`/${locale}`, `/${locale}/blog`].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }));
    routes = [...routes, ...localeRoutes];
  }

  // Adding the root redirect for completeness
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
  });

  return [...routes, ...posts];
}
