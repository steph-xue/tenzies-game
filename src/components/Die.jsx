import React from "react"

function Die(props) {
    // Extract the value of the die from the props
    const dieValue = props.value;

    // Change the background color of the die if it is held
    const styles = {
        backgroundColor: props.isHeld ? "#d3b08d" : "white"
    };

    // Define the Pip component
    const Pip = () => <span className="pip" />;

    // Define the Face component
    const Face = ({ children }) => (
        <div 
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            {children}
        </div>
    );

    // Generate the pips for the die face
    const pips = Number.isInteger(dieValue)
        ? Array(dieValue)
            .fill(0)
            .map((_, i) => <Pip key={i} />)
        : null;

    // Render the die component
    return <Face>{pips}</Face>;
}

export default Die;