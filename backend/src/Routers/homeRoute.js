import express from "express";
import { authenticateJwt } from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/home", authenticateJwt, (req, res)=>{
    res.status(200).json({message: "Rota privada acessada com sucesso"})
});

export default router;