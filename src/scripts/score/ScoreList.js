//import getTeams, totalScore, import playerCount
import { getTeams } from "../team/TeamProvider.js";
import { totalScore } from "./totalScore.js";
import { PlayerCount } from "../player/PlayerCount.js";

//define function that iterates over teams
export const LeaderBoard = () => {
    const teams = getTeams()
    let html = `<tr>`

    //interpolate string for each team that displays team name, totalScore, and playerCount
    for (const team of teams) {
        html += `<td>${team.teamName}</td>
                 <td>${PlayerCount(team.id)}</td>
                 <td>${totalScore(team.id)}</td>`
    }
    html += `</tr>`
    //return html
    
    return html
}

