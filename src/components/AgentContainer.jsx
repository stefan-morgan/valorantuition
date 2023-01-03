import AgentPortrait from "./AgentPortrait";
import "../css/AgentSection.css"
import { useContext } from "react";
import GameContext from "../GameContext";

export default function AgentContainer( {  } ) {
    const { loading, team } = useContext(GameContext);
    return (
        <div className="agent-container">
                {!loading ? (
                    team.map((player) => (
                        <AgentPortrait key={player.player_performance_id} player={player} />
                    ))
                ) : (
                    <h3>Loading team composition...</h3>
                )}
        </div>
    );
}