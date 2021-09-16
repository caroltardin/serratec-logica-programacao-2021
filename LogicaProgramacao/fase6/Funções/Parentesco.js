/*A função “Parentesco” recebe um número inteiro por parâmetro e retorna Verdadeiro caso seja um número Primo.*/

const prompt = require("prompt-sync")();

function parentesco(numero){
    if(numero == 1)
    console.log(numero + " não é um número primo")

    for(i = numero - 1; i > 0; i--){


        if(numero%i != 0)
            var teste = numero%i != 0 //não quero condição nenhuma, só quero que o for continue
        else{
            if(i == 1)
            console.log(numero + " é um número primo")
            else{
            console.log(numero + " não é um número primo")
            break;
            }
        }    
    }
}


while(true){
    parentesco(prompt("Insira o número "))
}