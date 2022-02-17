//import getTeams, totalScore, import playerCount
import { getTeams } from "../team/TeamProvider.js";
import { totalScore } from "./totalScore.js";
import { PlayerCount } from "../player/PlayerCount.js";



//define function that iterates over teams
export const TeamRows = () => {
    const teams = getTeams()
    //make a copy of teams array and save their totalScore as a property
    const totalTeamScores = teams.map((team) => ({
        ...team,
        totalScore: totalScore(team.id)
    }))
    
    //sort all teams by their totalScore property so the leaderboard is displayed in the right order
    const sortedTeams = totalTeamScores.sort(( team1, team2) => team2.totalScore - team1.totalScore)
    let html = ""
        for (const team of sortedTeams)
        //interpolate string for each team that displays team name, totalScore, and playerCount
        html += `<tr class="leaderboardRows">
                    <td class="leaderboardTeam">${team.teamName}</td>
                    <td class="playerCount">${PlayerCount(team.id)}</td>
                    <td class="score">${totalScore(team.id)}</td>
                </tr>`
    //return html
    
    return html
}

