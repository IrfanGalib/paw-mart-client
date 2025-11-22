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
  const bannerHeightClass = "h-[450px]";

  return (
    <div style={{ padding: "20px" }} className=" -mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={`relative ${bannerHeightClass}`}>
            <p className="text-xl sm:text-3xl md:text-7xl text-[#002855] font-bold absolute top-1/4 left-4 md:left-10 z-10 p-2">
              Find Your Furry Friend Today!
            </p>
            <img
              className="w-full h-full object-cover"
              src={dog1}
              alt="A cute dog looking forward"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`relative ${bannerHeightClass}`}>
            <p className="text-xl sm:text-3xl md:text-7xl text-white font-bold absolute top-4/6 left-4 md:left-10 z-10  ro">
              Adopt, Don’t Shop — Give a Pet a Home.
            </p>
            <img
              className="w-full h-full object-cover"
              src={cat1}
              alt="A cat sitting indoors"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`relative ${bannerHeightClass}`}>
            <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold absolute top-1/4 left-4 md:left-10 z-10 p-2">
              Because Every <br /> Pet Deserves <br /> Love and Care.
            </p>
            <img
              className="w-full h-full object-cover"
              src={dog2}
              alt="A dog playing in the park"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
