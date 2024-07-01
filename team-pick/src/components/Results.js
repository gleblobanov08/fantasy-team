import React from 'react';
import { useLocation } from 'react-router-dom';

const playerPoints = {
  1: 5, // Player 1
  2: 3, // Player 2
  // Add points for more players here...
};

function Results() {
  const location = useLocation();
  const { selectedPlayers } = location.state;
  const totalPoints = selectedPlayers.reduce((total, player) => total + (playerPoints[player.id] || 0), 0);

  return (
    <div>
      <h1>Results</h1>
      <ul>
        {selectedPlayers.map(player => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.team} - Points: {playerPoints[player.id] || 0}
          </li>
        ))}
      </ul>
      <h2>Total Points: {totalPoints}</h2>
    </div>
  );
}

export default Results;
