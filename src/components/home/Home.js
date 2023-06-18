import './Home.css'
import Button from '@mui/material/Button';
import mavsLogo from '../../assets/dallasMavsLogo.png'
import playerLogo from '../../assets/playerLogo.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div className='home'>

            <h1>Roster Building</h1>

            <div className='teamsPlayersContainer'>
                <Button variant="contained" onClick={() => handleClick('/teams')}>
                    <div className='imgTxtContainer'>
                        <img className='icon' src={mavsLogo}></img>
                        <div className='txt'>Teams</div>
                    </div>
                </Button>
                <Button variant="contained" onClick={() => handleClick('/players')}>
                    <div className='imgTxtContainer'>
                        <span className='dot'>
                            <img className='player' src={playerLogo}></img>
                        </span>
                        <div className='txt'>Players</div>
                    </div>
                </Button>
            </div>
            
        </div>
    );
}

export default Home;