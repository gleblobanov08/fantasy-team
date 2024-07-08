import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';
import '../styles/Components.css';

function TeamSelection() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [error, setError] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (position) {
      setFilteredPlayers(players.filter(player => player.position === position));
    } else {
      setFilteredPlayers(players);
    }
  }, [position]);


  const addPlayer = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    const playerCount = newSelectedPlayers.length;
    const totalPrice = newSelectedPlayers.reduce((total, p) => total + p.price, 0);
    const teamCount = newSelectedPlayers.filter(p => p.country === player.country).length;

    const keeperCount = newSelectedPlayers.filter(p => p.position === 'Goalkeeper').length;
    const defenderCount = newSelectedPlayers.filter(p => p.position === 'Defender').length;
    const midfielderCount = newSelectedPlayers.filter(p => p.position === 'Midfielder').length;
    const strikerCount = newSelectedPlayers.filter(p => p.position === 'Forwa').length;

    if (playerCount > 15) {
      setError('You can only select 15 players');
      return;
    }
    if (totalPrice > 100) {
      setError('The total price of selected players cannot exceed 100');
      return;
    }
    if (teamCount > 2) {
      setError(`You can only select up to 2 players from the same team (${player.country})`);
      return;
    }
    if (keeperCount > 2) {
      setError('You can only select 2 keepers');
      return;
    }
    if (defenderCount > 5) {
      setError('You can only select 5 defenders');
      return;
    }
    if (midfielderCount > 5) {
      setError('You can only select 5 midfielders');
      return;
    }
    if (strikerCount > 5) {
      setError('You can only select 5 strikers');
      return;
    }
    if (selectedPlayers.find(p => p.name === player.name)) {
      setError('You cannot select the same player twice');
      return;
    }

    setSelectedPlayers(newSelectedPlayers);
    setError('');
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.name !== player.name));
  };

  const isAddDisabled = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    const playerCount = newSelectedPlayers.length;
    const totalPrice = newSelectedPlayers.reduce((total, p) => total + p.price, 0);
    const teamCount = newSelectedPlayers.filter(p => p.country === player.country).length;

    const keeperCount = newSelectedPlayers.filter(p => p.position === 'Goalkeeper').length;
    const defenderCount = newSelectedPlayers.filter(p => p.position === 'Defender').length;
    const midfielderCount = newSelectedPlayers.filter(p => p.position === 'Midfielder').length;
    const strikerCount = newSelectedPlayers.filter(p => p.position === 'Forward').length;

    return (
      playerCount > 15 ||
      totalPrice > 100 ||
      teamCount > 2 ||
      keeperCount > 2 ||
      defenderCount > 5 ||
      midfielderCount > 5 ||
      strikerCount > 5 ||
      selectedPlayers.find(p => p.name === player.name)
    );
  };

  return (
    <div>
      <h1>Team Selection</h1>
      <select onChange={(e) => setPosition(e.target.value)}>
        <option value="">All</option>
        <option value="Goalkeeper">Keepers</option>
        <option value="Defender">Defenders</option>
        <option value="Midfielder">Midfielders</option>
        <option value="Forward">Strikers</option>
      </select>

        {filteredPlayers.map(player => (
          <div key={player.name} className='table'>
            <div>{player.name}</div> 
            <div>{player.position}</div>
            <div>{player.country}</div>
            <div>{player.price}</div>
            <div>
              <button onClick={() => addPlayer(player)} disabled={isAddDisabled(player)} style={{ backgroundColor: isAddDisabled(player) ? 'grey' : 'lightgreen'}}>
                +
              </button>
            </div>
          </div>
        ))}
      <h2>Selected Players</h2>
        {selectedPlayers.map(player => (
          <div className='table'>
            <div>{player.name}</div>
            <div>{player.position}</div>
            <div>{player.country}</div>
            <div>{player.price}</div>
            <div>
              <button onClick={() => removePlayer(player)} className='remove'>
                X
              </button>
            </div>
          </div>
        ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Total Price: ${selectedPlayers.reduce((total, player) => total + player.price, 0)}</p>
      <div className='links'>
        <Link to="/">Go back</Link>
        <Link to="/results" state={{ selectedPlayers }}>See Results</Link>
      </div>
    </div>
  );
}

export default TeamSelection