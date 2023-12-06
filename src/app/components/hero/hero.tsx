import Button from '../../ui/button';
import { ArrowRightIcon } from "@heroicons/react/20/solid"

export default function Hero() {
  return (
    <article className='py-16'>
      <div>
        <h1 className='text-5xl font-thin'>Desenvolvo</h1>
        <h3 className='text-3xl text-purple-light font-thin'>soluções web</h3>
        <p className='py-6'>
        Crio soluções avançadas e escaláveis, seguindo as melhores práticas de desenvolvimento de software
        </p>
      </div>
      <div className='py-16'>
      <Button theme='purple'>
        <span className='flex align-middle justify-center gap-2'>
          Entre em contato
          <ArrowRightIcon width={20}/>
        </span>
      </Button>
      </div>
    </article>
  )
}