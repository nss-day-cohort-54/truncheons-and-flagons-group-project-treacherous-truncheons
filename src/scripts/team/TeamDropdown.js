//import getTeams, getPlayers
import { getTeams } from "./TeamProvider.js"
import { PlayerCount} from "../player/PlayerCount.js"


//export function that adds options for a dropdown menu that contains all teams
export const allTeams = () => {
    const teams = getTeams()
    //set default html string as empty
    let html = `<option value="" disabled selected hidden>Choose a team...</option>`
    //iterate over teams and add <option> html string to our starter html string
    for (const team of teams) {
        html += `<option value="${team.id}">${team.teamName}</option>`
    }
    //return that html string that all teams made into <option> tags
    return html
}

//export function that adds options for a dropdown menu that contains only teams with 3 players
const fullTeams = () => {
    const teams = getTeams()
    //set default html string as empty
    let html = ""
    //iterate over teams
    for (const team of teams) {
        //filter players for player.teamIds equal to team.id
        const teamPlayers = PlayerCount(team.id)
        //if filtered players length = 3
        if (teamPlayers === 3) {
            //add <option> html string to our starter html string
            html += `<option value="${team.id}">${team.teamName}</option>`
        }
    }
    //return that html string that all teams made into <option> tags
    return html
}

//export function that creates dropdown menus for game
export const gameTeamOptions = () => {
    //define empty html string variable
    let parentHTML = ""
    //for loop where max of i is 2
    for (let index = 0; index <= 2; index++) {
        //create label and select tags
        parentHTML += `<label for="team-names">Team ${index + 1}:</label>
        <select name="team-names" id="team-names">
        <option value="" disabled selected hidden>Choose a team...</option>
        ${fullTeams()}
        </select>`
        }
        //return final html string
        return parentHTML
    
}
    
    