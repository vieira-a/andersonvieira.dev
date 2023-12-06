import ContactForm from './form'

export default function Contact() {
  return (
    <article className='bg-purple-secondary' id='contact'>
      <h3 className='bg-purple-primary px-6 py-12 text-gray-900 text-3xl'>E então, que tal trabalharmos juntos?</h3>
      <ContactForm />
    </article>
  )
}