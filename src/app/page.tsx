import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './ui/navbar'
import About from './components/about/about'
import AboutCard from './components/about/card'

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
              <AboutCard title='Desenvolvo aplicações back-end e front-end de ponta a ponta'/>
              <AboutCard title='Utilizo metodologias ágeis no planejamento e execução'/>
              <AboutCard title='Aplico boas práticas de engenharia de software'/>
              <AboutCard title='Utilizo as mais modernas ferramentas de desenvolvimento'/>
            </About>
            <About 
              title='como faço' 
              subtitle='Minhas características contribuem para a realização de projetos de sucesso'
            >
              <AboutCard title='Possuo uma abordagem centralizada no cliente'/>
              <AboutCard title='Estou sempre em busca por aprendizado contínuo'/>
              <AboutCard title='Sou colaborativo e adaptável para a resolução de problemas'/>
              <AboutCard title='Mantenho a calma sob pressão e tomo decisões racionais'/>
            </About>
          </section>
        </main>
    </>
  )
}
