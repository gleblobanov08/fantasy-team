import React from 'react';
import { useLocation } from 'react-router-dom';
import playerPoints from '../data/playerPoints';

function Results() {
  const location = useLocation();
  const { selectedPlayers } = location.state;
  const totalPoints = selectedPlayers.reduce((total, player) => total + (playerPoints[player.name] || 0), 0);

  return (
    <div>
      <h1>Results</h1>
      <ul>
        {selectedPlayers.map(player => (
          <li key={player.name}>
            {player.name} - {player.position} - {player.team} - Points: {playerPoints[player.name] || 0}
          </li>
        ))}
      </ul>
      <h2>Total Points: {totalPoints}</h2>
    </div>
  );
}

export default Results;
