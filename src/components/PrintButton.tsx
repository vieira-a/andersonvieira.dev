"use client";

interface PrintButtonProps {
  label: string;
}

export default function PrintButton({ label }: PrintButtonProps) {
  return (
    <button
      onClick={() => window.print()}
      className="cursor-pointer print:hidden flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.72 13.89l-4.72-4.72m0 0l4.72-4.72M2 9.17h18a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-4.5m0-6.75a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0122.5 9.17v6.75a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-4.5"
        />
      </svg>
      {label}
    </button>
  );
}
