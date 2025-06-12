"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonialsArray = [
  {
    name: "Mohammed Saif",
    position: "CEO/Company",
    image: "/images/team-avatar.png",
    quote: `With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.`,
  },
  {
    name: "Another Person",
    position: "Founder",
    image: "/images/team-avatar.png",
    quote: `The legal team supported me throughout every step of my journey. Their professionalism was truly unmatched.`,
  },
];

const Testimonials = () => {
  const swiperRef = useRef();

  return (
    <section className="relative bg-[#4B2615] py-20 text-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 xl:px-10">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            What our clients are saying
          </h2>
          <p className="max-w-2xl text-[#E0D8D3]">
            Our clients range from individual investors, to local, international
            as well as fortune 500 companies.Our clients range from individual
            investors, to local, international as well <br /> as fortune 500
            companies.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={false}
          loop
        >
          {testimonialsArray.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 items-center gap-[0px]">
                {/* Image */}
                <div className="bg-[#6E4B38] rounded-lg max-w-sm mx-auto md:mx-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={374}
                    height={374}
                    className="object-cover w-full h-auto"
                  />
                </div>

                {/* Quote */}
                <figure>
                  <blockquote className="text-[#E0D8D3] italic text-lg leading-relaxed mb-6">
                    “{item.quote}”
                  </blockquote>
                  <figcaption>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-[#D7D1CB]">{item.position}</p>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Manual Arrows - Figma Style Bottom Right, Clean & Spaced */}
        <div className="absolute bottom-10 right-8 flex items-center gap-6 z-50">
          {/* Left Arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full bg-[#6E4B38] text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition"
          >
            &larr;
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full bg-white text-[#4B2615] text-2xl font-bold flex items-center justify-center hover:opacity-90 transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
