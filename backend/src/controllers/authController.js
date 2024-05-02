import { gerarToken } from "../utils/jwtUtils.js";
import { buscarUsuarioPorEmail, verificarSenha } from "../models/modelUsuario.js";

export async function login(req, res){
    const { email, senha } = req.body;
    try{
        const usuario = await buscarUsuarioPorEmail(email);
        if(!usuario || !(await verificarSenha(senha, usuario.senha))){
            return res.status(401).json({error: "Usuário não encontrado"});
        }

        const token = gerarToken({ userId: usuario.id });
        const { nome, email: userEmail } = usuario; // Renomeando 'email' para 'userEmail' para evitar conflito com 'const email'

        res.json({ token, user: { nome, email: userEmail } });

    } catch(error){
        console.error(`Erro ao fazer login: ${error}`);
        res.status(500).json({error: "Erro interno do servidor"});
    }
}
