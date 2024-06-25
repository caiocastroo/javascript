/**
 * Calculo da média de 2 notas 
 * @author Caio Castro
 */

//importar po pacote readline-sync 
const input = require('readline-sync')

//Variáveis
let nota1, nota2, media

console.clear
console.log("calculo da media")
// captura da nota pelo pacote readline-sync
//entrada
nota1 = Number(input.question("Digite a nota1:"))
nota2 = Number(input.question("Digite a nota2:"))
//Processamneto
media = (nota1 + nota2) / 2
//saida 
console.log(`Média: ${media.toFixed(1)}`)