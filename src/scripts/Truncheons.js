import { Game } from "./game/Game.js";
import { TeamForm } from "./team/TeamForm.js";
import { PlayerForm } from "./player/PlayerForm.js";
import { Leaderboard } from "./Leaderboard.js";
import { AudioAlert } from "./AudioAlert.js";

//export function that interpolates entire html string
export const TruncheonsFlagons = () => {
    let htmlString = ""

    // add new team component
    htmlString += `<article class="inputForms">
                <article class="newTeam">
                        ${TeamForm()}
                </article>
                <article class="newPlayer">
                        ${PlayerForm()}
                </article>
                    </article>`

    // add game component
    htmlString += `<article class="gameArea">
                        ${Game()}
                    </article>`

    // add leaderboard component
    htmlString += `<article class="leaderboard">
                        ${Leaderboard()}
                    </article>`
    htmlString += `<dialog id="dialog"></dialog>${AudioAlert()}`
    
    //return html string
    return htmlString
}