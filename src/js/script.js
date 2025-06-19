const imagens = [
  "./src/assets/fundo1.jpg",
  "./src/assets/fundo3.jpg",
  "./src/assets/enchentes.jpg",
  "./src/assets/fundo4.jpg" 
];

let indiceAtual = 0;
const imgElemento = document.getElementById("fundo1");
const pontos = document.querySelectorAll('.ponto');

function atualizarPontos() {
  pontos.forEach((ponto, index) => {
    ponto.classList.toggle('ativo', index === indiceAtual);
  });
}

function trocarImagem() {
  imgElemento.style.opacity = 0;

  setTimeout(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imgElemento.src = imagens[indiceAtual];
    imgElemento.style.opacity = 1;
    atualizarPontos();
  }, 500);
}

setInterval(trocarImagem, 4000);
atualizarPontos(); // Inicializa os pontos

pontos.forEach((ponto, index) => {
  ponto.addEventListener('click', () => {
    indiceAtual = index;
    imgElemento.src = imagens[indiceAtual];
    atualizarPontos();
  });
});

