import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, getDictionary, locales } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";
import AuthorCard from "@/components/AuthorCard";

interface PostPageProps {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}

export async function generateStaticParams() {
  const params: { slug: string; lang: Locale }[] = [];

  for (const locale of locales) {
    const posts = getAllPostSlugs(locale);
    for (const post of posts) {
      params.push({ slug: post.slug, lang: locale });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const lang = resolvedParams.lang as Locale;
  try {
    const post = await getPostData(slug, lang);
    const ogImage = post.image
      ? {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      : undefined;

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: ["António Vieira"],
        images: ogImage ? [ogImage] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: ogImage ? [post.image!] : [],
      },
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const lang = resolvedParams.lang as Locale;
  const t = getDictionary(lang);

  let post;
  try {
    post = await getPostData(slug, lang);
  } catch {
    notFound();
  }

  return (
    <article className="animate-in fade-in duration-700">
      <header className="flex flex-col mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-12">
        <time
          dateTime={post.date}
          className="order-first flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6"
        >
          {new Date(post.date).toLocaleDateString(
            lang === "pt" ? "pt-BR" : "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          )}
        </time>
        {post.image && (
          <div className="mb-10 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800 relative aspect-video">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl leading-[1.1]">
          {post.title}
        </h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/${lang}/blog/tag/${encodeURIComponent(tag)}`}
              className="inline-block border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 rounded-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      <div
        className="prose dark:prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-pre:rounded-md prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
          {t.blog.sharePost || "Share"}
        </span>
        <ShareButtons
          title={post.title}
          url={`https://andersonvieira-dev.vercel.app/${lang}/blog/${post.slug}`}
        />
      </div>

      <AuthorCard lang={lang} t={t} />

      <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          <Link
            href={`/${lang}/blog`}
            className="flex items-center group hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="mr-3 h-4 w-4 stroke-current"
            >
              <path
                d="M9.25 10.25 6.75 8l2.5-2.25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.blog.backToArticles}
          </Link>
        </div>
      </footer>
    </article>
  );
}
