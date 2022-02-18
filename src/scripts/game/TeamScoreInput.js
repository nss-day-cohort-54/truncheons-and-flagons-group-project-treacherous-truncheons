import { getGameState } from "./GameProvider.js";
import { getTeams } from "../team/TeamProvider.js";

//export function that contains html with input fields
export const TeamScoreInput = () => {
    const gameState = getGameState()
    const allTeams = getTeams()
    //define variable with an empty string
    let htmlString = "<div class='scoreInputs'>"
    //iterate over teams
    for (const team of allTeams) {
        // check if team.id is a property in state - means a team is in the current game
        if(team.id in gameState) {
            // interpolate an html string that creates the label from teamName
            // and include an input field
            let teamString = `<div class="roundScoreInput">
            <label class="roundScoreLabel" for="roundScore--${team.id}">${team.teamName}</label>
            <input class="inputScore" type="number" name="roundScore--${team.id}" id="${team.id}" min=0 max=6 />
            </div>`

            //add that html string to original string
            htmlString += teamString
        }
    }
    // close div tag
    htmlString += `</div>`
    // return entire html string
    return htmlString
}