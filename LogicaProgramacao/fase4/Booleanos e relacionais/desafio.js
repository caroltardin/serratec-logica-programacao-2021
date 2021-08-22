/*A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.*/

const prompt = require("prompt-sync")();

var dia = prompt("Dia (hoje): ")
var cpf = prompt("CPF (após o hífen): ")

diaPar = dia % 2 == 00
cpfPar = cpf % 2 == 00

var validar = cpfPar == diaPar

console.log("Autorizado a entrar na loja? " + validar)


