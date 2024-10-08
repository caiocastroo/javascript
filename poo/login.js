/**
 * POO > Fundamnetos da programação orientada a objetos
 * Encapsulamento
 * @author Caio Castro
 */

class Usuarios {
    //atributos
    constructor(login, senha){
        this.login = login// atributo publico
        //-------------------------------------------------------------------------------------------------------------------
        let _senha = senha//(atributo privado encapsulamneto))
        //métado para obter a senha (get)
        this.getSenha = () => _senha
        //métado para alterar a senha (set)
        this.setSenha = (novaSenha) => _senha = novaSenha
        //-------------------------------------------------------------------------------------------------------------------

    }
    //métado
    logar(){
        console.log(`Usuário:${this.login}`)
        console.log(`Senha:${this.getSenha()}`)
        if(this.login === "admin" && this.getSenha() === "123@senac"){
            console.log("Usuário Autenticado")
        }else{
            console.log("Usuário e/ou senha Inválida")
        }
    }
}

    //sistema
    console.clear()
    //criar um novo usuário
    const user1 = new Usuarios("admin" , "123456")
    user1.logar()
    user1.setSenha("123@senac")
    user1.logar()