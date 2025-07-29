// components/HeroSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css';

const HeroSlider = () => {
  const slides = [
    {
      img: 'https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg',
      alt: 'Stay Stylish',
    },
    {
      img: 'https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg',
      alt: 'New Trends',
    },
  ];

  return (
    <div className="hero-slider-wrapper">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt={slide.alt} className="hero-slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
