/*Na "Maratona de programação", as duas equipes locais com mais pontos serão classificadas para a etapa nacional. O sistema da competição irá ler o nome e a pontuação de cada time, e depois de todas as entradas, imprimir o “Pódio”. Após a última equipe, vem um nome vazio.*/

const prompt = require("prompt-sync")();
var pontoUm = 0
var pontoDois = 0
var equipeUm = ""
var equipeDois = ""

do{
    var nome = prompt("Nome da equipe: ")
    if(nome != ""){
    var ponto = prompt("Pontuação do equipe: ")}
    ponto = parseInt(ponto)

    if(ponto > pontoUm){
       pontoUm = ponto
       equipeUm = nome

    }else if (ponto > pontoDois){
        pontoDois = ponto
        equipeDois = nome
    }

}while(nome != "")

console.log(equipeUm)
console.log(equipeDois)