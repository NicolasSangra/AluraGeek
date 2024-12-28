// Seleccionamos todas las imágenes de "Eliminar Producto"
const eliminarBotones = document.querySelectorAll('.card-container--value img');

// Recorremos cada botón y añadimos un evento de clic
eliminarBotones.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
        // Obtenemos el contenedor del producto (la tarjeta completa)
        const tarjeta = evento.target.closest('.card');
        if (tarjeta) {
            // Eliminamos la tarjeta del DOM
            tarjeta.remove();
        }
    });
});


