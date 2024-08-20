/**
 * sorteio
 * @author Caio Castro
 * 
 */

const input = require('readline-sync')

let sorteio

console.clear()

input.question("Pressione a tecla ENTER para sortear um numero")

sorteio = Math.floor(Math.random() * 16 + 1)
console.log(sorteio)