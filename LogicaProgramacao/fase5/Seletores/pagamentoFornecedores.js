/*O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.*/

const prompt = require("prompt-sync")();

var valorPG = prompt("Qual foi o valor para pagamento?")
valorPG = Number(valorPG)


if(valorPG <= 1000){
    console.log("Pagamento em dinheiro")
}

if(valorPG > 1000)
    console.log("Pagamento em cheque.")


