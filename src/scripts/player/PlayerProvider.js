import {API, applicationState } from "../dataAccess.js"


// export fetchPlayers - gets player data from api
export const fetchPlayers = () => {
    return fetch(`${API}/players`)
        .then(response => response.json())
        .then(
            (players) => {
                applicationState.players = players
            }
        )
}

// sendPlayers - adds player data to api
export const sendPlayers = (playerInput) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playerInput)
    }
}

// export getPlayer - gets player data from applicationState
export const getPlayers = () => {
    return applicationState.players.map(player => ({...player}))
}

