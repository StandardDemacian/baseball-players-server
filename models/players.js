const mongoose = require('mongoose')
const sponserSchema = require('./sponsers')

const Schema = mongoose.Schema

const playerSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
        Number: {
            type: Number,
            required: true,
            min: 0,
            max: 99
        },
        Team: {
            type: String,
        },
		sponsers: [sponserSchema]
	},
	{
        timestamps: true
    }
)

const Player = mongoose.model('Player', playerSchema)

module.exports = Player