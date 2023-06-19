import './PlayerProfile.css'
import React from 'react';
import oladipoJson from '../../data/oladipo.json';
import backButton from '../../assets/backButton.png';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const PlayerProfile = () => {
  const playerData = oladipoJson

  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route, { replace: true });
  };

  const playerName = playerData.bio[0].name;
  const birthDate = playerData.bio[0].birthDate;
  const currentDate = new Date();
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = currentDate.getFullYear();
  const playerAge = currentYear - birthYear;

  return (
    <div>

      <div className="top">
        <img src={backButton} onClick={() => handleClick('/players')} className='backButton' alt="Back Button"/>
        <h1>{playerName}</h1>
      </div>

      <div className='container1'>
        <img src={playerData.bio[0].photoUrl} className='headshot' alt='playerHeadshot'></img>
        <div variant='contained' className='description'>
          <h3>Bio and Measurements</h3>
          <ul>
            <li>Age: {playerAge} years old</li>
            <li>Height: {playerData.bio[0].height} inches</li>
            <li>Weight: {playerData.bio[0].weight} lbs</li>
            <li>Position: {playerData.bio[0].position}</li>
            <li>Team: {playerData.bio[0].currentTeam}</li>
            <li>Agent: {playerData.bio[0].agent}</li>
            <li>MPG: {playerData.bio[0].mpg} minutes</li>
          </ul>
        </div>
      </div>

      <div className='container2'>
        <Button variant='contained' className='item'>Scouting Report</Button>
        <Button variant='contained' className='item'>Gamelog</Button>
      </div>

      <div className='container3'>
        <Button variant='contained'>Awards</Button>
        <Button variant='contained'>Contracts</Button>
      </div>

    </div>
  );
};

export default PlayerProfile;
