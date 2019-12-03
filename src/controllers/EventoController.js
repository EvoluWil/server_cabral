const Mesa = require('../models/Mesa');
const Evento = require('../models/Evento');


module.exports = {
    async index (req, res){
        const { evento } = req.params;

        const targetEvento = await Evento.findById(evento);

        const eventos = await Evento.find({
            $and:[
                { _id: { $ne: eventos } },
                { _id: { $nin: targetEvento.mesa} },
                

            ],
        })

         return res.json(eventos);
    } ,
    async store(req, res){
        const { evento } = req.body;
    
            const evtExist = await Evento.findOne({ nome : evento });
    
            if(evtExist){
                return res.json(evtExist);
            }

        async function usaMesa(nomedoevento){
            const todas = [];
            const i = 0;
            for(i = 1; i < 40; i++){
                todas = await Mesa.create({
                    evento: nomedoevento,
                    numMesa: i,
                })
                
            }
            console.log(todos);
            return(todas);
        }
           
        const {nome, data} = req.body;
     
        const evt = await Evento.create({
            nome: nome,
            data: data,
            ativo: true,
            mesas: [],
        })

        return res.json(evt);
    }
    };