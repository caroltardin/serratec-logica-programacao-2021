/*12.	O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas. Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda.*/

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