let maps = ['Fracture','Breeze','Icebox','Bind','Haven','Split','Ascent'];
let players = ['Kan','Oh','Jo','Jame','Bomb','Peat','Sin','Tor','Kor'];

let team1 = [];

let teamNumber1 =  Math.ceil(players.length / 2);
let teamNumber2 =  players.length - teamNumber1;


for (let i=0;i<teamNumber1;i++) {
    let player = players[Math.floor(Math.random() * players.length)]
    team1.push(player);
    players.splice(players.findIndex(Element => Element === player),1)
    
}

let team2 = players
const mapChoose = maps[Math.floor(Math.random() * maps.length)]

console.log(`Map is ${mapChoose}`)
console.log(`team 1: ${team1}`)
console.log(`team 1: ${team2}`)