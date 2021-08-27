/*9.	A loja “Casas Sergipe” vende os seguintes itens:
001 Cadeira simples - R$ 100,00
002 Cadeira luxo - R$ 200,00
003 Mesa simples - R$ 450,00
004 Mesa luxo - R$ 900,00
005 Cama - R$ 1500,00
Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.
10.	O vendedor das Casas Sergipe não pode perder negócio. Por isso, após o item, o sistema pergunta se deseja “Exibir preço com desconto”, que deve abater 5% no valor do produto.
*/

const prompt = require("prompt-sync")();


var nRegistro = prompt ("A loja “Casas Sergipe” vende os seguintes itens:")
nRegistro = parseInt(nRegistro)

var preco1 = 100
var preco2 = 200
var preco3 = 450
var preco4 = 900
var preco5 = 1500


switch(nRegistro){
    case 1: console.log("Cadeira simples R$ " + preco1); break;
    case 2: console.log("Cadeira luxo R$ " + preco2); break;
    case 3: console.log("Mesa simples R$" + preco3); break;
    case 4: console.log("004 Mesa luxo R$" + preco4); break;
    case 5: console.log("Cama R$" + preco5); break;
    default: console.log("Opção inválida."); break;
    }

if (nRegistro == 1 || nRegistro == 2 || nRegistro == 3 || nRegistro == 4 || nRegistro == 5){
var precoDesconto = prompt("Exibir preço com desconto?")
    if (precoDesconto == "S" || precoDesconto == "s"){
        switch(nRegistro){
            case 1: console.log("Cadeira simples R$" + (preco1*0.95)); break;
            case 2: console.log("Cadeira luxo R$" + (preco2 * 0.95)); break;
            case 3: console.log("Mesa simples R$" + (preco3 * 0.95)); break;
            case 4: console.log("004 Mesa luxo R$" + (preco4 * 0.95)); break;
            case 5: console.log("Cama R$" + (preco5 * 0.95)); break;
        }
        
    }
console.log("Consulta finaliza. Boas vendas!")
}