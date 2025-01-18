import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamBtnClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white py-4 px-7 flex justify-between items-center sticky top-0">
      <div className="flex items-center justify-between w-full">
        <div className="text-white text-lg font-bold flex items-center space-x-2">
          <a href="/">
            <img src="/2FLogo.png" alt="2FLogo" width="50px" />
          </a>
          <img src="/2FText.png" alt="2FText" width="120px" />
        </div>
        <div className="hidden h-10 text-2xl font-medium md:flex md:space-x-8">
          <div className="group">
            <a href="#">Home</a>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-black"></div>
          </div>
          <div className="group">
            <a href="#gallery">Gallery</a>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-black"></div>
          </div>
          <div className="group">
            <a href="#activity">Activities</a>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-black"></div>
          </div>
          <div className="group">
            <a href="#footer">Contact</a>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-black"></div>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className={`block hamburger md:hidden focus:outline-none ${
            isMenuOpen && "open"
          }`}
          type="button"
          onClick={handleHamBtnClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute p-24 bg-black left-6 right-6 top-20 shadow-xl z-100 ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-12 font-medium text-white">
            <div className="w-full relative group">
              <a href="#" className="group-hover:text-blue-950">
                Home
              </a>
              <div className="absolute w-full border-b-2 border-white group-hover:border-blue-950"></div>
            </div>
            <div className="w-full relative group">
              <a href="#gallery" className="group-hover:text-blue-950">
                Gallery
              </a>
              <div className="absolute w-full border-b-2 border-white group-hover:border-blue-950"></div>
            </div>
            <div className="w-full relative group">
              <a href="#activity" className="group-hover:text-blue-950">
                Activities
              </a>
              <div className="absolute w-full border-b-2 border-white group-hover:border-blue-950"></div>
            </div>
            <div className="w-full relative group">
              <a href="#footer" className="group-hover:text-blue-950">
                Contact
              </a>
              <div className="absolute w-full border-b-2 border-white group-hover:border-blue-950"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
