//import teamdropdown function, TeamScoreInput function

/*
    Responsibility: Generate HTML for the game component
*/

// function that generates HTML
    // get gameState
    // if gameState has roundNumber property
        // if roundNumber = 0
            // invoke dropdown menu function(line 16)
        // else
            // invoke TeamScoreInput function
    // else
        // generate the start game button

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
