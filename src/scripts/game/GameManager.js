import { gameTeamOptions } from "../team/TeamDropdown.js";
import { getGameState } from "./GameProvider.js";
import { RoundScoreButton } from "./RoundScoreButton.js";
import { StartGameButton } from "./StartGameButton.js";
import { TeamScoreInput } from "./TeamScoreInput.js";

export const GameManager = () => {
    // get gameState
    const gameState = getGameState()
    // initialize empty string
    let gameViewHTML = ""

    // if gameState has roundNumber property
    // game has started, show team selection or round score inputs
    if("roundNumber" in gameState) {
        // if roundNumber = 0, teams are not selected, show team selection view
        if(gameState.roundNumber === 0){
            // make header text for team select view
            gameViewHTML += `<div class="selectTeamHeader">Please Select Teams for New Game</div>`
            
            // invoke gameTeamOptions() to create team selection dropdown menus
            gameViewHTML += `${gameTeamOptions()}`
        } else {
            // if round number is not 0, show team score input view
            // add round info
            gameViewHTML += `<div class="roundNumber">Round ${gameState.roundNumber}</div>`
            
            // invoke TeamScoreInput function for score entry
            gameViewHTML += `${TeamScoreInput()}`
            
            // invoke save round score button so that scores can be added to gameState
            gameViewHTML += `${RoundScoreButton()}`

        }
    } else {
        // no current game
        // generate the start game button
        gameViewHTML += `${StartGameButton()}`
    }
    return gameViewHTML
}