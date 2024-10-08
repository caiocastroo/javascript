/**
 * Simples carrosel de imagens
 * @author Caio Castro
 */


//                 [0]          [1]             [2]
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //ajuste do tempo de troca de imagem 
let indice = 0 //apoio a lógica 

show()

//settimeout (gera um temporizador)

function show(){
            //a linha abaixo adiociona a classe fadeOut ao documento html na tag idendificada como slide 
            document.getElementById(`slide`).className += 'fadeOut'
    setTimeout(() => {
        document.getElementById('slide').src = (`img/${slides[indice]}`)
        document.getElementById('slide').className = ''
    },1000)  // trocar a cada um 1s
    indice++
    setTimeout(show, intervalo) // execurtar a função cada 3s
    if (indice === slides.length){ //.lenght (tamanho máximo)
        indice = 0
    }
     
   
  



}