/*Agora o “IMC” é calculado em uma função, que contém a tabela e as respostas. O programa irá ler os valores do peso e altura, enviar para a função, receber a resposta em texto, e mostrar na tela.*/

const prompt = require("prompt-sync")();


function IMC(peso, altura){
    imc = peso/(altura*altura)

console.log(imc)
    if(imc < 17)
    console.log("Muito abaixo do peso")
    if(imc >= 17 && imc < 18.50)
        console.log("Abaixo do peso")
    if(imc >= 18.50 && imc < 25)
        console.log("Peso normal")
    if(imc >= 25 && imc < 30)
        console.log("Acima do peso")
    if(imc >= 30 && imc < 35)
        console.log("Obesidade I")
    if(imc >= 35 && imc < 40)
        console.log("Obesidade II (severa)")
    if(imc > 40)
        console.log("Obesidade III (mórbida)")


}

while(true){
let peso = prompt("Qual o seu peso?") 
let altura = prompt("Qual a sua altura?")

IMC(peso,altura)}