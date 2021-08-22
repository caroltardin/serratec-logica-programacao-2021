/*12.	Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.*/

const prompt = require("prompt-sync")();

var player1 = prompt("Digite um numero")
var player2 = prompt("Digite um numero")

var win1 = player1 > player2
var win2 = player1 < player2 
var empate = player1 == player2


console.log("Player 1: " + player1)
console.log("Player 2: " + player2)
console.log(": RESULTADOS :")
console.log("Player 1 venceu? " + win1)
console.log("Player 2 venceu? " + win2)
console.log("Houve empate? " + empate)