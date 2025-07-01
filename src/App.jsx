
import './App.css'
import Hero from './components/layouts/Hero'
import Blog from './components/layouts/Blog'
import Portfolio from './components/layouts/Portfolio'
import Skills from './components/layouts/Skills'
import Services from './components/layouts/Services'
import About from './components/layouts/About'
import { HoverEffect } from './components/HoverEffect '
import ShufflingGrid from './components/ShufflingGrid'
import backToTop from 'reactjs-back-to-top';
import { FaArrowAltCircleUp } from "react-icons/fa";
import Contact from './components/layouts/Contact'
import BackToTop from './components/BackToTop'

function App() {
 

  return (
    <>
      <Hero id="home" />
      <About />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Services id="services" />
      <Blog id="blog" />
      <Contact id="contact" />
       <BackToTop />
      {/* <HoverEffect/> */}
      {/* <ShufflingGrid/>      */}
      
      

    </>
  )
}

export default App
