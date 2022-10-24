var texEntrada = document.getElementById ('texEntrada');
var escolha = document.getElementById('opcoes');
var numero= document.getElementById('numeros');
var bcodificar= document.getElementById('codificar');
var bdecodificar=document.getElementById('decodificar');
var submit= document.querySelector('#submit');
var mensagenSaida=document.querySelector('.mensagemSaida');
var codificar1= document.querySelector('#codificar1');
var decodificarr=document.getElementById('decodificarr');
var radioInput=document.querySelector('.radioInput');


escolha.addEventListener('change', function() {

    if (escolha.value == 'cifradeCesar') {
       numero.style.display ='block'; 
    }else if (escolha.value == 'opicao2') {
        numero.style.display= 'none';
    }else {
        alert ('Escolha uma das opções!');
    }
})
bcodificar.addEventListener("click", function(){
    submit.style.display = 'block';
    submit.innerText= 'Codificar'
})
bdecodificar.addEventListener("click", function(){
    submit.style.display='block';
    submit.innerText = 'Decodificar'
})
function codigoCesar(){

    var menagemElemento= texEntrada.value;
    var minusculaMensagem=menagemElemento.toloWeCase();
    var numeroTransforme= (Number(numero.value)%26);
    var mensagemCodificada='';

    


    }
    //BASE 64//

    function baSe64 (){

        let mensagem= document.querySelector('#textEntrada').value
        let decodificar= atob(mensagem)
        return codificar1
        
    }