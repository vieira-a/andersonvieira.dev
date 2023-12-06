import Link from 'next/link';
import { SetStateAction } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { socialMediaLinks, menuList } from '@/data';

interface MenuProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
}

export default function Menu({ open, setOpen }: MenuProps ) {
  return (
    <>
    <div className={`h-full w-full fixed left-0 top-0 z-10 bg-purple-secondary px-12 overflow-y-hidden ${open ? 'visible' : 'hidden'} bg-gradient-to-b from-purple-light from-38% to-purple-secondary to-85%`}>
      <div className='flex justify-end pt-6'>
        <button onClick={() => setOpen(false)}>
          <XCircleIcon width={32} className='stroke-purple-primary'/>
        </button>
      </div>
      <ul className='flex flex-col gap-6 py-6'>
          {menuList.map((item) => (
            <li key={item.id}>
              <Link
                onClick={() => setOpen(false)}
                className={`text-gray-900 capitalize text-2xl md:text-4xl`}
                href={item.route}
              >
                {item.description}
              </Link>
            </li>
          ))}
      </ul>
      <div className={`w-full left-0 flex flex-col gap-2 text-center md:text-left md:px-12 py-6 md:py-12 border-t-[1px] border-gray-primary fixed bottom-12`}>
        <h3 className='text-gray-dark font-medium'>Me encontre nas redes sociais</h3>      
        <ul className='flex gap-2 mx-auto md:mx-0 md:gap-6'>
        {socialMediaLinks.map((item) => (
          <li key={item.id}>
            <Link 
              className='hover:opacity-80 text-gray-dark border-b-[1px] border-gray-dark' 
              href={item.address}
              target="blank"
            >
              {item.description}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
    </>
  )
}
