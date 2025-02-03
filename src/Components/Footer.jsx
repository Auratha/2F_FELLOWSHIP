import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className="sticky bottom-0">
      <div className="flex items-center justify-between text-lg bg-white text-black p-5 md:space-y-0 md:flex-row">
        <div className="md:flex md:items-center">
          <div>© 2F Fellowship {currentYear} &#8212;&nbsp;</div>
          <div>Chiang Mai</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <a
            href="https://www.facebook.com/profile.php?id=61568460533254"
            target="_blank"
            className="w-fit text-decoration-line: underline cursor-pointer"
          >
            Facebook
          </a>
          <div className="w-fit text-decoration-line: underline cursor-pointer">
            +66 947769315
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
