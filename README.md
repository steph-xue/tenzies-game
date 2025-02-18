# Tenzies Game

The tenzies game project is a dynamic web application built using the front-end JavaScript library, React. The web application's data saves directly on the computer's local database. The objective of the game is to roll the dice as fast as possible until all dice are the same. The player who gets all dice on the same number and yells "Tenzi!" the fastest is the winner. You can play against other people or play against yourself and try to beat your best time. The user can click each die to freeze it at its current value between rolls. The user can then click on the roll button to re-roll the unheld dice. 
<br>
- Implemented dynamic state management to handle dice rolls, dice hold states, and high score updates, leveraging React.js hooks including useState and useEffect to synchronize game logic and UI rendering
- Implemented a game timer using React.js hooks like useEffect and setInterval to increment the timer by 10ms each interval cycle, ensuring real-time responsiveness with cleanup logic to reset the interval and ensure proper unmounting

&nbsp;

Can access on: https://main--tenzies-game-sx.netlify.app/
<br><br>

## Here are the features of the game:
**Game Mechanics**
  - The objective of the game is to roll the dice as fast as possible until all dice are the same to achieve a tenzies win and the player who gets all dice on the same number and yells "Tenzi!" the fastest is the winner
  - You can play against other people or play against yourself and try to beat your own best time
  - When a new game is started, a random set of 10 dice will be generated
  - Each die can be clicked on to hold the die it at its current value between rolls (highlighted in a darker color)
  - The player can then click on the roll button to re-roll the unheld dice
&nbsp;

**Timer**
  - When a new game is started, the timer will start and record the time until a tenzies win is achieved
  - The timer is displayed dynamically on the game and is updated every 10 milliseconds
&nbsp;

**Number of Rolls**
  - When a new game is started, the game will keep track of the number of rolls made until a tenzies win is achieved
  - The number of current rolls is displayed dynamically on the game and is updated with each roll
&nbsp;

**Scoreboard**
  - The scoreboard will show the player's previous best scores with the lowest number of rolls to achieve a tenzies win and quickest time to achieve a tenzies win
  - All scores are stored in the player's computer's local storage

<br><br>

![Start Game](./images/start-game.png?raw=true "Start Game")
The player can start a new game by click on the "start game" button.
<br><br>

![Game](./images/game.png?raw=true "Game")
The goal of the game is to roll the dice as fast as possible until all dice are the same to achieve a tenzies win. The number of rolls, the timer, and the scoreboard with your personal best rolls and best time are displayed.
<br><br>

![Hold Dice](./images/hold-dice.png?raw=true "Hold Dice")
Each die can be clicked on to hold it at its current value between rolls. The player can click on the roll button to re-roll the unheld dice.
<br><br>

**Tenzies Win**
  - When the player achieves a tenzies win (all dice are of the same number), the game will display that a win has been achieved and will show the score of the current game, including the number of rolls and time it took to achieve the win
  - Confetti art animation will be displayed and a winning sound effect will be played
<br><br>

![Tenzies Win](./images/tenzies-win.png?raw=true "Tenzies Win")
When a tenzies win is achieved, the current score is displayed with winning animation and audio effects.
<br><br>

**New Recently Added Features**
  - Added pips (dots) to all of the face die instead of using numbers
  - Added tracking of the number of rolls
  - Added a timer function to track the time it takes to win
  - Added a scoreboard component to save and track previous best scores (lowest number of rolls and fastest times to achieve a tenzies win)
    - Added abillity to save best scores to local storage
  - Added animation when hovering over and clicking on the buttons to make them more realistic with box shadows and scaling
  - Added animation when hovering over the dice to show which one will be selected when clicked on
  - Added gradient animation to the tenzies title
  - Added gradient animation to the scoreboard scores and changing gradient animation when hovering over the scores
  - Added rolling dice audio effect when the roll dice button is clicked on
  - Added winning audio effect when achieving a tenzies win


## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## Dependencies 
  - React-confetti
    - Displays rainbow confetti that falls from the top of the page
  - Nano ID
    - A tiny, secure, URL-friendly, unique string ID generator for JavaScript

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
    - Check the version using the command
        - ```node --version```
- Install the latest version of npm (JavaScript package manager)
    - Check the version using the command
        - ```npm --version```
- Clone the repository from github by typing in the command line
    - ```git clone <repo-url>```
- Install any dependencies by using the command
    - ```npm install```
- The web application can be run on your local server by typing the command
    - ```npm run dev```
