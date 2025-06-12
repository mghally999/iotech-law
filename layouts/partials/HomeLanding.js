"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/home-banner.scss"; // Gradient + shadow styles

const slides = [
  {
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    button: "Read More",
  },
  {
    title: "Second Slide",
    text: "We build powerful and elegant digital experiences for modern law firms.",
    button: "Read More",
  },
  {
    title: "Third Slide",
    text: "Trusted legal solutions with integrity and excellence.",
    button: "Explore Services",
  },
  {
    title: "Final Slide",
    text: "Let us help you navigate legal challenges with confidence.",
    button: "Contact Us",
  },
];

const HomeLanding = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        direction="vertical"
        // loop
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image */}
              <Image
                src="/images/hero-background.jpg"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center z-0"
              />

              {/* Overlays */}
              <div className="absolute inset-0 z-10 gradient-overlay" />
              <div className="absolute inset-0 z-10 bg-black/40" />

              {/* Content */}
              <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                  {/* Text */}
                  <div className="text-white space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-sm max-w-xl mx-auto lg:mx-0 drop-shadow-text">
                      {slide.text}
                    </p>
                    <Link href="/about" className="inline-block">
                      <button className="mt-2 rounded-md bg-white px-8 py-3 text-[#4B2615] font-medium shadow-md hover:shadow-lg transition">
                        {slide.button}
                      </button>
                    </Link>
                  </div>

                  {/* Avatar */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-[374px] h-[374px] bg-[#643F2E] rounded-lg shadow-lg hidden xl:block items-center justify-center overflow-hidden">
                      <Image
                        src="/images/team-avatar.png"
                        alt="Avatar"
                        width={374}
                        height={374}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Left Pagination Bullets */}
      <div className="swiper-pagination swiper-pagination-vertical !left-4 !top-1/2 !-translate-y-1/2 z-30" />
    </section>
  );
};

export default HomeLanding;
