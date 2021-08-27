/*O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.
Para ajudar o operador do Caixa, precisamos emitir a contagem das notas a entregar ao fornecedor, nos pagamentos até mil Reais.*/

const prompt = require("prompt-sync")();

var valorPg = prompt("Qual foi o valor para pagamento?")
valorPg = Number(valorPg)
valor = valorPg


if(valor > 1000)
    console.log("Pagamento em cheque.")


if(valor <= 1000){
    console.log("Pagamento em dinheiro")

    for(i = 1; valor >= 100;){
        valor = valor - 100
        var nota100 = i++  
    }
    
    for(i = 1; valor >= 20;){
        valor = valor - 20
        var nota20 = i++  
    }
    
    for(i = 1; valor >= 10;){
        valor = valor - 10
        var nota10 = i++  
    }

    for(i = 1; valor >= 5;){
        valor = valor - 5
        var nota5 = i++  
    }

    console.log("Relação de cédulas:")
    console.log(nota100 + " de R$ 100.00")
    console.log(nota20 + " de R$ 20.00")
    console.log(nota10 + " de R$ 10.00")
    console.log(nota5 + " de R$ 5.00")
    console.log(valor.toFixed(2) + " em moedas.")

}


