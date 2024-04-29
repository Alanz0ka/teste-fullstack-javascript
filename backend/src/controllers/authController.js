import { gerarToken } from "../utils/jwtUtils.js";
import { buscarUsuarioPorEmail, verificarSenha } from "../models/modelUsuario.js";

export async function login(req, res){
    const { email, senha } = req.body;
    try{
        const usuario = await buscarUsuarioPorEmail(email);
        if(!usuario || !(await verificarSenha(senha, usuario.senha))){
            return res.status(401).json({error: "Usuário não encontrado"});
        }

        const token = gerarToken({userId: usuario.id});

        res.json({token});

    }catch(error){
        console.error(`Erro ao fazer login: ${error}`);
        res.status(500).json({error: "Erro interno do servidor"})
    }
}

function removerToken(){
    const dataAgora = new Date();

    let dataExpirada = new Date(now.getTime() - 86400000)

    dataExpirada = dataExpirada.toUTCString();

    localStorage.removeItem("token");

    sessionStorage.removeItem("token")

    document.cookie = `token =; expires = ${dataExpirada}; path=/;`;
    
}

export function logout(req, res){
    removerToken();

    res.redirect("/login");

}
