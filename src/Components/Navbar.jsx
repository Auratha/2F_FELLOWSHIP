import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 px-12 flex justify-between items-center sticky top-0">
      <div className="text-white text-lg font-bold flex items-center space-x-2">
        <a href="/">
          <img src="/2FLogo.png" alt="2FLogo" width="50px" />
        </a>
        <img src="/2FText.png" alt="2FText" width="120px" />
      </div>
      <ul className="flex space-x-24 text-xl font-extrabold italic">
        <li>
          <a href="/home" className="hover:text-blue-400">
            Home
          </a>
        </li>
        <li>
          <a href="/gallery" className="hover:text-blue-400">
            Gallery
          </a>
        </li>
        <li>
          <a href="/activities" className="hover:text-blue-400">
            Activities
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
