function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio' ) { // ao escrever apenas "elemento", já é entendido que a variável não é nula.
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido!');
    }
    
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; //guarda a referência dentro da função

document.querySelectorAll('.tecla') //selecionado todos os elementos que possuem a classe tecla

const listaDeTeclas = document.querySelectorAll('.tecla') //selecionado todos os elementos que possuem a classe tecla
//listaDeTeclas = criação de uma referência



for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () { 
        tocaSom(idAudio)
    }

    //quando se coloca os parentêses do lado de uma função, essa função é chamada de imediato/invocada

    tecla.onkeydown = function (evento) { 

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
