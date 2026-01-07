import React from "react";
import Banner from "../../Components/Banner/Banner";
import Location from "./Location";
import EventWall from "../Events/EventWall";
import Results from "../Courts/Results";

const Home = () => {
  return (
    <>
      <Banner />
      <Results />
      <EventWall />
      <Location />
    </>
  );
};

export default Home;
