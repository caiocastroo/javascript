/**
 * Estudo da Estrutura de controle if-else
 * @author Caio Castro
 */

console.clear
const input = require ('readline-sync')

let idade

console.log("Estudo da estrutura if-else")
console.log("Validar maioridade")
idade = Number(input.question("Digite sua idade: "))
// Uso da estrutura if-else para validar a idade
if (idade < 18) {
    console.log("Menor de idade")
} else {
    console.log("Maior de idade")
}