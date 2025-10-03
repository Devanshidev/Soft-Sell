import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Howitworks from './components/Howitworks';
import Whychooseus from './components/Whychooseus';
import Testimonials from './components/Testimonials';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Softbot from './components/Softbot';

const Page = () => {
  return (
    <div className="">
      <iframe src="https://zoomads.gotrackier.io/pixel?adid=68df67e766a0a243a91d9243&sale_amount=AMOUNT&currency=USD" scrolling="no" frameborder="0" width="1" height="1"></iframe>
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
      <Testimonials />
      <section id="contact">
        <Contactus />
      </section>
      <Footer />
      <Softbot /> 
    </div>
  );
};

export default Page;
