/**
 * @author Caio Castro
 */


//Importação de pacotes
const colors = require ('colors')
const input = require('readline-sync')

//variaveis
let etanol, gasolina

console.clear
console.log("etanol ou gasolina")

//entrada 

etanol= Number(input.question("Digite o valor do etanol:"))
gasolina= Number(input.question("Digite o valor do gasolina:"))

if (etanol < 0.7 * gasolina) {
    console.log("etanol".green)
    
} else {
    console.log("gasolina".yellow)
}

