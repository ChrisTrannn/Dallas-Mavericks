import './PlayerProfile.css'
import React, { useState } from 'react';
import oladipoJson from '../../data/oladipo.json';
import backButton from '../../assets/backButton.png';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const PlayerProfile = () => {
  const playerData = oladipoJson

  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route, { replace: true });
  };

  let reports = [];
  for (let i = 0; i < playerData.scoutingReports.length; i++) {
    reports.push(playerData.scoutingReports[i].report);
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [scoutingReports, setScoutingReports] = useState(reports);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleAddScoutingReport = (event) => {
    event.preventDefault();
    const report = event.target.elements.report.value;
    setScoutingReports([...scoutingReports, report]);
    event.target.reset();
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
        <Button variant='contained' className='item' onClick={handleModalOpen}>Scouting Report</Button>
        <Button variant='contained' className='item'>Gamelog</Button>
      </div>

      <div className='container3'>
        <Button variant='contained'>Awards</Button>
        <Button variant='contained'>Contracts</Button>
      </div>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div className="modal">
          <h3>Scouting Reports</h3>
          <ul>
            {scoutingReports.map((report, index) => (
              <li key={index}>{report}</li>
            ))}
          </ul>
          <form onSubmit={handleAddScoutingReport}>
            <input type="text" name="report" placeholder="Enter scouting report" />
            <Button type="submit">Add</Button>
          </form>
        </div>
      </Modal>

    </div>
  );
};

export default PlayerProfile;
