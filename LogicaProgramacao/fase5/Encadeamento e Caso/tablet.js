/*No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha.*/

const prompt = require("prompt-sync")();


//entrada
console.log(":Lanchonete:")
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito")
var item1 = prompt("Escolha um complemento")
var item2 = prompt("Escolha outro complemento")
var item3 = prompt("Escolha outro complemento")
var molho = "sem molho"

//processamento
saladaTrue = (item1 == "A" || item1 == "T") || (item2 == "A" || item2 == "T") || (item3 == "A" || item3 == "T") 

if (saladaTrue)
    var molho = prompt("Deseja adicionar molho? S ou N")
    if (molho == "S" || molho == "s")
        molho = ("com molho")
    else
        molho = ("sem molho")


//saida
console.log(":Cozinha:")
console.log(`Lanche com ${item1}, ${item2} e ${item3}, ${molho}.`)