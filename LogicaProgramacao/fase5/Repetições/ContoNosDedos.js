/*No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem na tela em sequência. Ela vai experimentar vários números, até que digite um zero para parar de contar.*/

const prompt = require("prompt-sync")();

do{
    let contagem = prompt("Até quantos vamos contar? ")

    for(i=0; i <= contagem;){
        console.log(i++)

    }

   contagem = parseInt(contagem)
   continuar = contagem != 0
  
}while(continuar)
