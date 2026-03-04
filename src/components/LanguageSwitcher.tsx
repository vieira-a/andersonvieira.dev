"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-md overflow-hidden p-0.5">
      {locales.map((locale) => {
        const active = pathname?.startsWith(`/${locale}`);

        let newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
        if (pathname.split("/").length > 3 && pathname.includes("/blog/")) {
          newPath = `/${locale}/blog`;
        }

        return (
          <Link
            key={locale}
            href={newPath}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-[3px] ${
              active
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
