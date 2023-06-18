import './Teams.css';
import Button from '@mui/material/Button';
import React from "react";
import backButton from '../../assets/backButton.png'
import { useNavigate } from 'react-router-dom';

const Teams = () => {
    const divisions = {
        Atlantic: ['Boston Celtics', 'Brooklyn Nets', 'New York Knicks', 'Philadelphia 76ers', 'Toronto Raptors'],
        Central: ['Chicago Bulls', 'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 'Milwaukee Bucks'],
        Southeast: ['Atlanta Hawks', 'Charlotte Hornets', 'Miami Heat', 'Orlando Magic', 'Washington Wizards'],
        Northwest: ['Denver Nuggets', 'Minnesota Timberwolves', 'Oklahoma City Thunder', 'Portland Trail Blazers', 'Utah Jazz'],
        Pacific: ['Golden State Warriors', 'LA Clippers', 'Los Angeles Lakers', 'Phoenix Suns', 'Sacramento Kings'],
        Southwest: ['Dallas Mavericks', 'Houston Rockets', 'Memphis Grizzlies', 'New Orleans Pelicans', 'San Antonio Spurs'],
    };

    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div>
            
            <div className="top">
                <img src={backButton} onClick={() => handleClick('/home')} className='backButton'></img>
                <h1>Teams Page</h1>
            </div>

            {Object.entries(divisions).map(([division, teams]) => (
                <div className='division' key={division}>
                    <h3>{division}</h3>
                    <div className="teamsRow">
                        {teams.map((team) => (
                            <Button key={team} className="teamCard" variant="contained" onClick={() => handleClick('/teams')}>
                                <h4>{team}</h4>
                            </Button>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Teams;