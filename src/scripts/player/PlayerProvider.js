// export fetchPlayers - gets player data from api
import { API, applicationState } from "../dataAccess.js"
// sendPlayers - adds player data to api

// export getPlayer - gets player data from applicationState

/*export const fetchPlayers = () => {
    return fetch(`${API}/players`)
        .then(response => response.json())
        .then(
            (players) => {
                // Store the external state in application state
                applicationState.players = players
            }
        )
}

export const getPlayers = () => {
    return applicationState.players.map(player => ({...player}))
}
*/
