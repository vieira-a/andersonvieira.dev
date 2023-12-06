import Button from '@/app/ui/button';
import Input from '@/app/ui/input';
import TextArea from '@/app/ui/text-area';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function ContactForm() {
  return (
    <form className='py-12 px-6 flex flex-col gap-6'>
      <Input type='text' placeholder='Qual o seu nome?'/>
      <Input type='text' placeholder='Por favor, digite o seu e-mail'/>
      <TextArea placeholder='Agora, deixe a sua mensagem' />
      <Button theme='gray'>
        <Link className='flex gap-2' href={''}>
          Entre em contato
          <ArrowRightIcon width={20}/>
        </Link>
      </Button>
    </form>
  )
}