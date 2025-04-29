import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
      </div>
  )
}

export default App