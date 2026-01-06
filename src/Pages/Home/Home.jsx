import React from "react";
import Banner from "../../Components/Banner/Banner";
import Location from "./Location";
import EventWall from "../Events/EventWall";

const Home = () => {
  return (
    <>
      <Banner />
      <EventWall />
      <Location />
    </>
  );
};

export default Home;
