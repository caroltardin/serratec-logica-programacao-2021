/*11.	Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.*/

const prompt = require("prompt-sync")();

var totalVenda = prompt("Qual foi o total das suas vendas?")
totalVenda = Number(totalVenda)


if(totalVenda <= 5000){
    comisao = totalVenda * 0.05
    console.log("Sua comissão: " + comisao)
}

if(totalVenda > 5000){
    comisao = totalVenda * 0.05
    console.log("Sua comissão: " + comisao)
    comisaoAdicional = (totalVenda - 5000) * 0.09
    console.log("Valor adicional: " + comisaoAdicional)
}

