/*É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.*/

const prompt = require("prompt-sync")();

var sexo = prompt("Qual o seu sexo? Digite F para feminino ou M masculino")
var anoNasc = prompt("Qual o seu ano de nascimento? Digitar com os 4 dígitos")

var data = new Date
data = data.getFullYear() 

var idade = data - anoNasc


var emancipado = (sexo == "M" && idade >= 18) || (sexo != "M" && idade >= 21)

console.log("Cidadão emancipado? " + emancipado)
