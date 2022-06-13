//www.delftstack.com/howto/javascript/javascript-find-object-in-array/

import { Team } from "./team.js";

export class Teams extends Team {
  constructor(name, mascot, playerCount, yearEstablished, mvp) {
    super(name, mascot, playerCount);
    //custom behavior
    this.yearEstablished = yearEstablished;
    this.mvp = mvp;
  }
}

let newYork = new Teams("New York", "Angels", "56", "1985", "Keith Vanhorn");
let florida = new Teams("Florida", "Gators", "57", "1983", "Tim Vanhorn");
let texas = new Teams("Texas", "Tacos", "56", "1885", "Ron Vanhorn");
let chicago = new Teams("Chicago", "Lions", "45", "1945", "Jimmy Vanhorn");
let sanAntonio = new Teams("San Antonio", "Tiger", "65", "1785", "Matt Vanhorn");

let teams = [newYork, florida, texas, chicago, sanAntonio];

function findTeams() {
  console.log("-- DISPLAYING TEAMS --");
  teams.forEach((teams) => {
    console.log(
      "Name: " +
        teams.name +
        "\n" +
        "Mascot: " +
        teams.mascot +
        "\n" +
        "Player Count: " +
        teams.playerCount +
        "\n" +
        "Year Established: " +
        teams.yearEstablished +
        "\n" +
        "MVP: " +
        teams.mvp +
        "\n" +
        "\n"
    );
  });
}

function findTeam(name) {
  teams.find(function (post) {
    if (post.name == name) return true;
  });
}

function getGame() {
  let teamOne = findTeam("New York");
  let teamTwo = findTeam("San Antonio");
  return teamOne.name;
}

console.log(findTeams());
console.log(findTeam());
console.log(getGame());
