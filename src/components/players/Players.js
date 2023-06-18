import './Players.css';
import React from "react";
import backButton from '../../assets/backButton.png'
import { useNavigate } from 'react-router-dom';

const Players = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div>
            
            <div className="top">
                <img src={backButton} onClick={() => handleClick('/home')} className='backButton'></img>
                <h1>Players Page</h1>
            </div>

        </div>
    )
}

export default Players;