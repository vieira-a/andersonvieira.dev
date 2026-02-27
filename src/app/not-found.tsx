"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { getDictionary, Locale } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function NotFound() {
  const pathname = usePathname();
  // Safe default to English if not in a recognized locale path
  const lang = pathname?.startsWith("/pt") ? "pt" : "en";
  const t = getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <head>
        <title>{t.notFound.title}</title>
      </head>
      <body
        className={`${inter.variable} antialiased font-sans bg-stone-50 dark:bg-[#111111] text-stone-900 dark:text-stone-100 min-h-screen flex flex-col`}
      >
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in flex-1 px-4">
          <div className="space-y-6 max-w-lg">
            <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase">
              {t.notFound.tag}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
              {t.notFound.title}
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
              {t.notFound.subtitle}
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${lang}`}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white active:scale-[0.98]"
              >
                {t.notFound.goHome}
              </Link>
              <a
                href="https://github.com/vieira-a"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900 active:scale-[0.98]"
              >
                {t.notFound.reportIssue}
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
