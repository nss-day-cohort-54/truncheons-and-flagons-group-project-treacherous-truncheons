// import teamDropdown
import { allTeams } from "../team/TeamDropdown.js"
// import PlayerCount
import { sendPlayers } from "./PlayerProvider.js"
import { PlayerCount } from "./PlayerCount.js"




// function that generates html for the player form
export const PlayerForm = () => {
    //saves imports as variables
    //formated team list
    let teamList =
        `<select name="teams">`

    teamList += `${allTeams()}`
    teamList += `<select>`

    let html = `<h2>New Player</h2>
        <div id="inputField">
            <label class="label" for="playerName"></label>
            <input type="text" maxlength="40" name="playerName" class="input" >
            ${teamList}
        </div>
        <button class="button" id="submitPlayer">Add Player to the Team</button>
        `

    // data from form is:
    // define html string that has a label and input field
    // interpolate html that invokes function from TeamDropdown and add to html string
    // returns html string
    return html
}

// check if team is full
// if already 3 players on team
// don't send anything and send alert to browser
// else
// adds player to API via sendPlayer 
//dispatch statechanged event

// add eventListener that 
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "submitPlayer") {
            // gets data from the form
            const name = document.querySelector("input[name=playerName]").value
            const playerTeam = parseInt(document.querySelector("select[name='teams']").value)
            // invoke playerCount with the id of whichever team was clicked on as the parameter
            const playerCount = PlayerCount(playerTeam)
            if (!playerTeam) {
                window.alert("Please select a team for your player.")
            } else if (playerCount >= 3) {
                window.alert("Selected team is full. Please select another.")
            } else if (!name) {
                window.alert("Please enter a player name.")
            } else {
                const playerData = {
                    fullName: name,
                    teamId: playerTeam
                }
                sendPlayers(playerData)
                    .then(() => document.dispatchEvent (new CustomEvent("stateChanged")))
            }
        }
    })


//look into saving text input as state