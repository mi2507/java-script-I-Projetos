// window.addEventListener('DOMContentLoaded', function (event) {

var musica = document.getElementById('tocarMusica')
var botaoplay = document.getElementById('botao')
var mostarTexto = document.getElementById('texto1')
var mostarTexto1 = document.getElementById('texto2')
var texto2 = document.getElementById('texto3');

// array musicas
let musicas = [
    `<audio src="./musica/titanic.mp3" id="audio"> </audio>`,
    `<audio src="./musica/Comoeueraantesdevocêviolino.mp3"></audio>`,
    `<audio src="./musica/cidadedosanjos.mp3"></audio>`,
]

// array frases "respostas'
let frases = [
    `<p>Titanic</p>`,
    `<p>Como eu era antes de voce</p>`,
    `<p>Cidade dos anjos</p>`
];


// no botao adcionei o evento click , no innerhtml  puxei a primeira musica da array [0] e em musica children [0] para voltar sempre na primeira musica
botaoplay.addEventListener("click", function () {
    musica.innerHTML = musicas[0]
    musica.children[0].play()

    // innerHTML posicao da musica , children sempre 0 p voltar a primeira posicao 
    //  e depois de fechar a funçao os segundos p tocar a proxima musica

    setTimeout(function () {
        musica.innerHTML = musicas[1]
        musica.children[0].play()
    }, 30000);

    
    setTimeout(function () {
        musica.innerHTML = musicas[2]
        musica.children[0].play()
    }, 50000);


    // timeout para mostrar texto apos as musicas  50000 = 5 seg apos as musicas tocarem 

    setTimeout(function () {
        musica.innerHTML = ""
        mostarTexto.innerHTML = frases[0];
    }, 60000);
    setTimeout(function () { mostarTexto1.innerHTML = frases[1]; }, 60000);
    setTimeout(function () { texto2.innerHTML = frases[2]; }, 60000);
    
    
    
   
});

