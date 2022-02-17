import { applicationState } from "../dataAccess.js";
import { sendScore, setScore } from "../score/ScoreProvider.js";

// export function that makes copy of applicationState.gameState
export const getGameState = () => {
    return JSON.parse(JSON.stringify(applicationState.gameState))
}

/*
    function that sets initial game state
        initial game state should be
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
    applicationState.gameState.roundNumber = 1
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// function adds scores to applicationState.gameState
// if round 3, restarts game
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
        const scoresToSend = []
        for (const scoreObject of scoreArray) {
            // build score object for each score in gameState
            const scoreToSend = {
                teamId: scoreObject.teamId,
                gameScore: gameState[scoreObject.teamId],
                timestamp: Date.now()
            }
            // add proper score object to the array to send
            scoresToSend.push(scoreToSend)
        }
        // send all scores to the api via sendScore
        // promise.all waits for all to resolve before resetting game and sending stateChanged event
        Promise.all(scoresToSend.map(scoreObject => sendScore(scoreObject)))
            // reset game to empty object
            .then(() => resetGameState())
            // dispatch stateChanged event to refresh page view
            .then(() => document.dispatchEvent(new CustomEvent("stateChanged")))
    }
}

// function that resets gameState to empty object at end of game
export const resetGameState = () => {
    applicationState.gameState = {}
}