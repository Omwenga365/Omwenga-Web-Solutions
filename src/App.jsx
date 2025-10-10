// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Trust from "./components/Trust";
import LimitedAvailability from "./components/LimitedAvailability";
import RealResults from "./components/RealResults";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero / Intro Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Stats / Key Figures */}
      <Stats />

      {/* 3-Step Process */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* Trust / Clients */}
      <Trust />

      {/* Limited Availability / Scarcity */}
      <LimitedAvailability />

      {/* Real Results / Client Feedback */}
      <RealResults />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
