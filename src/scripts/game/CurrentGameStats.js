import { getGameState } from "./GameProvider.js"
import { getTeams } from "../team/TeamProvider.js"


export const CurrentGameStats = () => {
    const gameState = getGameState()
    const teams = getTeams()
    let html = ""
    if (gameState.roundNumber >= 1) {
        html = `<table>
                <tr>
                    <th>Team</th>
                    <th>Score</th>
                </tr>
            `

        for (const property in gameState) {
            if (property != "roundNumber") {
                const matchingTeam = teams.find(team => {
                    return team.id === parseInt(property)
                })
                html += `<tr>
                            <td>${matchingTeam.teamName}</td>
                            <td>${gameState[property]}</td>
                        </tr>`
            }
        }
        html += `</table>`
    }
    return html
}