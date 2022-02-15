// import teamDropdown
import { teamDropdown } from "../TeamDropDown.js"
// import PlayerCount
import { sendPlayers } from "./PlayerProvider.js"
import { PlayerCount} from "./PlayerCount.js"
//import applicationState
import { applicationState } from "../dataAccess.js"
import { setPlayerTeam } from "./PlayerSelectedTeam.js"


// function that generates html for the player form
export const PlayerForm = () => {
    //saves imports as variables
    //formated team list
    let teamList =
        `<select name="teams"><option name="teams" value="0">Please select a team...</option>`

    teamList += `${teamDropdown}`
    teamList += `<select>`

    let html = `
        <div class="inputField">
            <label class="label" for="playerName"></label>
            <input type="text" name="playerName" class="input" >
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

//eventlistener to check for team to be selected
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "teams") {
            setPlayerTeam(parseInt(event.target.value))
        }
    }
)


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
            const playerTeam = applicationState.playerTeam
            // invoke playerCount with the id of whichever team was clicked on as the parameter
            const playerCount = PlayerCount(playerTeam)
            if (playerCount && playerCount < 3) {
                const playerData = {
                    fullName: name,
                    teamId: playerTeam
                }
                sendPlayers(playerData)
                .then(() => setPlayerTeam(null))
            } else {
                window.alert("Selected team is full. Please select another.")
                setPlayerTeam(null)
            }
        }
    }
)