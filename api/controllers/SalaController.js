const database = require('../models');

class SalaController{
    
    static async criaSala(req, res){
        const novaSala = req.body;
        try {
            const salaCriada = await database.Salas.create(novaSala);
            return res.status(200).json(salaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaTodasSalas (req, res){
        try {
            const todasSalas = await database.Salas.findAll();
            return res.status(200).json(todasSalas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaSala(req, res){
        const {id} = req.params;
        try {
            const salaEncontrada = await database.Salas.findOne({
                where:{
                    id: Number(id)
                }
            });
            return res.status(200).json(salaEncontrada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaSala(req, res){
        const { id } = req.params;
        const salaAAtualizar = req.body;
        try {
            await database.Salas.update(salaAAtualizar,{
                where:{
                    id: Number(id)
                }
            });
            const salaAtualizada = await database.Salas.findOne({
                where:{
                    id: Number(id)
                }
            });
            return res.status(200).json(salaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaSala(req, res){
        const {id} = req.params;
        try {
            await database.Salas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({mensagem: `A sala ${id} foi removida`})
        } catch (error) {
            return res.status(500).json(error.message);            
        }
    }
}

module.exports = SalaController;