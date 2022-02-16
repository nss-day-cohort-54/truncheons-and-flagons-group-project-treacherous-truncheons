import { addAllRoundScores, getGameState } from "./GameProvider.js"


// button for saving round score
export const RoundScoreButton = () => {
    const buttonHTML = `<button id="saveRoundButton">Save Round Score</button>`
    return buttonHTML
}


// eventlistener for the round score button
document.addEventListener(
    "click",
    event => {
        if(event.target.id === "saveRoundButton"){
            // get array of team round scores
            const roundScores = {}
            const scoreFields = Array.from(document.querySelectorAll("input[name^='roundScore']"))
            // check if scores valid
            const foundScores = scoreFields.map(score => {
                const [,teamId] = score.name.split("--")
                const scoreObject = {
                    teamId: parseInt(teamId),
                    // check if faley to prevent NaN
                    score: parseInt(score.value ? score.value : 0)
                }
                return scoreObject
                //parseInt(score.value)
            })

            // check if valid score
            const initialScore = 0
            const sumOfScores = foundScores.reduce(
                (previousScore, currentScore) => previousScore + currentScore.score
                , initialScore
            )
            
            // check if third round
            const gameState = getGameState()

            if(sumOfScores === 3) {
                // addroundscore function
                // expects and array of objects with .teamId and .score properties
                addAllRoundScores(foundScores)
            } else {
                alert("Scores must add up to 3.")
            }
        }
    }
)
// sends the scores to the gamestate

// on third round sends total scores from gamestate to the api database as a score object