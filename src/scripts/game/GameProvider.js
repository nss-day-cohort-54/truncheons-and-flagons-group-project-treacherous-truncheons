import { applicationState } from "../dataAccess.js";
import { sendScore, setScore } from "../score/ScoreProvider.js";


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
    applicationState.gameState.roundNumber++
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// function adds scores to applicationState.gameState

export const addAllRoundScores = (scoreArray) => {
    // add scores to gameState
    for (const scoreObject of scoreArray) {
        // send score to gameState
        setScore(scoreObject.teamId, scoreObject.score)
    }
    // check if round 3
    const gameState = getGameState()
    if (gameState.roundNumber < 3) {
        applicationState.gameState.roundNumber++
        // state changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    } else {
        // iterate over the current teams
        for (const scoreObject of scoreArray) {
            scoreObject.timestamp = Date.now()
        }
        Promise.all(scoreArray.map(scoreObject => sendScore(scoreObject)))
            .then(() => resetGameState())
            .then(() => document.dispatchEvent(new CustomEvent("stateChanged")))
    }
}

// function that resets gameState to empty object at end of game
export const resetGameState = () => {
    applicationState.gameState = {}
}