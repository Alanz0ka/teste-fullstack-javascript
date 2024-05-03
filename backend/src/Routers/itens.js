import express from "express";
import { cadastrarItem, listarItens, listarItemId, apagarItem,atualizarItemPorId } from "../controllers/ControllerItem.js";
import { authenticateJwt } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/cadastro", authenticateJwt, cadastrarItem)

router.get("/:id", authenticateJwt, listarItens)

// router.get("/:id", listarItemId)

router.delete("/delete/:id", authenticateJwt, apagarItem)

router.put("/:id", authenticateJwt, atualizarItemPorId)


export default router;