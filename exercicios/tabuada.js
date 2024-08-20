/**
 * Tabuada
 * @author Caio Castro
 * 
 */

const input = require('readline-sync')

let valor

console.clear()

console.log("tabuada")
valor = Number(input.question("digite o valor da tabuada:"))
console.log("")

for (let i=1; i<11; i++){
    console.log(`${valor} x ${i} = ${valor *i}`)
}
