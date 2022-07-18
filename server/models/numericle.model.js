const mongoose = require("mongoose")

const NumericleSchema = new mongoose.Schema({

    //_id

    equation: {
        type: String
    },

    solution: {
        type: String,
    },

    date: {
        type: String
    },

    revealindexes: {
        type: String
    },
    
}, {timestamps: true})


const Numericle = mongoose.model("Numericle", NumericleSchema)

module.exports = Numericle;