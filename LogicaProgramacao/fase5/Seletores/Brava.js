/*Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.*/

const prompt = require("prompt-sync")();

var sol = prompt("Tem sol?")
sol = sol == "S" || sol == "s"

if(sol){
    console.log("ROTINA DO FDS")
    console.log("Ir à praia")
    console.log("Almoço: lanche")
    console.log("Assistir e cochilinho")
}
else{
    console.log("ROTINA DO FDS")
    console.log("Aproveitar para estudar")
    console.log("Almoço: feijoada")
    console.log("Assistir e cochilinho")
}