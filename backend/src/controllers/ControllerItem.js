import { getAllItens, criarItem, getItemByID, apagarItemId, atualizarItem } from "../models/modelItem.js";

export async function cadastrarItem(req, res){
    const {  nome, quantidade, valor } = req.body;
    const idUsuario = req.userID;
    console.log(`Id usuario; ${idUsuario}`)
    try{
        await criarItem(idUsuario, nome, quantidade, valor);

        res.status(201).send("Item criado com sucesso")
    }catch (error){
        console.error(`Erro ao criar item: ${error}`)
        res.status(500).send("Erro interno do servidor")
    }
}

export async function listarItens(req, res) {
    const id = req.params.id;
    try {
        if (!Number.isInteger(Number(id)) || id <= 0) {
            console.error("ID inválido:", id);
            return res.status(400).send("Id inválido");
        }

        const itens = await getAllItens(id);

        if (!itens || itens.length === 0) {
            return res.status(204).send("Nenhum item encontrado");
        }

        res.json(itens).status(200);
    } catch (error) {
        console.error("Erro ao listar os itens:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export async function listarItemId(req, res){
    const id = req.params.id
    console.log(id)
    try{
        if (!Number.isInteger(Number(id)) || id <= 0){
            return res.status(400).send("Id inválido")
        }

        const item = await getItemByID(id)

        if (!item){
            return res.status(404).send("Item não encontrado")
        }

        res.status(200).json(item);
    }catch (error){
        console.error(`Erro ao criar item: ${error}`)
        res.status(500).send("Erro interno do servidor")
    }
}

export async function apagarItem(req, res){
    const id = req.params.id
    try{
        if (!Number.isInteger(Number(id)) || id <= 0){
            return res.status(400).send("Id inválido")
        }
        
        const item = await getItemByID(id);

        if (!item){
            return res.status(404).send("Item não encontrado");
        }

        await apagarItemId(id);

        res.status(200).send("Item apagado com sucesso");
    }catch (error){
        console.error(`Erro ao criar item: ${error}`)
        res.status(500).send("Erro interno do servidor")
    }
}

export async function atualizarItemPorId(req, res) {

    const {id, nome, quantidade, valor } = req.body;

    try {
        
        const item = await getItemByID(id);
        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }

        
        await atualizarItem(id, nome, quantidade, valor);

        res.status(200).json({ message: "Item atualizado com sucesso" });
    } catch (error) {
        console.error(`Erro ao atualizar item: ${error}`);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}