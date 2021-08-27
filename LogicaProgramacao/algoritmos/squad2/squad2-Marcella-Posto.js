/*Um posto de combustível quer saber qual de seus combustíveis tem a preferência de seus clientes. Para isso, realizará uma pesquisa com 5 pessoas. Primeiramente, o cliente deve informar o tipo de combustível através dos seguintes códigos: 1.Gasolina, 2. alcool, 3.GNV e 4. diesel 5.fim. Se o cliente informar um código inválido, devemos pedir um novo código até que o mesmo seja válido. O programa encerrará caso ele informe o código 5. Após o encerramento, deve aparecer a mensagem "Obrigado" e também a quantidade de cada combustivel.*/

const prompt = require("prompt-sync")();


var gasolina = 0;
var alcool = 0;
var gnv = 0;
var diesel = 0;


do{
    console.log(" Olá. Qual o combustível?")
    console.log("1. Gasolina \n 2. Álcool \n 3.GNV \n 4. Diesel \n 5. Finalizar atendimento.")
    var combustivel = prompt("Insira o nº da opção desejada:")
    
    switch(combustivel){
    case "1": gasolina++
    break;
    case "2": alcool++;
    break;
    case "3": gnv++;
    break
    case "4": diesel++;
    break;
    default: console.log("Código inválido!");
    } 

    var i = (gasolina + alcool + gnv + diesel)
    console.log("Obrigada pela sua participação!")
}while (i<5)


console.log("RESULTADO DA PESQUISA")
console.log(`Gasolina recebeu: ${gasolina} votos.`)
console.log(`Álcool recebeu: ${alcool} votos.`)
console.log(`gnv recebeu: ${gnv} votos.`)
console.log(`Diesel: ${diesel} votos.`)
