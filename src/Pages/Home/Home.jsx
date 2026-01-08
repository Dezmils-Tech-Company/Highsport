import React from "react";
import Location from "./Location";
import EventWall from "../Events/EventWall";
import Results from "../Courts/Results";
import Features from "../Home/features";
import Banner from "./../../Components/Banner/Banner";
const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Results />
      <EventWall />
      <Location />
    </>
  );
};

export default Home;
