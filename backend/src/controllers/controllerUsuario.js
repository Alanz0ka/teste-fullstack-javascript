import { criarUsuario, buscarUsuarioPorEmail } from "../models/modelUsuario.js";
export async function registrarUsuario(req, res){
    const {nome, email, senha} = req.body;
    try{
        // Verificar se já existe p email
        const usuarioExiste = await buscarUsuarioPorEmail(email);
        if(usuarioExiste){
            return res.status(400).send(`O email já está em uso`);
        }
        await criarUsuario(nome, email,senha);
        res.status(201).send("Usuario criado com sucesso")
    }catch (error){
        console.error(`Erro ao criar Usuario: ${error}`)
        res.status(500).send("Erro interno do servidor")
    }
    
}