interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'purple' | 'gray'
}

export default function Button({ children, theme }: ButtonProps ) {
  return (
    theme === 'purple' ? (
      <button className='flex justify-center align-middle mx-auto bg-purple-light p-2 w-full md:w-1/4 rounded-3xl text-gray-primary font-normal hover:opacity-80 transition-opacity'>
      {children}
    </button>
    ) : (
      <button className='flex justify-center align-middle mx-auto bg-zinc-900 p-2 w-full md:w-1/4 rounded-3xl text-purple-secondary font-normal hover:opacity-80 transition-opacity'>
      {children}
    </button>
    )
  )
}