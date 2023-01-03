import { Link } from 'react-router-dom';
import "../css/Landing.css";

export default function Landing() {
    return (
        <div className='landing-container'>
            <div className='landing'>
                <h1>Valorantuition</h1>
                <h4>Can you guess the map based on team composition?</h4>
                <p>
                    This is a game where you can test your knowledge of the maps in
                    Valorant. You will be given a team composition, pulled from an
                    actual professional Valorant match, along with some match
                    details. The goal is to guess which map that composition was
                    played on, using your knowledge of agent, map, and pro metas.
                </p>
                <div>
                    <Link to={"game"}>
                        <button>Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}