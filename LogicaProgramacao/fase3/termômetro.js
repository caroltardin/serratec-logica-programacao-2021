/*4.	O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.*/

const prompt = require("prompt-sync")()

var graus = prompt("Quantos graus está fazendo agora")

var Fahrenheit = ((graus * 9) / 5) + 32

console.log(`Bom saber! Isso equivale a ${Fahrenheit} em Fahrenheit `)

