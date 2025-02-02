import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Activity from "./Components/Activity";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import SocialMedia from "./Components/SocialMedia";
import ScanPopUp from "./Components/ScanPopUp";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    // Navbar

    gsap.from(".navbar-ani-right", {
      x: 500,
      duration: 2,
      ease: "none",
    });

    gsap.from(
      ".navbar-ani-left",
      {
        x: -300,
        duration: 1,
        ease: "none",
      },
      { scope: "navbar" }
    );

    // Hero
    gsap.from(".header", {
      scale: 0,
      stagger: 1,
      duration: 2.5,
      delay: 3,
      ease: "none",
    });

    gsap.from(".social-sidebar", {
      x: 100,
      duration: 2,
      delay: 6,
    });

    // Gallery
    gsap.from("#gallery", {
      scale: 0,
      rotate: 180,
      duration: 4,
      scrollTrigger: {
        trigger: "#gallery",
      },
    });

    // Activity

    gsap.from("#activity div h2", {
      x: -200,
      duration: 2,
      scrollTrigger: {
        trigger: "#activity",
        start: "-20%",
      },
    });

    gsap.from(".activity-img", {
      scale: 0,
      ease: "none",
      duration: 3,
      scrollTrigger: {
        trigger: "#activity",
        start: "top center",
      },
    });

    gsap.from(".activity-text", {
      scale: 0,
      x: -200,
      ease: "none",
      duration: 3,
      scrollTrigger: {
        trigger: "#activity",
        start: "top center",
      },
    });

    //Map
    gsap.from(".our-location", {
      x: -200,
      duration: 2,
      scrollTrigger: {
        trigger: ".our-location",
      },
    });

    gsap.from(".map", {
      scale: 0,
      ease: "none",
      duration: 3,
      scrollTrigger: {
        trigger: ".map",
      },
    });
  });

  // This is handle for PopUpQRCode
  const [showScanPopUp, setShowScanPopUp] = useState(false);

  const handleShowScanPopUp = () => {
    setShowScanPopUp(!showScanPopUp);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gallery />
      <Activity />
      <Map />
      <Footer />
      <SocialMedia handleShowScanPopUp={handleShowScanPopUp} />
      <ScanPopUp
        showScanPopUp={showScanPopUp}
        handleShowScanPopUp={handleShowScanPopUp}
      />
    </div>
  );
}

export default App;
