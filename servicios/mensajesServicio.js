
const BasicDAO = require("../persistencia/DAO");
const mensajeSchema = require("../models/mensajeSchema");

const mensajesDB = new BasicDAO("mensajes",mensajeSchema);
async function obtenerMensajes() {
  return await mensajesDB.getAll();
}
async function agregarMensaje(mensaje){
    return await mensajesDB.save(mensaje)
}
module.exports = {obtenerMensajes,agregarMensaje}