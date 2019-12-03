const { Schema, model } = require('mongoose');

const EvtSchema = new Schema({
    nome: {
        type: String,
        require: true,
    },
    data: {
        type: String,
        require: true,
    },
    ativo: Boolean,
    mesas:[],
    

}, {
        timestamps:true,
    
});

module.exports = model ('Evento', EvtSchema)