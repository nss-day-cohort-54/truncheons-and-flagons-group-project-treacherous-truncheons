import { allTeams } from "../team/TeamDropdown.js"
import { sendPlayers } from "./PlayerProvider.js"
import { PlayerCount } from "./PlayerCount.js"

// function that generates html for the player form
export const PlayerForm = () => {
    // initialize teamList string
    let teamList =
        `<select name="teams">`

    // add team dropdown options
    teamList += `${allTeams()}`
    teamList += `<select>`

    // initialize full html string
    // interpolate teamList
    let html = `<h2>New Player</h2>
        <div id="inputField">
            <label class="label" for="playerName"></label>
            <input type="text" maxlength="40" name="playerName" class="input" >
            ${teamList}
        </div>
        <button class="button" id="submitPlayer">Add Player to the Team</button>
        `
    return html
}

// add eventListener that checks for submitPlayer button click
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "submitPlayer") {
            // gets data from the form
            const name = document.querySelector("input[name=playerName]").value
            const playerTeam = parseInt(document.querySelector("select[name='teams']").value)
            
            // invoke playerCount with the id of whichever team was clicked on as the parameter
            const playerCount = PlayerCount(playerTeam)
            
            // check if playerTeam is not valid teamId
            if (!playerTeam) {
                window.alert("Please select a team for your player.")
            // check if team is full
            } else if (playerCount >= 3) {
                window.alert("Selected team is full. Please select another.")
            // check if player's name is not valid    
            } else if (!name) {
                window.alert("Please enter a player name.")
            // passes all checks, send data to the api database
            } else {
                const playerData = {
                    fullName: name,
                    teamId: playerTeam
                }
                sendPlayers(playerData)
                    .then(() => document.dispatchEvent (new CustomEvent("stateChanged")))
            }
        }
    }
)
