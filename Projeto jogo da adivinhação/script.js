
// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10) ;
let attempts = 1;



//Eventos
 //adiciona o evente e o ouvidor ou o cara que vai reagir ao evento
 btnTry.addEventListener('click', handleTryClick) //evento click, quando for feito o click a função handleTryClick será rodada
 btnReset.addEventListener('click', handleResetClick)
 document.addEventListener('keydown', enter)
 

 
  

function enter(e){ //para poder dar enter quando acerta tb
    if(e.key == 'Enter' && screen1.classList.contains('escondido')){
        handleResetClick()  
    }

}

// Função callback - é uma função que é passada como argumento de uma outra função e que mais tarde será executada
function handleTryClick(event){
    event.preventDefault() //"não faça o padrão" ou  "não enviei o formulário"


    const inputNumber = document.querySelector("#inputNumber") // "id inputNumber"


    if(Number(inputNumber.value) == randomNumber){

        toggleScreen()
        screen2 .querySelector("h2").innerText = `Acertou em ${attempts} tentativas!`
        //document.querySelector(".screen2 h2") .innerText = `Acertou em ${attempts} tentativas!`
        //pegando valores internos de um texto
    }


    //para pegar os valores de um unput usamos o .value
    inputNumber.value = "" //se não der certo fique vazio o campo para que eu posso colocar outro número
    attempts++


      
}


function handleResetClick(){
    toggleScreen()
    attempts = 1;
    randomNumber = Math.round(Math.random() * 10)

}

  function toggleScreen(){
    screen1.classList.toggle("escondido")
    screen2.classList.toggle("escondido")

  }  



/*
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");


let randomNumber = Math.round(Math.random() * 10) ;
let attempts = 1;

// Função callback - é uma função que é passada como argumento de uma outra função e que mais tarde será executada
function handleTryClick(event){
    event.preventDefault() //"não faça o padrão" ou  "não enviei o formulário"


    const inputNumber = document.querySelector("#inputNumber") // "id inputNumber"


    if(Number(inputNumber.value) == randomNumber){

        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        //pegando o elemento e mudando, e eu poderia coloca:  screen2 .querySelector("h2").innerText = `Acertou em ${attempts} tentativas!`
        document
        .querySelector(".screen2 h2") //peguei o elemento
        .innerText = `Acertou em ${attempts} tentativas!`  //mudei
        //pegando valores internos de um texto
    }
    //para pegar os valores de um unput usamos o .value
    inputNumber.value = "" //se não der certo fique vazio o campo para que eu posso colocar outro número
    attempts++


    console.log(attempts)

}


// Eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

     //adiciona o evente e o ouvidor ou o cara que vai reagir ao evento
btnTry.addEventListener('click', handleTryClick) //evento click, quando for feito o click a função handleTryClick será rodada
btnReset.addEventListener('click', function(){

    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    attempts = 1;

})

*/