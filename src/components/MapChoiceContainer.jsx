import { useContext } from "react";
import MapChoice from "./MapChoice";
import "../css/MapsSection.css";
import GameContext from "../GameContext";

export default function ChoiceContainer() {
    const { mapObj, loading, mapChoices } = useContext(GameContext);

    return (
        <>
            {!loading ? (
                <div className="choice-container">
                    {mapChoices.map((m) => (
                        <MapChoice
                            key={self.crypto.randomUUID()}
                            mapName={m}
                            isCorrMap={mapObj.map_name == m}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <h3>Loading map choices...</h3>
                </div>
            )}
        </>
    );
}
