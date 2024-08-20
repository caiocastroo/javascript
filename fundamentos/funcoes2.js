/**
 * Estudo das funções em JS
 * Funções com parâmetros 
 * @author Caio Castro
 */

console.clear()

//IMPORTANTE!!! Funções atribuidas obrigatoriamente precisam ser criadas no inicio do código (antes de serem executadas)

//função literal com parâmetros
function somar(num1, num2){
    return (console.log(num1 + num2))
}

somar (2 ,5)

// função atribuida (função anônima) com parâmetros

let somarAtribuida = function (num1, num2){
    return (console.log(num1 + num2))

}

somarAtribuida(6, 5)

// função atribuida simplificada (arrow function) com parâmetros

let somarAF = (num1 , num2) => {
    return(console.log(num1 + num2))
}

somarAF(5, 4)

// função atribuida simplificada (arrow function) 1 linha de código com parâmetros (neste caso o return é implicito)

let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(9, 7)