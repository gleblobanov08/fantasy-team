import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';
import '../styles/Components.css';

const playersPerPage = 10;

function TeamSelection() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  useEffect(() => {
    const applyFilter = () => {
      if (filter) {
        setFilteredPlayers(players.filter(player => player.position === filter));
      } else {
        setFilteredPlayers(players);
      }
      setCurrentPage(1);
    };
    applyFilter();
  }, [filter]);

  const addPlayer = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    const playerCount = newSelectedPlayers.length;
    const totalPrice = newSelectedPlayers.reduce((total, p) => total + p.price, 0);
    const teamCount = newSelectedPlayers.filter(p => p.country === player.country).length;

    const keeperCount = newSelectedPlayers.filter(p => p.position === 'Goalkeeper').length;
    const defenderCount = newSelectedPlayers.filter(p => p.position === 'Defender').length;
    const midfielderCount = newSelectedPlayers.filter(p => p.position === 'Midfielder').length;
    const strikerCount = newSelectedPlayers.filter(p => p.position === 'Forward').length;

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
    const playerCount = selectedPlayers.length;
    const totalPrice = selectedPlayers.reduce((total, p) => total + p.price, 0);
    const teamCount = selectedPlayers.filter(p => p.country === player.country).length;

    const keeperCount = selectedPlayers.filter(p => p.position === 'Goalkeeper').length;
    const defenderCount = selectedPlayers.filter(p => p.position === 'Defender').length;
    const midfielderCount = selectedPlayers.filter(p => p.position === 'Midfielder').length;
    const strikerCount = selectedPlayers.filter(p => p.position === 'Forward').length;

    return (
      playerCount >= 15 ||
      totalPrice + player.price > 100 ||
      teamCount >= 2 ||
      (keeperCount >= 2 && player.position === 'Goalkeeper') ||
      (defenderCount >= 5 && player.position === 'Defender') ||
      (midfielderCount >= 5 && player.position === 'Midfielder') ||
      (strikerCount >= 5 && player.position === 'Forward') ||
      selectedPlayers.find(p => p.name === player.name)
    );
  };

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='team-selection'>
      <h1>Team Selection</h1>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Goalkeeper">Keepers</option>
        <option value="Defender">Defenders</option>
        <option value="Midfielder">Midfielders</option>
        <option value="Forward">Strikers</option>
      </select>
      <div className='table'>
        {currentPlayers.map(player => (
          <div key={player.name} className='table-cell'>
            <div>{player.name}</div> 
            <div>{player.position}</div>
            <div>{player.country}</div>
            <div>{player.price}</div>
            <div>
              <button onClick={() => addPlayer(player)} disabled={isAddDisabled(player)} className='add'>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(players.length / playersPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <h2>Selected Players</h2>
      <div className='table'>
        {selectedPlayers.map(player => (
          <div className='table-cell'>
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
      </div>
      {error && <p className='error'>{error}</p>}
      <p>Total Price: ${selectedPlayers.reduce((total, player) => total + player.price, 0)}</p>
      <div className='links'>
        <Link to="/" className='btn'>Go back</Link>
        <Link to="/results" state={{ selectedPlayers }} className='btn'>See Results</Link>
      </div>
    </div>
  );
}

export default TeamSelection;