import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';

function PlayerList() {
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (position) {
      setFilteredPlayers(players.filter(player => player.position === position));
    } else {
      setFilteredPlayers(players);
    }
  }, [position]);

  return (
    <div>
      <h1>Player List</h1>
      <select onChange={(e) => setPosition(e.target.value)}>
        <option value="">All</option>
        <option value="Goalkeeper">Keepers</option>
        <option value="Defender">Defenders</option>
        <option value="Midfielder">Midfielders</option>
        <option value="Forward">Strikers</option>
      </select>
      <ul>
        {filteredPlayers.map(player => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.country} - ${player.price}
          </li>
        ))}
      </ul>
      <Link to="/team-selection">Select Your Team</Link>
    </div>
  );
}

export default PlayerList;