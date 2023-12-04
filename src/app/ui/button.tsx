interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children}: ButtonProps ) {
  return (
    <button className='flex justify-center align-middle bg-purple-light p-2 w-full rounded-3xl text-gray-primary font-normal hover:opacity-80 transition-opacity'>
      {children}
    </button>
  )
}