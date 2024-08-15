import React from "react"

function Die(props) {
    // Extract the value of the die from the props
    const dieValue = props.value;

    // Use state to manage styles
    const [styles, setStyles] = React.useState({
        backgroundColor: props.isHeld ? "#e5ccb0" : "white",
        boxShadow: props.isHeld ? "inset 0 5px #e5ccb0, inset 0 -5px #a88b6e, inset 5px 0 #d5b28f, inset -5px 0 #d5b28f" : "inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7",
    });

    // Generate pips (dots) for the die face based on the die's value
    const pips = (
        Array(dieValue)
            .fill(0)
            .map((pip, i) => <span key={i} className="pip" />)
        );

    // Function to change the die's appearance when about to select (hover over) depending on whether it is held
    function select() {
        setStyles({
            backgroundColor: props.isHeld ? "#e2c19b" : "rgb(235, 232, 232)",
            boxShadow: props.isHeld ? "inset 0 5px #e5ccb0, inset 0 -5px #a88b6e, inset 5px 0 #d5b28f, inset -5px 0 #d5b28f" : "inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7",
        });
    }

    // Function to change the die's appearance back to normal when not selecting (hover out) depending on whether it is held
    function unselect() {
        setStyles({
            backgroundColor: props.isHeld ? "#e5ccb0" : "white",
            boxShadow: props.isHeld ? "inset 0 5px #e5ccb0, inset 0 -5px #a88b6e, inset 5px 0 #d5b28f, inset -5px 0 #d5b28f" : "inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7",
        });
    }

    // Render the die component
    return (
        <div 
            className="die-face"
            style={styles}
            onClick={props.holdDice}
            onMouseEnter={select}
            onMouseLeave={unselect}
        >
            {pips}
        </div>
    );
}

export default Die;