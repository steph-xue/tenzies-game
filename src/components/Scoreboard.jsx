import React from "react";

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            {props.bestRolls !== 0 && <h2 className="best-rolls">Best Rolls: {props.bestRolls} rolls</h2>}
            {props.bestTime !== 0 && <h2 className="best-time">Best Time: {Math.round(props.bestTime / 1000)} seconds</h2>}
        </div>
    );
}

export default Scoreboard;
