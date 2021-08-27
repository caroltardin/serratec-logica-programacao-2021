/*A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.*/

const prompt = require("prompt-sync")();

var nome = prompt("Nome do paciente: ")
var vacina = prompt("Já foi vacinado? S ou N")

vacinaTomada = vacina == "s" ||vacina == "s" 

console.log("TRIAGEM")
if(vacinaTomada)
   console.log(vacinaTomada)
else
    console.log(!vacinaTomada)
