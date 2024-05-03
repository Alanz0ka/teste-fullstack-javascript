import { openDb } from "../configDB.js";

export async function getAllItens(id){
    const db = await openDb();
    try {
        const itens = await db.all(`
            SELECT item.* 
            FROM item 
            INNER JOIN usuario ON item.id_usuario = usuario.id
            WHERE usuario.id = ?;
        `, [id]);

        
        return itens;
    } catch(error) {
        console.error(`Erro ao buscar os itens: ${error}`);
        return [];
    } finally {
        await db.close();
    }
}
export async function getItemByID(id){
    const db = await openDb();
    try{
        const item = await db.get(`SELECT * FROM item WHERE id =?`,[id])
        return item;
    }catch(error){
        console.error(`Erro ao buscar os item: ${error}`);
    }finally{
        await db.close();
    }
}

export async function criarItem( idUsuario, nome, quantidade, valor){
    const db = await openDb();
    try{
        await db.run(`INSERT INTO item(id_usuario, nome, quantidade, valor) VALUES( ?, ?, ?, ?)`, [idUsuario, nome, quantidade, valor])
    }catch (error){
        console.error(`Erro ao criar item: ${error}`);
    }finally{
        await db.close();
    }
}

export async function apagarItemId(idItem){
    const db = await openDb();
    try{
        await db.run(`DELETE FROM item WHERE id=? `,[idItem])

    }catch (error){
        console.error(`Erro ao apagar item: ${error}`);
    }finally{

        await db.close();
    }
}

export async function atualizarItem(idItem, nome, quantidade, valor) {
    const db = await openDb();
    try {
        await db.run(`UPDATE item SET nome = ?, quantidade = ?, valor = ? WHERE id = ?`, [nome, quantidade, valor, idItem]);
    } catch (error) {
        console.error(`Erro ao atualizar item: ${error}`);
    } finally {
        await db.close();
    }
}
