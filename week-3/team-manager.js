// Title: Assignment 1.2
// Author: Professor Krasso
// Date: June 12 2022
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project shows how to debug with node
// https://developer.chrome.com/docs/devtools/javascript/
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// https://rollbar.com/blog/javascript-constructors/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
// https://www.w3schools.com/jsref/prop_checkbox_value.asp
// https://www.tutorialspoint.com/es6/es6_modules.htm
// https://www.youtube.com/watch?v=Q3SBogjUfMk//www.delftstack.com/howto/javascript/javascript-find-object-in-array/

import { Team } from "./team.js";
import moment from "moment";

export class Teams extends Team {
  constructor(name, mascot, playerCount, yearEstablished, mvp) {
    super(name, mascot, playerCount);
    //custom behavior
    this.yearEstablished = yearEstablished;
    this.mvp = mvp;
  }
}

//Array of teams
let newYork = new Teams("New York", "Angels", "56", "1985", "Keith Vanhorn");
let florida = new Teams("Florida", "Gators", "57", "1983", "Tim Vanhorn");
let texas = new Teams("Texas", "Tacos", "56", "1885", "Ron Vanhorn");
let chicago = new Teams("Chicago", "Lions", "45", "1945", "Jimmy Vanhorn");
let sanAntonio = new Teams("San Antonio", "Tiger", "65", "1785", "Matt Vanhorn");

var teams = [newYork, florida, texas, chicago, sanAntonio];

//loops through array of TEams
export function findTeams() {
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


console.log(findTeams());
console.log(findTeam());
