import { openDb } from "../configDB.js";
import bcrypt  from "bcrypt";

const SALT_ROUDS = 10;

export async function criarUsuario(nome, email, senha){
    const db = await openDb();
    try{
        const hashSenha = await bcrypt.hash(senha, SALT_ROUDS);
        console.log(`Hash da senha: ${hashSenha}`)
        await db.run(`INSERT INTO usuario (nome, email,senha) VALUES(?, ?, ?)`, [nome, email, hashSenha]);
        console.log(`Usuario criado com sucesso: ${nome, email}`);
    } catch (error){
        console.error(`Erro ao criar usuario: ${error}`)
    } finally{
        await db.close();
    }
}

export async function buscarUsuarioPorEmail(email){
    const db = await openDb();
    try{
        const usuario = await db.get(`SELECT * FROM usuario WHERE email = ?`,[email]);
        console.log(`Usuario encontrado por email: ${usuario}`)
        return usuario;
    } catch (error){
        console.error(`Erro ao buscar usuario por email: ${error}`)
    } finally{
        await db.close()
    }
}

export async function verificarSenha(senhaDigitada, hashSenhaArmazenada){
    try{
        return await bcrypt.compare(senhaDigitada, hashSenhaArmazenada);
    }catch (error){
        console.error(`Erro ao verificar senha: ${error}`);
        throw error;
    }
    
}

export async function verificarLogin(email, password){
    const db = await openDb();
    try{
        const user = await db.get(`SELECT * FROM usuario WHERE email = ?`, [email])
        if (!user){
            return false;
        }
       return await verificarSenha(password, user.senha)
    }catch(error){
        console.error(`Erro ao verificar login: ${error}`);
        throw error;
    }finally{
        await db.close();
    }
}