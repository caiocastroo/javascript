/**
 * Tabuada while
 * @author Caio Castro
 * 
 */

const input = require('readline-sync')

let valor
let x = 1
console.clear()

console.log("tabuada com while")
valor = Number(input.question("digite o valor da tabuada:"))

while (x < 11){

    console.log(`${x} x ${valor} = ${x * valor}`)
   x++
}