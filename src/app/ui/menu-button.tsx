interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MenuButton({children, onClick}: ButtonProps) {
  return (  
    <button 
      onClick={onClick}
      className='hover:opacity-80'>
      {children}
    </button>
  )
}