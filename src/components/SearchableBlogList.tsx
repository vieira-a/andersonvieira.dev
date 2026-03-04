"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PostMetadata } from "@/lib/posts";

interface SearchableBlogListProps {
  posts: PostMetadata[];
  lang: string;
  t: {
    blog: {
      searchPlaceholder: string;
      noResults: string;
    };
  };
}

export default function SearchableBlogList({
  posts,
  lang,
  t,
}: SearchableBlogListProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!query) return posts;
    const lowerQuery = query.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    );
  }, [posts, query]);

  return (
    <div className="space-y-12">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder={t.blog.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-cyan-400 focus:border-blue-600 dark:focus:border-cyan-400 transition-all text-sm"
        />
      </div>

      <div className="space-y-14">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(({ slug, date, title, description, tags }) => (
            <article
              key={slug}
              className="group relative flex flex-col items-start border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 hover:border-blue-600 dark:hover:border-cyan-400 transition-all"
            >
              <time
                className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500"
                dateTime={date}
              >
                {new Date(date).toLocaleDateString(
                  lang === "pt" ? "pt-BR" : "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  },
                )}
              </time>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                <Link href={`/${lang}/blog/${slug}`}>{title}</Link>
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-normal">
                {description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${lang}/blog/tag/${encodeURIComponent(tag)}`}
                    className="inline-block border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 rounded-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-zinc-100 dark:border-zinc-900 rounded-md">
            <p className="text-zinc-500 dark:text-zinc-400 font-normal">
              {t.blog.noResults}{" "}
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                &quot;{query}&quot;
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
