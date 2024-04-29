import { openDb } from "../configDB.js";

export async function createTableUsuario() {
    const db = await openDb();
    try {
        await db.exec(`
            CREATE TABLE IF NOT EXISTS usuario (
                id INTEGER PRIMARY KEY,
                nome TEXT,
                email TEXT,
                senha VARCHAR(255)
            )
        `);
        console.log("Tabela de usuários criada com sucesso");
    } catch (error) {
        console.error(`Erro ao criar tabela de usuários: ${error}`);
    } finally {
        await db.close();
    }
}