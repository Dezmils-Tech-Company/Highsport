import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { mockPlayers } from "./mockPlayers";

const PlayersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = mockPlayers.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-16 px-2 sm:px-6 lg:px-12 ">
      

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by name, school, sport..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {/* Player list */}
      <div className="space-y-3">
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
