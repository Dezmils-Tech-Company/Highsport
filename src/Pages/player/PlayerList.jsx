import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import PlayerProfile from "./PlayerProfile";
import { mockPlayers } from "./mockPlayers";

const PlayerList = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [filter, setFilter] = useState("");

  const filteredPlayers = mockPlayers.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.school.toLowerCase().includes(filter.toLowerCase()) ||
      p.sport.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left side: Player list */}
      <div className="flex-1 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold text-green-700 mb-4">Players</h2>
        <input
          type="text"
          placeholder="Search by name, school, sport..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full mb-4 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="space-y-3">
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onSelect={setSelectedPlayer}
            />
          ))}
        </div>
      </div>

      {/* Right side: Player profile */}
      <div className="flex-1 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold text-green-700 mb-4">Profile</h2>
        <PlayerProfile player={selectedPlayer} />
      </div>
    </div>
  );
};

export default PlayerList;
