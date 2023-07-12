import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js"
import clientesRouter from "./routes/clientes.routes.js"
import empleadosRouter from "./routes/empleados.routes.js"
import productosRouter from "./routes/productos.routes.js"
import cors from "cors";

const app = express();

app.use(express.json())

dotenv.config();

const configCors = {
    methods: ['POST','GET','PUT','DELETE']
}

app.use(cors(configCors))

app.use("/categorias", categoriasRouter);
app.use("/clientes", clientesRouter);
app.use("/empleados", empleadosRouter);
app.use("/productos", productosRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen();

app.listen(PORT, ()=>{
    console.log(`Super Server web listen on port ${PORT}`);
})