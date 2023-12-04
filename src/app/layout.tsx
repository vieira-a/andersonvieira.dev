import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/ui/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700']})

export const metadata: Metadata = {
  title: 'Anderson Vieira',
  description: 'Desenvolvedor web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-gray-primary ${roboto.className} text-purple-secondary font-light`}>{children}</body>
    </html>
  )
}
