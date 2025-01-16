import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className="sticky bottom-0">
      <div className="flex flex-col justify-between text-2xl bg-white text-black p-5 space-y-6 md:space-y-0 md:flex-row">
        <div className="md:flex md:items-center">
          <div>© 2F Fellowship {currentYear} &#8212;&nbsp;</div>
          <div>Chiang Mai</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-fit text-decoration-line: underline cursor-pointer">
            Facebook
          </div>
          <div className="w-fit text-decoration-line: underline cursor-pointer">
            Viber
          </div>
          <div className="w-fit text-decoration-line: underline cursor-pointer">
            Line
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
