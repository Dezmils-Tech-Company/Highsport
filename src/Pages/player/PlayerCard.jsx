import React from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => (
  <div className="flex items-center justify-between bg-white shadow-md p-3 mb-3 border border-green-300 rounded-md hover:bg-gray-50 transition">
    {/* Photo + Info */}
    <div className="flex items-center gap-4">
      <img
        src={player.photo}
        alt={player.name}
        className="w-14 h-14 rounded-full object-cover border border-green-400"
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold text-green-700">{player.name}</span>
        <span className="text-sm text-gray-600">{player.school}</span>
        <span className="text-sm text-gray-500">{player.sport}</span>
      </div>
    </div>

    {/* View button navigates to profile */}
    <Link
      to={`/players/${player.id}`}
      className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
    >
      View
    </Link>
  </div>
);

export default PlayerCard;
