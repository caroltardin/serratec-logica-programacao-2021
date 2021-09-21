/*O “Sistema do IPVA” avisa ao contribuinte o mês de pagamento do tributo, de acordo com o final da placa do carro. O motorista irá digitar a placa do carro com 4 dígitos inteiros. A resposta do programa será o dígito final da placa. Como informativo, após a resposta, será impressa a tabela completa com os meses de pagamento.*/

const prompt = require("prompt-sync")();

let placa = prompt("Digite a placa do carro: ")
let finalPlaca = parseInt(placa[placa.length - 1])

if(finalPlaca >= 1 && finalPlaca <= 5)
    console.log(`Seu carro é final ${finalPlaca}. Pagamento em JANEIRO`);  
else
    console.log(`Seu carro é final ${finalPlaca}. Pagamento em FEVEREIRO`);

console.log(`Confira a tabela completa de pagamentos:
Final 1, 2, 3, 4 e 5 - Pagamento em janeiro
Final 6, 7, 8, 9 e 0 - Pagamento em fevereiro`)