"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/home-team.scss";

const teamMembers = [
  {
    name: "Name Here",
    position: "Position Here",
    avatar: "/images/team-avatar.png",
  },
  {
    name: "Name Here",
    position: "Position Here",
    avatar: "/images/team-avatar.png",
  },
  {
    name: "Name Here",
    position: "Position Here",
    avatar: "/images/team-avatar.png",
  },
  {
    name: "Name Here",
    position: "Position Here",
    avatar: "/images/team-avatar.png",
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);

  return (
    <section className="section bg-[#FAF9F6] relative">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#4B2615] mb-3">Our Team</h2>
          <p className="max-w-2xl mx-auto text-[#4B2615] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/* Swiper and Arrows */}
        <div className="relative">
          {/* Swiper */}
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <div className="bg-[#643F2E] rounded-lg overflow-hidden mx-auto w-[240px] h-[240px]">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={240}
                      height={240}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-[#4B2615] font-semibold text-lg">
                    {member.name}
                  </h3>
                  <p className="uppercase text-[#A29CA1] text-xs tracking-wider mt-1">
                    {member.position}
                  </p>
                  <div className="flex justify-center gap-4 mt-3 text-[#4B2615] text-sm">
                    <i className="fab fa-whatsapp" />
                    <i className="fas fa-phone" />
                    <i className="fas fa-envelope" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Manual Arrows */}
          {/* Left Arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 text-[#4B2615] text-4xl hover:opacity-80"
          >
            &lt;
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 text-[#4B2615] text-4xl hover:opacity-80"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
