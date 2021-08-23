/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas.*/

const prompt = require("prompt-sync")();


console.log("== Eleições 2020 ==")
var idade = prompt("Digite sua idade: ")

var avaliacao = idade >= 16

if (avaliacao)
    console.log("Você já pode votar? " + avaliacao)
else
console.log("Você já pode votar?" + avaliacao)
