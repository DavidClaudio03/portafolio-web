import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Presentation from '../layouts/Presentation'
import AboutMe from '../layouts/AboutMe'
import Projects from '../layouts/Projects'
//import ContactForm from '../sections/ContactForm'

function Home() {
  return (
    <MainLayout>
      <Presentation />
      <AboutMe/>
      <Projects />
      {/*<ContactForm /> */}
    </MainLayout>
  )
}

export default Home