import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  lang: string;
  t: {
    blog: {
      wroteBy: string;
      authorBio: string;
    };
  };
}

export default function AuthorCard({ lang, t }: AuthorCardProps) {
  return (
    <div className="my-16 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-800">
        <Image
          src="/profile.jpg"
          alt="Anderson Vieira"
          fill
          className="object-cover object-[center_15%]"
        />
      </div>
      <div className="flex-1 text-center sm:text-left space-y-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-1">
            {t.blog.wroteBy}
          </span>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Anderson Vieira
          </h3>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-md">
          {t.blog.authorBio}
        </p>
        <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
          <a
            href="https://linkedin.com/in/vieira-a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vieira-a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <Link
            href={`/${lang}/about`}
            className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            {lang === "pt" ? "Sobre" : "About"}
          </Link>
        </div>
      </div>
    </div>
  );
}
