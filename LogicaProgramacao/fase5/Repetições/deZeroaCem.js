/*O programa “de zero a cem” mostra na tela todos os números desse intervalo, mesmo trabalhando com limites de início e fim da repetição definida de 1 a 10.*/

const prompt = require("prompt-sync")();

for(i = 1; i < 100;){
    console.log("Início " + i)
    
    for(j = i+1; j <= i+9; j++){
   
    console.log(j)
    }
    i = j

}