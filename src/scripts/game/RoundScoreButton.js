import { addAllRoundScores } from "./GameProvider.js"


// button for saving round score
export const RoundScoreButton = () => {
    return `<button id="saveRoundButton">Save Round Score</button>`
}


// eventlistener for the round score button
document.addEventListener(
    "click",
    event => {
        if(event.target.id === "saveRoundButton"){
            // get array of team round scores
            const scoreFields = Array.from(document.querySelectorAll("input[name^='roundScore']"))
            // map to array of objects with just teamId and score
            const foundScores = scoreFields.map(score => {
                // get teamId from the name of the select element
                const [,teamId] = score.name.split("--")
                // build score object
                const scoreObject = {
                    teamId: parseInt(teamId),
                    // check if falsy to prevent NaN input
                    score: parseInt(score.value ? score.value : 0)
                }
                return scoreObject
            })

            // check if valid score
            // set initial score for .reduce() method to use
            const initialScore = 0
            // reduce returns sum of the score properties of foundScores
            const sumOfScores = foundScores.reduce(
                (previousScore, currentScore) => previousScore + currentScore.score
                , initialScore
            )

            // check if negative numbers inputted
            const negatives = foundScores.find(foundScore => foundScore.score < 0)

            // check if sum of the scores is less than or equal to 9
            if(!negatives && sumOfScores <= 9) {
                // addAllRoundScores function
                // expects and array of objects with .teamId and .score properties
                addAllRoundScores(foundScores)
            } else {
                // if sumofScores is more than 9 send alert and do no change state
                alert("Scoring rules violated!\nScores must be 0 or greater.\nSum of scores must be less than 9.")
            }
        }
    }
)
// sends the scores to the gamestate

// on third round sends total scores from gamestate to the api database as a score object