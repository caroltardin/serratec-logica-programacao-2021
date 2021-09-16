/*O jogo “pedra, papel e tesoura” agora é melhor de três! O código será colocado em uma função, e sua chamada será feita até três vezes, de acordo com as partidas anteriores.*/

const prompt = require("prompt-sync")();


function PPT(){

    do{
        console.log(` Pedra... Papel... Tesoura...`)
        
        var resposta = prompt("Qual a sua escolha?")
        resposta = resposta.toUpperCase()
        var fraquezaDragrao = parseInt(Math.random() * 3)
        var arma
        var respostaInvalida = 0
        
        
    
            switch(resposta){
                
                case "PEDRA": arma = 0; break; 
                case "PAPEL": arma = 1; break; 
                case "TESOURA": arma = 2; break;
    
                default: {
                console.log("Resposta inválida. Tente novamente")
                respostaInvalida = true
                };
    
            } 
    
        } while(respostaInvalida)
    
    
        if (fraquezaDragrao == arma)
        console.log("Empate.")
        else
            if (
                (fraquezaDragrao == 0 && arma == 2) ||
                (fraquezaDragrao == 1 && arma == 0) ||
                (fraquezaDragrao == 2 && arma == 1)
    
            )
            console.log("Parabéns, você ganhou!")
            
            else
            console.log("Não foi dessa vez :( Você perdeu.")
           

}



do{
    for(i = 0; i < 3; i++){
        PPT()

    }

var jogarNovamente = prompt("Deseja jogar novamente?")

} while(jogarNovamente == "S" || jogarNovamente == "s" || jogarNovamente == "Sim" || jogarNovamente == "sim")