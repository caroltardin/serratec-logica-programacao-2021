/*O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
a.	O salário bruto (horas trabalhadas * valor hora)
b.	O valor do desconto para o INSS
c.	O salário líquido (adicionais menos descontos).
d.	Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações com formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.*/

const prompt = require("prompt-sync")();

let nomeFuncionario = prompt("Nome do funcionário: ")
let hrMes = prompt("Quantidade de horas trabalhadas mês: ")
let valorHR = prompt("Valor da hora: ")
let INSS = prompt("Percentual de desconto INSS: ")

let salarioBruto = hrMes*valorHR
let valorINSS = salarioBruto*(INSS/100)

console.log(`CONTRACHEQUE
Nome ${nomeFuncionario}
Salário Bruto: ${salarioBruto}
Desconto INSS: ${valorINSS}
Salário Líquido: ${salarioBruto-valorINSS}
`)
