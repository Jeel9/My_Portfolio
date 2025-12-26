import React, { useRef } from 'react';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import Testimonials from "./components/Testimonials";
import Techstack from "./components/Techstack";

function App() {
  const aboutRef = useRef(null);
  const projRef = useRef(null);

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToProj = () => {
    projRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const locomotiveScroll = new LocomotiveScroll();



  return (
    <div className="w-full min-h-screen text-[#e9e9e9] bg-[#0e0e0e]">
      <Navbar onAboutClick={handleScrollToAbout} onProjClick={handleScrollToProj} />
      <LandingPage />
      <Marquee />
      <div ref={projRef}>
        <Featured />
      </div>
      <Techstack />
      <Testimonials />
      <div ref={aboutRef}>
        <About />
      </div>
      <Footer />

      {/*
          Future Work-
          Add case studies
          Timeline (Work exp.)
      */}

    </div>
  )
}

export default App;
