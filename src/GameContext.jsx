import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GameContext = createContext();

export function GameProvider({ children }) {
    const [series, setSeries] = useState({});
    const [event, setEvent] = useState({});
    const [match, setMatch] = useState({});
    const [mapObj, setMapObj] = useState({});
    const [team, setTeam] = useState([]);
    const [wrongMaps, setWrongMaps] = useState([]);

    const [mapChoices, setMapChoices] = useState([]);

    const [score, setScore] = useState(0);
    const [strikes, setStrikes] = useState(0);
    
    const [getNewMatch, setGetNewMatch] = useState(true);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        const controller = new AbortController();
        getMatch(controller);
        return () => {
            controller.abort();
        };
    }, [getNewMatch]);

    useEffect(() => {
        if (strikes == 3) {
            setScore(0);
            setStrikes(0);
        }
    }, [strikes]);

    async function getMatch(controller) {
        setError(false);
        setLoading(true);
        try {
            const result = await axios.get("http://localhost:8080/main", {
                signal: controller.signal,
            });
            setSeries(result.data.series);
            setEvent(result.data.event);
            setMatch(result.data.match);
            setMapObj(result.data.mapObj);
            setTeam(result.data.team);
            setWrongMaps(result.data.wrongMaps);
            setMapChoices(shuffleArray([result.data.mapObj.map_name, ...result.data.wrongMaps]));
            console.log("Payload from server:", result.data);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request cancelled;", error.message);
                return;
            }
            setError(true);
        }
        setLoading(false);
    }

    function handleChosenMap(map) {
        console.log("clicked: " + map);
        if (map === mapObj.map_name) {
            console.log("win");
            setScore(score + 1);
        } else {
            console.log("lose");
            setStrikes(strikes + 1);
        }
        setGetNewMatch(!getNewMatch);
    }

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }

    return (
        <GameContext.Provider
            value={{
                series,
                event,
                match,
                mapObj,
                team,
                wrongMaps,
                mapChoices,
                setMatch,
                score,
                setScore,
                strikes,
                setStrikes,
                getNewMatch,
                setGetNewMatch,
                error,
                setError,
                loading,
                setLoading,
                handleChosenMap
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export default GameContext;


