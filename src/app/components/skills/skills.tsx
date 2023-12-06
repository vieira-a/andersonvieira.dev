interface SkillsProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function Skills ({ children, title, subtitle }: SkillsProps) {
  return (
    <article className='flex flex-col gap-6 py-12 bg-purple-secondary px-6 md:px-24' id='skills'>
      <p className='font-light uppercase text-xl text-gray-dark md:text-2xl'>{title}</p>
      <h2 className='font-light text-2xl md:text-4xl mb-3 text-gray-dark'>{subtitle}</h2>
      {children}
    </article>
  )
}