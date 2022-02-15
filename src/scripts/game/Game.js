/*
    Responsibility: Generate HTML for the game component
*/

// function that generates HTML
    // get gameState
    // if gameState has roundNumber property
        // if roundNumber = 0
            // generate three teamDropdown 
        // else
            // generate Round # html
            // generate the save round score button

// add eventlistener to the teamDropdown

// eventlistener on save round score button
    // each round add each team score
        // to the applicationState.gameState[teamId] 
        // increment roundNumber
    // check if roundNumber >= 3
        // invokes sendScore
        // reset gameState
