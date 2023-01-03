import "../css/Game.css";
import GameDriver from "../components/GameDriver";


import { GameProvider } from "../GameContext";

export default function Game() {
    return (
        <>
            <GameProvider>
                <GameDriver />
            </GameProvider>
        </>
    );
}

/* 
Info container is a component that will display match details.
Composition container is a component that will display the 5 agents in the
    composition for the map.
Choice container is a component that will display four options for the user to
    choose from. One of which will be the right answer.

In Game.jsx, we will:
    1. Retrieve a random map from a random match. Basically retrieve all the information we
    need to display in the app.
    2. Pass the player information into composition container. This will be 5 objects, each
    containing all the player stats including picked agent from that map. Then we can display
    that information in composition container.
    3. Pass the map information into choice container. One will be designated as the correct 
    answer. The other three are generated (randomly by default).
    4. Keep track of the current score and strikes (three strikes and you lose).
*/
