/*3.	Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).*/

const prompt = require("prompt-sync")();

limiteContagem = prompt("Olá, até que número você quer contar?")
parImpar = prompt("Você quer a numeração par ou impar?")

for(i = 1; i <= limiteContagem; i++){
    
    if(parImpar == "par"){
      if(i%2 == 0)
        console.log(i)
    }
    
    else{
        if(i%2 != 0)
        console.log(i)
    }

}