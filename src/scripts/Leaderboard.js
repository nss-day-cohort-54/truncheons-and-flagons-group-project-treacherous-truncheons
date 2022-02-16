//import function from scoreList
import { TeamRows } from "./score/ScoreList.js";

// function for leaderboard
export const Leaderboard = () => {

    //interpolate html by invoking scoreList function
    //return html

    return `<h2>Leaderboard</h2>
    <table id="leaderboardTable">
                    <tr class="leaderboardHeaders">
                        <th class"leaderboardHeader">Name</th>
                        <th class"leaderboardHeader">Players</th>
                        <th class"leaderboardHeader">Score</th>
                    </tr>
                    ${TeamRows()}
                   </table>`

}
