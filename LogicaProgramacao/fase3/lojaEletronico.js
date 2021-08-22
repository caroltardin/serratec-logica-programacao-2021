/*Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.*/

var jogos = 345.00
var videogame = 1545.00
var totalCompra = jogos + videogame

var parc3SemJuros = totalCompra / 3 
var parc5SemJuros = totalCompra / 5
var juros10x = Math.round((totalCompra * 1.015) /10)

console.log("Você três opções de parcelamento. Veja a seguir:")
console.log(`3x sem juros. Valor da parcela ${parc3SemJuros}`)
console.log(`5x sem juros. Valor da parcela ${parc5SemJuros}`)
console.log(`10x com juros. Valor da parcela já com os juros ${juros10x}`)