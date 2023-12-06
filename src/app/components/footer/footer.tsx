import Link from "next/link"
import { socialMediaLinks } from "@/data/social-media"

export default function Footer() {
  return (
    <footer className='px-6 py-12 flex flex-col gap-12'>
      <h3 className='text-3xl'>Me encontre nas redes sociais, ou por e-mail</h3>
      <ul className='flex flex-col gap-6'>
        {socialMediaLinks.map((item) => (
          <li key={item.id}>
            <Link 
              className='underline hover:opacity-80' 
              href={item.address}
              target="blank"
            >
              {item.description}
            </Link>
          </li>
        ))}
      </ul>
      <p>&copy; 2023. Todos os direitos reservados.</p>
    </footer>
  )
}