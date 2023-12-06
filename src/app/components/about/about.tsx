interface AboutProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function About({ children, title, subtitle }: AboutProps) {
  return (
    <article id='about' className='p-6 md:mx-24'>
      <p className='font-light uppercase text-purple-secondary text-xl md:text-2xl'>{title}</p>
      <h2 className='font-light text-2xl md:text-4xl text-purple-secondary my-6'>{subtitle}</h2>
      <div className={`flex flex-col gap-6 py-6`} >
        {children}
      </div>
    </article>
  )
}