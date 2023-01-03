import "../css/AgentSection.css";
import { useState, useEffect } from "react";

export default function AgentPortrait( { player } ) {
    const [isHovered, setIsHovered] = useState(false);    

    return (
        <>
            <div
                className={
                    "agent-card"
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="agent-card-child"
                    style={{
                        backgroundImage: `url(../assets/agents/${player.player_agent}.webp)`,
                    }}
                >
                    <div className="overlay">
                        <div className="player-details" style={{ display: isHovered ? 'block' : 'none', textAlign: "center" }}>
                            
                                <ul>
                                    {/* <li>{player.player_name}</li> */}
                                    <li>{player.player_agent.toLowerCase()}</li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}