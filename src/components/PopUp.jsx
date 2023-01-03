import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import GameContext from "../GameContext";
import "../css/PopUp.css";

export default function PopUp({ show, onHide, isCorrMap, pickedMap }) {
    const { match, team, event, mapObj, series, score, strikes } =
        useContext(GameContext);

    const [modalState, setModalState] = useState(isCorrMap ? "correct" : strikes===2 ? "gameOver" : "incorrect");

    let title, subtitle;
    let tempScore = score;
    let tempStrikes = strikes;

    switch (modalState) {
        case "correct":
            tempScore++;
            title = "Correct!";
            subtitle = `You got it! This composition was indeed played on ${mapObj.map_name}. It was chosen by ${team[0].player_team_name}. `;
            break;
        case "incorrect":
            tempStrikes++;
            title = "Nice try, but...";
            subtitle = `You picked ${pickedMap}, but this composition was played on ${mapObj.map_name}. It was chosen by ${team[0].player_team_name}. `;
            break;
        case "gameOver":
            tempStrikes++;
            title = "Game over.";
            subtitle = `That was your last try! You picked ${pickedMap}, but this composition was played on ${mapObj.map_name}. But hey, you managed to get ${score} right before losing! `;
        break;
        default:
            title = "Error";
            subtitle = "Something went wrong.";
    }

    const modalDialogue = {
        score: `Your score: ${score}`,
        lives: `You have ${3 - strikes - 1} tries remaining.`,
        details: {
            date: `${match.datetime}`,
            patch: `${match.patch}`,
            event: `${match.best_of}, ${match.stage}, ${event.event_title}`,
            series: `Part of ${series.series_title}`,
            scoreline: `${match.team1_name} ${match.team1_score} - ${match.team2_score} ${match.team2_name}`,
        },
    };

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="modal-header">
                    <Modal.Title>
                        <h3>{title}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <p>{subtitle}</p>
                    <span>
                        More match details:
                        <ul>
                            <li>{modalDialogue.details.scoreline}</li>
                            <li>{modalDialogue.details.event}</li>
                            <li>{modalDialogue.details.series}</li>
                            <li>{modalDialogue.details.date}</li>
                            <li>{modalDialogue.details.patch}</li>
                            <li>
                                <a
                                    href={"https://vlr.gg/" + match.match_id}
                                    target="_blank"
                                >
                                    Link to match on vlr.gg
                                </a>
                            </li>
                        </ul>
                    </span>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <p>
                        {modalState === "gameOver" ? 
                        "Final score: " + score
                        : 
                        `Your score is ${tempScore} and you have ${3 - tempStrikes}
                        ${tempStrikes == 2 ? "try" : "tries"} remaining.`
                        }
                    </p>
                    <button className="modal-button" onClick={onHide}>
                        {modalState === "gameOver"
                            ? "Play again"
                            : "Next match"}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
