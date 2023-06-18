import './Players.css';
import React, { useState } from "react";
import backButton from '../../assets/backButton.png'
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const players = [
    {
      name: 'LeBron James',
      position: 'SF',
      age: 37,
      height: "6'9''",
      weight: 250,
      salary: "$41,180,544",
    },
    {
      name: 'Kevin Durant',
      position: 'PF',
      age: 32,
      height: "6'10''",
      weight: 240,
      salary: "$42,018,900",
    },
    {
      name: 'Stephen Curry',
      position: 'PG',
      age: 33,
      height: "6'3''",
      weight: 185,
      salary: "$43,750,000",
    },
    {
      name: 'Giannis Antetokounmpo',
      position: 'PF',
      age: 27,
      height: "6'11''",
      weight: 242,
      salary: "$39,344,000",
    },
    {
      name: 'Luka Dončić',
      position: 'PG/SG',
      age: 22,
      height: "6'7''",
      weight: '218 lbs',
      salary: '$10,174,391',
    },
    {
      name: 'Kristaps Porziņģis',
      position: 'PF/C',
      age: 25,
      height: "7'3''",
      weight: '240 lbs',
      salary: '$31,650,600',
    }
  ];

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (route) => {
    navigate(route, { replace: true });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="top">
        <img src={backButton} onClick={() => handleClick('/home')} className='backButton' alt="Back Button" />
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
          <Button variant='contained' key={player.name} className="playerCard">
            <div className='playerInfo'>
              <h4>{player.name}</h4>
              <p>POS: {player.position}</p>
              <p>AGE: {player.age}</p>
              <p>HT: {player.height}</p>
              <p>WT: {player.weight}</p>
              <p>SALARY: {player.salary}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Players;
