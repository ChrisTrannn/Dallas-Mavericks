import './Players.css';
import React, { useState } from "react";
import backButton from '../../assets/backButton.png'
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const players = {
    'Victor Oladipo': '../../data/oladipo.json',
    'Malcolm Brogdon': '../../data/brogdon.json',
    'Domantas Sabonis': '../../data/sabonis.json',
    'Myles Turner': '../../data/turner.json',
    'T.J. Warren': '../../data/warren.json',
    'Caris LeVert': '../../data/levert.json',
    'Jeremy Lamb': '../../data/lamb.json',
    'T.J. McConnell': '../../data/mcconnell.json',
    'Justin Holiday': '../../data/holiday.json'
  };

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (player) => {
    const path = players[player];
    navigate(`/player-profile?path=${encodeURIComponent(path)}`, { replace: true });
  };

  const handleClick2 = (route) => {
    navigate(route, { replace: true });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPlayers = Object.keys(players).filter((player) =>
    player.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="top">
        <img src={backButton} onClick={() => handleClick2('/home')} className='backButton' alt="Back Button"/>
        <h1>Players Page</h1>
      </div>

      <input
        type="text"
        placeholder="Search player..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="searchBar"
      />

      <div className="playerRows">
        {filteredPlayers.map((player) => (
          <Button variant='contained' key={player} className="playerCard" onClick={() => handleClick(player)}>
            <div className='playerInfo'>
              <h4>{player}</h4>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Players;