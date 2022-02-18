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
    gameState: {
        // // team1Id: score,
        // 1: 0,
        // // team2Id: score,
        // 2: 0,
        // // team3Id: score,
        // 3: 0,
        // roundNumber: 1
    }
}

// define API
export const API = "https://truncheons-api-lyrnz.ondigitalocean.app"

