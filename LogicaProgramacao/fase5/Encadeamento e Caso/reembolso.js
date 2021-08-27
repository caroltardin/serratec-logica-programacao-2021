/*9.	Como o restaurante não faz “Reembolso” de valores inteiros entre 20 e 100 Reais, a recepcionista irá digitar o valor e o sistema preencherá um cupom desconto.*/

const prompt = require("prompt-sync")();

var reembolso = prompt("Qual o valor do reembolso?")
reembolso = parseInt(reembolso)

  if(reembolso >= 20 && reembolso <=100){
    console.log(":: Restaurante Braya ::")
    console.log("Cupom desconto para sua próxima visita: " + reembolso)
  }else{
    console.log("Para esse tipo de reembolso fazer seguir outro procedimento.")
  }