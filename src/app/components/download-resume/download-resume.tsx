import Button from "@/app/ui/button"
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function DownloadResume () {
  return (
    <article className='flex flex-col gap-6 py-12 bg-purple-secondary px-6 md:px-24'>
      <h2 className='font-light text-2xl md:text-4xl md:text-center mb-3 text-gray-dark'>Se desejar, faça o download do meu currículo profissional</h2>
        <button className='mx-auto'>
          <Link className='flex justify-center h-16 w-16 bg-zinc-900 rounded-full' href={'/andersonvieira-resume.pdf'}>
            <ArrowDownTrayIcon width={32}/>
          </Link>
        </button>
    </article>
  )
}