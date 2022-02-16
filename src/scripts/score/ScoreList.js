//import getTeams, totalScore, import playerCount
import { getTeams } from "../team/TeamProvider";
import { totalScore} from "./totalScore.js";

//define function that iterates over teams
export const LeaderBoard = () => {
    const teams = getTeams()
    let html = ``

    for (const team of teams) {

    }
}
    //interpolate string for each team that displays team name, totalScore, and playerCount
    //return html

