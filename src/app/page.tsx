import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './ui/navbar'
import About from './components/about/about'
import AboutCard from './components/about/card'
import { what, how } from '@/data/about'

export default function Home() {
  return (
    <>
      <section className='bg-gradient-to-b from-purple-primary from-38% to-gray-primary to-85%'>
        <nav>
          <Navbar />
        </nav>
        <Hero />
      </section>
        <main>
          <section>
            <About 
              title='o que faço' 
              subtitle='Como entrego valor através de soluções com alto padrão de qualidade'
            >
              {what && what.map((item) => (
                <AboutCard key={item.id} title={item.title} content={item.content} />
              ))}
            </About>
            <About 
              title='como faço' 
              subtitle='Minhas características contribuem para a realização de projetos de sucesso'
            >
              {how && how.map((item) => (
                <AboutCard key={item.id} title={item.title} content={item.content} />
              ))}
            </About>
          </section>
        </main>
    </>
  )
}
