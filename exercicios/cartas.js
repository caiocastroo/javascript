/**
 * Jogo de Cartas - Exemplo de uso array
 * @author Caio Castro
 */

const input = require('readline-sync')
console.clear()
console.log("Sorteio de uma carta")
input.question("Pressione a tecla [Enter] sortear uma carta")
//            0   1   2   3
let nipes = ["♥","♠","♦","♣"]
//            0   1   2   3   4   5   6   7   8    9   10  11  12
let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

//apoio a lógia 
//Az de ouros
//console.log(`${faces[0]}${nipes[2]}`)
//Dama de copas
//console.log(`${faces[11]}${nipes[0]}`)

//Lógica para sorteio de uma carta 
let nipe = nipes[Math.floor(Math.random()*4)]
let face = faces[Math.floor(Math.random()*13)]
console.log(`${face} ${nipe}`)


