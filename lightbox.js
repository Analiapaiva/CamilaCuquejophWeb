const imagenes = document.querySelectorAll('.contenedor-gallery img');
const imagenesLight = document.querySelector('.agg-imagen');
const contenedorLight = document.querySelector('.imagen-ligth');
const closeButton = document.querySelector('.close');
const menu1 = document.querySelector('.menu');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight && e.target !== closeButton) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
});

closeButton.addEventListener('click', () => {
    contenedorLight.classList.remove('show');
    imagenesLight.classList.remove('showImage');
});

function aparecerImagen(src) {
    imagenesLight.src = src;
    contenedorLight.classList.add('show');
    imagenesLight.classList.add('showImage');
    menu1.style.opacity = '0'
}
