
const ProductosAPI = require("../servicios/productosServicio");

const productosAPI = new ProductosAPI()

async function getProductosController() {
  return productosAPI.obtenerProductos()
}
async function addNewProduct(producto){
await productosAPI.agregarProducto(producto)
}
module.exports = { getProductosController,addNewProduct}