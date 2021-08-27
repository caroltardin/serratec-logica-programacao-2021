/*No antigo programa “topa tudo por dinheiro”, o Silvio Santos chamava uma moça do auditório para contar os números de 1 a 40, substituindo por “pim” os números com final quatro ou múltiplos de quatro.*/

const prompt = require("prompt-sync")();
for(i = 1; i < 41; i++){
    valorI = i
    if(i % 4 == 0){
        i = "pim"
    }
    console.log(i)
    
    i = valorI


}
