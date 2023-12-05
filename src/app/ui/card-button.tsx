interface CardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CardButton({ children}: CardButtonProps ) {
  return (
    <button className='hover:opacity-80 text-purple-light'>
      { children }
    </button>
  )
}