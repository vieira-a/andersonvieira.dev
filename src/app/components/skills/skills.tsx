interface SkillsProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function Skills ({ children, title, subtitle }: SkillsProps) {
  return (
    <article className='flex flex-col gap-6 py-6 bg-purple-secondary px-6'>
      <p className='font-light uppercase text-xl text-gray-dark'>{title}</p>
      <h2 className='font-light text-2xl mb-3 text-gray-dark'>{subtitle}</h2>
      {children}
    </article>
  )
}