import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full px-4 mb-4 sm:mb-0 h-[400px] sm:h-[700px]">
        <h1 className="w-4/5 mt-20 sm:mt-0 sm:pr-2 font-bold text-4xl sm:text-5xl md:text-6xl sm:absolute top-[30%] sm:left-5 md:left-10 sm:transform sm:-translate-y-[30%]">
          Welcome to 2F Fellowship! A Place to Belong, Worship, and Grow.
        </h1>
        <h2 className="text-lg mt-4 sm:mt-0 sm:w-1/5 sm:absolute sm:top-[65%] sm:left-[60%] sm:transform sm:-translate-x-[60%]">
          Join us every Saturday as we come together in fellowship, worship
          Jesus, and welcome new friends into our family.
        </h2>
        <h2 className="text-lg mt-4 sm:mt-0 sm:w-1/5 sm:absolute sm:top-[65%] sm:left-[90%] sm:transform sm:-translate-x-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio
          suscipit illo nemo
        </h2>
      </div>
    </section>
  );
};

export default Hero;
