'use client';

import React, { useEffect } from 'react';
import Hero from './home/page';
import About from './about/page';
import Services from './service/page';
import Contact from './contact/page';
import Footer from './footer/footer';
import Navbar from './nav/page';


export default function Home() {
  

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
