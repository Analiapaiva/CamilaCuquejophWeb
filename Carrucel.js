const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector(".carrucel"), // Selecciona correctamente el carrusel
    sliderSections = document.querySelectorAll(".slider-section"); // Selecciona todas las secciones del slider
    
let counter = 0;
const totalSlides = sliderSections.length; // Total de imágenes
const widthImg = 100 / totalSlides; // Ancho por cada imagen como porcentaje

// Evento para mover a la izquierda
btnLeft.addEventListener("click", () => moveToLeft());

// Evento para mover a la derecha
btnRight.addEventListener("click", () => moveToRight());

// Movimiento automático cada 3 segundos
setInterval(() => {
    moveToRight();
}, 5000);

// Función para mover a la derecha
function moveToRight() {
    if (counter >= totalSlides - 1) {
        counter = 0;
        slider.style.transform = `translateX(0%)`;
        slider.style.transition = "none"; // Sin transición para el salto
        return;
    } 
    counter++;
    const offset = counter * widthImg;
    slider.style.transform = `translateX(-${offset}%)`;
    slider.style.transition = "all ease .6s"; // Transición suave
}

// Función para mover a la izquierda
function moveToLeft() {
    if (counter <= 0) {
        counter = totalSlides - 1;
        const offset = counter * widthImg;
        slider.style.transform = `translateX(-${offset}%)`;
        slider.style.transition = "none"; // Sin transición para el salto
        return;
    }
    counter--;
    const offset = counter * widthImg;
    slider.style.transform = `translateX(-${offset}%)`;
    slider.style.transition = "all ease .6s"; // Transición suave
}