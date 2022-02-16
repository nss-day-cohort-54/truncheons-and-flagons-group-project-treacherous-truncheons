import { getScores } from "./ScoreProvider.js";

//function totalScore that has teamId as a parameter
export const totalScore = (teamId) => {
    //define default variable of 0
    let totalScore = 0
    const scores = getScores()
    //for of loop over scores
        for (const score of scores) {
            //check if teamId === score.teamId
            if(teamId === score.teamId) {
            //add value to default variable
            totalScore += score.gameScore
            }
        }
    //return totalScore from applicationState as the sum of that teams scores from all games
    return totalScore
}

/*
    For testing
*/
// export const totalScoreTest = () => {
//     const testScore = totalScore(1)
//     return testScore === 4
// }
