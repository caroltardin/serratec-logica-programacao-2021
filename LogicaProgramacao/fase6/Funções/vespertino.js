/*O programa ‘Vespertino’ irá exibir uma mensagem personalizada de acordo com o período do dia. Tanto a leitura do do período ‘manhã, tarde ou noite’, quanto a impressão do texto de cordialidade serão montados em uma função sem retorno. A rotina será chamada duas vezes.*/

const prompt = require("prompt-sync")();


function vespertino(){
    periodoDia = prompt("Olá. Agora é manha, tarde ou noite?")
    periodoDia = periodoDia.toLowerCase()


    if(periodoDia == "manha")
    console.log("Bom dia, flor do dia!")
    else{ 
        if (periodoDia == "tarde")
        console.log("Bom tarde! Tenha uma tarde florida e abençoada!")
        else
        console.log("Boa noite, dama da noite!")
    }
}

for(i = 0; i < 2; i++){  
    vespertino()
}