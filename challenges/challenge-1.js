'use strict';

const hero = {
    name: "Batman",
    xp: 1212,
    level: ""
}

if (hero.xp <= 1000) hero.level = "Ferro";
else if (hero.xp <= 2000) hero.level = "Bronze";
else if (hero.xp <= 5000) hero.level = "Prata";
else if (hero.xp <= 7000) hero.level = "Ouro";
else if (hero.xp <= 8000) hero.level = "Platina";
else if (hero.xp <= 9000) hero.level = "Ascendente";
else if (hero.xp <= 10000) hero.level = "Imortal";
else hero.level = "Radiante";

console.log(`O herói de nome ${hero.name} está no nível de ${hero.level}.`);