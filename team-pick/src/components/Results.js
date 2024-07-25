import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import playerPoints from '../data/playerPoints';
import Loader from './Loader';
import '../styles/Components.css';

function Results() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();
  const { selectedPlayers } = location.state;
  const totalPoints = selectedPlayers.reduce((total, player) => total + (playerPoints[player.name] || 0), 0);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000)
}, [])

  return (
    <div className='bg'>
      {
        showLoader ? (
          <Loader />
        ) : (
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
      <Link to="/" className='btn'>Go home</Link>
      </div>
      )}
    </div>
  );
}

export default Results;
