'use client';

import Image from 'next/image'
import { useState } from 'react'
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/20/solid"
import MenuButton from './menu-button';
import Menu from '../components/menu/menu';
import { motion } from 'framer-motion'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
    <nav className='flex justify-between flex-row py-6 align-middle relative md:px-24'>
      <div className="my-auto">
        <Image
          src="/logo.svg"
          width={120}
          height={100}
          alt="Anderson Vieira Logo"
        />
      </div>
      <MenuButton onClick={() => setOpenMenu(true)}>
        <EllipsisHorizontalCircleIcon width={32} className="fill-none stroke-purple-secondary"/>
      </MenuButton>
    </nav >
      <Menu open={openMenu} setOpen={setOpenMenu} />
    </>
  )
}