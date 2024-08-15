import React from "react"
import Die from "./components/Die.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {

    // Create a state variable to store the 10 dice objects (initially all randomly generated)
    const [dice, setDice] = React.useState(allNewDice());

    // Create a state variable to store whether the player has started the game
    const [gameStarted, setGameStarted] = React.useState(false);

    // Create a state variable to store whether the player has achieved a tenzies win
    const [tenzies, setTenzies] = React.useState(false);

    // Create a state variable to store the number of rolls
    const [rolls, setRolls] = React.useState(0);

    // Create a state variable to store the best score (fastest time and associated number of rolls)
    const [bestScore, setbestScore] = React.useState(() => localStorage.getItem("bestScore") || {});
    
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

    React.useEffect(() => {
      if (tenzies) {
        let currentScore = {
          rolls: rolls,
          time: new Date()
        }
      }
      
    }, [tenzies])

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
    
    // Function to hold a die
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die;
        }));
    }

    // Function to roll the dice (after starting the game and before achieving a tenzies win)
    function rollDice() {
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
              die :
              generateNewDie();
      }));
      setRolls(prevRolls => prevRolls + 1);
    }

    // Function to start the game
    function startGame() {
      setGameStarted(true);
    }

    // Function to start a new game
    function newGame() {
      setTenzies(false);
      setGameStarted(false);
      setDice(allNewDice());
      setRolls(0);
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
            <div className="roll-number">
              Number of rolls: {rolls}
            </div>
            
            {tenzies && <h2 className="win">You won!</h2>}
            {tenzies && <h2 className="roll-win">It took you {rolls} rolls!</h2>}

            {
              gameStarted && !tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={rollDice}
                >
                    Roll
                </button>
            }
            {
              !gameStarted && !tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={startGame}
                >
                    Start Game
                </button>
            }
            {
              gameStarted && tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={newGame}
                >
                    New Game
                </button>
            }
        </main>
    );
}

export default App;