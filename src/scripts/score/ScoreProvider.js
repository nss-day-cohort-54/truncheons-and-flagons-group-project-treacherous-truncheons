import { API, applicationState } from "../dataAccess.js";

// export fetchScores - gets score data from api
// gets score list from api, saves it to the applicationState
export const fetchScores = () => {
    return fetch(`${API}/scores`)
        .then(response => response.json())
        .then(
            (scores) => {
                // Store the external state in application state
                applicationState.scores = scores
            }
        )
}

// export sendScore - add score data to api
// takes a score object and sends it to the api
export const sendScore = (score) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(score)
    }


    return fetch(`${API}/scores`, fetchOptions)
        .then(response => response.json())
}

// export getScores - gets team score data from applicationState
// returns a copy of score list from applicationState
export const getScores = () => {
    return applicationState.scores.map(score => ({...score}))
}

// export setScore(teamId, score) - add input to that teams respective value in gameState

export const setScore = (teamId, score) => {
    applicationState.gameState[teamId] += score
}