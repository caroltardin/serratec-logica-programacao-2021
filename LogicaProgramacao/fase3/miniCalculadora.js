/*Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.*/


const prompt = require("prompt-sync")()

var valor1 = prompt("Por favor, insira um número") 
var valor2 = prompt("Por favor, insira outro número")

soma = parseFloat(valor1) + parseFloat(valor2)
var subtracao = valor1 - valor2
var multiplicacao = valor1 * valor2
var divisao = valor1 / valor2

console.log(`A SOMA dos números inseridos é ${soma}`)
console.log(`A SUBTRAÇÃO dos números inseridos é ${subtracao}`)
console.log(`A MULTIPLICAÇÃO dos números inseridos é ${multiplicacao}`)
console.log(`A DIVISÃO dos números inseridos é ${divisao}`)