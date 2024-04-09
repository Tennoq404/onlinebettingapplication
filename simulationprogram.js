'use strict';
const clubContainers = document.querySelector('.clubcontainer');
const clubContainers2 = document.querySelector('.club2');
const clubContainers3 = document.querySelector('.pick');
const clubContainers4 = document.querySelector('.hi');

const clubContainers6 = document.querySelector('.sub-section6');
const body = document.querySelector('body');

let manipulationNumber;
let matchteams = [];
const Teams = {
  Team1: 'Arsenal',
  Team2: 'Aston Villa',
  Team3: 'Bournemouth',
  Team4: 'Burnley',
  Team5: 'Brentford',
  Team6: 'Brighton and Hove Albion',
  Team7: 'Chelsea FC',
  Team8: 'Crystal Palace',
  Team9: 'Everton FC',
  Team10: 'Fulham',
  Team11: 'Luton Town',
  Team12: 'Liverpool FC',
  Team13: 'Manchester City',
  Team14: 'Manchester United',
  Team15: 'Newcastle United',
  Team16: 'Nottingham Forest',
  Team17: 'Sheffield United',
  Team18: 'Totthenham Hotspur',
  Team19: 'West Ham United',
  Team20: 'WolverHampton Wanders',
};
const Objectoffunctions = {
  pickteams: function () {
    return Number(
      [Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10)].join('')
    );
  },
  odd: function () {
    document.querySelectorAll('.but1')[0].textContent = (
      Math.random() + 1
    ).toFixed(2);
    document.querySelectorAll('.but1')[1].textContent = (
      Math.random() + 1
    ).toFixed(2);
    document.querySelectorAll('.but1')[2].textContent = (
      Math.random() + 1
    ).toFixed(2);
    document.querySelectorAll('.but1')[3].textContent = (
      Math.random() + 1
    ).toFixed(2);
    document.querySelectorAll('.but1')[4].textContent = (
      Math.random() + 1
    ).toFixed(2);
    document.querySelectorAll('.but1')[5].textContent = (
      Math.random() + 1
    ).toFixed(2);
    document.querySelectorAll('.but1')[6].textContent = (
      Math.random() + 1
    ).toFixed(2);
  },
};
console.log(Objectoffunctions.pickteams());

const deciderFunction = function (team) {
  if (team >= 10 && team <= 15) {
    matchteams.push(Teams.Team1);
  } else if (team >= 15 && team <= 20) {
    matchteams.push(Teams.Team2);
  } else if (team >= 20 && team <= 25) {
    matchteams.push(Teams.Team3);
  } else if (team >= 25 && team <= 30) {
    matchteams.push(Teams.Team4);
  } else if (team >= 30 && team <= 35) {
    matchteams.push(Teams.Team5);
  } else if (team >= 35 && team <= 40) {
    matchteams.push(Teams.Team6);
  } else if (team >= 40 && team <= 45) {
    matchteams.push(Teams.Team7);
  } else if (team >= 45 && team <= 50) {
    matchteams.push(Teams.Team8);
  } else if (team >= 50 && team <= 55) {
    matchteams.push(Teams.Team9);
  } else if (team >= 55 && team <= 60) {
    matchteams.push(Teams.Team10);
  } else if (team >= 60 && team <= 65) {
    matchteams.push(Teams.Team11);
  } else if (team >= 65 && team <= 70) {
    matchteams.push(Teams.Team12);
  } else if (team >= 70 && team <= 75) {
    matchteams.push(Teams.Team13);
  } else if (team >= 75 && team <= 80) {
    matchteams.push(Teams.Team14);
  } else if (team >= 80 && team <= 85) {
    matchteams.push(Teams.Team15);
  } else if (team >= 85 && team <= 90) {
    matchteams.push(Teams.Team16);
  } else if (team >= 90 && team <= 100) {
    matchteams.push(Teams.Team17);
  } else {
    matchteams.push(Teams.Team18);
  }
};
let i = 0;
while (i < 10) {
  deciderFunction(Objectoffunctions.pickteams());
  deciderFunction(Objectoffunctions.pickteams());
  console.log(matchteams);

  const act = `<div class = "hi">${matchteams.join(
    ' VS '
  )}   <button onclick ="pick1()" class= "pick" >pick</button></div>
  <div><button class = "but1" >Home</button><button>Draw</button><button class = "but2">Away</button></div> `;
  matchteams.pop();
  matchteams.pop();

  clubContainers2.insertAdjacentHTML('afterbegin', act);

  i++;
}
document.querySelectorAll('.but1').forEach(but =>
  but.addEventListener('click', function () {
    Objectoffunctions.odd();
  })
);
