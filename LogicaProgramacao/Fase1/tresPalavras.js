/*Um amigo meu disse que consegue escrever três palavras diferentes sem tirar a caneta do papel. No caso do nosso programa, o comando de escrita só pode ser chamado uma vez, porém as três mensagens devem ser separadas no console.*/

const prompt = require("prompt-sync")()

var tresPalavras = prompt("Por favor, escreva 3 palavras")

var resultado = tresPalavras.split(" ", 3)

console.log(resultado[0]) 
console.log(resultado[1])
console.log(resultado[2])