const BasicDAO = require("../persistencia/DAO");
const productoSchema = require("../models/productoSchema");

module.exports = class ProductosAPI {
  constructor() {
    this.basicDAO = BasicDAO.getInstance("productos", productoSchema);
  }
  async obtenerProductos() {
    return await this.basicDAO.getAll();
  }
  async agregarProducto(producto) {
    return await this.basicDAO.save(producto)
  }
};
