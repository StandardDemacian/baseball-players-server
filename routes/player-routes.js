const express =require('express')

const Player = require('../models/players')
const { requireToken } = require('../config/auth')
const router = express.Router()

//INDEX
// GET /characters
router.get('/player', requireToken, (req, res, next) => {
    Player.find()
        .then(player => {
            return player.map(player => player)
        })
        .then(player => {
            res.status(200).json({ player : player })
        })
        .catch(next)
})

// SHOW
// GET /player/:id
router.get('/player/:id', requireToken, (req, res, next) => {
    Player.findById(req.params.id)
        .then(player => {
            res.status(200).json({ player : player })
        })
        .catch(next)
})

// CREATE
// POST /players
router.post('/player', requireToken, (req, res, next) => {

    Player.create(req.body.player)
        .then(player => {
            res.status(201).json({ player : player })
        })
        .catch(next)
})

//UPDATE 
//PATCH
router.patch('/player/:id',requireToken, (req,res,next)=>{

    Player.findById(req.params.id)
    .then((player)=> {
        return player.updateOne(req.body.player)
    })   
    .then(()=> res.sendStatus(204))
    .catch(next)
})


// DESTROY
// DELETE 
router.delete('/player/:id', requireToken, (req, res, next) => {
	Player.findById(req.params.id)
		.then((player) => {
			return player.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router


