import React from "react";

function Scoreboard(props) {

    // Render the scoreboard component
    return (
        <div className="scoreboard">
            {
                (props.bestRolls !== 0 && props.bestRoll !== null) 
                    ?
                    <div className="best-rolls">
                        <p>Best Rolls: </p>
                        <p>{props.bestRolls} rolls</p>
                    </div>
                    :
                    <div className="best-rolls">
                        <p>Best Rolls: </p>
                        <p>N/A</p>
                    </div>
            }
            {
                (props.bestTime !== 0 && props.bestTime !== null) 
                    ?
                    <div className="best-time">
                        <p>Best Time: </p>
                        <p>{props.bestTime} seconds</p>
                    </div>
                    :
                    <div className="best-time">
                        <p>Best Time: </p>
                        <p>N/A</p>
                    </div> 
            }
        </div>
    );
}

export default Scoreboard;
