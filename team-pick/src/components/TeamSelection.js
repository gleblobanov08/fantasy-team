import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const players = [
  { id: 1, name: 'Player 1', position: 'Keeper', price: 10, team: 'Germany' },
  { id: 2, name: 'Player 2', position: 'Defender', price: 8, team: 'France' },
  // Add more players here...
];

function TeamSelection() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [error, setError] = useState('');

  const addPlayer = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    const keeperCount = newSelectedPlayers.filter(p => p.position === 'Keeper').length;
    const defenderCount = newSelectedPlayers.filter(p => p.position === 'Defender').length;
    const midfielderCount = newSelectedPlayers.filter(p => p.position === 'Midfielder').length;
    const strikerCount = newSelectedPlayers.filter(p => p.position === 'Striker').length;

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

    setSelectedPlayers(newSelectedPlayers);
    setError('');
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
  };

  return (
    <div>
      <h1>Team Selection</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.team} - ${player.price}
            <button onClick={() => addPlayer(player)}>Add</button>
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
      <Link to="/results" state={{ selectedPlayers }}>See Results</Link>
    </div>
  );
}

export default TeamSelection;
