import { useContext } from "react";
import InfoContainer from "../components/InfoContainer";
import AgentContainer from "../components/AgentContainer";
import MapChoiceContainer from "../components/MapChoiceContainer";
import "../css/Game.css";
import GameContext from "../GameContext";

export default function GameDriver() {
    const { team, error } = useContext(GameContext);

    return (
        <>
            {error ? (
                <div>Something went wrong...</div>
            ) : (
                <>
                    <div className="app-container">
                        <InfoContainer />
                        <AgentContainer team={team} />
                        <MapChoiceContainer />
                    </div>
                </>
            )}
        </>
    );
}