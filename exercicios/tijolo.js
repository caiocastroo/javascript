/**
 * Cálculo da quantidade de tijolos baiano de 8 furos por metro quandrado, sabendo que 1m2 = 28 tijolos
 * @author Caio Castro
 */

const input = require('readline-sync')

let m2, tijolos

console.log("Cálculo da quantidade de tijolos por metro quadrado (8 furos)")

//entrada
m2 = Number(input.question ('Quantos metros quadrados vc precisa: '))

//processamento
tijolos = m2 * 28

//saida 
console.log(`Voce precisara de ${tijolos} tijolos`)