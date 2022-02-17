import { gameTeamOptions } from "../team/TeamDropdown.js";
import { getGameState } from "./GameProvider.js";
import { RoundScoreButton } from "./RoundScoreButton.js";
import { StartGameButton } from "./StartGameButton.js";
import { TeamScoreInput } from "./TeamScoreInput.js";

export const GameManager = () => {
    // get gameState
    const gameState = getGameState()
    let gameViewHTML = ""
    // if gameState has roundNumber property
    if("roundNumber" in gameState) {
        // if roundNumber = 0
        if(gameState.roundNumber === 0){
            // make header text for team select view
            gameViewHTML += `<div class="selectTeamHeader">Please Select Teams for New Game</div>`
            
            // invoke dropdown menu function(line 16)
            gameViewHTML += `${gameTeamOptions()}`

        } else {
            // add round info
            gameViewHTML += `<div class="roundNumber">Round ${gameState.roundNumber}</div>`
            
            // invoke TeamScoreInput function
            gameViewHTML += `${TeamScoreInput()}`
            
            // invoke save round score button
            gameViewHTML += `${RoundScoreButton()}`

        }
    } else {
        // generate the start game button
        gameViewHTML += `${StartGameButton()}`
    }
    return gameViewHTML
}