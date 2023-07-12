import express from "express";

const router = express.Router();

import { obtenerEmpleados, agregarEmpleado, borrarEmpleado, selectOne, actualizarEmpleado } from "../controllers/empleados.controller.js";

router.get("/all", obtenerEmpleados);
router.post("/add", agregarEmpleado);
router.delete("/del/:id", borrarEmpleado);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarEmpleado);

export default router;