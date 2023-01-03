import { useContext, useState } from "react";
import GameContext from "../GameContext";

export default function ScoreCard() {
    const { score, strikes, event, match } = useContext(GameContext);
    const [width, setWidth] = useState(30);
    const [height, setHeight] = useState(60);
    const [showScroll, setShowScroll] = useState("hidden");
    const [visibility, setVisibility] = useState("hidden");
    
    const [className, setClassName] = useState("collapsed");

    const handleClick = () => {
        setWidth(width === 30 ? 80 : 30);
        setHeight(height === 60 ? 100 : 60);
        setShowScroll(showScroll === "hidden" ? "scroll" : "hidden");
        setVisibility(visibility === "hidden" ? "visible" : "hidden");

        setClassName(className === "collapsed" ? "expanded" : "collapsed");
    }

    return (
        <div className="score-card">
            <div className="score-card-element current-score">
                <span>your score:</span>
                <span className="score">{score}</span>
            </div>
            <div className="score-card-element lives-remaining">
                <span>tries left:</span>
                <span className="lives">{3-strikes}</span>
            </div>
            <div 
            className="score-card-element match-details" 
            style={{ 
                width: `${width}%`, 
                height: `${height}%`, 
                
                }} 
            onClick={handleClick}>
                <span className="click-to-expand">match details (click to expand):</span>
                <ul className={className} style={{ overflow: `${showScroll}`, visibility: `${visibility}` }}>
                    <li>{event.event_title}, {match.stage}</li>
                    <li>{match.datetime}</li>
                    <li>{match.patch}</li>
                </ul>  
            </div>
        </div>
    );
}