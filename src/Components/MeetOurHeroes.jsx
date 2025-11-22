import React from "react";
import boy from "../assets/boy.jpg";
import woman from "../assets/woman.jpg";
import oldWoman from "../assets/old woman.jpg";
import girl from "../assets/girl.jpg";
import { FaPaw } from "react-icons/fa";

const MeetOurHeroes = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-4xl font-extrabold text-[#002855] text-center mb-12">
        <FaPaw className="inline-block mr-3 text-red-500" />
        Meet Our Pet Heroes
      </h2>
      <div className="space-y-12">
        <div className="bg-gray-100 flex flex-col md:flex-row rounded-xl shadow-lg items-center">
          <div className="hover-3d mx-auto">
            {/* Image */}
            <figure className="w-60 rounded-full p-4">
              <img
                src={boy}
                alt="Leo & Buster"
                className="rounded-full object-cover w-full h-full"
              />
            </figure>
          </div>

          <div className="flex-grow p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed">
              At just ten years old,{" "}
              <span className="text-[#002855] font-semibold">Leo</span> became a
              hero when he chose to adopt Buster, a lively companion animal who
              had been waiting for months in foster care. Leo dedicated his
              weekends to helping Buster adjust to a home environment, teaching
              him new tricks and building trust through patience and play. Their
              bond is a testament to youthful compassion, proving that the
              commitment to adoption can truly transform two lives for the
              better. They are now inseparable on their daily adventures.
            </p>
            <h1 className="text-2xl font-bold text-[#002855] mt-5">
              - Leo & Buster, Adopter & Best Friend
            </h1>
          </div>
        </div>

        {/* --- Card 2: Aisha & Patches --- */}
        <div className="bg-gray-100 flex flex-col md:flex-row-reverse rounded-xl shadow-lg items-center">
          <div className="hover-3d mx-auto">
            <figure className="w-60 rounded-full p-4">
              <img
                src={woman}
                alt="Aisha & Patches"
                className="rounded-full object-cover w-full h-full"
              />
            </figure>
          </div>

          <div className="flex-grow p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed">
              <span className="text-[#002855] font-semibold">Aisha</span> was
              initially hesitant about the responsibilities of pet ownership,
              but the moment she met Patches at a local adoption event, she knew
              she had found her match. Patches, a gentle companion animal,
              adapted quickly to Aisha’s apartment, offering quiet affection and
              playful moments. Aisha quickly realized that adopting was more
              rewarding than she imagined. Patches didn't just gain a home; she
              provided Aisha with unexpected joy and the quiet, steady love that
              turned her house into a true sanctuary.
            </p>
            <h1 className="text-2xl font-bold text-[#002855] mt-5">
              - Aisha & Patches, First-Time Adopter
            </h1>
          </div>
        </div>

        {/* --- Card 3: Eleanor & Max --- */}
        <div className="bg-gray-100 flex flex-col md:flex-row rounded-xl shadow-lg items-center">
          <div className="hover-3d mx-auto">
            <figure className="w-60 rounded-full p-4">
              <img
                src={oldWoman}
                alt="Eleanor & Max"
                className="rounded-full object-cover w-full h-full"
              />
            </figure>
          </div>

          <div className="flex-grow p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed">
              <span className="text-[#002855] font-semibold">EleanorChloe</span>{" "}
              believes everyone deserves companionship, which is why she
              specifically sought out Max, a calm senior animal who needed a
              quiet place to retire. Max’s previous owner passed away, leaving
              him grieving and confused. Eleanor's peaceful home environment and
              gentle routine provided the stability Max desperately needed.
              Their relationship highlights the unique compatibility and mutual
              comfort found when humans choose to adopt older pets, often the
              last to be chosen.
            </p>
            <h1 className="text-2xl font-bold text-[#002855] mt-5">
              - Eleanor & Max, Senior Adopter
            </h1>
          </div>
        </div>

        {/* --- Card 4: Chloe & Whiskers --- */}
        <div className="bg-gray-100 flex flex-col md:flex-row-reverse rounded-xl shadow-lg items-center">
          <div className="hover-3d mx-auto">
            {/* Image */}
            <figure className="w-60 rounded-full p-4">
              <img
                src={girl}
                alt="Chloe & Whiskers"
                className="rounded-full object-cover w-full h-full"
              />
            </figure>
          </div>

          <div className="flex-grow p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed">
              <span className="text-[#002855] font-semibold">Chloe</span>{" "}
              discovered her passion for animal welfare by becoming a dedicated
              foster parent, specializing in providing intensive care for young,
              vulnerable companion animals. Currently, she is nurturing Whiskers
              and her two siblings, ensuring they receive round-the-clock
              feeding and socialization. Chloe's tireless work gives these small
              animals the vital foundation they need to grow up healthy and
              confident, significantly increasing their chances of finding a
              successful and loving forever home.
            </p>
            <h1 className="text-2xl font-bold text-[#002855] mt-5">
              - Chloe & Whiskers, Foster & Caregiver
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurHeroes;
