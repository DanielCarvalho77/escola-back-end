const database = require('../models');

class TurmaController{
    static async pegaTodasTurmas(req, res){
        try {
            const todasTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasTurmas);   
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res){
        const {id} = req.params;
        try {
            const turma = await database.Turmas.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res){
        const novaTurma = req.body;
        try {
            const turmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(turmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res){
        const formularioTurma = req.body;
        const {id} = req.params;
        try {
            await database.Turmas.update(formularioTurma, {
                where:{
                    id: Number(id)
                }
            });
            const turmaAtualizada = database.Turmas.findOne({
                where:{
                    id:Number(id)
                }
            });
            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaTurma(req, res){
        const {id} = req.params;
        try {
            const turmaDeletado = await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({mensagem:`A turma ${id} foi excluída`});S
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;