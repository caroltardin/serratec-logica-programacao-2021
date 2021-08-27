/*Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.*/

const prompt = require("prompt-sync")();

var tabuada = prompt("Qual nº você seja exibir a tabuada e o quadrado?")

console.log("TABUADA DE " + tabuada)
for (var seqTabuada = 1; seqTabuada <= 10; seqTabuada++)
{var resultado = seqTabuada*tabuada   

    console.log(tabuada + " x " + seqTabuada + " = " + resultado)
}

console.log(tabuada + " ELEVADO" )
for (var seqTabuada = 1; seqTabuada <= 10; seqTabuada++)
{var resultado = Math.pow(tabuada,seqTabuada)

    console.log(tabuada + " ^ " + seqTabuada + " = " + resultado)
}