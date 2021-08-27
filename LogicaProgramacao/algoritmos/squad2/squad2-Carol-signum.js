/* Olá, dev. Estou criando um novo mapa astral para minhas previsões astrológicas. Para isso, os signos serão remodelados conforme a seguir: Quem nasceu no 1º trimestre do ano será do signum mar, quem nasceu no 2º trimestre será terra, no 3º trimestre será Sol e por fim, no 4º trimestre, será lua. Preciso que colete a data de nascimento mas eu não preciso do ano, somente do dia e o mês. Após o usuário informar sua data o sistema deve dizer qual signum ele pertence. Por fim, faça uma pesquisa de satisfação para saber se ele gostou ou não gostou. */ 

const prompt = require("prompt-sync")();
do{
console.log("Olá, bem-vindo! Vamos descobrir seu sigum?" )
var mes = prompt("Por favor, digite sua data de nascimento. Conforme exemplo: dd/mm/aaaa. Não se esqueça dos parênteses :D")

mes = mes.substr(3,2)
mes = parseInt(mes)

var mar = mes <= 3
var terra = mes >= 4 && mes <= 6
var sol = mes >= 7 && mes <= 9
var lua = mes >= 10 &&  mes <= 12
var invalida = !(mar || terra || sol || lua)

if(mar)
    console.log("Seu signum é Mar")
        if (terra)
             console.log("Seu signum é Terra")
             else 
                 if (sol)
                 console.log("Seu signum é Sol")
                 else
                     if (lua)
                     console.log("Seu signum é Lua")

if (invalida){
console.log("Resposta inválida. Tente novamente!")
console.log("Observação: você deve usar dois digitos para as datas e usar a barra para separação.")
     }
     
}while(invalida)


var avalicao = prompt("O que achou do nosso atendimento? Digite 1 para gostei, 2 para não gostei, 3 não desejo avaliar")                                            

console.log("Obrigada pela sua avaliação!")