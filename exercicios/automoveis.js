/** 
 * POO - Atividade
 * @author Caio Castro
*/

//Classe modelo (abstração)
const colors = require(`colors`)
console.clear()
class Carro {
    //atributos
    constructor(ano, cor, modelo) {
        this.ano = ano//this  esta falando que é uma variável
        this.cor = cor
        this.modelo = modelo
    }
    criarCarro() {
        console.log("___________________________________")
        console.log(`O carro é da cor: ${this.cor}`.bold)
        console.log(`o ano do carro é: ${this.ano}`.bold)
        console.log(`O modelo é um: ${this.modelo}`)
    }
    ligarCarro() {
        console.log("O carro está ligado".grey)
    }
    desligarCarro() {
        console.log("O carro está desligado!!".red)
    }
    acelerar() {
        console.log("O carro está acelerando: Vrummmm!!".cyan)
    }
}
console.clear()
class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }
    criarAviao() {
        console.log("___________________________________")
        console.log(`o avião é da cor: ${this.cor}`.bold)
        console.log(`o Avião é do ano de: ${this.ano}`.bold)
        console.log(`o Avião tem envergadura de: ${this.envergadura} Metros`)
    }
    pousarAviao() {
        console.log("o Avião está pousando!!".green)
    }
    decolarAviao() {
        console.log("o Avião está decolando!!".blue)
    }
    acelerar() {
        console.log("O Avião está acelerando: Inhauuummmm".magenta)
    }
}

const carro1 = new Carro(2020, "Verde", "Uno".green)
carro1.criarCarro()
carro1.desligarCarro()
carro1.ligarCarro()
carro1.acelerar()
//------------------------------------------------
const carro2 = new Carro(2000, "cinza", "Bmw".gray)
carro2.criarCarro()
carro2.desligarCarro()
carro2.ligarCarro()
carro2.acelerar()
//------------------------------------------------
const aviao1 = new Aviao(2001, "Branco", 12)
aviao1.criarAviao()
aviao1.acelerar()
aviao1.decolarAviao()
aviao1.pousarAviao()