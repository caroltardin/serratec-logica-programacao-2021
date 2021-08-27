/*O “gerador de senhas” ajuda a criar uma senha difícil de ser quebrada. O usuário pode escolher entre uma senha ‘média’ (dois blocos) ou ‘forte’ (três blocos), que são diferentes apenas no comprimento - 8 ou 12 dígitos. Cada ‘bloco’ da senha é composto por 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo.*/

const prompt = require("prompt-sync")();
qtdBloco = prompt("Você deseja senha media ou forte?")


var L = ["A", 	" B", 	" C", 	" D", 	" E", 	" F", 	" G", 	" H", 	" I", 	" J", 	" K", 	" L", 	" M", 	" N", 	" O", 	" P", 	" Q", 	" R", 	" S", 	" T", 	"U", 	" V", 	" W", 	" X", 	" Y", 	" Z"]
var l = ["a", 	" b", 	" c", 	" d", 	" e", 	" f", 	" g", 	" h", 	" i", 	" j", 	" k", 	" l", 	" m", 	" n", 	" o", 	" p", 	" q", 	" r", 	" s", 	" t", 	"u", 	" v", 	" w", 	" x", 	" y", 	" z"]
var n  = ["0", 	"1", 	"2", 	"3", 	"4", 	"5", 	"6", 	"7", 	"8", 	"9"]
var c = ["@", 	"#", 	"$", 	"%", 	"&", 	"*"]

var aleatorio = Math.floor(Math.random() * 4) + 1;

//processamento

if (qtdBloco == "media"){
    qtdBloco = 2
    senhaP1 = L[] + l[] + n[] + c[]
    senhaP2
    senhaP3
    
    console.log("Sua senha é " + senhaP1+senhaP2+senhaP3)
    }


else
    qtdBloco = 3