import {applicationState} from "./dataAccess.js"

export const setPlayerTeam = (teamId) => {
    applicationState.playerTeam = teamId
    document.dispatchEvent (new CustomEvent("stateChanged"))
}