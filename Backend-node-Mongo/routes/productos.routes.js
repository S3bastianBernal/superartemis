import express from "express";

const router = express.Router();

import { obtenerProductos, agregarProducto, borrarProducto, selectOne, actualizarProducto } from "../controllers/producto.controller.js";

router.get("/all", obtenerProductos);
router.post("/add", agregarProducto);
router.delete("/del/:id", borrarProducto);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarProducto);

export default router;