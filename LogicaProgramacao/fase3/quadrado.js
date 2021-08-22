/*O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.*/

const prompt = require("prompt-sync")()

var numero = prompt("Por favor, insira um número")
quadradoN = numero ** 2

console.log(`O quadrado de ${numero} é ${quadradoN}.`)