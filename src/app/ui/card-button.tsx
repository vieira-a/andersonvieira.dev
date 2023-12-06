interface CardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CardButton({ children, onClick }: CardButtonProps ) {
  return (
    <button className='hover:opacity-80 text-purple-light' onClick={onClick}>
      { children }
    </button>
  )
}