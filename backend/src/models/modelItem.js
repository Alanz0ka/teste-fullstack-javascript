import { openDb } from "../configDB.js";

export async function getAllItens(){
    const db = await openDb();
    try{
        const itens = await db.get(`SELECT * FROM item`)
        console.log(`Sucesso ao buscar itens: ${itens}`)
        return itens;
    }catch(error){
        console.error(`Erro ao buscar os itens: ${error}`)
    }finally{
        await db.close();
    }
}
export async function getItemByID(id){
    const db = await openDb();
    try{
        const item = await db.get(`SELECT * FROM item WHERE id =?`,[id])
        console.log(`Sucesso ao buscar item`)
        return item;
    }catch(error){
        console.error(`Erro ao buscar os item: ${error}`);
    }finally{
        await db.close();
    }
}

export async function criarItem(idUsuario, nome, quantidade, valor){
    const db = await openDb();
    try{
        await db.run(`INSERT INTO item(id_usuario, nome, quantidade, valor) VALUES(?, ?, ?, ?)`, [idUsuario, nome, quantidade, valor])
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
        console.log("Item atualizado com sucesso");
    } catch (error) {
        console.error(`Erro ao atualizar item: ${error}`);
    } finally {
        await db.close();
    }
}