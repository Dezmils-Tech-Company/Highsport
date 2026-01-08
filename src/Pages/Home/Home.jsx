import React from "react";
import Location from "./Location";
import EventWall from "../Events/EventWall";
import Results from "../Courts/Results";
import EliteExperience from "../Home/HeroShowcase";
import Banner from "./../../Components/Banner/Banner";
const Home = () => {
  return (
    <>
      <Banner />
      <Results />
      <EventWall />
      <EliteExperience />
      <Location />
    </>
  );
};

export default Home;
