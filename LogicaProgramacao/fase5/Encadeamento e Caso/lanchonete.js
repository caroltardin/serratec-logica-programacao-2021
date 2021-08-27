
const prompt = require("prompt-sync")();


//entrada
console.log(":Lanchonete:")
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles")
var item1 = prompt("Escolha um complemento")
var item2 = prompt("Escolha outro complemento")
var molho = "sem molho"

//processamento
saladaTrue = (item1 == "A" || item1 == "T") || (item2 == "A" || item2 == "T") 
console.log(saladaTrue)