const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const empresa_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    },
    RUC: req_string,
    nombre: req_string
}, {
    timestamps: true,
})

const representanteLegal_schema = new Schema({
    RUC: req_string,
    nombre: req_string,
    domicilio: String,
    telefono: String,
    empresa: [empresa_schema]
})

const model = mongoose.model('representanteLegal', representanteLegal_schema)
module.exports = model