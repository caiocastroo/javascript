/**
 * POO > Fundamnetos da programação orientada a objetos
 * Abstração - Herança - porlimofismo
 * @author Caio Castro
 */

//Classe Modelo (Abstração)

class Bloco{
    //Atributos
    constructor(resistencia, textura){
        this.resistencia = resistencia
        this.textura = textura
    }
    //métados
    criarBloco(){
        console.log("------------------------------------")
        console.log("┍━┑")
        console.log("┕━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    construir(){
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar(){
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}

//Classe Modelo com herença (extends)

class Enxada extends Bloco{
    constructor(resistencia, textura, conquista){
        super(resistencia, textura)
        this.conquista = conquista
    }
        //métados
        criarEnxada(){
            console.log("------------------------------------")
            console.log("-_")
            console.log("/")
            console.log(`Enaxada de ${this.textura}`)
            console.log(`Resistencia: ${this.resistencia}`)
        }

        arar(){
            console.log("._._._. terra arada")
            if(this.conquista === true){
                console.log("*** Conquistada obtida! ***")
            }
        }
        //polimofismo
        minerar(){
            console.log("XXX Dano Atribuido!")
        }
}

//crição de Mundo

console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

//crindo um objeto (bloco de terra)

const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

//criando bloco de madeira

const bloco2 = new Bloco(2, "Madeira")
bloco2.criarBloco()
bloco2.construir()

//Criando bloco de pedra

const bloco3 = new Bloco(5, "Pedra")
bloco3.criarBloco()
bloco3.minerar()

//criando enxada de madeira

const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

//criando enxada de ferro

const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//Criando uma enxada de diamante

const enxada3 = new Enxada(20, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar()


