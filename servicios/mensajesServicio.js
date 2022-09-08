const mensajeSchema = require("../models/mensajeSchema");
const BasicDAO = require("../persistencia/DAO");

module.exports = class MensajesAPI {
  constructor() {
    this.basicDAO = BasicDAO.getInstance("mensajes", mensajeSchema);
  }
  async obtenerMensajes() {
    return await this.basicDAO.getAll();
  }
  async agregarMensaje(mensaje) {
    return await this.basicDAO.save(mensaje);
  }
};
