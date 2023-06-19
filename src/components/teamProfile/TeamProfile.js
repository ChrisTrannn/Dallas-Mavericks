import './TeamProfile.css'
import React, { useState } from 'react';
import miamiHeatJson from '../../data/miamiHeat.json';
import backButton from '../../assets/backButton.png';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useLocation } from 'react-router-dom';

const TeamProfile = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const encodedPath = queryParams.get('path');
    const path = decodeURIComponent(encodedPath);

    const teamData = miamiHeatJson;

    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
    const [isSalariesModalOpen, setSalariesModalOpen] = useState(false);
    const [isPlayersStatsModalOpen, setPlayersStatsModalOpen] = useState(false);
    const [isContractsModalOpen, setContractsModalOpen] = useState(false);
    const [isRosterModalOpen, setRosterModalOpen] = useState(false);
    const [isCurrentInjuriesModalOpen, setCurrentInjuriesModalOpen] = useState(false);

    const handleScheduleModalOpen = () => {
        setScheduleModalOpen(true);
    };
    const handleScheduleModalClose = () => {
        setScheduleModalOpen(false);
    };

    const handleSalariesModalOpen = () => {
        setSalariesModalOpen(true);
    };
    const handleSalariesModalClose = () => {
        setSalariesModalOpen(false);
    };

    const handlePlayersStatsModalOpen = () => {
        setPlayersStatsModalOpen(true);
    };
    const handlePlayersStatsModalClose = () => {
        setPlayersStatsModalOpen(false);
    };

    const handleContractsModalOpen = () => {
        setContractsModalOpen(true);
    };
    const handleContractsModalClose = () => {
        setContractsModalOpen(false);
    };

    const handleRosterModalOpen = () => {
        setRosterModalOpen(true);
    };
    const handleRosterModalClose = () => {
        setRosterModalOpen(false);
    };

    const handleCurrentInjuriesModalOpen = () => {
        setCurrentInjuriesModalOpen(true);
    };
    const handleCurrentInjuriesModalClose = () => {
        setCurrentInjuriesModalOpen(false);
    };

    if (path != 'Miami Heat') {
        return (
          <div>
            <div className="top">
              <img src={backButton} onClick={() => handleClick('/teams')} className='backButton' alt="Back Button"/>
              <h1>Team data not found</h1>
            </div>
          </div>
        );
      }

    return (
        <div>
            <div className="top">
                <img src={backButton} onClick={() => handleClick('/home')} className='backButton'></img>
                <h1>{path}</h1>
            </div>

            <div className='container'>
                <Button variant='contained' className='item' onClick={handleScheduleModalOpen}>Schedule</Button>
                <Button variant='contained' className='item' onClick={handleSalariesModalOpen}>Salaries</Button>
            </div>

            <div className='container'>
                <Button variant='contained' className='item' onClick={handlePlayersStatsModalOpen}>Players' Stats</Button>
                <Button variant='contained' className='item' onClick={handleContractsModalOpen}>Next 5 Games</Button>
            </div>

            <div className='container'>
                <Button variant='contained' className='item' onClick={handleRosterModalOpen}>Roster</Button>
                <Button variant='contained' className='item' onClick={handleCurrentInjuriesModalOpen}>Current Injuries</Button>
            </div>

            <Modal open={isScheduleModalOpen} onClose={handleScheduleModalClose}>
                <div className="modal">
                    <h3>Schedule</h3>
                    <ul className='outsideSchedule'>
                        {teamData.schedule.map((game) => (
                            <li key={game.date}>
                                <ul className='insideSchedule'>
                                    <li>{game.seasonType}</li>
                                    <li>Away: {game.awayTeam}, Points: {game.awayPts}</li>
                                    <li>Home: {game.homeTeam}, Points: {game.homePts}</li>
                                    <li>Outcome: {game.outcome}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>

            <Modal open={isSalariesModalOpen} onClose={handleSalariesModalClose}>
                <div className="modal">
                    <h3>Salaries</h3>
                    <ul className='outsideSchedule'>
                        {teamData.salaries.map((salary) => (
                            <li key={salary.date}>
                                <ul className='insideSchedule'>
                                    <h3>{salary.name}</h3>
                                    <li>Cap1: ${salary.cap1}</li>
                                    <li>Cap2: ${salary.cap2}</li>
                                    <li>Cap3: ${salary.cap3}</li>
                                    <li>CapTotal: ${salary.capTotal}</li>
                                    <li>Agent: {salary.agent}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>

            <Modal open={isPlayersStatsModalOpen} onClose={handlePlayersStatsModalClose}>
                <div className="modal">
                    <h3>Players' Stats</h3>
                    <ul className='outsideSchedule'>
                        {teamData.boxScorePerGame.map((stats) => (
                            <li key={stats.date}>
                                <ul className='insideSchedule'>
                                    <h3>{stats.name}</h3>
                                    <li>Age: {stats.age}</li>
                                    <li>PPG: {stats.ppg}</li>
                                    <li>AST: {stats.ast}</li>
                                    <li>REB: {stats.reb}</li>
                                    <li>STL: {stats.stl}</li>
                                    <li>BLK: {stats.blk}</li>
                                    <li>TOV: {stats.tov}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>

            <Modal open={isContractsModalOpen} onClose={handleContractsModalClose}>
                <div className="modal">
                    <h3>Next 5 Games</h3>
                    <ul className='outsideSchedule'>
                        {teamData.next5.map((game) => (
                            <li>
                                <ul className='insideSchedule'>
                                    <li>{game.seasonType}</li>
                                    <li>Away: {game.awayTeam}</li>
                                    <li>Home: {game.homeTeam}</li>
                                    <li>Date: {game.date}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>

            <Modal open={isRosterModalOpen} onClose={handleRosterModalClose}>
                <div className="modal">
                    <h3>Roster</h3>
                    <ul className='outsideSchedule'>
                        {teamData.depthChart.map((chart) => (
                            <li key={chart.date}>
                                <ul className='insideRoster'>
                                    <h3>Unit: {chart.unit}</h3>
                                    <li><img src={chart.players[0]?.photoUrl}></img> {chart.players[0]?.position}: {chart.players[0]?.name}</li>
                                    <li><img src={chart.players[1]?.photoUrl}></img> {chart.players[1]?.position}: {chart.players[1]?.name}</li>
                                    <li><img src={chart.players[2]?.photoUrl}></img> {chart.players[2]?.position}: {chart.players[2]?.name}</li>
                                    <li><img src={chart.players[3]?.photoUrl}></img> {chart.players[3]?.position}: {chart.players[3]?.name}</li>
                                    <li><img src={chart.players[4]?.photoUrl}></img> {chart.players[4]?.position}: {chart.players[4]?.name}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>

            <Modal open={isCurrentInjuriesModalOpen} onClose={handleCurrentInjuriesModalClose}>
                <div className="modal">
                    <h3>Current Injuries</h3>
                    <ul className='outsideSchedule'>
                        {teamData.curInjuries.map((injury) => (
                            <li key={injury.date}>
                                <ul className='insideSchedule'>
                                    <h3>{injury.name}</h3>
                                    <li>Desription: {injury.description}</li>
                                    <li>Update: {injury.update}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>
        </div>
    );
}

export default TeamProfile;