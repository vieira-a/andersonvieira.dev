import Link from 'next/link';
import { SetStateAction } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

const menuList = [
  {
    id: 1,
    description: 'sobre',
    route: '#about'
  },
  {
    id: 2,
    description: 'habilidades',
    route: '#skills'
  },
  {
    id: 3,
    description: 'projetos',
    route: '#projects'
  },
  {
    id: 4,
    description: 'contato',
    route: '#contact'
  }
]

interface MenuProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
}

export default function Menu({ open, setOpen }: MenuProps ) {
  return (
    <>
    <div className={`h-full w-full fixed left-0 top-0 z-10 bg-purple-secondary px-6 ${open ? 'visible' : 'hidden'}`}>
      <div className='flex justify-end pt-6'>
        <button onClick={() => setOpen(false)}>
          <XCircleIcon width={32} className='stroke-purple-primary'/>
        </button>
      </div>
      <ul className='flex flex-col gap-6 py-12'>
          {menuList.map((item) => (
            <li key={item.id}>
              <Link
                onClick={() => setOpen(false)}
                className='text-gray-900 text-2xl capitalize'
                href={item.route}
              >
                {item.description}
              </Link>
            </li>
          ))}
        </ul>
      
    </div>
    </>
  )
}
