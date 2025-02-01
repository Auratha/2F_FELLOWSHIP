import React from "react";

function Map() {
  return (
    <section id="map">
      <div className="mx-5">
        <div className="text-xl mb-9 md:text-3xl lg:text-2xl text-left">
          Our Location &#8212;
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.666123228664!2d99.01509257497044!3d18.81302698233816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da25323ca4b707%3A0xb4df958552bccb5a!2sChiang%20Mai%20CCC%20Center!5e0!3m2!1smy!2sth!4v1737818191784!5m2!1smy!2sth"
          className="w-full"
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
