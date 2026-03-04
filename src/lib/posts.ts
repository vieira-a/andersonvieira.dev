import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { Locale, locales } from "@/lib/i18n";

const basePostsDirectory = path.join(process.cwd(), "content");

export type PostMetadata = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  image?: string;
};

export type Post = PostMetadata & {
  contentHtml: string;
};

export function getSortedPostsData(locale: Locale): PostMetadata[] {
  const postsDirectory = path.join(basePostsDirectory, locale);

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);
      const defaultSlug = fileName.replace(/\.md$/, "");
      const finalSlug = matterResult.data.slug || defaultSlug;

      return {
        slug: finalSlug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        tags: matterResult.data.tags || [],
        image: matterResult.data.image,
      } as PostMetadata;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsAcrossLocales(): (PostMetadata & {
  locale: Locale;
})[] {
  let allPosts: (PostMetadata & { locale: Locale })[] = [];
  for (const locale of locales) {
    const posts = getSortedPostsData(locale).map((p) => ({ ...p, locale }));
    allPosts = [...allPosts, ...posts];
  }
  return allPosts;
}

export function getAllPostSlugs(locale: Locale) {
  const postsDirectory = path.join(basePostsDirectory, locale);
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const defaultSlug = fileName.replace(/\.md$/, "");
      return {
        slug: (matterResult.data.slug || defaultSlug).toString(),
      };
    })
    .filter((post) => post.slug && post.slug.trim() !== "");
}

export async function getPostData(slug: string, locale: Locale): Promise<Post> {
  const postsDirectory = path.join(basePostsDirectory, locale);
  const fileNames = fs.readdirSync(postsDirectory);

  let targetFileName = `${slug}.md`;

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    if (matterResult.data.slug === slug || fileName === `${slug}.md`) {
      targetFileName = fileName;
      break;
    }
  }

  const fullPath = path.join(basePostsDirectory, locale, targetFileName);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found for slug: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processPipeline = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      keepBackground: true,
    })
    .use(rehypeStringify);

  const processedContent = await processPipeline.process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    tags: matterResult.data.tags || [],
    image: matterResult.data.image,
  };
}

export function getAllTags(locale: Locale): string[] {
  const posts = getSortedPostsData(locale);
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getPostsByTag(locale: Locale, tag: string): PostMetadata[] {
  const posts = getSortedPostsData(locale);
  return posts.filter((post) => post.tags.includes(tag));
}
