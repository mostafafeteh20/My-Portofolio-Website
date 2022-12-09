import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/experience'
import Services from './components/Services/service.jsx'
import Portofolio from './components/portofolio/portofolio.jsx'
import Testimonials from './components/testimonials/testimonils.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/footer.jsx'




const App = () => {
  return (
   <>
   
   
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portofolio/>
   <br/>
   {/*<Testimonials/>*/}
   <Contact/>
   <Footer/>
   


   </>
  )
}

export default App;