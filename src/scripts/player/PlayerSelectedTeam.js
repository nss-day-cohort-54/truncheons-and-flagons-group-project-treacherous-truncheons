import {applicationState} from "./dataAccess.js"

export const setPlayerTeam = (teamId) => {
    applicationState.playerTeam = authorId
    document.dispatchEvent (new CustomEvent("stateChanged"))
}