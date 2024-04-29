import express from "express";
import { registrarUsuario } from "../controllers/controllerUsuario.js";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.post("/cadastro", registrarUsuario)
router.post("/login", login)

export default router;