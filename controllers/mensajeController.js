const MensajesAPI = require("../servicios/mensajesServicio");

const mensajesAPI = new MensajesAPI();
async function getMensajesController() {
  return mensajesAPI.obtenerMensajes();
}
async function sendNewMessage(mensaje) {
  await mensajesAPI.agregarMensaje(mensaje);
}
module.exports = { getMensajesController, sendNewMessage };
