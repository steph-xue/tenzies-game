import React from "react"
import Die from "./components/Die.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {

    // Create a state variable to store the 10 dice objects (initially all randomly generated)
    const [dice, setDice] = React.useState(allNewDice());

    // Create a state variable to store whether the player has achieved a tenzies win
    const [tenzies, setTenzies] = React.useState(false);
    
    // Check if the player has achieved a tenzies win
    // Checks if all dice are held and have the same value
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
        }
    }, [dice])

    // Function to generate a new die object
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        };
    }

    // Function to generate an array of 10 new die objects
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }
    
    // Function to roll the dice or reset the game if won
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie();
            }));
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }
    }
    
    // Function to hold a die
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die;
        }));
    }
    
    // Map the dice objects to an array of dice components
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ));
    
    // Render the app
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>

            {tenzies && <h2 className="win">You won!</h2>}
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    );
}

export default App;