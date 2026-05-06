async function buscarProducto(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    console.log(`Producto: ${data.title} - Precio: ${data.price}€`);

  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
}
function ejecutarBusqueda() {
  Promise.all([
    buscarProducto(1),
    buscarProducto(5),
    buscarProducto(10)
  ])
  .then(() => {
    console.log("Todas las peticiones terminadas");
  })
  .catch(error => {
    console.error("Error en alguna petición:", error);
  });
}