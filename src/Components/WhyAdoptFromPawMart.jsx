import React from "react";
import adopt from "../assets/adopt.jpg";

const WhyAdoptFromPawMart = () => {
  return (
    <div className="bg-[#D2E8FF] mt-16">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 
                   items-center justify-center text-center md:text-left gap-10 p-8"
      >
       
        <div>
          <h2 className="text-[#002855] text-4xl md:text-6xl lg:text-7xl font-bold">
            Why Adopt from PawMart?
          </h2>

          <p className="mt-5 text-gray-800 leading-relaxed">
            Choosing adoption over purchasing a pet is a decision filled with
            compassion and real-world impact. When you adopt from PawMart,
            you’re not just gaining a loving companion—you’re becoming a hero. 
            <br /><br />

            <span className="text-[#002855] font-semibold">You save a life.</span>
            Every year, countless animals in shelters wait for a second chance.  
            By adopting, you give a deserving pet a forever home.
            <br /><br />

            <span className="text-[#002855] font-semibold">You get a healthy,</span>
            supported pet. Our animals are screened and vaccinated before adoption.
            <br /><br />

            <span className="text-[#002855] font-semibold">It's a win-win.</span>
            Open your heart to a rescue pet and experience the unmatched love only
            a rescued animal can give.
          </p>
        </div>

      
        <div className="flex justify-center items-center">
          <div className="mockup-phone border-[#ff8938]">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display">
              <img alt="wallpaper" src={adopt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAdoptFromPawMart;
