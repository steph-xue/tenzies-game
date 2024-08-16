# Tenzies Game

The tenzies game project is a dynamic web application built using the front-end JavaScript library, React. The web application's data saves directly on the computer's local database. The objective of the game is to roll the dice as fast as possible until all dice are the same. The player who gets all dice on the same number and yells "Tenzi!" the fastest is the winner. You can play against other people or play against yourself and try to beat your best time. The user can click each die to freeze it at its current value between rolls. The user can then click on the roll button to re-roll the unheld dice. 
&nbsp;

Can access on: https://react-notes-local-sx.netlify.app/
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
Each die can be clicked on to hold the die it at its current value between rolls. The player can then click on the roll button to re-roll the unheld dice.
<br><br>

**Tenzies Win**
  - When the player achieves a tenzies win (all dice are of the same number), the game will display that a win has been achieved and will show the score of the current game, including the number of rolls and time it took to achieve the win
  - Confetti art animation will be displayed and a winning sound effect will be played
<br><br>

![Tenzies Win](./images/tenzies-win.png?raw=true "Tenzies Win")
When a tenzies win is achieved, the current score is displayed with winning animation and audio effects.
<br><br>


## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## Dependencies 
  - React-confetti
    - Displays rainbow confetti that falls from the top of the page

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- Make sure React is version 17 as some of the dependencies are not supported on React version 18+. To do this you can run the following commands:
  - 'npm uninstall react react-dom'
  - 'npm install react@17.0.2 react-dom@17.0.2'
- Install the dependencies by running the following commands:
  - React-confetti
    - 'npm install react-confetti'
- The web application can be run on your local server by typing in the command line 'npm run dev'

## How to Deploy
- To build out the web application for deployment use “npm run build”
- To test out the preview before deploying the application use “npm run preview”
- Deploy the web application on your server of choice:
  - Netlify using the command line
    - Install the Netlify CLI using “npm install -g netlify-cli”
    - Create a new site in Netlify using “ntl init”
    - Deploy to a unique preview URL using “ntl deploy”
    - The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag to deploy the site into production “ntl deploy --prod”
  - Netlify using github
    - Import the project to netlify
    - Choose the branch, output directory, and set up environment variables if applicable and click deploy

