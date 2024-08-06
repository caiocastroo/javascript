/**
 * @author Caio Castro
 * Desafio alcool ou gasolina 
 */

const input = require('readline-sync')

let etanol, gasolina

console.clear
console.log("valor do alcool e gasolina")

etanol= Number(input.question("Digite o valor do etanol:"))
gasolina= Number(input.question("Digite o valor do gasolina:"))

if (etanol < 0.7 * gasolina) {
    console.log("etanol")
    
} else {
    console.log("gasolina")
}
