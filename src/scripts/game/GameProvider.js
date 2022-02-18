import { startConfetti, stopConfetti } from "../confetti.js";
import { AlertDialog } from "../AlertDialog.js";
import { applicationState } from "../dataAccess.js";
import { sendScore, setScore } from "../score/ScoreProvider.js";
import { getTeams } from "../team/TeamProvider.js";

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
        //create game winner array
        let winners = []
        for (const scoreObject of scoreArray) {

            // build score object for each score in gameState
            const scoreToSend = {
                teamId: scoreObject.teamId,
                gameScore: gameState[scoreObject.teamId],
                timestamp: Date.now()
            }
            // add proper score object to the array to send
            scoresToSend.push(scoreToSend)
            // check scoreObject for highest score
            // check if winners array has any winners in it
            if (!winners.length) {
                // if nothing in array, add the scoreObject as a winner
                winners.push(scoreToSend)
            } else if (scoreToSend.gameScore > winners[0].gameScore) {
                // if current score is greater than the current winner score
                // clear winners array
                winners = []
                // add score to winners
                winners.push(scoreToSend)
            } else if (scoreToSend.gameScore === winners[0].gameScore) {
                // if current score equals current winner score
                // add scoreObject to array
                winners.push(scoreToSend)
            }
        }
        // send all scores to the api via sendScore
        // promise.all waits for all to resolve before resetting game and sending stateChanged event
        Promise.all(scoresToSend.map(scoreObject => sendScore(scoreObject)))
            //window alert to show user which team won the game
            .then(() => {
                // get teams for finding team names
                const teams = getTeams()
                // check if more than one winner - means it's a tie
                if (winners.length > 1) {
                    const tieString = TieString(winners)
                    // window alert of tie string
                    AlertDialog(tieString, true)
                } else if (winners.length === 1) {
                    const winningTeam = teams.find(team => team.id === winners[0].teamId)

                    AlertDialog(`Team "${winningTeam.teamName}" has won with ${winners[0].gameScore} points!`, true)
                }
            })
    }
}

export const TieString = (winners) => {
    // get teams for finding team names
    const teams = getTeams()
    // initialize tie string
    let tieString = "It is a tie between:"
    const dialogContainer = document.querySelector("#dialog")
    if (typeof dialogContainer.showModal === "function") {

        tieString += "<ul>"
        // iterate over winners
        for (const winner of winners) {
            // find team name of each winner
            const winningTeam = teams.find(team => team.id === winner.teamId)
            // add to string
            tieString += `<li>${winningTeam.teamName}</li>`
        }
        // end string with points value
        tieString += `</ul>... with ${winners[0].gameScore} points!`
    } else {
        tieString += "\n"
        // iterate over winners
        for (const winner of winners) {
            // find team name of each winner
            const winningTeam = teams.find(team => team.id === winner.teamId)
            // add to string
            tieString += `    - ${winningTeam.teamName}\n`
        }
        // end string with points value
        tieString += `... with ${winners[0].gameScore} points!`
    }
    return tieString
}

// function that resets gameState to empty object at end of game
export const resetGameState = () => {
    applicationState.gameState = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}