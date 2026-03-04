import { getDictionary, Locale, locales } from "@/lib/i18n";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: {
    template: "%s | Software Developer",
    default: "Software Developer",
  },
  description:
    "Software development focused on building and evolving systems in production.",
  metadataBase: new URL("https://andersonvieira-dev.vercel.app"),
};

const themeScript = `
  (function() {
    function getTheme() {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    const theme = getTheme();
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const t = getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G3P8B315P6"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G3P8B315P6');
          `}
        </Script>
        <header className="py-6 border-b border-zinc-200 dark:border-zinc-800 print:hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 flex justify-between items-center">
            <Link
              href={`/${lang}`}
              className="hover:opacity-80 transition-opacity shrink-0"
            >
              <div className="relative w-8 h-8 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/logo.png"
                  alt="AV Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <nav className="flex items-center gap-3 sm:gap-6 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              <Link
                href={`/${lang}/blog`}
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {t.nav.journal}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {t.nav.about}
              </Link>
              <a
                href="https://github.com/vieira-a"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors hidden md:block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.github}
              </a>
              <a
                href="https://linkedin.com/in/vieira-a"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors hidden lg:block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.linkedin}
              </a>
              <div className="flex items-center gap-2 sm:gap-4 pl-3 sm:pl-6 ml-1 sm:ml-2 border-l-2 border-zinc-200 dark:border-zinc-800">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-16 print:py-0 print:max-w-none">
          {children}
        </main>

        <footer className="py-12 mt-auto border-t border-zinc-200 dark:border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 print:hidden">
          <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 gap-y-2 text-center sm:text-left">
              <span>
                © {new Date().getFullYear()} — {t.footer.builtWith}
              </span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>{t.footer.by}</span>
              <a
                href="https://linkedin.com/in/vieira-a"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                Anderson Vieira
              </a>
            </p>
            <div className="flex gap-6">
              <a
                href="/feed.xml"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                RSS
              </a>
              <a
                href="/sitemap.xml"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                SITEMAP
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
