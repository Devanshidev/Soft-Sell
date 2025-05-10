import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Howitworks from './components/Howitworks'
import Whychooseus from './components/Whychooseus'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contactus'
import SoftBot from './components/Softbot'
import Footer from './components/Footer'


const page = () => {
  return (
    <div className=''>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="how-it-works">
        <Howitworks />
      </section>
      <section id="choose-us">
        <Whychooseus />
      </section>
     
      <Testimonials/>
      <section id="contact">
        <Contactus />
      </section>
     <Footer/>
     <SoftBot/>
     
    </div>
  )
}

export default page