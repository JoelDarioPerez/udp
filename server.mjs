import { createSocket } from "dgram";

// Crear un servidor UDP
const udpServer = createSocket("udp4");

// Configurar el servidor para escuchar en un puerto específico
const udpPort = 6002;

udpServer.on("error", (err) => {
  console.error(`Error en el servidor UDP: ${err}`);
  udpServer.close();
});

udpServer.on("message", (message, rinfo) => {
  // Cuando se recibe un paquete, se muestra por consola
  console.log(
    `Mensaje recibido desde ${rinfo.address}:${
      rinfo.port
    }: ${message.toString()}`
  );
});

udpServer.on("listening", () => {
  const address = udpServer.address();
  console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

// Iniciar el servidor UDP en el puerto especificado
udpServer.bind(udpPort);
