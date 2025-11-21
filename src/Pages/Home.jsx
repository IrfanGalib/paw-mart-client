import React from "react";
import Banner from "../Components/Banner";
import CategorySection from "../Components/CategorySection";
import RecentListing from "../Components/RecentListing";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <RecentListing />
    </div>
  );
};

export default Home;
