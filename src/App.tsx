import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
//import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RedTeamServices from './components/RedTeamServices';
import PenetrationServices from './components/PenetrationServices';
import ConsultancyServices from './components/ConsultancyServices';
import CalendarBooking from './components/CalendarBooking';
import GlobalSecurityVoices from './components/GlobalSecurityVoices';
import GlobalPerspectiveStories from './components/GlobalPerspectiveStories';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col"> {/* Flexbox container */}
        <Navbar />
        <div className="flex-grow"> {/* Content area with dynamic height */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Certifications />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/services/red-team" element={<RedTeamServices />} />
            <Route path="/services/penetration" element={<PenetrationServices />} />
            <Route path="/services/consultancy" element={<ConsultancyServices />} />
            <Route path="/book-consultation" element={<CalendarBooking />} />
            <Route path="/projects/global-security-voices" element={<GlobalSecurityVoices />} />
            <Route path="/projects/global-perspective-stories" element={<GlobalPerspectiveStories />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-services" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer /> {/* Footer always at the bottom */}
      </div>
    </Router>
  );
}

export default App;
