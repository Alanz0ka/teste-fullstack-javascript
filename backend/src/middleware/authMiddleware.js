import { expressjwt } from "express-jwt";
import { secretKey } from "../config.js";

export const authenticateJwt = expressjwt({secret: secretKey, algorithms: ["HS256"]});
