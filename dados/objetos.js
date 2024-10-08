/**
 * Estrutura de dados
 * Objetos
 * @author Caio Castro
 */

const funcionario1 = {}
console.log(typeof(funcionario1))
// adiocionar dados as estruturas (CRUD Create)
funcionario1.nome = "Caio"
funcionario1.cargo = "Estudante"
funcionario1.email = "..."
funcionario1.salario = 8000
funcionario1.insta = "caio.castro"
//listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "Caio C"
console.log(funcionario1)
// excluir dados da estrutura 
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome:"Caio",
    cargo:"CEO",
    email: "...",
    salario: 500000
}
console.log(funcionario2)

const endreco1 = {
    logradouro: "Batcaverna",
    cidade: "Gotham City",
    estado: "New Jersey"
}
console.log(endreco1)

const funcionario3 ={
    nome: "Alfred Pennywort",
    cargo:"Mordomo",
    email:"...",
    salario: 200000,
    ...endreco1
}
console.log(funcionario3)


const funcionario4 ={
    nome: "Dick",
    cargo:"acobrata",
    email:"...",
    salario: 20000,
    ...endreco1
}
console.log(funcionario4)

const funcionario5 ={
    nome: "Tony Stark",
    cargo: "magnata",
    email: "...",
    salario: 10000000000000,
    armadura: {
        versao: "Mark 2",
        ano: 2010,
        reator:"Arc 01"
    },
    switUp: () => {
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.switUp()