/*O programa “Par ou ímpar” irá solicitar que dois jogadores entrem com um número, e anunciar o vencedor usando as iniciais das palavras.*/

const prompt = require("prompt-sync")()

//entrada
console.log("== Jogo do [P] Par ou [I] Ímpar ==")
var jogador1 = prompt("Jogador 1")
var jogador2 = prompt("Jogador 2")

//processamento
var resultado = parseFloat(jogador1) + parseFloat(jogador2)

var par = resultado % 2 == 00



//saida
if(par)
    console.log(`Resultado = ${resultado}, esse número é [P]!`)
else
console.log(`Resultado = ${resultado}, esse número é [I]`)