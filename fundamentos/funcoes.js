/**
 * Estado das funções em JS 
 * @author Caio Castro
 */

console.clear()

//função simples são literais
function hello() {
    console.log("hello function")
}
//Para execurta uma função basta escrever o nome dela seguido de () 

hello()
//console.log(typeof(hello))


//função atribuida (função anônima)
const hello2 = function(){
    console.log("Hello function atribuida")
}

//console.log(typeof(hello2))
hello2()

// função atribuida simplificada (arrow function)
const heelo3 = () => {
    console.log("Hello arrow function a")
}


// função atribuida simplificada (arrow function) 1 linha de código

const hello4 = _ => console.log("Hello arrow function one line")

hello4()