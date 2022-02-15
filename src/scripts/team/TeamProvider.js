import { API, applicationState } from "../dataAccess.js";

//export fetchTeams
// gets team list from api, saves it to the applicationState
export const fetchTeams = () => {
    return fetch(`${API}/teams`)
        .then(response => response.json())
        .then(
            (teams) => {
                // Store the external state in application state
                applicationState.teams = teams
            }
        )
}

//export sendTeams
// takes a team object and sends it to the api
export const sendTeam = (team) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    }


    return fetch(`${API}/teams`, fetchOptions)
        .then(response => response.json())
}

//export getTeams
// returns a copy of team list from applicationState
export const getTeams = () => {
    return applicationState.teams.map(team => ({...team}))
}