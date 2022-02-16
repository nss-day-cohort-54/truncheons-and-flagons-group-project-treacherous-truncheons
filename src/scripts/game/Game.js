//import teamdropdown function, TeamScoreInput function
import { TeamScoreInput } from "./TeamScoreInput.js";
/*
    Responsibility: Generate HTML for the game component
*/

// function that generates HTML
export const Game = () => {
    // get gameState
    let gameHTML = ""
    // if gameState has roundNumber property
        // if roundNumber = 0
            // invoke dropdown menu function(line 16)
        // else
            // invoke TeamScoreInput function
    gameHTML += `${TeamScoreInput()}`
    // else
        // generate the start game button
    return gameHTML
}

// add click eventlistener to the start game button
    //dispatch statechanged event
// add eventlistener to the teamDropdown

// click eventlistener on save round score button
    // each round add each team score
        // to the applicationState.gameState[teamId] 
        // increment roundNumber
    // check if roundNumber >= 3
        // invokes sendScore
        // reset gameState
    //dispatch statechanged event
