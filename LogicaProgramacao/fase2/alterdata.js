/*2.	Escrever o programa “Sobre a Empresa Alterdata”. Sua saída será a mensagem: “A Alterdata tem x anos.”, onde o x é a idade da empresa. A idade será atribuída em uma variável inteira.*/


const alterdataNascimento = 1989
var data = new Date
data = data.getFullYear() 

var alterndataAnos = data - alterdataNascimento


console.log("Olá, vamos entender um pouco mais sobre a história da Alterndata?")
console.log(`A Alterdata tem ${alterndataAnos} ano é focada em construir sistemas. Isso é o que a Alterdata faz de melhor, pois conseguiu unir o conhecimento de equipes de consultoria com a experiência de profissionais de cada setor em que atua, somando ao que há de mais moderno em tecnologia de Informática.`)