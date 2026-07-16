# Tenzies Game

A tenzies game web application where the goal is to roll ten dice as fast as possible until they all show the same number. Players can compete against others or try to beat their own best time and roll count, tracked on a personal scoreboard, complete with sound effects and animation for a polished, game like feel.

**[View Live Demo](https://main--tenzies-game-sx.netlify.app/)**

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

<br>

## Overview

This project is based on a fast-paced game of tenzies where players hold selected dice between rolls and work toward matching all ten as quickly as possible. It is built with React, JavaScript, HTML, and CSS, and bundled with Vite. The game tracks elapsed time, total rolls, and personal bests, with scores saved in the browser’s local storage so they remain available between visits. React Confetti provides a celebration animation when a round is completed, while nanoid generates a unique identifier for each die. Sound effects, interactive dice states, and a live scoreboard provide additional feedback throughout gameplay.


<br>

## Features

### Starting the Game
Instructions explaining the goal of the game are shown above the "Start Game" button. Clicking it begins a new round with ten randomized dice, a reset roll counter, and a timer that starts counting up immediately.

<p align="center"><img src="./images/start-game.png?raw=true" alt="Start Game" width="700"></p>

<br>

### Rolling and Holding Dice
Clicking a die holds it at its current value, shown with a different color, and clicking "Roll" re-rolls every die that has not been held while playing a rolling dice sound effect. This lets the player lock in matching numbers as they go instead of re-rolling everything each time.

<p align="center"><img src="./images/hold-dice.png?raw=true" alt="Hold Dice" width="700"></p>

<br>

### Timer, Rolls, and Scoreboard
While a game is in progress, the number of rolls made and the current time are both displayed and update live, with the timer formatted as minutes and seconds. A scoreboard shows the player's personal best roll count and best time from previous games, or "N/A" if no games have been completed yet.

<p align="center"><img src="./images/game.png?raw=true" alt="Game in Progress" width="700"></p>

<br>

### Winning the Game
Once every die is held and all show the same number, the game declares a win, displaying the final roll count and time alongside a falling confetti animation and a win sound effect. If the result beats a previous personal best, the scoreboard updates automatically to reflect the new record.

<p align="center"><img src="./images/tenzies-win.png?raw=true" alt="Winning the Game" width="700"></p>

<br>

## Tech Stack
 
| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Libraries | React Confetti (displays a confetti win animation),<br>Nano ID (generates a unique id for each die) |
| Storage | Local storage |
| Build Tool | Vite |

<br>

## How It Works

The dice are held in a single state array, with each die tracking its own value, a unique id from Nano ID, and whether it is currently held. Rolling the dice generates a new random value for every die that is not held, while each die's face renders its value as a row of pip elements rather than a digit. A separate effect checks after every change to the dice array whether all of them are held and share the same value, and if so, marks the game as won. A second effect manages the timer, using `setInterval` to increment the elapsed time every ten milliseconds while a game is running, and clearing that interval whenever the game stops or the component unmounts, so no timers are left running in the background. When a win is detected, React Confetti renders the falling animation, a win sound plays through an HTML audio element, and the current roll count and time are compared against the previous best stored in local storage, updating it if the new result is better. The gradient text on the title animates continuously, while the scoreboard's gradient text stays still until hovered, at which point it animates its background size to create a shifting, intensifying effect that reverses smoothly when the cursor moves away. Both use the same CSS background clip technique to achieve the gradient effect. Hover effects on the dice, buttons, and win message are handled through CSS transitions.

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/tenzies-game.git
cd tenzies-game
```

**2. Install the dependencies**

This installs React and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- A difficulty setting to change the number of dice or target condition
- Persistent score history instead of just the single best time and roll count
- A multiplayer mode for competing against another player in the same session
