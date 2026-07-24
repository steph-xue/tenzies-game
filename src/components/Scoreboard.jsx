import PropTypes from "prop-types";

function Scoreboard(props) {

    // Render the scoreboard component
    return (
        <div className="scoreboard">
            {
                (props.bestRolls !== 0 && props.bestRolls !== null)
                    ?
                    <div className="best-rolls">
                        <p className="gradient-text">Best Rolls: </p>
                        <p className="gradient-text">{props.bestRolls} rolls</p>
                    </div>
                    :
                    <div className="best-rolls">
                        <p className="gradient-text">Best Rolls: </p>
                        <p className="gradient-text">N/A</p>
                    </div>
            }
            {
                (props.bestTime !== 0 && props.bestTime !== null) 
                    ?
                    <div className="best-time gradient-text">
                        <p className="gradient-text">Best Time: </p>
                        <p className="gradient-text">{props.bestTime} seconds</p>
                    </div>
                    :
                    <div className="best-time">
                        <p className="gradient-text">Best Time: </p>
                        <p className="gradient-text">N/A</p>
                    </div> 
            }
        </div>
    );
}

Scoreboard.propTypes = {
    bestRolls: PropTypes.number.isRequired,
    bestTime: PropTypes.number.isRequired,
};

export default Scoreboard;
