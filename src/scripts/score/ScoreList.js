//import getTeams, totalScore, import playerCount
import { getTeams } from "../team/TeamProvider.js";
import { totalScore } from "./totalScore.js";
import { PlayerCount } from "../player/PlayerCount.js";

//sort all totalScores so the leaderboard is displayed in the right order
const sortTotalScores = () => {
    const teams = getTeams()
    //define an empty array
    const scoreArr = []

    for (const team of teams) {
        //for each team add their totalScore to that array
        scoreArr.push(totalScore(team.id))
    }

    const sortedScores = scoreArr.sort(( score1, score2) => score2 - score1)
    return sortedScores
}


//define function that iterates over teams
export const TeamRows = () => {
    const teams = getTeams()
    let html = ""
        
        //interpolate string for each team that displays team name, totalScore, and playerCount
        html += `<tr>
                    <td>${team.teamName}</td>
                    <td>${PlayerCount(team.id)}</td>
                    <td>${totalScore(team.id)}</td>
                </tr>`
    //return html
    
    return html
}

