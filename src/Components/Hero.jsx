import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full px-7 mb-4 sm:mb-0">
        <div className="flex flex-col my-40 pr-6 space-y-20 lg:mt-14 lg:space-y-32 lg:my-96">
          <div className="max-w-lg font-bold md:max-w-3xl lg:max-w-6xl text-4xl md:text-6xl lg:text-8xl header -z-10">
            Welcome to 2F Fellowship! A place to belong, worship, and grow.
          </div>
          <div className="flex flex-col space-y-2 text-xl z-[-1] md:text-2xl lg:space-y-0 lg:space-x-16 lg:w-1/2 lg:flex-row lg:absolute lg:top-96 lg:right-20">
            <div className="lg:w-1/2 header">
              Join us every Saturday as we come together in fellowship, worship
              Jesus, and welcome new friends into our family.
            </div>
            <div>
              <div className="flex space-x-2 mb-2 header">
                <span>&#9862;</span>
                <div>Location - Chiang Mai CCC Center</div>
              </div>
              <div className="flex space-x-2 header">
                <span>&#9863;</span>
                <div>Time - 2 PM to 4 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
