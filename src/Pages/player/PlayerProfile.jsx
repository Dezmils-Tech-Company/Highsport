import React from "react";

const PlayerProfile = ({ player }) => {
  if (!player) return <p>Select a player to view profile</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #000" }}>
      <h2>{player.name}</h2>
      <img src={player.photo} alt={player.name} width="150" />
      <p><strong>School:</strong> {player.school}</p>
      <p><strong>Sport:</strong> {player.sport}</p>
      <p><strong>Position:</strong> {player.position}</p>
      <p><strong>Age:</strong> {player.age}</p>

      <h3>Stats</h3>
      <pre>{JSON.stringify(player.stats, null, 2)}</pre>

      <h3>Achievements</h3>
      <ul>
        {player.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
      </ul>
    </div>
  );
};

export default PlayerProfile;
