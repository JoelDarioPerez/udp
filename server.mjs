import dgram from "dgram";

// Crear un servidor UDP
const server = dgram.createSocket("udp4");

// Configurar el servidor para escuchar en el puerto 6002
const PORT = 6002;
server.bind(PORT);

// Manejar eventos cuando se recibe un mensaje
server.on("listening", () => {
  const address = server.address();
  console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

server.on("message", (message, remote) => {
  console.log(
    `Mensaje recibido desde ${remote.address}:${remote.port}: ${message}`
  );
});

server.on("error", (err) => {
  console.error(`Error en el servidor: ${err}`);
});

// Cerrar el servidor cuando sea necesario
// server.close();
