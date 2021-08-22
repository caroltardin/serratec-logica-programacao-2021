/*A “continha oposta” lê um número e mostra seu valor negativo.*/

const prompt = require("prompt-sync")()

var numero = prompt("Por favor, insira um número positivo")
numero = numero * -1
console.log(numero)