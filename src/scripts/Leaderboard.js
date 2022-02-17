//import function from scoreList
import { TeamRows } from "./score/ScoreList.js";

// function for leaderboard
export const Leaderboard = () => {
    //interpolate html by invoking scoreList function
    //return html
    // set up table properly for scroll ability
    return `
<h2>Leaderboard</h2>
<table id="leaderboardTable">
    <thead>
        <tr class="leaderboardHeaders">
            <th scope="col" class="leaderboardHeader">Name</th>
            <th scope="col" class="leaderboardHeaderPlayer">Players</th>
            <th scope="col" class="leaderboardHeaderScore">Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
                <div class="teamRows">
                    <table>
                        <tbody>
                            ${TeamRows()}
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`
}
