import express  from "express";

const router = express();

import { obtenerCategorias,agregarCategoria,borrarCategoria,actualizarCategoria,selectOne} from "../controllers/categoria.controllers.js";

router.get("/all",obtenerCategorias);
router.post("/add",agregarCategoria);
router.delete("/del/:id",borrarCategoria);
router.get("/one/:id", selectOne);
router.put("/upd/:id",actualizarCategoria);

export default router;