interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MenuButton({children}: ButtonProps) {
  return (  
    <button className='hover:opacity-80'>
      {children}
    </button>
  )
}