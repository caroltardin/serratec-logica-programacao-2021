/*O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.*/

const prompt = require("prompt-sync")()

var garrafa = prompt("Qual é capacidade da garrafa em militros?")

var metaAlcool = garrafa * 0.70
var metaGel = garrafa * 0.30

console.log(`A quantidade de alcool é ${metaAlcool} e a de gel é ${metaGel}`)