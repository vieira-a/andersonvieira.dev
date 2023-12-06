import Button from "@/app/ui/button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface ProjectsProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function Projects ({ children, title, subtitle }: ProjectsProps) {
  return (
    <article className='flex flex-col gap-6 py-6 bg-purple-secondary px-6'>
      <p className='font-light uppercase text-xl text-gray-dark'>{title}</p>
      <h2 className='font-light text-2xl mb-3 text-gray-dark'>{subtitle}</h2>
      <Button theme='gray'>
        <Link className='flex gap-2' href={'https://www.github.com/vieira-a'}>
          Confira o meu repositório
          <ArrowRightIcon width={20}/>
        </Link>
      </Button>
    </article>
  )
}