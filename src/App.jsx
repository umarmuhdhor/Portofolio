import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portofolio from './sections/portofolio/Portofolio';
import Testimonials from './sections/testimonial/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-new/FloatingNav';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portofolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App
