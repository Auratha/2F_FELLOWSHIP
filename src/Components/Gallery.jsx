import { useEffect, useRef } from "react";

const Gallery = () => {
  const galleryRef = useRef(null);

  const handleScroll = (event) => {
    const gallery = galleryRef.current;
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

    if (event.deltaY !== 0) {
      if (gallery.scrollLeft + event.deltaY >= maxScrollLeft) {
        gallery.scrollLeft = maxScrollLeft;
        event.preventDefault();
        // Scroll to the main page
        window.scrollTo({
          top: gallery.getBoundingClientRect().bottom + window.scrollY,
          behavior: "smooth",
        });
      } else if (gallery.scrollLeft + event.deltaY <= 0) {
        gallery.scrollLeft = 0;
        event.preventDefault();
      } else {
        gallery.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    const galleryContainer = galleryRef.current;
    galleryContainer.addEventListener("wheel", handleScroll);
    return () => {
      galleryContainer.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className="gallery-container w-full h-[700px] overflow-hidden scroll-smooth flex flex-shrink-0"
    >
      {[...Array(4)].map((_, index) => (
        <img
          src={`/gallery/gallery${index + 1}.jpg`}
          alt={`gallery${index + 1}`}
          className="min-w-full object-cover"
        />
      ))}
    </div>
  );
};

export default Gallery;
