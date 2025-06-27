
import './App.css'
import Hero from './components/layouts/Hero'
import Blog from './components/layouts/Blog'
import Portfolio from './components/layouts/Portfolio'
import Navbar1 from './components/Navbar1'


import Skills from './components/layouts/Skills'
import ShufflingGrid from './components/ShufflingGrid'
import Services from './components/layouts/Services'
import Services1 from './components/layouts/Services1'
import About from './components/layouts/About'
import { HoverEffect } from './components/HoverEffect '
import TypedText from './components/TypedText'



function App() {


  return (
    <>
  
  
      <Hero id="home" />
      <About/>
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Services id="services"/>
      <Blog id="blog" />
     {/* <HoverEffect/> */}
      {/* <ShufflingGrid/>      */}
    
    </>
  )
}

export default App
