import express from "express";
import { homePage, rutaGenerica } from "../controllers/web.controllers.js";
import { signIn, dashboardHome } from "../controllers/user.controllers.js";
const router = express.Router();

router.get("/", homePage);
router.get("/signIn", signIn);
router.get("/dashboard", dashboardHome);
router.get("*", rutaGenerica);

export default router;