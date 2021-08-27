/*3.	Na “virada de ano novo”, um mostrador gigante no centro da cidade vai fazer a contagem junto com a galera. A regressiva de 10 segundos termina com o “Feliz ano novo!”.*/

const prompt = require("prompt-sync")();
var cara = 0
var coroa = 0


for (i= 0; i < 1000; i++) {
    var aleatorio = parseInt((Math.random()*2))
    if(aleatorio%2 == 0)
        cara++
    else
        coroa++
}

if (cara > coroa){
    var vencedora = "Cara"
    percentual = (cara/1000)*100}
else {
    vencedora = "Coroa"
    percentual = (coroa/1000)*100}

    console.log("O resultado do total das 1mil partidas de cara e coroa foi:")
    console.log("Cara " + cara)
    console.log("Caroa " + coroa)
    console.log(`${vencedora} venceu com ${percentual}%`)