/**
 *Cálculo do volume do aquário
 *  @author Caio Castro
 */
const input = require('readline-sync')

let comprimento, largura, altura, litros

console.clear()
console.log("Cálculo do volume de aquário")

//entrada 
comprimento = Number(input.question("Digite o comprimento em cm do aquario:"))
largura = Number(input.question("Digite a largura em cm do aquario:"))
altura = Number(input.question("Digite a altura em cm do aquario:"))

//processamneto
 litros = (comprimento * largura * altura) / 1000

 //saida 
 console.log(`No aquario cabem ${litros.toFixed(1)} litros`)