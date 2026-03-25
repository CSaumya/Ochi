import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import ClientReviews from './components/ClientReviews'
import Cards from './components/Cards'
import Footer_1 from './components/Footer_1'
import Footer_2 from './components/Footer_2'
import Reveal from './components/Reveal'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar />

      <Reveal><LandingPage /></Reveal>
      <Reveal><Marquee /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Eyes /></Reveal>
      <Reveal><FeaturedProjects /></Reveal>
      <Reveal><ClientReviews /></Reveal>
      <Reveal><Cards /></Reveal>
      <Reveal><Footer_1 /></Reveal>
      <Reveal><Footer_2 /></Reveal>

    </div>
  )
}

export default App