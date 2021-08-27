/* Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. 
O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, 
ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou 
exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido 
em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores 
após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos 
apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem
com o troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao valor do 
refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de 
escolha das cédulas até que uma opção de pagamento válida seja escolhida. 
Os refrigerantes possuem os seguintes preços: 
• R$ 1,99 
• R$ 3,50 
• R$3,99 
• R$6,00 
O cliente deseja opções de pagamentos com as seguintes cédulas: 
• R$ 2,00 
• R$5,00 
• R$10,00 
• R$20,00
 */

const prompt = require("prompt-sync")();

//Entrada
/*
var uva = saborRefri == 1
var coco = saborRefri == 2
var manga = saborRefri == 3
var limao = saborRefri == 4*/

var produto = ["Uva", "Coco", "Manga", "Limão"]
var preco = [1.99, 3.5, 3.99, 6]

var notas = [2, 5, 10, 20]

//Processamento

do {
  do {
    console.log(
      "Olá, bom te ver por aqui!  \nSelecione uma  opção: \n1 - Uva  \n2 - Coco \n3 - Manga \n4 - Limão"
    );
    var saborRefri = prompt("Selecione a seguir o número da opção deseja:  ");
    saborExiste = saborRefri == 1 || saborRefri == 2 || saborRefri == 3 || saborRefri == 4;

    if (!saborExiste) console.log("Opção inválida. Tente novamente!");
  } 
  while (!saborExiste); 

  switch (saborRefri) {
    case "1":
      console.log("Seu sabor escolhido é UVA. O valor total é R$" + preco[0]);
      var saborRefri = produto[0];
      var precoRefri = preco[0];
      break;
    case "2":
      console.log("Seu sabor escolhido é COCO. O valor total é R$" + preco[1]);
      var saborRefri = produto[1];
      var precoRefri = preco[1];
      break;
    case "3":
      console.log("Seu sabor escolhido é MANGA. O valor total é R$" + preco[2]);
      var saborRefri = produto[2];
      var precoRefri = preco[2];
      break;
    case "4":
      console.log("Seu sabor escolhido é LIMAO. O valor total é R$" + preco[3]);
      var saborRefri = produto[3];
      var precoRefri = preco[3];
      break;
  }
  var precoOk = prompt(
    "Favor, confira as informações acima. Tudo certo para a sua compra? Digite S para sim ou N para não"
     );
     var compraAceita = precoOk == "s" || precoOk == "S" || precoOk == "sim";
     
     if (!compraAceita){
     console.log("Ok! Nesse caso será reiniciar o atendimento.");
     }
} while (!compraAceita);

var numTentativa = 3

do{
  console.log("Por favor, informe o nº com a cedula de pagamento!");
  console.log(`(1) R$ 2,00`)
  console.log(`(2) R$ 5,00`)
  console.log(`(3) R$ 10,00`)
  console.log(`(4) R$ 20,00`)
  var notaCedula = prompt("Sua opção: ")
  var numOpcao = parseInt(notaCedula)
  var celulaSelecionada = notas[numOpcao - 1]

  var troco = celulaSelecionada - precoRefri
  troco = Math.round(troco *100)/100

  if (troco < 0){
      console.log("Saldo insuficiente para pagamento. Selecione outra opção.")
      numTentativa--
    }
    

}while (troco < 0 && numTentativa > 0)


  
  if (troco > 0){
    console.log(`Seu troco é de ${troco}.`)  
    console.log(`Obrigada pelo sua compra! Saborei seu refrigerante de ${saborRefri}.`)
  }

  if (troco == 0){ 
  console.log(`Obrigada pelo sua compra! Saborei seu refrigerante de ${saborRefri}.`)
  }
  