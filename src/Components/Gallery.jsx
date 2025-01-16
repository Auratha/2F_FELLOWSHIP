import { useEffect, useRef } from "react";

const Gallery = () => {
  const galleryRef = useRef(null);

  //This is for pc mouse-scroll
  const handleScroll = (event) => {
    const gallery = galleryRef.current;
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const scrollSpeed = 5; // Adjust this value to increase or decrease scroll speed

    if (event.deltaY !== 0) {
      if (gallery.scrollLeft + event.deltaY * scrollSpeed >= maxScrollLeft) {
        gallery.scrollLeft = maxScrollLeft;
        event.preventDefault();
        // Scroll to the below section
        window.scrollTo({
          top: gallery.getBoundingClientRect().bottom + window.scrollY,
          behavior: "smooth",
        });
      } else if (gallery.scrollLeft + event.deltaY * scrollSpeed <= 0) {
        gallery.scrollLeft = 0;
        event.preventDefault();
        // Scroll to the top of the section
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        gallery.scrollLeft += event.deltaY * scrollSpeed;
        event.preventDefault();
      }
    }
  };

  //This is for mobile touch-scroll
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    galleryRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const gallery = galleryRef.current;
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const scrollSpeed = 50; // Increase this value to make the touch movement more responsive

    const deltaX = gallery.startX - touch.clientX;
    gallery.startX = touch.clientX;

    if (gallery.scrollLeft + deltaX * scrollSpeed >= maxScrollLeft) {
      gallery.scrollLeft = maxScrollLeft;
      event.preventDefault();
    } else if (gallery.scrollLeft + deltaX * scrollSpeed <= 0) {
      gallery.scrollLeft = 0;
      event.preventDefault();
    } else {
      gallery.scrollLeft += deltaX * scrollSpeed;
      event.preventDefault();
    }
  };

  useEffect(() => {
    const galleryContainer = galleryRef.current;
    galleryContainer.addEventListener("wheel", handleScroll);
    galleryContainer.addEventListener("touchstart", handleTouchStart);
    galleryContainer.addEventListener("touchmove", handleTouchMove);
    return () => {
      galleryContainer.removeEventListener("wheel", handleScroll);
      galleryContainer.removeEventListener("touchstart", handleTouchStart);
      galleryContainer.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section id="gallery">
      <div
        ref={galleryRef}
        className="gallery-container w-full h-[350px] sm-[450px] md:h-[500px] lg:h-[700px] overflow-hidden scroll-smooth flex flex-shrink-0"
      >
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src={`/gallery/gallery${index + 1}.jpg`}
            alt={`gallery${index + 1}`}
            className="min-w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
