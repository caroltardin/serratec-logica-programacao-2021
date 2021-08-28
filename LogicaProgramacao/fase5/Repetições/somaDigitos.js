/*Na “soma de dígitos”, o programa mostra a soma dos algarismos do número inteiro.*/

const prompt = require("prompt-sync")();

let entrada = prompt("Qual o seu número?")
let entradaArray = entrada.split("")
let total = 0

for(i = 0; i < entrada.length; i++){

    total = total + parseInt(entradaArray[i])

   
}

console.log(`A soma é ${total}`)