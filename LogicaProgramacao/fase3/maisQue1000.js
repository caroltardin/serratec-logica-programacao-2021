/*O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero.*/
 
var multiplos100 = 1004 + 1008 + 1012 + 1016
var nPrimo = 2 + 3 + 5 + 7
var total = multiplos100 - nPrimo

console.log("O resultado é:" + total)