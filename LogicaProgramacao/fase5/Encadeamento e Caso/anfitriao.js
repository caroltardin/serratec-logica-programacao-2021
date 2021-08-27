/*O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.*/

const prompt = require("prompt-sync")();

var visita = prompt("Qual a sua visita?")
visita = parseInt(visita)


if(visita == 1){
    console.log("Visita:" + visita)
    console.log(`Você já nos visitou ${visita} vez.`)
    }
else{
console.log("Visitas:" + visita)
console.log(`Você já nos visitou ${visita} vezes.`)
}