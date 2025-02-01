import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Activity from "./Components/Activity";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import SocialMedia from "./Components/SocialMedia";
import ScanPopUp from "./Components/ScanPopUp";
import { useState } from "react";

function App() {
  // This is handle for PopUpQRCode
  const [showScanPopUp, setShowScanPopUp] = useState(false);

  const handleShowScanPopUp = () => {
    setShowScanPopUp(!showScanPopUp);
  };

  return (
    <>
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
    </>
  );
}

export default App;
