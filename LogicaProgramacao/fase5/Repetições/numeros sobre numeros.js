/*Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência.*/

const prompt = require("prompt-sync")()

var numeroEntrada = prompt("Por favor, digite um número: ")
numeroEntrada = Number(numeroEntrada)
var soma = 0

for (i = (numeroEntrada); i > 0; i--) {
    console.log(i)
    soma = soma + i
    
}
console.log(soma)