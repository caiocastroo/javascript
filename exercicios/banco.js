/**
 * Exercios de fixação do conceitos de POO
 * @author Caio Castro
 */


const colors = require ('colors')


//classe modelo
class conta {
    //atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }

    //metados
    getNumero() {
        return this._numero
    }
    getTitular() {
        return this._titular
    }
    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
    despositar(valor){
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed()}`.green)
    }
    sacar(valor){
        if (valor <= this.saldo){
            console.log(`Debito de R$ ${valor.toFixed()}`.red)
        }else {
            this._saldo -= valor
            console.log("Saldo insuficinete")
        }
    }

    pix(valor, destino){
        if (valor > this._saldo) {
            console.log(`Pix de R$ ${valor.toFixed(2)} não realizado saldo insuficiante`.red)
        } else {
            this._saldo -= valor
            destivo.despositar(valor)
            console.log(`Pix de R$ ${valor.toFixed(2)} para ${desino.getTitular()} realizado com sucesso`.red
        }
    }
}




console.clear()
console.log("██████   █████  ███    ██  ██████  ██████  ".green)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".green)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".green)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".white)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".white)
console.log("")


console.log("BANCO")

let cc1 = new conta(1, "Robson Vaamonde", 300)
console.log(`Cliente :${cc1.getTitular()} | Conta: ${cc1.getNumero()}`.black)
cc1.exibirSaldo()
cc1.despositar(50)
cc1.exibirSaldo()
cc1.sacar(450)
cc1.exibirSaldo()


console.log()

let cc2 = new conta(2, "Leandro Ramos", 15)
console.log(`Cliente :${cc2.getTitular()} | Conta: ${cc2.getNumero()}`.black)
cc2.exibirSaldo()
cc2.despositar(5)
cc2.exibirSaldo()
cc2.sacar(20)
cc2.exibirSaldo()

console.log()

let cc3 = new conta(3, "Sirlene", 20)
console.log(`Cliente :${cc3.getTitular()} | Conta: ${cc3.getNumero()}`.black)
cc3.exibirSaldo()
cc3.despositar(50)
cc3.exibirSaldo()
cc3.sacar(40)
cc3.exibirSaldo()

console.log()

let cc4 = new conta(4, "José de Assis", 50)
console.log(`Cliente :${cc4.getTitular()} | Conta: ${cc4.getNumero()}`.black)
cc4.exibirSaldo()
cc4.despositar(50)
cc4.exibirSaldo()
cc4.sacar(70)
cc4.exibirSaldo()


console.log()