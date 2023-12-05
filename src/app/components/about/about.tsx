interface AboutProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function About({ children, title, subtitle }: AboutProps) {
  return (
    <article className='flex flex-col gap-6 py-6'>
      <p className='font-normal uppercase text-purple-secondary'>{title}</p>
      <h2 className='font-light text-2xl text-purple-secondary'>{subtitle}</h2>
      {children}
    </article>
  )
}