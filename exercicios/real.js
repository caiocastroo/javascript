/**
 * converter real para euro
 * @author Caio Castro
 */

console.clear()
const input = require('readline-sync')

console.log("converta real para euro")
let real, euro, valor

real = Number(input.question('Digite o valor em reais a serem convertidos: '))
euro = Number(input.question("Digite o valor do Euro: "))
valor = real / euro

console.log(`${valor.toFixed(2)} Euros`)