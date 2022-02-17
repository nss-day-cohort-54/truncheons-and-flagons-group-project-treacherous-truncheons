import { startGame } from "./GameProvider.js";

// function that makes html for the start game button
export const StartGameButton = () => {
    return `<button id="startGameButton">Start New Game</button>`
}

// event listener which invokes startGame()
// sets applicationState.gameState.roundNumber = 0
// dispatches stateChanged event to refresh the html
document.addEventListener(
    "click",
    event => {
        if(event.target.id === "startGameButton"){
            startGame()
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)