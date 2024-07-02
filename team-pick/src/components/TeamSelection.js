import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';

function TeamSelection() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [error, setError] = useState('');

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
      <ul>
        {players.map(player => (
          <li key={player.name}>
            {player.name} - {player.position} - {player.country} - ${player.price}
            <button onClick={() => addPlayer(player)} disabled={isAddDisabled(player)} style={{ backgroundColor: isAddDisabled(player) ? 'grey' : 'lightgreen', borderRadius: '10px' }}>
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2>Selected Players</h2>
      <ul>
        {selectedPlayers.map(player => (
          <li key={player.name}>
            {player.name} - {player.position} - {player.country} - ${player.price}
            <button onClick={() => removePlayer(player)}>Remove</button>
          </li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Total Price: ${selectedPlayers.reduce((total, player) => total + player.price, 0)}</p>
      <Link to="/results" state={{ selectedPlayers }}>See Results</Link>
    </div>
  );
}

export default TeamSelection

/*

    if (playerCount > 15) {
      setError('You can only select 15 players');
      return;
    }
    if (totalPrice > 100) {
      setError('The total price of selected players cannot exceed 100');
      return;
    }
    if (teamCount > 2) {
      setError(`You can only select up to 2 players from the same team (${player.team})`);
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
    if (selectedPlayers.find(p => p.id === player.id)) {
      setError('You cannot select the same player twice');
      return;
    }

    setSelectedPlayers(newSelectedPlayers);
    setError('');
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
  };

  const isAddDisabled = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    const playerCount = newSelectedPlayers.length;
    const totalPrice = newSelectedPlayers.reduce((total, p) => total + p.price, 0);
    const teamCount = newSelectedPlayers.filter(p => p.team === player.team).length;

    const keeperCount = newSelectedPlayers.filter(p => p.position === 'Keeper').length;
    const defenderCount = newSelectedPlayers.filter(p => p.position === 'Defender').length;
    const midfielderCount = newSelectedPlayers.filter(p => p.position === 'Midfielder').length;
    const strikerCount = newSelectedPlayers.filter(p => p.position === 'Striker').length;

    return (
      playerCount > 15 ||
      totalPrice > 100 ||
      teamCount > 2 ||
      keeperCount > 2 ||
      defenderCount > 5 ||
      midfielderCount > 5 ||
      strikerCount > 5 ||
      selectedPlayers.find(p => p.id === player.id)
    );
  };

  return (
    <div>
      <h1>Team Selection</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.team} - ${player.price}
            <button
              onClick={() => addPlayer(player)}
              disabled={isAddDisabled(player)}
              style={{ backgroundColor: isAddDisabled(player) ? 'grey' : 'blue' }}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2>Selected Players</h2>
      <ul>
        {selectedPlayers.map(player => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.team} - ${player.price}
            <button onClick={() => removePlayer(player)}>Remove</button>
          </li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Total Price: ${selectedPlayers.reduce((total, player) => total + player.price, 0)}</p>
      <Link to="/results" state={{ selectedPlayers }}>See Results</Link>
    </div>
  );
}

export default TeamSelection;
*/