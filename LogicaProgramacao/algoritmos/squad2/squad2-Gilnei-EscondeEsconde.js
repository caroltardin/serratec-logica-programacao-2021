/*Vamos criar um pequeno jogo de esconde-esconde. A máquina se esconderá e o participante terá 5 lugares para adivinhar: 1 - embaixo da cama; 2- armário; 3 - porão; 4 - atrás da porta; 5 - banheiro. */


const prompt = require("prompt-sync")();

do{
        do{
        console.log("Bem vindo ao jogo de esconde-esconde!")
        console.log("Temos 5 esconderijos:")
        console.log("1 - Embaixo da cama \n 2 - Armário \n 3 - Porão \n 4 - Atrás da porta \n 5 - Banheiro")
        var chuteLocal = prompt("Preencha o nº do local que você acha que eu estou")
        var opcaoValida = chuteLocal == 1 ||chuteLocal == 2 ||chuteLocal == 3 ||chuteLocal == 4 ||chuteLocal == 5

        if (!opcaoValida)
            console.log("Opção inválida. Tente novamente.")

        }while(!opcaoValida)

var local = Math.floor(Math.random() * 5) + 1;
var resultado 

if(resultado = chuteLocal == local)
    console.log("Você me achou! Parabéns!")  
else
    console.log("Ahhh não foi dessa vez, eu estava no " + local) 

var jogarNovamente = prompt("Deseja jogar novamente?")
}while(jogarNovamente == "S" || jogarNovamente == "s" || jogarNovamente == "sim")