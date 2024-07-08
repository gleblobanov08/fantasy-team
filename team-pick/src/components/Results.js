import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import playerPoints from '../data/playerPoints';
import '../styles/Components.css';

function Results() {
  const location = useLocation();
  const { selectedPlayers } = location.state;
  const totalPoints = selectedPlayers.reduce((total, player) => total + (playerPoints[player.name] || 0), 0);

  return (
    <div>
      <h1>Results</h1>
        {selectedPlayers.map(player => (
          <div key={player.name} className='table'>
            <div>{player.name}</div>
            <div>{player.position}</div>
            <div>{player.country}</div>
            <div>Points:</div>
            <div>{playerPoints[player.name] || 0}</div>
          </div>
        ))}
      <h2>Total Points: {totalPoints}</h2>
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default Results;
