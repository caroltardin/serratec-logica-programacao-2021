/*O jogo da pirâmide melhorou, e agora a escultura será alinhada conforme o seu tamanho. O jogador também irá selecionar o caractere do desenho.*/

const prompt = require("prompt-sync")();

do{
    let piramide = prompt("Qual a altura da pirâmide você deseja? ")
    let marcador = prompt("Com qual marcador ela será construída? ")
    let linha = ""

    for(i = 0; i < piramide; i++){
        
        linha = marcador + " " + linha
        
        var espaco = " "
        var espacoAcumulado = ""
        for(j = piramide - i; j > 0; j--){
        espacoAcumulado = espaco + espacoAcumulado 
        
        }
            
        linhaF = espacoAcumulado + linha    
        console.log(linhaF)

    }
    let outraPiramide = prompt("Deseja fazer outra pirâmide?")

    continuar = outraPiramide == "s" || "S"
}while(continuar)