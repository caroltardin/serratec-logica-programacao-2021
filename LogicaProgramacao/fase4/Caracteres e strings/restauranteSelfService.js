/*O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar no programa o preço do quilo e o total em gramas do prato. Considere que o prato vazio pesa 465 gramas (tara), e que a entrada sempre será maior que a tara. A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso apenas da refeição e o valor a pagar.*/

const prompt = require("prompt-sync")();


let precoQuilo = prompt("Valor do quilo: ")
let totalGramas = prompt("Quantas gramas tem o prato? ")
totalGramas = parseFloat(totalGramas)
let tara = 465
let totalComida = totalGramas - tara
let precoGrama = precoQuilo/1000

if(totalGramas <= 465){
    console.log("Peso inválido, insira os valores novamente")

}else{
    console.log(`== Restaurante Almoço Bom==
    Tara do prato ${tara}g
    Preço é ${precoQuilo/10} por 100g 
    Peso da refeição menos tara ${totalComida}g
    
    Valor total ${totalComida * precoGrama}
    
    `)

}