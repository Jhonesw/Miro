// Script do carrossel
let index = 0;
const imagens = document.querySelectorAll('#carrossel img');

function mostrarProximaImagem() {
  imagens[index].classList.remove('active');
  index = (index + 1) % imagens.length;
  imagens[index].classList.add('active');
}

setInterval(mostrarProximaImagem, 3000); // troca a cada 3 segundos
