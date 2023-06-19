import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import oladipoJson from '../../data/oladipo.json';
import backButton from '../../assets/backButton.png';
import { useNavigate } from 'react-router-dom';

const PlayerProfile = () => {
  const playerData = oladipoJson

  const navigate = useNavigate();
  
  const handleClick = (route) => {
    navigate(route, { replace: true });
  };

  return (
    <div>

      <div className="top">
        <img src={backButton} onClick={() => handleClick('/players')} className='backButton' alt="Back Button"/>
        <h1>Players Profile Page</h1>
      </div>

      <p>{playerData.awards[3].season}</p>
    </div>
  );
};

export default PlayerProfile;
