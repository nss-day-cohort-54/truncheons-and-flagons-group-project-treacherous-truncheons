// import getPlayers
import { getPlayers } from "./PlayerProvider.js";


// export PlayerCount(teamId) function calculate number of players on each team
export const PlayerCount = (teamId) => {
    const players = getPlayers()
    // for each team
        // filter players for teamId
    const matchedPlayers = players.filter(player => player.teamId === teamId)
    // returns numberOfPlayers
            // .length
    return matchedPlayers.length
}

