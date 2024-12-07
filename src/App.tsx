import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RedTeamServices from './components/RedTeamServices';
import PenetrationServices from './components/PenetrationServices';
import ConsultancyServices from './components/ConsultancyServices';
import CalendarBooking from './components/CalendarBooking';
import GlobalSecurityVoices from './components/GlobalSecurityVoices';
import GlobalPerspectiveStories from './components/GlobalPerspectiveStories';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Certifications />
                <Services />
                <Projects />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} /> {/* Ensure About route exists if accessible via /about */}
          <Route path="/services/red-team" element={<RedTeamServices />} />
          <Route path="/services/penetration" element={<PenetrationServices />} />
          <Route path="/services/consultancy" element={<ConsultancyServices />} />
          <Route path="/book-consultation" element={<CalendarBooking />} />
          <Route path="/projects/global-security-voices" element={<GlobalSecurityVoices />} />
          <Route path="/projects/global-perspective-stories" element={<GlobalPerspectiveStories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
