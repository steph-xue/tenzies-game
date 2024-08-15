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

    // Create a state variable to store the start time of the current game
    const [startTime, setStartTime] = React.useState(0);

    // Create a state variable to store the end time of the current game
    const [endTime, setEndTime] = React.useState(0);

    // Create a state variable to store the current time
    const [time, setTime] = React.useState(0);

    // Create a state variable to store the current score (time and number of rolls to finish game after achieving a tenzies win)
    const [currentScore, setCurrentScore] = React.useState({});

    // Create a state variable to store the best score (fastest time and associated number of rolls)
    const [bestScore, setbestScore] = React.useState(() => JSON.parse(localStorage.getItem("bestScore")) || null);

    // Create a state variable to store the interval ID for the timer
    const [intervalId, setIntervalId] = React.useState(null);
    
    // Check if the player has achieved a tenzies win
    // Checks if all dice are held and have the same value
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
            setEndTime((new Date().getTime())/1000);
            clearInterval(intervalId);
        }
    }, [dice])

    // Check if the player has achieved a new best score (fastest time) to save to local storage
    React.useEffect(() => {
        if (tenzies) {
            setCurrentScore({
                rolls: rolls,
                time: (endTime - startTime) / 1000
            });

            if (!bestScore || currentScore.time < bestScore.time) {
              setBestScore(currentScore);
              localStorage.setItem("bestScore", JSON.stringify(currentScore));
            }
        }
    }, [tenzies]);

    // Clear the interval when the component unmounts
    React.useEffect(() => {
      return () => clearInterval(intervalId);
    }, [intervalId]);

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

    // Function to start the game or start a new game
    function startGame() {
      setTenzies(false);
      setGameStarted(true);
      setDice(allNewDice());
      setRolls(0);
      setCurrentScore({});
      setStartTime((new Date().getTime())/1000);
      setTime(0);

      if (intervalId) {
        clearInterval(intervalId);
      }

      // Updates the current time every second
      const newIntervalId = setInterval(() => {
          setTime((new Date().getTime() - startTime)/1000);
      }, 1000);
      setIntervalId(newIntervalId);
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
            <p className="instructions-1">
              The objective of the game is to roll the dice as fast as possible until all dice are the same.
              The player who gets all dice on the same number and yells "Tenzi!" the fastest is the winner. 
              You can play against others or try to beat your highest score!
            </p>
            <div className="instructions-2">
              <p>» Click each die to freeze it at its current value between rolls.</p>
              <p>» Click on the roll button to re-roll the unheld dice.</p>
            </div>

            {
              gameStarted &&
              <div>
                  {bestScore !== null && <h2 className="best-score">Best Score: {bestScore.time} seconds with {bestScore.rolls} rolls</h2>}
                  <div className="dice-container">
                    {diceElements}
                  </div>
                  <div className="roll-number">
                    Number of rolls: {rolls}
                  </div>
              </div>   
            }

            {
              gameStarted && !tenzies &&
              <div className="current-time">
                  <p>Current time in seconds: </p>
                  <p>{Math.round(time)}</p>
              </div>
            }
            {
              gameStarted && tenzies &&
              <div className="current-time">
                  <p>Current time in seconds: </p>
                  <p>{Math.round(currentScore.time)}</p>
              </div>
            }

            {
              tenzies &&
              <div className="win-container">
                  <h2 className="win">You won!</h2>
                  <h2 className="roll-win">
                    It took you {currentScore.time} seconds and {currentScore.rolls} rolls!
                  </h2>
              </div>
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
              gameStarted && !tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={rollDice}
                >
                    Roll
                </button>
            }
            {
              gameStarted && tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={startGame}
                >
                    New Game
                </button>
            }
        </main>
    );
}

export default App;