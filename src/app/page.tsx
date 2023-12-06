'use client';

import Hero from './components/hero/hero'
import Navbar from './ui/navbar'
import About from './components/about/about'
import AboutCard from './components/about/card'
import { what, how } from '@/data/about'
import Skills from './components/skills/skills'
import SkillsCard from './components/skills/skills-card'
import Projects from './components/projects/projects'
import DownloadResume from './components/download-resume/download-resume'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { motion } from 'framer-motion'

export default function Home() {
  
  return (
    <>
      <div className='relative'>
        <section className='bg-gradient-to-b from-purple-primary from-38% to-gray-primary to-85% relative'>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <Navbar />
            <Hero />
          </motion.div>
        </section>
        <main>
          <section>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}>
                <About 
                  title='o que faço' 
                  subtitle='Como entrego valor através de soluções com alto padrão de qualidade'
                >
                  {what && what.map((item) => (
                    <AboutCard key={item.id} title={item.title} content={item.content} />
                  ))}
                </About>
              </motion.div>
              <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transitionDuration: '300' }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}>
                <About 
                  title='como faço' 
                  subtitle='Minhas características contribuem para a realização de projetos de sucesso'
                >
                  {how && how.map((item) => (
                    <AboutCard key={item.id} title={item.title} content={item.content} />
                  ))}
                </About>
              </motion.div>
          </section>
            <Skills
              title='Habilidades'
              subtitle='Quais as principais tecnologias que utilizo no meu dia a dia'
            >
              <SkillsCard />
            </Skills> 
            <Projects
              title='o que já fiz'
              subtitle='Como os meus projetos destacam as minhas principais habilidades'
            >
              <div className='text-gray-dark text-center flex flex-col gap-6'>
                <p>São mais de</p>
                <h3 className='text-4xl font-medium'>30 projetos</h3>
                <p>realizados</p>
              </div>
            </Projects>
            <DownloadResume />
            <Contact />
            <Footer />
        </main>
      </div>
    </>
  )
}
