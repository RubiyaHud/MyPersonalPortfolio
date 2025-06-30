
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

function App() {
  // ------------- Back to Top button Start -------------- 
  // # pass arguments
  let option = {
    text: '',
    background: '#6366F1',
    fontColor: '#000',
    // image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Top_Arrow.svg/1200px-Top_Arrow.svg.png',
    image: '../src/assets/arrow-up-solid.svg',
    displayAfterScroll: 2, //percentage
    className: ''           // custom class
  }
  backToTop.init(option);
// ------------- Back to Top button End --------------

  return (
    <>
      <Hero id="home" />
      <About />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Services id="services" />
      <Blog id="blog" />
      <Contact id="contact" />
      {/* <HoverEffect/> */}
      {/* <ShufflingGrid/>      */}
    </>
  )
}

export default App
