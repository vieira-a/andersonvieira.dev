import { getSortedPostsData } from "@/lib/posts";
import SearchableBlogList from "@/components/SearchableBlogList";
import { Metadata } from "next";
import { Locale, getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Journal",
  description: "Technical deep dives and architectural reflections.",
};

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const t = getDictionary(lang);
  const allPostsData = getSortedPostsData(lang);

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t.blog.title}
        </h1>
        <p className="text-lg font-normal text-zinc-500 dark:text-zinc-400">
          {t.blog.subtitle}
        </p>
      </div>

      <SearchableBlogList posts={allPostsData} lang={lang} t={t} />
    </div>
  );
}
