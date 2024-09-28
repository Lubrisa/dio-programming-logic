'use strict'

function computeRankedScore(wins, losses) {
  return wins - losses;
}

const player = {
    wins: 5,
    losses: 3,
    level: ""
};

if (player.wins < 10) player.level = "Ferro";
else if (player.wins < 15) player.level = "Cobre";
else if (player.wins < 20) player.level = "Bronze";
else if (player.wins < 50) player.level = "Prata";
else if (player.wins < 80) player.level = "Ouro";
else if (player.wins < 90) player.level = "Diamante";
else if (player.wins < 100) player.level = "Lendário";
else player.level = "Imortal";

const rankedScore = computeRankedScore(player.wins, player.losses);

console.log(`O herói tem de saldo de ${rankedScore} está no nível de ${player.level}.`);