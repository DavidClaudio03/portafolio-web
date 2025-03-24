import MainLayout from '../layouts/MainLayout'
import Presentation from '../layouts/Presentation'
import AboutMe from '../layouts/AboutMe'
import Projects from '../layouts/Projects'

function Home() {
  return (
    <MainLayout>
      <Presentation />
      <AboutMe/>
      <Projects />
    </MainLayout>
  )
}

export default Home