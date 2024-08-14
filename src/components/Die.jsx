import React from "react"

function Die(props) {

    // Change the background color of the die if it is held
    const styles = {
        backgroundColor: props.isHeld ? "#d3b08d" : "white"
    };

    // Render the die component
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    );
}

export default Die;