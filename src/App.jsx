import './App.css'
import Banner from './components/Home/Banner'
import Footer from './components/Home/Footer'
import ContactForm from './components/Home/ContactForm'
import Header from './components/Home/Header'
import Services from './components/Home/Services'
import Featured from './components/Home/Featured'
import { useRef } from 'react'
import OurPlan from './components/Home/OurPlan'
import DoctorGallery from './components/Home/DoctorGallery'
import Testimonial from './components/Home/Testimonial'

function App() {


  const contactFormRef = useRef(null);

  const handleScrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header></Header>
      <Banner onContactClick={handleScrollToContactForm}></Banner>
      <DoctorGallery></DoctorGallery>
      <Services></Services>
      <Featured></Featured>
      <OurPlan></OurPlan>
      <div ref={contactFormRef}>
        <ContactForm></ContactForm>
      </div>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  )
}

export default App
