import ContactForm from './form'

export default function Contact() {
  return (
    <>
      <article className='bg-purple-primary md:px-24 md:text-center' id='contact'>
        <h3 className=' px-6 py-12 text-gray-900 text-3xl md:text-5xl'>E então, que tal trabalharmos juntos?</h3>
      </article>
      <div className='bg-purple-secondary md:px-24'>
        <ContactForm />
      </div>
    </>
  )
}