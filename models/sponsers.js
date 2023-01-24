const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sponserSchema = new Schema({
    brand: {
        type: String,
        required:true
    }
    },
    {
        timestamps:true
    }  
)

module.exports = sponserSchema