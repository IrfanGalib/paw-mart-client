import React from "react";
import Banner from "../Components/Banner";
import CategorySection from "../Components/CategorySection";
import RecentListing from "../Components/RecentListing";
import WhyAdoptFromPawMart from "../Components/WhyAdoptFromPawMart";
import MeetOurHeroes from "../Components/MeetOurHeroes";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <RecentListing />
      <WhyAdoptFromPawMart />
      <MeetOurHeroes />
    </div>
  );
};

export default Home;
