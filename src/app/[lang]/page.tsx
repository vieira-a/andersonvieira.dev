import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const t = getDictionary(lang);

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-zinc-900 dark:text-zinc-100 leading-[1.1]">
          {t.home.title}{" "}
          <span className="text-blue-600 dark:text-cyan-400">
            {t.home.titleHighlight}
          </span>{" "}
          {t.home.titleSuffix}
        </h1>
        <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
          {t.home.subtitle}
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex h-12 items-center justify-center bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-bold uppercase tracking-widest text-white dark:text-black transition-all hover:bg-zinc-800 dark:hover:bg-white rounded-md active:scale-[0.98] sm:min-w-[200px] w-full sm:w-auto"
        >
          {t.home.readBlog}
        </Link>
        <a
          href="mailto:asvieira.dev@gmail.com"
          className="inline-flex h-12 items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md active:scale-[0.98] sm:min-w-[200px] w-full sm:w-auto"
        >
          {t.home.getInTouch}
        </a>
      </div>

      <section className="pt-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8 border-l-2 border-blue-600 dark:border-cyan-400 pl-4">
          {t.home.principlesTitle}
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
              {t.home.principle1.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-normal">
              {t.home.principle1.desc}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
              {t.home.principle2.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-normal">
              {t.home.principle2.desc}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
              {t.home.principle3.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-normal">
              {t.home.principle3.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
