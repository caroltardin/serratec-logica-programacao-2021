/*Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.*/

const prompt = require("prompt-sync")();

var temperatura = prompt("Digite a temperatura: ")
var mascara = prompt("Usa máscara (S ou N): ")


autorizar = temperatura <= 37.5 && mascara == 'S'


console.log("Autorizar a entrada?" + autorizar)