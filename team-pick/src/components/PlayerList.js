import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const players = [
  { id: 1, name: 'Player 1', position: 'Keeper', price: 10, team: 'Germany' },
  { id: 2, name: 'Player 2', position: 'Defender', price: 8, team: 'France' },
  // Add more players here...
];

function PlayerList() {
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter) {
      setFilteredPlayers(players.filter(player => player.position === filter));
    } else {
      setFilteredPlayers(players);
    }
  }, [filter]);

  return (
    <div>
      <h1>Player List</h1>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Keeper">Keepers</option>
        <option value="Defender">Defenders</option>
        <option value="Midfielder">Midfielders</option>
        <option value="Striker">Strikers</option>
      </select>
      <ul>
        {filteredPlayers.map(player => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.team} - ${player.price}
          </li>
        ))}
      </ul>
      <Link to="/team-selection">Select Your Team</Link>
    </div>
  );
}

export default PlayerList;