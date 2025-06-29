const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./src/routes/course.routes");

const app = express();
app.use(express.json());

const connectionString =
  "mongodb://admin:admin123@localhost:27017/espe-mongoose?authSource=admin";

mongoose
  .connect(connectionString)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error("Error de conexión:", error));

// Rutas
app.use("/", courseRoutes);

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});

