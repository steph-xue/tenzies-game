import React from "react"
import Die from "./components/Die.jsx"
import Scoreboard from "./components/Scoreboard.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {

    // Create a state variable to store the 10 dice objects (initially all randomly generated)
    const [dice, setDice] = React.useState(allNewDice());

    // Create a state variable to store the number of rolls
    const [rolls, setRolls] = React.useState(0);

    // Create a state variable to store whether the player has achieved a tenzies win
    const [tenzies, setTenzies] = React.useState(false);

    // Create a state variable to store whether the player has started the game
    const [start, setStart] = React.useState(false);

    // Create a state variable to store the current time (for the timer)
    const [time, setTime] = React.useState(0);

    // Create a state variable to store the score (time and number of rolls to finish game after achieving a tenzies win)
    const [score, setScore] = React.useState({});

    // Create a state variable to store the best rolls (lowest number of rolls to achieve a tenzies win)
    const [bestRolls, setBestRolls] = React.useState(JSON.parse(localStorage.getItem("bestRolls")) || 0);
  
    // Create a state variable to store the best time(seconds) (fastest time to achieve a tenzies win)
    const [bestTime, setBestTime] = React.useState(JSON.parse(localStorage.getItem("bestTime")) || 0);
    
    // Check if the player has achieved a tenzies win (all dice are held and have the same value)
    // If win is achieved, set the tenzies state to true, stops the game, and saves the score
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
            setStartGame(false);
            setRecords();
        }
    }, [dice])

    // Set timer to update the time every 10 milliseconds
    React.useEffect(() => {
      let interval = null;
      if (start) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [start]);

    // Function to set the current game's score and update the best rolls and time in local storage
    function setRecords() {

      const timeAdjusted = Math.floor(time / 10);

      setScore({
        scoreRolls: rolls,
        scoreTime: timeAdjusted
      });

      if (!bestRolls || score.scoreRolls < bestRolls) {
        setBestRolls(score.scoreRolls);
        localStorage.setItem("bestRolls", JSON.stringify(score.scoreRolls));
      }

      if (!bestTime || score.scoreTime < bestTime) {
        setBestTime(score.scoreTime);
        localStorage.setItem("bestTime", JSON.stringify(score.scoreTime));
      }
    }

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
    function startNewGame() {
      setTenzies(false);
      setStart(true);
      setDice(allNewDice());
      setRolls(0);
      setTime(0);
      setScore({});
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
            {/* title and instructions */}
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

            {/* Scoreboard, dice, and current number of rolls */}
            {
              start &&
              <div>
                  <Scoreboard 
                      bestRolls={bestRolls} 
                      bestTime={bestTime}
                  />
                  <div className="dice-container">
                    {diceElements}
                  </div>
                  <div className="roll-number">
                    Number of rolls: {rolls}
                  </div>
              </div>   
            }

            {/* Timer */}
            {
              start && !tenzies &&
              <div className="current-time">
                  <p>
                    {/* divide the time by 10 because that is the value of a millisecond
                    then modulo 1000. Now we will append this to a zero so that when the time starts
                    there will be a zero already instead of just one digit. 
                    Finally we will slice and pass in a parameter of -2 so that when the 
                    number becomes two digits the zero will be removed */}
                    Timer: {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    {("0" + ((time / 10) % 1000)).slice(-2)}
                  </p>
                  <p>{Math.round(time)}</p>
              </div>
            }

            
            {/* Ending time and win message */}
            {
              tenzies &&
              <div>
                  <div className="current-time">
                      <p>Current time in seconds: </p>
                      <p>{Math.round(currentScore.time)}</p>
                  </div>
                  <div className="win-container">
                      <h2 className="win">You won!</h2>
                      <h2 className="roll-win">
                        It took you {currentScore.time} seconds and {currentScore.rolls} rolls!
                      </h2>
                  </div>
              </div>
            }

            {/* Start game button */}
            {
              !start && !tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={startNewGame}
                >
                    Start Game
                </button>
            }

            {/* Roll button */}
            {
              start && !tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={rollDice}
                >
                    Roll
                </button>
            }

            {/* New game button */}
            {
              tenzies &&
                <button 
                    className="tenzies-button" 
                    onClick={startNewGame}
                >
                    New Game
                </button>
            }
        </main>
    );
}

export default App;