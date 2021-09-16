/*O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo. Para escrever as mensagens, utilize variáveis com concatenação de strings. O valor será escrito separadamente (no console.log).*/

const prompt = require("prompt-sync")();

let nome = prompt("Qual o seu nome? ")
let empresa = prompt("Qual a sua empresa? ")
let funcao = prompt("Qual a sua funcao? ")
let valorEmprestimo = prompt("Qual o valor do empréstimo? ")




console.log(`Senhor(a) ${nome}, você está com sorte! Pela sua função de ${funcao}, e sua excelente relação com a empresa onde trabalha (${empresa}), foi aprovado um crédito em sua conta corrente de R$ ${valorEmprestimo * 0.86}`)
