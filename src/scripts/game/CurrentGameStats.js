import { applicationState } from "../dataAccess.js"
import { getTeams } from "../team/TeamProvider.js"


export const CurrentGameStats = () => {
    const gameState = applicationState.gameState
    const teams = getTeams()
    let html = `<table>
                <tr>
                    <th>Team</th>
                    <th>Score</th>
                </tr>
            `

    for (const team of teams) {
        for (const property in gameState) {
            if (team.id === parseInt(property)) {
                html += `<tr>
                            <td>${team.teamName}</td>
                            <td>${gameState[property]}</td>
                        </tr>`
            }
        }
    }
    html += `</table>`

    return html
}