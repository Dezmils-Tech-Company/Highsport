import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockPlayers } from "./mockPlayers";

const PlayerProfile = () => {
  const { id } = useParams();
  const player = mockPlayers.find((p) => p.id.toString() === id);

  if (!player) {
    return <p className="text-red-600">Player not found</p>;
  }

  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{player.name}</h2>
      <img
        src={player.photo}
        alt={player.name}
        className="w-32 h-32 rounded-full object-cover border border-green-400 mb-4"
      />
      <p className="text-gray-700"><strong>School/Team:</strong> {player.school}</p>
      <p className="text-gray-700"><strong>Game:</strong> {player.sport}</p>
      <p className="text-gray-700"><strong>Position:</strong> {player.position}</p>

      <h3 className="text-lg font-semibold mt-4">Achievements</h3>
      <ul className="list-disc list-inside text-gray-600">
        {player.achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>

      <Link
        to="/players"
        className="inline-block mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Back to Directory
      </Link>
    </div>
  );
};

export default PlayerProfile;
