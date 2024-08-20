/**
 * Jogo de dados
 * @author Caio Castro
*/

const input = require('readline-sync')

let face

console.clear()
console.log("jogo do dado")
input.question("Pressione a tecla Enter para jogar o dado: ")
//Sorteio da face de um dado
face = Math.floor(Math.random() * 6)
console.log(`face do dado: ${face}`)

switch (face) {
    case 1:
            console.clear()
            console.log("⚀")
            break 
    case 2:
            console.clear()
            console.log("⚁")
            break             
        
    case 3:
            console.clear()
            console.log("⚂")
            break    
    case 4:
            console.clear()
            console.log("⚃")
            break 
            
    case 5:
            console.clear()
            console.log("⚄")
            break 
    
     case 1:
            console.clear()
            console.log("⚅")
            break 
        }




