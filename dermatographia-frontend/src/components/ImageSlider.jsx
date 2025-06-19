// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { image: "/images/s2.jpg" },
  { image: "/images/s3.png" },
];

export default function ImageSlider() {
  const [sliderHeight, setSliderHeight] = useState("400px");
  
  useEffect(() => {
    // Adjust height based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSliderHeight("300px");
      } else if (window.innerWidth < 1024) {
        setSliderHeight("500px");
      } else {
        setSliderHeight("700px");
      }
    };

    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-2 sm:px-4 md:px-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled opacity-30"
        }}
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet bg-gray-300 opacity-70",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600"
        }}
        autoplay={{ 
          delay: 4000,
          disableOnInteraction: false 
        }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg w-full"
        style={{ height: sliderHeight }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
        
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev !text-white !bg-black/30 !w-10 !h-10 rounded-full after:!text-sm"></div>
        <div className="swiper-button-next !text-white !bg-black/30 !w-10 !h-10 rounded-full after:!text-sm"></div>
      </Swiper>
      
      {/* Responsive indicator dots */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 10px !important;
        }
        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 5px !important;
          }
          .swiper-pagination-bullet {
            width: 6px !important;
            height: 6px !important;
            margin: 0 4px !important;
          }
        }
      `}</style>
    </div>
  );
}