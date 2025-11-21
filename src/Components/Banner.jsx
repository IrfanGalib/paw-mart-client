import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dog1 from "../assets/fatty-corgi-1QsQRkxnU6I-unsplash.jpg";
import cat1 from "../assets/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg";
import dog2 from "../assets/joe-caione-qO-PIF84Vxg-unsplash.jpg";

const Banner = () => {
  return (
    <div style={{ padding: "20px" }} className="max-w-7xl mx-auto -mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        autoplay={{
          delay: 1500, 
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative">
            <p className="sm:text:3xl md:text-7xl text-[#002855] font-bold absolute top-1/4 left-1/12">
              Find Your Furry Friend Today!
            </p>
            <img className="" src={dog1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <p className="sm:text:3xl md:text-7xl text-[#002855] font-bold absolute top-4/6 left-1/12">
              Adopt, Don’t Shop — Give a Pet a Home.
            </p>
            <img className="" src={cat1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <p className="sm:text:3xl md:text-5xl text-white font-bold absolute top-1/4 left-1/12">
              Because Every <br /> Pet Deserves <br /> Love and Care.
            </p>
            <img className="" src={dog2} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
