
/**
 * Jogo de dado = exemplo de uso de uma funçao simples 
 * @author Caio Castro
*/



const input = require('readline-sync')

let face
let confirma = "n"


function jogardado() {
    console.clear()
    console.log("jogo do dado")
    input.question("Pressione a tecla Enter para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`face do dado: ${face}`)
   

}

jogardado()

confirma = input.question("Deseja jogar novamente s/n?")
if (confirma === "s"){
    jogardado()
}
somarAFS(5 + 7)
