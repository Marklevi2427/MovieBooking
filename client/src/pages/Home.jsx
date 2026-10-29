import React from "react";
import Hero from "../components/Hero.jsx";
import FeaturedSection from "../components/FeaturedSection.jsx";
import TrailerSection from "../components/TrailerSection.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <TrailerSection />
    </div>
  );
};

export default Home;
