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
  // This is handle for PopUpQRCode
  const [showScanPopUp, setShowScanPopUp] = useState(false);

  const handleShowScanPopUp = () => {
    setShowScanPopUp(!showScanPopUp);
  };

  useGSAP(() => {
    // Navbar Animations
    gsap.from(".navbar-ani-right", {
      x: 500,
      duration: 3,
      ease: "power2.out",
    });
    gsap.from(".navbar-ani-left", { x: -300, duration: 2, ease: "power2.out" });

    // Hero Section
    gsap.from(".header", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 3,
      stagger: 1,
      ease: "power2.out",
    });
    gsap.from(".social-sidebar", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      delay: 5,
      ease: "power2.out",
    });

    // Gallery Section
    gsap.from("#gallery", {
      opacity: 0,
      rotate: 180,
      duration: 3,
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 80%",
        toggleActions: "play none none",
      },
    });

    // Activity Section
    gsap.from("#activity div h2", {
      x: -50,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#activity",
        start: "top 80%",
        toggleActions: "play none none",
      },
    });
    gsap.from(".activity-img", {
      scale: 0,
      duration: 6,
      stagger: 1,
      scrollTrigger: {
        trigger: "#activity",
        start: "top 80%",
        toggleActions: "play none none",
      },
    });
    gsap.from(".activity-text", {
      opacity: 0,
      duration: 4,
      stagger: 1,
      scrollTrigger: {
        trigger: "#activity",
        start: "top 80%",
        toggleActions: "play none none",
      },
    });

    // Map Section
    gsap.from(".our-location", {
      x: -50,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".our-location",
        start: "top 80%",
        toggleActions: "play none none",
      },
    });
    gsap.from(".map", {
      opacity: 0,
      scale: 0.9,
      duration: 3,
      scrollTrigger: {
        trigger: ".map",
        start: "top 80%",
        toggleActions: "play none none",
      },
    });
  });

  return (
    <div className="overflow-x-hidden">
      <SocialMedia handleShowScanPopUp={handleShowScanPopUp} />
      <ScanPopUp
        showScanPopUp={showScanPopUp}
        handleShowScanPopUp={handleShowScanPopUp}
      />
      <Navbar />
      <Hero />
      <Gallery />
      <Activity />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
