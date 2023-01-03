import { useState, useContext } from "react";
import "../css/MapsSection.css";
import PopUp from "./PopUp";
import GameContext from "../GameContext";

export default function MapChoice( { mapName, isCorrMap } ) {
    const { handleChosenMap, loading } = useContext(GameContext);

    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
        handleChosenMap(mapName);
    }

    return (
        <div className="map-choice">
            {!loading ? (
                <>
                    <div
                        className="map-choice-child"
                        style={{
                            backgroundImage: `url(../assets/maps/${mapName}.webp)`,
                        }}
                        onClick={handleClick}
                    >
                        {mapName.toLowerCase()}
                    </div>
                    {showModal ? (
                        <PopUp show={showModal} onHide={handleClose} isCorrMap={isCorrMap} pickedMap={mapName} />
                    ) : null

                    }
                </>
            ) : (
                <h3>Loading map choice...</h3>
            )}
        </div>
    );
}