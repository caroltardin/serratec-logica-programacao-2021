/*O programa “Estatístico” irá somar todos os números divisíveis por três entre 3 e 300, e além de exibir o resultado, irá dizer se o resultado também é divisível por três!*/

const prompt = require("prompt-sync")();
var soma = 0

for(i = 3; i <= 300; i++){
    if(i%3 == 0){
        console.log(i)
        soma = soma + i
    }
    
}

divisivel3 = soma%3 == 00

console.log("A soma dos resultados é " + soma)
console.log("A soma é divisível por 3?" + divisivel3)