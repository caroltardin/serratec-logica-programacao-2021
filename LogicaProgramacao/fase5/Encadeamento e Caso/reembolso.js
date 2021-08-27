/*9.	Como o restaurante não faz “Reembolso” de valores inteiros entre 20 e 100 Reais, a recepcionista irá digitar o valor e o sistema preencherá um cupom desconto.*/

const prompt = require("prompt-sync")();

var reembolso = prompt("Qual o valor do reembolso?")
reembolso = parseFloat(reembolso)
reembolso = reembolso.toFixed(2)

  if(reembolso >= 20 && reembolso <=100){
    console.log(":: Restaurante Braya ::")
    console.log("Cupom desconto para sua próxima visita: R$ " + reembolso)
  }else{
    console.log("Tipo de reembolso não aplicável para esse valor.")
  }