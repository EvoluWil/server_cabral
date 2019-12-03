const Mesa = require('../models/Mesa');


module.exports = {
    async index(req, res){

        const numero = req.body;
               
        const meseSelect = await Mesa.find({
            ativo: true,
        });
         
    return res.json(meseSelect);
    } ,

    
    async store(req, res){
    const { nome , telefone, numPessoas, evento, numeMesa} = req.body;
     
        const mesa = await Mesa.create({
            nome: nome,
            telefone: telefone,
            numPessoas: numPessoas,
            ativo: true,
            evento: evento,
            numMesa: numeMesa
        })

    return res.json(mesa);
    },

    async delete(req, res){
        const numero =req.params.numMesa;
        
        const mesa = await Mesa.deleteOne({numMesa: numero});
        
        return res.json(mesa);
    }
};