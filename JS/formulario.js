// Obtener el formulario y la sección de mis productos
const formulario = document.querySelector('.form');
const misProductos = document.querySelector('.mis-productos');

// Función que agrega un nuevo producto
function agregarProducto(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const imagen = document.getElementById('imagen').value;

    // Crear el HTML del nuevo producto
    const nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card');

    nuevaCard.innerHTML = `
        <img src="${imagen}" alt="${nombre}" class="producto">
        <div class="card-container--info">
            <p>${nombre}</p>
            <div class="card-container--value">
                <p>$${precio.toFixed(2)}</p>
                <img src="./assets/basurero.png" alt="Eliminar Producto" class="eliminar">
            </div>
        </div>
    `;

    // Agregar el nuevo producto a la sección de "Mis Productos"
    misProductos.appendChild(nuevaCard);

    // Limpiar el formulario
    formulario.reset();
}

// Añadir el evento de envío al formulario
formulario.addEventListener('submit', agregarProducto);

// Funcionalidad para eliminar un producto (opcional)
misProductos.addEventListener('click', function(event) {
    if (event.target.classList.contains('eliminar')) {
        const producto = event.target.closest('.card');
        misProductos.removeChild(producto);
    }
});

