/*A função “Natação” devolve a categoria do nadador a partir da idade recebida por parâmetro. Até 5 anos, Golfinho; 5 a 7 anos, Infantil A; 8 a 10 anos, Infantil B; 11-13 anos, Juvenil A; 14-17 anos, Juvenil B. Maiores de 18 anos, Adulto.*/

const prompt = require("prompt-sync")();


function natacao(idade){
    if(idade < 5)
        console.log("Sua categoria é Golfinho")
    if(idade >= 5 && idade <= 7)
        console.log("Sua categoria é Infantil A")
    if(idade >= 8 && idade <= 10)
        console.log("Sua categoria é Infantil B")
    if(idade >= 11 && idade <= 13)
        console.log("Sua categoria é Juvenil A")
    if(idade >= 14 && idade <= 17)
        console.log("Sua categoria é Juvenil B")
    if(idade >= 18)
        console.log("Sua categoria é Adulto")
    
}

while(true){
    natacao(prompt("Qual a sua idade? "))
}