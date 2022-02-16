//import getTeams, getPlayers
import { getTeams } from "./TeamProvider.js"
import { PlayerCount } from "../player/PlayerCount.js"
import { setCurrentTeams } from "../game/GameProvider.js"


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
        <select name="team-names" id="team-selector--${index + 1}">
        <option value="" disabled selected hidden>Choose a team...</option>
        ${fullTeams()}
        </select>`
    }

    // add event listener
    teamSelectionEventListener()

    //return final html string
    return parentHTML

}

const teamSelectionEventListener = () => {
    document.addEventListener(
        "change",
        event => {
            if (event.target.id.startsWith("team-selector")){
                // add all selections to an array
                const foundSelections = Array.from(document.querySelectorAll("select[name='team-names']"))

                // make into array of just team.values as int's
                const foundTeamIds = foundSelections.map(team => parseInt(team.value))

                // check team uniqueness
                const searchedTeams = {}
                // set default to true
                let teamsReady = true
                // iterate over foundTeamIds
                for (const team of foundTeamIds) {
                    // check team which should be the teamId
                    if(team){
                        // if team is not NaN
                        // check if team is in searchedTeams already
                        if(team in searchedTeams){
                            // if team is in searchedTeams object
                            // team selections are not unique
                            // set teamsReady to false and break for loop
                            teamsReady = false
                            break
                        } else {
                            // if team is not in searchedTeams object
                            // add as a property to the searchedTeams object
                            searchedTeams[team] = ""
                        }
                    } else {
                        // if team is falsey (NaN)
                        // then no team is selected for at least one of the select inputs
                        // set uniquess to false and break for loop
                        teamsReady = false
                        break
                    }
                }
                
                // change state if threeTeamsSelected and teamsReady
                if(teamsReady) {
                    setCurrentTeams(foundTeamIds)
                } else {
                    const y = "y"
                }
            }
        }
    )
}