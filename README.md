# Tenzies Game

The tenzies game project is a dynamic web application built using the front-end JavaScript library, React. The web application's data saves directly on the computer's local database. The objective of the game is to roll the dice as fast as possible until all dice are the same. The player who gets all dice on the same number and yells "Tenzi!" the fastest is the winner. You can play against other people or play against yourself and try to beat your best time. The user can click each die to freeze it at its current value between rolls. The user can then click on the roll button to re-roll the unheld dice. 
&nbsp;

Can access on: https://react-notes-local-sx.netlify.app/
<br><br>


## Here are the features of the app:
**Creating new notes**
  - When the user first opens the web application (and also when there are no notes added) a message will display indicating there are no notes with a button to create your first note
  - The sidebar will contain a '+' icon that when clicked on will create a new note
<br><br>

![Start Game](./images/start-game.png?raw=true "Start Game")
Hi
<br><br>

![Game](./images/game.png?raw=true "Game")
Hi
<br><br>

![Hold Dice](./images/hold-dice.png?raw=true "Hold Dice")
Hi
<br><br>

![Tenzies Win](./images/tenzies-win.png?raw=true "Tenzies Win")
Hi
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

