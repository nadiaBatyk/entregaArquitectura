const BasicDAO = require("../persistencia/DAO");
const productoSchema = require("../models/productoSchema");
const ProductoDTO = require("../DTOs/productoDTO.JS");

module.exports = class ProductosAPI {
  constructor() {
    this.basicDAO = BasicDAO.getInstance("productos", productoSchema);
  }
  async obtenerProductos() {
    const prod = await this.basicDAO.getAll();
    return prod.map(p=>new ProductoDTO(p))
  }
  async agregarProducto(producto) {
    const prod = await this.basicDAO.save(producto)
    return new ProductoDTO(prod)
  }
};
