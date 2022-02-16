//import teamdropdown function, TeamScoreInput function
import { gameTeamOptions } from "../team/TeamDropdown.js";
import { getGameState } from "./GameProvider.js";
import { RoundScoreButton } from "./RoundScoreButton.js";
import { StartGameButton } from "./StartGameButton.js";
import { TeamScoreInput } from "./TeamScoreInput.js";
/*
    Responsibility: Generate HTML for the game component
*/

// function that generates HTML
export const Game = () => {
    // get gameState
    const gameState = getGameState()
    let gameHTML = "<h1>Game</h1>"
    // if gameState has roundNumber property
    if("roundNumber" in gameState) {
        // if roundNumber = 0
        if(gameState.roundNumber === 0){
            // make header text for team select view
            gameHTML += `<div class="selectTeamHeader">Please Select Teams for New Game</div>`
            
            // invoke dropdown menu function(line 16)
            gameHTML += `${gameTeamOptions()}`

        } else {
            // add round info
            gameHTML += `<div class="roundNumber">Round ${gameState.roundNumber}</div>`
            
            // invoke TeamScoreInput function
            gameHTML += `${TeamScoreInput()}`
            
            // invoke save round score button
            gameHTML += `${RoundScoreButton()}`

        }
    } else {
        // generate the start game button
        gameHTML += `${StartGameButton()}`
    }
    return gameHTML
}

// add eventlistener to the teamDropdown


// click eventlistener on save round score button
    // each round add each team score
        // to the applicationState.gameState[teamId] 
        // increment roundNumber
    // check if roundNumber >= 3
        // invokes sendScore
        // reset gameState
    //dispatch statechanged event
