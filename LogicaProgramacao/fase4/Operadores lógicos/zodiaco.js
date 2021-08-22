/*O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.*/

const prompt = require("prompt-sync")();

var mes = prompt("Mês do seu nascimento: ")
var dia = prompt("Dia do aniversário: ")


var aquario = (mes == 1 && dia >= 21 ) || (mes == 2 && dia <= 18 )

console.log("Você é inteligente?" + aquario)
