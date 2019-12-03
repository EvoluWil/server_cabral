const { Schema, model } = require('mongoose');

const MesaSchema = new Schema({
    nome: {
        type: String,
        
    },
    telefone: {
        type: String,
        
    },
    numPessoas: {
        type: String,
        
    },
    numMesa: {
        type: String,
        require: true,
    },
    ativo: Boolean,
    evento: {
        type: String,
        ref: 'Evento',
    },
    

}, {
        timestamps:true,
    
});

module.exports = model ('Mesa', MesaSchema)