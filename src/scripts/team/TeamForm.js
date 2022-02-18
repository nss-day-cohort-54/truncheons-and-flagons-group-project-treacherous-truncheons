import { sendTeam } from "./TeamProvider.js";
import { getTeams } from "./TeamProvider.js";
import { AlertDialog } from "../AlertDialog.js";

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
            // get form value
            const currentTeamName = document.querySelector("input[name=teamName]").value
            
            // check if team name exists in database
            const teams = getTeams()
            const matchTeam = teams.find(team => team.teamName === currentTeamName)
            // check if team name is not empty string
            if (currentTeamName === "") {
                AlertDialog("Please enter a team name.")
            // check that team name is not in database
            } else if (matchTeam != undefined) {
                AlertDialog("This team name already exists, please create a new one.")
            // if checks passed, add to database
            } else {
                const teamData = {
                    teamName: currentTeamName
                }
                sendTeam(teamData)
                    .then(() => document.dispatchEvent(new CustomEvent("stateChanged")))
            }
        }
    }
)