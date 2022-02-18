# Truncheons &amp; Flagons

The Truncheons & Flagons site allows users to record information for playing the game Truncheons & Flagons. Users can create new teams, assign players to teams, and record scores as games are played. The instructions for this project can be viewed [here](./instructions.md).

Outline:
- [Functionality](#functionality)
- [How to use this repo](#how-to-use-this-repo)

<br>

## Functionality
---
The primary features of this site are:
- Create new team names.
- Create new players and assign them to a team.
- Record the scores for a game of Truncheons & Flagons.
- A leaderboard of all teams in the database and their all-time scores.

### Game Rules
A game of Truncheons & Flagons involves three teams of three players each. One team, the knights, tries to score points by throwing wooden balls into flagons. Another team, the goblins, tries to knock the knights' balls out of the air with wooden truncheons. A third team, the faeries, try to distract the knights or the goblins. Players are awarded points each round based on the success or failure of their actions. Further scoring details can be found at the [instructions](./instructions.md). The instructions also define the MVP for this site.

### Creating a new team

A user can enter a new team name into the form on this site. The team is then added to the API database.

### Creating a new player

A user can enter a new player name and assign the player to a team. Teams must have three players to be able to play a game of Truncheons & Flagons. The player is added to the API database.

### Running a game

A user can record information about a specific game of Truncheons & Flagons. Once a new game is started, the user can select the teams from a list of available teams of three players. Next, for each round the user can record scores of each team. After the third round, the total scores are recorded in the API database, and the application is reset to allow for the start of another game.

### Leaderboard

The leaderboard gets the score data from the API. Teams are sorted by their all-time score, and the team name, number of players, and scores are displayed.

[Insert gif here]
<br><br>

## How to use this repo
---
If you would like to test out the functionality of this site. Here is how to download and run it on your computer.

1. Clone this repo.
2. In the project directory, navigate to the api folder `cd api`.
3. Start the json-server, run `json-server database.json -p 8088 -w`
4. In a second terminal window, navigate to the src folder `cd {directory_path}/src`.
5. In src folder, run `serve` to serve the web page. localhost:300 port is used by default.
6. Open localhost:3000 (or other specified port) in the web browser of your choice.