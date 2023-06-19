import './PlayerProfile.css'
import React, { useState } from 'react';
import oladipoJson from '../../data/oladipo.json';
import backButton from '../../assets/backButton.png';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useLocation } from 'react-router-dom';

const PlayerProfile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedPath = queryParams.get('path');
  const path = decodeURIComponent(encodedPath);

  const playerData = oladipoJson

  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route, { replace: true });
  };

  let reports = [];
  for (let i = 0; i < playerData.scoutingReports.length; i++) {
    reports.push(playerData.scoutingReports[i].report);
  }

  const [isScoutingReportModalOpen, setScoutingReportModalOpen] = useState(false);
  const [isGamelogModalOpen, setGamelogModalOpen] = useState(false);
  const [isAwardsModalOpen, setAwardsModalOpen] = useState(false);
  const [isContractsModalOpen, setContractsModalOpen] = useState(false);

  const [scoutingReports, setScoutingReports] = useState(reports);

  const handleScoutingReportModalOpen = () => {
    setScoutingReportModalOpen(true);
  };
  const handleScoutingReportModalClose = () => {
    setScoutingReportModalOpen(false);
  };

  const handleGamelogModalOpen = () => {
    setGamelogModalOpen(true);
  };
  const handleGamelogModalClose = () => {
    setGamelogModalOpen(false);
  };

  const handleAwardsModalOpen = () => {
    setAwardsModalOpen(true);
  };
  const handleAwardsModalClose = () => {
    setAwardsModalOpen(false);
  };

  const handleContractsModalOpen = () => {
    setContractsModalOpen(true);
  };
  const handleContractsModalClose = () => {
    setContractsModalOpen(false);
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


  if (path != '../../data/oladipo.json') {
    return (
      <div>
        <div className="top">
          <img src={backButton} onClick={() => handleClick('/players')} className='backButton' alt="Back Button"/>
          <h1>Player data not found</h1>
        </div>
      </div>
    );
  }

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
        <Button variant='contained' className='item' onClick={handleScoutingReportModalOpen}>Scouting Report</Button>
        <Button variant='contained' className='item'  onClick={handleGamelogModalOpen}>Gamelog</Button>
      </div>

      <div className='container3'>
        <Button variant='contained' onClick={handleAwardsModalOpen}>Awards</Button>
        <Button variant='contained' onClick={handleContractsModalOpen}>Contracts</Button>
      </div>

      <Modal open={isScoutingReportModalOpen} onClose={handleScoutingReportModalClose}>
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

      <Modal open={isGamelogModalOpen} onClose={handleGamelogModalClose}>
        <div className="modal">
          <h3>Gamelog</h3>
          <ul className='outsideGamelog'>
            {playerData.gameLog.map((game, index) => (
              <li key={index}>
                <ul className='insideGamelog'>
                  <li>Opponent: {game.opponent}</li>
                  <li>Outcome: {game.outcome}</li>
                  <li>Points: {game.pts}</li>
                  <li>Rebounds: {game.reb}</li>
                  <li>Assists: {game.ast}</li>
                  <li>Steals: {game.stl}</li>
                  <li>Blocks: {game.blk}</li>

                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Modal>

      <Modal open={isAwardsModalOpen} onClose={handleAwardsModalClose}>
        <div className="modal">
          <h3>Awards</h3>
          <ul>
            {playerData.awards.map((award, index) => (
              <li key={index}>{award.award}, {award.season}</li>
            ))}
          </ul>
        </div>
      </Modal>

      <Modal open={isContractsModalOpen} onClose={handleContractsModalClose}>
        <div className="modal">
          <h3>Contracts</h3>
          <ul>
            {playerData.contracts.map((contract, index) => (
              <li key={index}>Salary: ${contract.totalSalary}, {contract.salaryYear}</li>
            ))}
          </ul>
        </div>
      </Modal>

    </div>
  );
};

export default PlayerProfile;
