/*O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.*/

const prompt = require("prompt-sync")();

var a = prompt("Insira a ângulo interno do lado A")
var b = prompt("Insira a ângulo interno do lado B")
var c = prompt("Insira a ângulo interno do lado C")

var somaAngulo = a + b + c == 180 

console.log("As medidas são válidas?" + somaAngulo)
