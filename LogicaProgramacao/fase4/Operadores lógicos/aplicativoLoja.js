/*O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.*/
const prompt = require("prompt-sync")()

const limite = 10

var qtAtual = prompt ("Qual a quantidade de pessoas na loja?")

if (qtAtual <= limite)
    console.log("Pode entrar.")
else
    console.log("Aguarde alguém sair.")