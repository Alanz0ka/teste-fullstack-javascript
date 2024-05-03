import { createTableItem } from "./controllers/Item.js";
import { createTableUsuario} from "./controllers/Usuario.js";
import express from "express";
import bodyParser from "body-parser";
import usuariosRouter from "./Routers/usuarios.js"
import itensRouter from "./Routers/itens.js"
import rotasProtegidas from "./Routers/authRoutes.js";
import home from "./Routers/homeRoute.js"
import cors from "cors";

const port = 4000;

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  app.use(cors(corsOptions));

createTableUsuario();
createTableItem();

app.get("/helloworld", (req, res)=>{
    res.send("Hello World");
});

app.use("/auth", rotasProtegidas);

app.use("/usuarios", usuariosRouter);

app.use("/itens", itensRouter);

app.use("/home", home);

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
});