import { getPostsByTag, getAllTags } from "@/lib/posts";
import { Locale, getDictionary, locales } from "@/lib/i18n";
import Link from "next/link";
import { Metadata } from "next";

interface TagPageProps {
  params: Promise<{
    lang: string;
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const params: { lang: string; tag: string }[] = [];

  for (const locale of locales) {
    const tags = getAllTags(locale);
    for (const tag of tags) {
      params.push({ lang: locale, tag });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const tag = decodeURIComponent(resolvedParams.tag);
  const t = getDictionary(lang);

  return {
    title: `${t.blog.taggedWith} "${tag}"`,
    description: `Browse all articles tagged with ${tag}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const tag = decodeURIComponent(resolvedParams.tag);
  const t = getDictionary(lang);
  const posts = getPostsByTag(lang, tag);

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <Link
            href={`/${lang}/blog`}
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            {t.nav.journal}
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-100">
            {t.blog.taggedWith}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <span className="text-blue-600 dark:text-cyan-400">#</span> {tag}
        </h1>
        <p className="text-lg font-normal text-zinc-500 dark:text-zinc-400">
          {posts.length}{" "}
          {posts.length === 1 ? "artigo encontrado" : "artigos encontrados"}
        </p>
      </div>

      <div className="space-y-14">
        {posts.map(({ slug, date, title, description, tags }) => (
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
              {tags.map((t) => (
                <Link
                  key={t}
                  href={`/${lang}/blog/tag/${encodeURIComponent(t)}`}
                  className={`inline-block border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md transition-colors ${
                    t === tag
                      ? "border-blue-600 dark:border-cyan-400 bg-blue-50 dark:bg-cyan-900/20 text-blue-600 dark:text-cyan-400"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  {t}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
