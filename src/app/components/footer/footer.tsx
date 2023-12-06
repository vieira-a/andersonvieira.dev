import Link from "next/link"
export default function Footer() {
  const socialMediaLinks = [
    {
      id: 1,
      description: 'LinkedIn',
      address: 'https://www.linkedin.com/in/vieira-a'
    },
    {
      id: 2,
      description: 'GitHub',
      address: 'https://github.com/vieira-a'
    },
    {
      id: 3,
      description: 'Instagram',
      address: 'https://instagram.com/andersonvieira.av'
    },
    {
      id: 4,
      description: 'WhatsApp',
      address: '+5571981531862'
    },
    {
      id: 5,
      description: 'Gmail',
      address: 'mailto:asvieira.dev@gmail.com'
    }
  ]
  return (
    <footer className='px-6 py-12 flex flex-col gap-12'>
      <h3 className='text-3xl'>Me encontre nas redes sociais, ou por e-mail</h3>
      <ul className='flex flex-col gap-6'>
        {socialMediaLinks.map((item) => (
          <li key={item.id}>
            <Link 
              className='underline hover:opacity-80' 
              href={item.address}
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