/**
 * Exemplo de uso da estrutura else if
 * @author Caio Castro
 */

const input = require('readline-sync')
console.clear()

let idade 

idade = Number(input.question ('Digite sua idade:'))

if (idade < 16) {
    console.log("PROIBIDO VOTAR")
} else if (idade >= 18 && idade < 71) {
    console.log("OBRIGATÓRIO A VOTAR")
} else {
    console.log("FACULTATIVO")
}
