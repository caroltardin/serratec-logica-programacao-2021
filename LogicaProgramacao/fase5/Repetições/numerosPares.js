/*No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc).*/

const prompt = require("prompt-sync")();

var numeros = [2,4,6,8,10];

do{
    console.log(`${numeros[0]}, ${numeros[1]}, ${numeros[2]}, ${numeros[3]}, ${numeros[4]}.`);

    numeros[0] += 10;
    numeros[1] += 10;
    numeros[2] += 10;
    numeros[3] += 10;
    numeros[4] += 10;

let continuar = prompt("Deseja continuar?")
continuar = continuar.toUpperCase()

verdade = continuar == ("S" || "SIM")

}while(verdade)