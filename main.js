/*
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        alert('Elemento não encontrado');
    }

    if (elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }

    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++){

    ListaDeTeclas[contador].onclick = function(){
        tocaSom(`#som_${ListaDeTeclas[contador].classList[1]}`)
    }

    ListaDeTeclas[contador].onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter') {
            ListaDeTeclas[contador].classList.add('ativa');
        }
    }

    ListaDeTeclas[contador].onkeyup = function() {
        ListaDeTeclas[contador].classList.remove('ativa');
    }

}
