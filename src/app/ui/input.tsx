interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: InputProps ) {
  return (
    <input 
      className='w-full px-3 py-5 outline-none rounded-xl border-[1px] border-gray-300 text-gray-dark'
      type={type} 
      placeholder={placeholder} 
    />
  )
}