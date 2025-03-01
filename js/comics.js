const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoComics = document.createElement("div");
    nuevoComics.classList = "tarjeta-producto"
    nuevoComics.innerHTML = `
    <article class="comics">
    <a href="comics/template/${producto.id}.html"><img src="js/carrito/${producto.id}.jpg" alt="Test"></a>
    <div class="info">
    <h3>${producto.nombre}</h3>
    <div class="precio">$${producto.precio}</div>
    <button>Agregar al carrito</button>
    </div></article>`
    contenedorTarjetas.appendChild(nuevoComics);
    nuevoComics.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(comics);