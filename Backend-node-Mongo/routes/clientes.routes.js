import express  from "express";

const router = express();

import { obtenerClientes,agregarCliente,borrarCliente,actualizarCliente,selectOne } from "../controllers/cliente.controller.js";

router.get("/all",obtenerClientes);
router.post("/add",agregarCliente);
router.delete("/del/:id",borrarCliente);
router.get("/one/:id", selectOne);
router.put("/upd/:id",actualizarCliente);

export default router;