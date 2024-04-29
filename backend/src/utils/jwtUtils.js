import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";

export function gerarToken(payload){
    return jwt.sign(payload, secretKey);
}

export function verificarToken(token){
    return jwt.verify(token, secretKey);
}