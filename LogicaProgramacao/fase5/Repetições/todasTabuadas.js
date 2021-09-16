/*No sistema “Todas as tabuadas”, o aluno de matemática não precisa escolher o número: As tabuadas entre 2 e 10 serão impressas de uma vez.*/

const prompt = require("prompt-sync")();


for(var tabuada = 2; tabuada < 11; tabuada++){
    console.log("TABUADA DE " + tabuada)
 
    for (var seqTabuada = 2; seqTabuada <= 10; seqTabuada++)
    {var resultado = seqTabuada*tabuada  

        console.log(tabuada + " x " + seqTabuada + " = " + resultado)
    }


}