
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
      {/* Card lifting animation */}
      {/* <div class="max-w-sm mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 class="text-xl font-semibold mb-2">Card Title</h2>
          <p class="text-gray-600">This is a simple card with a smooth hover effect that lifts it slightly.</p>
        </div>
      </div> */}
      {/* <div class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4">
        <div class="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 class="text-xl sm:text-2xl font-semibold mb-2">Responsive Card</h2>
          <p class="text-gray-600 text-sm sm:text-base">
            This card adjusts padding, width, and text size based on screen size. It also lifts up on hover for a nice interactive feel.
          </p>
        </div>
      </div> */}

    </>
  )
}

export default App
