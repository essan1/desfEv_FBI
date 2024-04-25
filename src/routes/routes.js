import express from "express";
import { homePage, rutaGenerica } from "../controllers/controllers.js";
const router = express.Router();

//ruta principal

router.get("/", homePage);

//creamos nuestra ruta generica, simeprea al final
router.get("*", rutaGenerica);

export default router;
