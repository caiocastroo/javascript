/**
 * Estrutura de dados
 * Array (vetor)
 * @author Caio Castro
 */
console.clear()

//              [0]            [1]           [2]         [3]
let times =["Palmeiras" , "Real Madrid", "Barcelona" , "Milan"]
console.log(typeof(times))
console.log(times)
console.table(times)
console.log(times[0])
console.log(times[1])
console.log("")
//Array muçtidimensional (matriz)
let boletim = [[8,7,9,3],[4,5,8,6]] //Linhas de uma tabela
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1]) //[Linha][Coluna]

//estrutura de dados
let alunosEMI = ["Caio", "Athur", "Samuel", "joao", "emmanuel", "leo"]
//Exibindo alunos
console.log(alunosEMI.length)
//CRUD (Cread Read Update Delete) - são as 4 operaçôes básicas com dados

//CRUD Read
console.log(alunosEMI)
console.table(alunosEMI)

//CRUD Create (adicionando dados ao vetor)
alunosEMI.push("Rony")
console.log(alunosEMI)
console.table(alunosEMI)
//CRUD Upadate (alterando um registro do vetor)
alunosEMI[2] = "izaak"
console.log(alunosEMI)
console.table(alunosEMI)
//CRUD Delete (excluindo um registro do vetor)
delete alunosEMI[4]
console.log(alunosEMI)
console.table(alunosEMI)


// Percorrendo um vetor >>>>>>>>>>>>>>>>>>>>>>
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)
//laço for
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}
//forEach (simplificação do laço for para percorrer um vetor)
notas.forEach((n) => {
    console.log(n)
})

//map() mapeamento dos dados de um vetor (pecorrer e mapear)
//Exemplo 1: Adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
    console.log(notasAtualizadas)
//Exemplo 2: Conversão do sistema de pontos para letras
//NA (não atendeu) nota < 5
//PA (parciamente atendido nota entre 5 e 7)
//A (Atendeu) nota > 7
let notasConvertidas = notas.map((nc) =>{
    if(nc < 5){
        return("NA")
    }else if (nc > 7){
        return("A")
    }else {
        return("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)

// Iniciando (criando) vetor como um objeto
let alunosEM2 = new Array("rony", "Batmam", "flash", "Thor")
console.log(alunosEM2)
console.table(alunosEM2)

//Estrutura de dados usando array e objetos
let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bosista: false
    },
    {
        nome: "clak",
        idade: 45,
        bosista: false
    },
    {
        nome: "Burro",
        idade: 50,
        bosista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bosista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bosista: true
    },
]
console.log(alunosEM3)
console.table(alunosEM3)

//Filtros 
// Exemplo 1: Ordenar de A-Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)
//Exemplo 2: Ordenar por idade
alunosEM3.sort((x, y) => {
    return(x.idade - y.idade)
})
console.table(alunosEM3)

//Atenção!!! 
//Na filtragem criar uma copia para exibição (...) faz uma copia do array
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

//buscas personalizadas 
//Exemplo 1: alunos bolsitas 
console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}))
//Exemplo 2: alunos com idade superior a 40 anos
console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}))