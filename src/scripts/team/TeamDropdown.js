//import getTeams, getPlayers
import { getTeams } from "./TeamProvider.js"
import { getPlayers} from "../player/PlayerProvider.js"

const teams = getTeams()
const players = getPlayers()

//export function that adds options for a dropdown menu that contains all teams
export const allTeams = () => {
    //set default html string as empty
    let html = `<option value="" disabled selected hidden>Choose a team...</option>`
    //iterate over teams and add <option> html string to our starter html string
    for (const team of teams) {
        html += `<option value="${team.id}">${team.name}</option>`
    }
    //return that html string that all teams made into <option> tags
    return html
}

//export function that adds options for a dropdown menu that contains only teams with 3 players
export const fullTeams = () => {
    //set default html string as empty
    let html = ""
    //iterate over teams
    for (const team of teams) {
        //filter players for player.teamIds equal to team.id
        const teamPlayers = players.filter(player => {
            return player.teamId === team.id
        })
        //if filtered players length = 3
        if (teamPlayers.length === 3) {
            //add <option> html string to our starter html string
            html += `<option value="${team.id}">${team.name}</option>`
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
    for (let index = 0; index >= 2; index++) {
        //create label and select tags
        html += `<label for="team-names">Choose team ${index + 1}:</label>
        <select name="team-names" id="team-names">
        ${fullTeams()}
        </select>`
        }
        //return final html string
        return parentHTML
    
}
    
    