/*
    Responsibility: create objects related to state
    - applicationState object
    - API target
*/

/*
    applicationState is temporary state object
    will be populated with players, teams, and scores data from api
    has a gameState property pre-set so that default .gameState is a blank object
*/
export const applicationState = {
    // players:
    // teams:
    // scores:
    gameState: {}
        // team1Id: score,
        // team2Id: score,
        // team3Id: score,
        // roundNumber: integer
}

// define API
export const API = "http://localhost:8088"

