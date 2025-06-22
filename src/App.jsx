
import './App.css'
import Hero from './components/layouts/Hero'
import Blog from './components/layouts/Blog'
import Portfolio from './components/layouts/Portfolio'
import Navbar1 from './components/Navbar1'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Skills from './components/layouts/Skills'
import ShufflingGrid from './components/ShufflingGrid'
import Services from './components/layouts/Services'
import Services1 from './components/layouts/Services1'


function App() {


  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar2/> */}
      {/* <ShufflingGrid/>      */}
      <Hero id="home" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Services id="services"/>
      <Blog id="blog" />
    
    </>
  )
}

export default App
