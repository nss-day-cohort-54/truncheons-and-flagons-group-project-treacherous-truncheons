//import getState, getTeams, setScore

import { getGameState } from "./GameProvider.js";
import { getTeams } from "../team/TeamProvider.js";

//export function that contains html with input fields
export const TeamScoreInput = () => {
    const gameState = getGameState()
    const allTeams = getTeams()
    //define variable with an empty string
    let htmlString = ""
    //iterate over teams
    for (const team of allTeams) {
        //find team.id === teamId from state
        if(team.id in gameState) {
            //interpolate an html string that creates {.findFunction.name} as the label tag
            //and include an input field
            let teamString = `<div class="roundScoreInput">
            <label class="roundScoreLabel" for="roundScore--${team.id}">${team.teamName}</label>
            <input type="number" name="roundScore--${team.id}" id="${team.id}" min=0 max=6 />
            </div>
`

            //add that html string to original string
            htmlString += teamString
        }
    }

    // return entire html string
    return htmlString
}