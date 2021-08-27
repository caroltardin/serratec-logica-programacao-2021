/*No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral.*/

const prompt = require("prompt-sync")();

let fruta = ["uva", "banana", "manga", "abacaxi", "laranja"]
let descricao = ["é muito docinha e é ótima para fazer sobremesas.", "é nacional a fruta mais consumida.", "é uma fruta tropical, excelente para suco e salada.", "é popularmente usada em um ditado devido a sua dificuldade na hora de descascar.", "é rica em vitamana C."]

var resposta = prompt("Dentre as frutas a seguir, qual é a sua favorita? Uva, banana, manga, abacaxi ou laranja")
resposta = resposta.toLowerCase()

descricao = descricao[fruta.indexOf(resposta)]

console.log(`A ${resposta} ${descricao}.`)
