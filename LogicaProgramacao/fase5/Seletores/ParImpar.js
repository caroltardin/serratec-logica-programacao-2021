/*Os jogadores querem que o programa “Par ou ímpar” escreva respostas mais completas. Dessa vez, eles querem fazer sua escolha antes de digitar os números.*/

const prompt = require("prompt-sync")();
//entrada
var resultado = prompt("Jogador 1, escolha [par] ou [impar]: ") 
var jogador1 = prompt("Jogador 1, quantos dedos?") 
var jogador2 = prompt("Jogador 2, quantos dedos?") 
var soma = parseInt(jogador1) + parseInt(jogador2)

//processamento
var imparPar = soma%2

if(imparPar == 0)
    tipo = "par"
else 
    tipo = "impar"


if(tipo == resultado)
    vencedor = "1"    
else
    vencedor = "2"    


//saida
console.log(`A soma é ${soma}, como esse número é ${tipo}, o jogador ${vencedor} venceu!`)