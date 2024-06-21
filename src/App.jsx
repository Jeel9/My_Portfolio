import React from "react";
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

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-[#e9e9e9] bg-[#0e0e0e]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Featured />
      <Techstack />
      <Testimonials />
      <About />
      <Footer />

      {/* Work Left-
          Activate Links
          Navbar CSS
          Footer Design

          Future Work-
          Timeline (Work exp.)
          */}

    </div>
  )
}

export default App;
