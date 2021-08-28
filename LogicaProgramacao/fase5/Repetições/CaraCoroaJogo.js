/*4.	O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.*/

const prompt = require("prompt-sync")();
var cara = 0
var coroa = 0
var qtdPartida = 0

escolha = prompt("Qual a sua escolha? cara ou coroa ")
escolha = escolha.toLowerCase()

do{
    var aleatorio = parseInt((Math.random()*2))
    qtdPartida++

    if(aleatorio%2 == 0)
        aleatorio = "cara"
    else
        aleatorio = "coroa"

    if(aleatorio == escolha)
        console.log(`Parabéns, você ganhou na ${qtdPartida}º rodada.`)
    else
        console.log(`Você perdeu, deu ${aleatorio}.`)

} while(escolha != aleatorio)
