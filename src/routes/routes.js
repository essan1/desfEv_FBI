import express from "express";
import { homePage, rutaGenerica } from "../controllers/web.controllers.js";
import { signInControl } from "../controllers/user.controllers.js";
const router = express.Router();

router.get("/", homePage);
router.get("/signIn", signInControl);
router.get("/dashboard", );
router.get("*", rutaGenerica);

export default router;