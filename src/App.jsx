import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation.jsx'
import { Header } from './components/header.jsx'
import { Features } from './components/features.jsx'
// import { About } from './components/about'
// import { Services } from './components/services'
// import { Gallery } from './components/gallery'
// import { Testimonials } from './components/testimonials'
// import { Team } from './components/Team'
import { Contact } from './components/contact.jsx'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      {/* <About data={landingPageData.About} />
      <Services data={landingPageData.Services} /> */}
      {/* <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
