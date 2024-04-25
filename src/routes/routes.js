import express from "express";
import { homePage, rutaGenerica } from "../controllers/controllers.js";
const router = express.Router();

router.get("/", homePage);
//--------------------------


//--------------------------
router.get("*", rutaGenerica);

export default router;