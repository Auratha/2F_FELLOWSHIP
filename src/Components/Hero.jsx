import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-[700px]">
        <h1 className="w-4/5 text-7xl absolute top-[30%] left-10 transform -translate-y-[30%]">
          Welcome to 2F Fellowship! A Place to Belong, Worship, and Grow.
        </h1>
        <h2 className="text-2xl w-1/5 absolute top-[65%] left-[60%] transform -translate-x-[60%]">
          Join us every Saturday as we come together in fellowship, worship
          Jesus, and welcome new friends into our family.
        </h2>
        <h2 className="text-2xl w-1/5 absolute top-[65%] left-[90%] transform -translate-x-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio
          suscipit illo nemo? Sapiente tenetur voluptate ipsam, vero magni
        </h2>
      </div>
    </section>
  );
};

export default Hero;
