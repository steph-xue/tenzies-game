import React from "react"

function Die(props) {

    // Change the background color of the die if it is held
    const styles = {
        backgroundColor: props.isHeld ? "#d3b08d" : "white"
    };

    // Render the die face based on the value
    var dieFace;
    if (props.value === 1) {
        dieFace = (
            <div className="first-face">
                <span className="pip"></span>
            </div>
        );
    } else if (props.value === 2) {
        dieFace = (
            <div className="second-face">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        );
    } else if (props.value === 3) {
        dieFace = (
            <div className="third-face">
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        );
    } else if (props.value === 4) {
        dieFace = (
            <div className="fourth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        );
    } else if (props.value === 5) {
        dieFace = (
            <div className="fifth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        );
    } else {
        dieFace = (
            <div className="sixth-face">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div>
        );
    }

    // Render the die component
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {dieFace}
        </div>
    );
}

export default Die;