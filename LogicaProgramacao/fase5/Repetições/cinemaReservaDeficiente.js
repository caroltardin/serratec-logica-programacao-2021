/*A bilheteria do cinema reservou todas as poltronas terminadas em 6 para deficientes. A sala de projeção possui 40 lugares, e para cada um, o sistema irá imprimir se o ingresso pode ser vendido ou não.*/

const prompt = require("prompt-sync")();

while(true){
    let nCadeira = prompt("Qual o número da sua cadeira?")

    if(nCadeira > 40)
    console.log("Número de poltrona inválido.")
    else{
        if((nCadeira.substring(nCadeira.lastIndexOf("")-1)) == 6)
        console.log("Poltrona preferencial. Ingresso não pode ser vendido.")

        else
        console.log("Poltrona normal. Favor prosseguir para o local de pagamento.")
    }

}
