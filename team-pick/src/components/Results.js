import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import playerPoints from '../data/playerPoints';
import '../styles/Components.css';

function Results() {
  const location = useLocation();
  const { selectedPlayers } = location.state;
  const totalPoints = selectedPlayers.reduce((total, player) => total + (playerPoints[player.name] || 0), 0);

  return (
    <div className='results'>
      <h1>Results</h1>
      <div className='table'>
        {selectedPlayers.map(player => (
          <div key={player.name} className='table-cell'>
            <div>{player.name}</div>
            <div>{player.position}</div>
            <div>{player.country}</div>
            <div>Points:</div>
            <div>{playerPoints[player.name] || 0}</div>
          </div>
        ))}
      </div>
      <p>Total Points: {totalPoints}</p>
      <Link to="/" className='btn'>Go to home</Link>
    </div>
  );
}

export default Results;
