/*Já sabemos como calcular se um número é par ou ímpar. Agora vamos criar duas funções, uma para cada, e usá-las em português! As funções devem retornar um valor lógico.*/

const prompt = require("prompt-sync")();


function impar(numero){
    let validacao = numero%2 != 0   
    return validacao
}


function par(numero){
    let validacao = numero%2 == 0 
    return validacao 
}

console.log(impar(2))
console.log(par(2))

console.log(par(1))
console.log(impar(1))

