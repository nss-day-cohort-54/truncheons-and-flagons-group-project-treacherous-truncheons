import { applicationState } from "../dataAccess.js";


// export function that makes copy of applicationState.gameState
export const getGameState = () => {
    return JSON.parse(JSON.stringify(applicationState.gameState))
}

// function that sets initial game state
/* initial game state should be
    no teams selected
    round: 0
*/
export const startGame = () => {
    applicationState.gameState.roundNumber = 0
}

// function that sets teams in applicationState.gameState
export const setCurrentTeams = (teamArray) => {
    for (const teamId of teamArray) {
        applicationState.gameState[teamId] = 0
    }
}

// function adds scores to applicationState.gameState
export const addRoundScore = (teamId, score) => {
    applicationState.gameState[teamId] += score
}

// function that resets gameState to empty object at end of game
export const resetGameState = () => {
    applicationState.gameState = {}
}