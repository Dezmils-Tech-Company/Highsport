import React from "react";
import Location from "./Location";
import EventWall from "../Events/EventWall";
import Results from "../Courts/Results";

const Home = () => {
  return (
    <>
      <Results />
      <EventWall />
      <Location />
    </>
  );
};

export default Home;
