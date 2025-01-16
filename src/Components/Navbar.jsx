import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-12 flex justify-between items-center sticky top-0">
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
    </nav>
  );
};

export default Navbar;
