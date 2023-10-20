const imagens = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function() {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++
    }

    esconderImagens()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual !== 0) {
        imagemAtual--
    }

    esconderImagens()
    mostrarImagem()
})