/*
    Responsibility: Generate HTML for the game component
*/

import { CurrentGameStats } from "./CurrentGameStats.js";
import { GameManager } from "./GameManager.js";

// function that generates HTML from gameManager() and CurrentGameStats()
export const Game = () => {
    let gameHTML = "<h1>Truncheons & Flagons</h1>"

    // add game manager area
    gameHTML += `<div class="game">
    <div class="gameManager">${GameManager()}</div>`

    // add current game stats
    gameHTML += `<div class="currentGameStats">${CurrentGameStats()}</div></div>`

    return gameHTML
}