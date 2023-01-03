import "../css/InfoSection.css";
import ScoreCard from "./ScoreCard.jsx";

export default function InfoContainer() {
    return (
        <>
                <div className="info-container">
                    <div className="header">
                        <span>Valorantuition</span>
                    </div>
                    <div className="details-container">
                        <ScoreCard />
                    </div>
                </div>
        </>
    )
}