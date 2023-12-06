interface TextAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function TextArea({ placeholder }: TextAreaProps ) {
  return (
    <textarea 
      rows={6}
      className='w-full px-3 py-5 outline-none rounded-xl border-[1px] border-gray-300 text-gray-dark' 
      placeholder={placeholder} 
    />
  )
}