
/**
 * Jogo de dado = exemplo de uso da estrutura do-while
 * @author Caio Castro
*/



const input = require('readline-sync')

let face
let confirma = "n"


do {
    console.clear()
    console.log("jogo do dado")
    input.question("Pressione a tecla Enter para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`face do dado: ${face}`)
    confirma = input.question("Deseja jogar novamente?")

} while (confirma === "s");

