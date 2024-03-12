//alert("hi");
//const overall = document.querySelector(".overall");
//const username = prompt("USERNAME:");
//const password = prompt("PASSWORD");
//if (username && password) {
//  overall.classList.remove("overall");
//}
/*
const trunc = 
};
*/

const odds = {
  Home: (Math.random() * 12) / 2,
  draw: (Math.random() * 12) / 2,
  Away: (Math.random() * 12) / 2,
};

//

teamtoday = function () {
  return [
    Math.trunc(Math.random() * 10),
    Math.trunc(Math.random() * 10),
    //Math.trunc(Math.random() * 10),
    // Math.trunc(Math.random() * 10),
  ].join("");
};

teamtoday2 = function () {
  return [
    Math.trunc(Math.random() * 10),
    Math.trunc(Math.random() * 10),
    //Math.trunc(Math.random() * 10),
    // Math.trunc(Math.random() * 10),
  ].join("");
};
console.log(teamtoday());
console.log(teamtoday2());
/*
const teamsdecisder = function (team1, team2) {
  for (const value of premierleague) {
    if (team1 || team2 < 20) {
      console.log(value);
    } else if (team1 && team2 > 20) {
      console.log(value);
    } else if ((team1 && team2 > 30 && team1) || team2 < 40) {
      console.log(value);
    } else if ((team1 && team2 > 40 && team1) || team2 < 50) {
      console.log(value);
    } else if ((team1 && team2 > 50 && team1) || team2 < 60) {
      console.log(value);
    } else if ((team1 && team2 > 60 && team1) || team2 < 70) {
      console.log(value);
    } else if ((team1 && team2 > 70 && team1) || team2 < 80) {
      console.log(value);
    } else if ((team1 && team2 > 90 && team1) || team2 < 100) {
      console.log(value);
    }
  }
};
teamsdecisder(60, 90);
*/
let teamonform = [];
const onForm = function (home, away) {
  if (
    home === "Arsenal" ||
    "Manchester United" ||
    "Manchester City" ||
    "Liverpool" ||
    "Spurs" ||
    "Newcastle United"
  ) {
    teamonform.push("true");
  } else {
    teamonform.push("false");
  }
  if (
    away === "Arsenal" ||
    "Manchester United" ||
    "Manchester City" ||
    "Liverpool" ||
    "Spurs" ||
    "Newcastle United"
  ) {
    teamonform.push("true");
  } else {
    teamonform.push("false");
  }
};

const premierleague = [
  "Arsenal",
  "Aston Villa",
  "AFC Bournmouth",
  "Liverpool",
  "Manchester United",
  "Manchester City",
  "Nottinham Forest",
  "Luton Town",
  "Crystal Palace",
  "Everton",
  "West ham",
  "Shieffield United",
  "Newcastle United",
  "Wolverhamplton wanders",
  "Chelsea FC",
  "Fulham",
  "Burnley",
  "Spurs",
  "Brentford",
];
const matchteams = [];
const teampicker = function (team) {
  if (team >= 10 && team <= 15) {
    matchteams.push(premierleague[0]);
  } else if (team >= 15 && team <= 20) {
    matchteams.push(premierleague[1]);
  } else if (team >= 20 && team <= 25) {
    matchteams.push(premierleague[2]);
  } else if (team >= 25 && team <= 30) {
    matchteams.push(premierleague[3]);
  } else if (team >= 30 && team <= 35) {
    matchteams.push(premierleague[4]);
  } else if (team >= 35 && team <= 40) {
    matchteams.push(premierleague[5]);
  } else if (team >= 40 && team <= 45) {
    matchteams.push(premierleague[6]);
  } else if (team >= 45 && team <= 50) {
    matchteams.push(premierleague[7]);
  } else if (team >= 50 && team <= 55) {
    matchteams.push(premierleague[8]);
  } else if (team >= 55 && team <= 60) {
    matchteams.push(premierleague[9]);
  } else if (team >= 60 && team <= 65) {
    matchteams.push(premierleague[10]);
  } else if (team >= 65 && team <= 70) {
    matchteams.push(premierleague[11]);
  } else if (team >= 70 && team <= 75) {
    matchteams.push(premierleague[12]);
  } else if (team >= 75 && team <= 80) {
    matchteams.push(premierleague[13]);
  } else if (team >= 80 && team <= 85) {
    matchteams.push(premierleague[14]);
  } else if (team >= 85 && team <= 90) {
    matchteams.push(premierleague[15]);
  } else if (team >= 90 && team <= 100) {
    matchteams.push(premierleague[16]);
  } else {
    matchteams.push(premierleague[17]);
  }
};
const change = function () {};
teampicker(teamtoday());
teampicker(teamtoday());
//teampicker(teamtoday());
//teampicker(teamtoday2());
const arsenal = document.querySelector(".arsenal");
//arsenal.insertAdjacentHTML("afterbegin", act);
let act = [];

console.log(matchteams);
//const act = `<div>${matchteams.join(" VS ")}</div>`;
let i = 0;
while (i < 11) {
  teampicker(teamtoday());
  teampicker(teamtoday());
  const act = `<div>${matchteams.join(" VS ")}</div>
  <div><button class = "big" onclick = "change1()" >odds</buttons> <button>odds</buttons> <button>odds</buttons></div`;
  if (matchteams.length > 2) {
    matchteams.pop();
    matchteams.pop();
  }

  arsenal.insertAdjacentHTML("afterbegin", act);
  console.log(matchteams);
  matchteams.pop();
  matchteams.pop();
  matchteams.pop();
  matchteams.pop();
  i++;
}

//arsenal.insertAdjacentHTML("afterbegin", act);
console.log(odds.Home);
if ((teamonform[0] = "true")) {
  odds.Home / 2;
} else {
  odds.Away / 3;
}

if ((teamonform[1] = "true")) {
  odds.Home / 2;
} else {
  odds.Away / 3;
}

if (teamonform[0] && teamonform[1]) {
  odds.draw / 2;
}
onForm(...matchteams);

const big = document.querySelector(".big");
const change1 = function () {
  big.innerHTML = odds.Home;
  
};
