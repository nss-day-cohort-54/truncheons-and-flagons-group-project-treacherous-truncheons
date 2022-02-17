import { fetchPlayers } from "./player/PlayerProvider.js";
import { fetchScores } from "./score/ScoreProvider.js";
import { fetchTeams } from "./team/TeamProvider.js";
import { TruncheonsFlagons } from "./Truncheons.js";

const mainContainer = document.querySelector("#container")

const renderAll = () => {
    // make fetches into an array for Promise.all
    const fetchArray = [ fetchScores(), fetchTeams(), fetchPlayers() ]
    // invoke fetch functions and wait for promises to resolve
    return Promise.all(fetchArray)
            .then(() => {
                // renders html
                mainContainer.innerHTML = `${TruncheonsFlagons()}`
            })
}

// invoke page rendering on page load
renderAll()

// eventListener to re-render html on state change
document.addEventListener("stateChanged", event => {
    renderAll()
})