/*Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.*/

const prompt = require("prompt-sync")();

//entrada
console.log(": Equipe A")
var pctA = prompt("Pacotes: ")
var feijaoA = prompt("Feijão: ")
console.log(": Equipe B")
var pctB = prompt("Pacotes: ")
var feijaoB = prompt("Feijão: ")

//processamento
var somaA = pctA - feijaoA + (feijaoA * 2)
if(pctA >= 9)
    somaA = somaA +1

var somaB = pctB - feijaoB + (feijaoB * 2)
if(pctB >= 9)
    somaB = somaB +1

//saida
console.log("[Apuração]")
console.log("Equipe A: " + somaA)
console.log("Equipe B:" + somaB)

if(somaA > somaB)
    console.log("E a vencedora é: Equipe A!")
else
    if(somaA < somaB)
    console.log("E a vencedora é: Equipe B!")   
    else
    console.log("Empate!")