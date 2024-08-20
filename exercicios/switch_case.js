/**
 * Estrutura de controle switch-case
 * @author Caio Castro
*/

const input = require('readline-sync')

let opcao

console.clear()

console.log("Boot - Escolha o sistema operacional")
console.log("1 windows")
console.log("2 linux")
opcao = Number(input.question("Digite a opcao desejada: "))
switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o windows................")
        break
    case 2:
        console.clear()
        console.log("Carregando o Linux................")
        break
    default:
        console.clear()
        console.log("Opção invalida")
}

