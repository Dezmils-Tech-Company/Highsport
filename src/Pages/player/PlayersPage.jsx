import React from "react";
import PlayerList from "./PlayerList";

const PlayersPage = () => (
  <div
    className="
      mt-10 sm:mt-16       
      px-4 sm:px-5 lg:px-12 
      max-w-7xl mx-auto    
    "
  >
    
    <div className=" shadow-md rounded-md p-4 sm:p-6">
      <PlayerList />
    </div>
  </div>
);

export default PlayersPage;
