import Image from "next/image"
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/20/solid"
import MenuButton from "./menu-button"

export default function Navbar() {
  return (
    <article className='flex justify-between flex-row py-6 align-middle'>
      <div className="my-auto">
        <Image
          src="/logo.svg"
          width={120}
          height={100}
          alt="Anderson Vieira Logo"
        />
      </div>
      <MenuButton>
        <EllipsisHorizontalCircleIcon width={32} className="fill-none stroke-purple-secondary"/>
      </MenuButton>
    </article >
  )
}