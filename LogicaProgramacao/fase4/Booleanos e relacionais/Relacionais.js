/*O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.*/

const prompt = require("prompt-sync")();

var A = prompt("Por favor, digite um número inteiro")
var B = prompt("Por favor, digite outro número inteiro")

var igual = A == B
var diferente = A != B
var maior = B > A
var maiorIgual = A >= B
var menor = A < B
var menorIgual = A <= B

console.log("A é igual a B " + igual)
console.log("A é diferente de B " + diferente)
console.log("A é maior que B " + maior)
console.log("A é maior ou igual a B " + maiorIgual)
console.log("A é menor que B " + menor)
console.log("A é menor ou igual a B " + menorIgual)


