/**
 * tabuada usando while
 * @author Caio Castro
 */
console.clear()
const input = require('readline-sync')
let valor
let x = 1
valor = input.question("Digite o valor da Tabuada: ")

while (x < 11) {
    console.log(`${valor} X ${x} = ${valor * x}`)
    x++