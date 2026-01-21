import React from "react";

const PlayerCard = ({ player, onSelect }) => (
  <div
    className="flex items-center justify-between bg-white shadow-md p-3 mb-3 border border-green-300 rounded-md hover:bg-gray-50 transition"
  >
    {/* Image */}
    <div className="flex-shrink-0">
      <img
        src={player.photo}
        alt={player.name}
        className="w-14 h-14 rounded-full object-cover border border-green-400"
      />
    </div>

    {/* Details */}
    <div className="flex flex-col sm:flex-row sm:gap-8 flex-1 px-4">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 hidden sm:block">Name</span>
        <span className="text-lg font-bold text-green-700">{player.name}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500 hidden sm:block">School/Team</span>
        <span className="text-sm text-gray-600">{player.school}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500 hidden sm:block">Game</span>
        <span className="text-sm text-gray-500">{player.sport}</span>
      </div>
    </div>

    {/* Action Button */}
    <div className="flex-shrink-0">
      <button
        onClick={() => onSelect(player)}
        className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        View
      </button>
    </div>
  </div>
);

export default PlayerCard;
