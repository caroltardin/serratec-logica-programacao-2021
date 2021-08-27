/*5.	Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10*/

const prompt = require("prompt-sync")();

const notaMax = 5;

do{
    var p1 = prompt("Qual a nota da P1?");
    var p2 = prompt("Qual a nota da P2?");
    var p1n = parseInt(p1) ;
    var p2n = parseInt(p2);
    var notaAluno = p1n + p2n;
    var logico = (p1n <= notaMax && p1n >= 0) && (p2n <= notaMax && p2n >= 0);
    
    if(!logico)
 
    {
        console.log("Sua deve ser entre 0 e 5");
    } 
        
} while(!logico)

if (notaAluno <= 4) console.log("Reprovado")
if (notaAluno > 4 && notaAluno <= 6) console.log("Recuperação");
if (notaAluno > 6 && notaAluno <= 8) console.log("Aprovado");
if (notaAluno > 8 && notaAluno <= 10) console.log("Destaque");