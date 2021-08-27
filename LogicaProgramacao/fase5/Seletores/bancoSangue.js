/*Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.*/

const prompt = require("prompt-sync")();

let requisito = ["Pesa menos de 50kg ",
"Portador de Hepatite ",
"Já teve Malária ",
"Fez doação recente "]


console.log("== Banco de Sangue ==")
console.log("[Digite “S” ou “N” nas restrições a seguir]")


for (i = 0; i < requisito.length;){
    
    var resposta = prompt(requisito[i])
    var inapto = resposta == "S" || resposta == "s"

    if(inapto){
        console.log("Infelizmente você não está apto para a doação")
        i = requisito.length + 1
    }

    i++

}


if(!inapto)
    console.log("Você preenche todos os requisitos para doar sangue. Venha doar, venhas salvar vida!")