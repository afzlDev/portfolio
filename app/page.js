'use client'

import Hero from './home/page';
import About from './about/page';
import Services from './service/page';
import Contact from './contact/page';
import Footer from './footer/footer';
import Navbar from './nav/page';
import Portfolio from './portfolio/page';


export default function Home() {
  

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}
