import { openDb } from "../configDB.js";

export async function createTableItem() {
    const db = await openDb();
    try {
        await db.exec(`
            CREATE TABLE IF NOT EXISTS item(
                id INTEGER PRIMARY KEY,
                id_usuario INTEGER,
                nome TEXT,
                quantidade INTEGER,
                valor NUMERIC,
                FOREIGN KEY (id_usuario) REFERENCES usuario(id)
            )
        `);
        console.log("Tabela de itens criada com sucesso");
    } catch (error) {
        console.error(`Erro ao criar tabela de itens: ${error}`);
    } finally {
        await db.close();
    }
}