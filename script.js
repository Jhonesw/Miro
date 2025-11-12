// --- Código do Carrossel ---
const track = document.getElementById('carouselTrack'); // Elemento que contém os slides
const slides = document.querySelectorAll('.slide');     // Todos os slides
const totalSlides = slides.length;                      // Número total de slides
let currentSlide = 0;                                   // Slide atual visível
const slideInterval = 4000;                             // Tempo em ms (4 segundos)

// Atualiza a posição do carrossel para mostrar o slide atual
function showSlide() {
  const offset = -currentSlide * 100; // Move 100% para cada slide
  track.style.transform = `translateX(${offset}%)`;
}

// Avança para o próximo slide (loop infinito)
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide();
}

// Volta para o slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide();
}

// Espera 4 segundos entre cada troca
setInterval(nextSlide, slideInterval);

// Inicializa o carrossel na primeira imagem
showSlide();


// --- Código de Responsividade do Menu Hamburguer ---
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });
}
