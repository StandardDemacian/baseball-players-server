const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{

		//field -email unquire:true 
		email: {
			type: String,
			required: true,
			//email cant be put in more than once 
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		//token not required
		token: String,
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_doc, user) => {
				delete user.password
				return user
			},
		},
	}
)

module.exports = mongoose.model('User', userSchema)