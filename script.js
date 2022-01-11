let maps = ['Fracture','Breeze','Icebox','Bind','Haven','Split','Ascent'];
let players = []

// check if Name is add to parameter then change player name
if (process.argv[2] !== undefined) {
    for (let i=2;i<process.argv.length;i++) {
        players.push(process.argv[i])
    }
} else {
    players = ['Kan','Oh','Jo','Jame','Bomb','Peat','Sin','Tor','Kor'];
}

const randomTeam = (player) => {
    let team1 = [];
    let teamNumber1 =  Math.ceil(player.length / 2);

    for (let i=0;i<teamNumber1;i++) {
        let playertmp = player[Math.floor(Math.random() * player.length)]
        team1.push(playertmp);
        player.splice(player.findIndex(Element => Element === playertmp),1)
    }
    let team2 = player

    return [team1,team2]
}

let [team1,team2] = randomTeam(players)

const mapChoose = maps[Math.floor(Math.random() * maps.length)]

console.log(`Map is ${mapChoose}`)
console.log(`team 1: ${team1}`)
console.log(`team 2: ${team2}`)
