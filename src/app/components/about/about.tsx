interface AboutProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function About({ children, title, subtitle }: AboutProps) {
  return (
    <article className='flex flex-col gap-6 py-6' id='about'>
      <p className='font-light uppercase text-purple-secondary text-xl'>{title}</p>
      <h2 className='font-light text-2xl text-purple-secondary mb-3'>{subtitle}</h2>
      {children}
    </article>
  )
}