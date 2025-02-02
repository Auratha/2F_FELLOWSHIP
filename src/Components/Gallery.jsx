// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./gallery.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Gallery() {
  return (
    <div id="gallery" className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{ "--swiper-pagination-color": "#fff" }}
        className="mySwiper h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-[85%] mx-auto"
      >
        {[...Array(16)].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`./gallery/gallery${index + 1}.jpg`}
                alt="2f gallery"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
