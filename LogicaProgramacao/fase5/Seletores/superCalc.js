/*A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo número.*/

const prompt = require("prompt-sync")();

var valor1 = prompt("Insira um valor")
var operador = prompt("Insira o operador" + "+, -, * ou /  ")
var valor2 = prompt("Insira o segundo valor")

valor1 = Number(valor1)
valor2 = Number(valor2)

switch(operador){
    case "+":{
    resultado1 = valor1 + valor2
    console.log(resultado1)
    break;
    }   
    case "-":{
    resultado2 = valor1 - valor2
    console.log(resultado2)
    break;
    }   
    case "*":{
    resultado3 = valor1 * valor2
    console.log(resultado3)
    break;
    }   
    case "/":{
    resultado4 = valor1 / valor2
    console.log(resultado4)
    break;
    }   

}