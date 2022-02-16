//import function from scoreList
import { TeamRows } from "./score/ScoreList.js";

// function for leaderboard
export const Leaderboard = () => {

    //interpolate html by invoking scoreList function
    //return html

    return `<table>
                    <tr class="headers">
                        <th>Name</th>
                        <th>Players</th>
                        <th>Score</th>
                    </tr>
                    ${TeamRows()}
                   </table>`

}
