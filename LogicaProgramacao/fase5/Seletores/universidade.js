/*Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.*/

const prompt = require("prompt-sync")();

const vencimento = 15
var data = new Date
data = data.getDate();

var numeroBoleto = prompt("Número do Boleto: ")
var diaPag = prompt("Dia e mês de pagamento: ")

var desconto = diaPag >= 10 && diaPag <= 13

if (desconto)
    console.log(`Obrigada por pagar seu boleto nº ${numeroBoleto}. \n Seu desconto foi aplicado na próxima mensalidade conforme condições do contrato.`)
else
    console.log(`Pague seus boletos entre o dia 10 e 13 para obter desconto na próxima fatura.`)

