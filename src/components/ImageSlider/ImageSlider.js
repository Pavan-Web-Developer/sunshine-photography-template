"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Grow, Fade } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderImages = [
  "/SliderImages/Slider-2.webp",
  "/SliderImages/Slider-1.jpeg",
  "/SliderImages/Slider-3.jpg",
  "/SliderImages/Slider-2.webp",
  "/SliderImages/Slider-1.jpeg",
  "/SliderImages/Slider-3.jpg",
  "/SliderImages/Slider-2.webp",
  "/SliderImages/Slider-1.jpeg",
  "/SliderImages/Slider-3.jpg",
  "/SliderImages/Slider-2.webp",
  "/SliderImages/Slider-1.jpeg",
  "/SliderImages/Slider-3.jpg",
];

export default function ImageSlider() {
  const swiperRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleImageClick = (e) => {
    const { clientX } = e;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickPosition = clientX - left;

    // If clicked on left half, go to previous slide
    if (clickPosition < width / 2) {
      swiperRef.current?.slidePrev();
    } else {
      // If clicked on right half, go to next slide
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div className="relative w-full">
      {/* Custom Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <HiOutlineChevronLeft size={18} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <HiOutlineChevronRight size={18} />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        {sliderImages.map((i, index) => (
          <SwiperSlide key={i + index}>
            <Fade in={true} timeout={1000}>
              <div
                className="h-[500px] cursor-pointer relative group"
                onClick={handleImageClick}
              >
                <Image
                  src={i}
                  height={2000}
                  width={2000}
                  alt={"Slider " + index}
                  className="h-[500px] w-full object-cover transition-opacity duration-1000"
                  priority={index === 0}
                />
                {/* Left/Right Indicators */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-black/25"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-black/25"></div>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
