import React from "react"

function Die(props) {
    // Extract the value of the die from the props
    const dieValue = props.value;

    // Change the background color and box shadow of the die if it is held
    const styles = {
        backgroundColor: props.isHeld ? "#d3b08d" : "white",
        boxShadow: props.isHeld ? "inset 0 5px #d3b08d, inset 0 -5px #a88b6e, inset 5px 0 #c09f7f, inset -5px 0 #c09f7f" : "inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7"
    };
    
    /*
    "inset 0 5px #d3b08d, inset 0 -5px #a88b6e, inset 5px 0 #c09f7, inset -5px 0 #c09f7f"
    */

    // Generate pips (dots) for the die face based on the die's value
    const pips = (
        Array(dieValue)
            .fill(0)
            .map((pip, i) => <span key={i} className="pip" />)
        );

    // Render the die component
    return (
        <div 
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            {pips}
        </div>
    );
}

export default Die;