/*O programa “Cara ou coroa” irá funcionar assim: O sistema irá solicitar um número, o jogador irá digitar o valor que preferir. O programa então irá exibir uma resposta em texto fixo, onde a única variável é o resultado da moeda. Para “jogar a moeda”, considere o número digitado: Sendo par é cara, sendo ímpar é coroa.*/

const prompt = require("prompt-sync")();

console.log("Como está sua sorte?")

let numero = prompt("Jogue a moeda (digite qualquer número): ")

let sorteio = parseInt(Math.random()*2)
let aposta = 0

if((numero%2) == 0)
    aposta = 0
else 
    aposta = 1

if(sorteio == aposta){
    console.log("Você ganhou")
}else(console.log("Você perdeu"))




console.log(`Veja o resultado abaixo: 
0 é cara e representa todos os números pares
1 é coroa e representa todos os números ímpar`)
console.log(`O sorteio deu ${sorteio}`)