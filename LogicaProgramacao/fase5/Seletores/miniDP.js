/*O “mini DP” aumentou seus cálculos. Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.
a.	Salário base (valor da hora * horas normais)
b.	Valor de horas extras
c.	Valor do desconto para o INSS
d.	Salário líquido (Salário base + horas extras – desconto INSS)
e.	Imprimir na tela o contracheque do funcionário.
*/

const prompt = require("prompt-sync")();

var salarioBase = prompt("Qual o salário base? ")
salarioBase = Number(salarioBase)
var hrExtra = prompt("Quantas horas extras foram feitas? ")
var inssSalario = salarioBase * 0.05 //considerando o valor ficticio de 5% sobre o valor da hora
var horaBase = salarioBase/160


    console.log(":::CONTRACHEQUE:::")

    console.log("Salário Base " + salarioBase)
    
    valorHrExtra = hrExtra * horaBase
    console.log("Hora extra " + valorHrExtra)
    
    var descINSS = inssSalario + valorHrExtra * 0.05
    console.log("Desconto de INSS " + descINSS)

    var salarioLiquido = salarioBase + valorHrExtra - descINSS
    console.log("Salário Líquido: " + salarioLiquido)




