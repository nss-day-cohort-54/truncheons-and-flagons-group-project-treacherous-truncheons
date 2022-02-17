//import sendTeam
import { sendTeam } from "./TeamProvider.js";
//import getTeams
import { getTeams } from "./TeamProvider.js";


//export function that makes a create team form
export const TeamForm = () => {
    let html = `<h2>New Team</h2>
    <div id="inputField">
                    <label class="label" for="teamName"></label>
                    <input type="text" maxlength="40" name="teamName" class="input">
                </div>
                <button class="button" id="submitTeam">Create Team</button>`
                // return html string containing an input field for new teams and a Save team button
                return html
}

//add click eventlistener for Save team button
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "submitTeam") {
            const currentTeamName = document.querySelector("input[name=teamName]").value
            const teams = getTeams()
            const matchTeam = teams.find(team => team.teamName === currentTeamName)
            if (currentTeamName === "" ) {
                window.alert("Please enter a team name.") 
                } else if (matchTeam != undefined) {
                    window.alert("This team name already exists, please create a new one.")
                } else {
                    const teamData ={
                        teamName: currentTeamName
                    }
                    sendTeam(teamData)
                        .then(() => document.dispatchEvent (new CustomEvent("stateChanged")))
                }
            }
        }
)
    //invoke sendTeam
    //dispatch statechanged event