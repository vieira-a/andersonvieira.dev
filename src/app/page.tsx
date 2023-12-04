import Image from 'next/image'
import Hero from './ui/hero/hero'
import Navbar from './ui/navbar'

export default function Home() {
  return (
    <>
      <section className='bg-gradient-to-b from-purple-primary from-38% to-gray-primary to-85%'>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Hero />
        </main>
      </section>
    </>
  )
}
