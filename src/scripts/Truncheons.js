//import Game, playerForm, teamForm, leaderboard html functions
//import { Game } from "./game/Game.js";
//import { TeamForm } from "./team/TeamForm.js";
//import { Leaderboard } from "./Leaderboard.js";
//import { PlayerForm } from "./player/PlayerForm.js";


//export function that interpolates entire html string
export const TruncheonsFlagons = () => {
    let htmlString = ""

    // add new team component
    /* uncomment when TeamForm ready
    htmlString +=  `<article class="newTeam">
                        ${TeamForm()}
                    </article>
    `
    */

    // add new player component
    /* uncomment when PlayerForm ready
    htmlString += `<article class="newPlayer">
                        ${PlayerForm()}
                    </article>
    `
    */

    // add game component
    /* uncomment when Game ready
    htmlString += `<article class="gameArea">
                        ${Game()}
                    </article>
    `
    */

    // add leaderboard component
    /* uncomment when Leaderboard ready
    htmlString += `<article class="leaderboard">
                        ${Leaderboard()}
                    </article>
    `
    */

    //return html string
    return htmlString
}