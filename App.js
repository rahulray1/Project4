import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './aboutus';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import ServiceDetails from './components/serviceDetails';
import BlogDetails from './components/BlogDetails';
import Checkout from './components/Checkout';
import { ContactProvider } from './context/ContactContext';
import ContactForm from './components/ContactForm';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContactProvider>
      <Router>
        <div className="App">
          <AppHeader />
          <AppHero
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
          />
          <Routes>
            <Route path="/" element={
              <>
                <div ref={aboutRef}>
                  <AppAbout />
                </div>
                <div ref={servicesRef}>
                  <AppServices />
                </div>
                <AppWorks />
                <AppTeams />
                <AppTestimonials />
                <AppPricing />
                <AppBlog />
                <div ref={contactRef}>
                  <AppContact />
                </div>
                <AppFooter />
              </>
            } />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
    </ContactProvider>
  );
}

export default App;
