const express =require('express')

const Player = require('../models/players')

const router = express.Router()

//INDEX
// GET /characters
router.get('/player', (req, res, next) => {
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
router.get('/player/:id', (req, res, next) => {
    Player.findById(req.params.id)
        .then(player => {
            res.status(200).json({ player : player })
        })
        .catch(next)
})

// CREATE
// POST /players
router.post('/player', (req, res, next) => {

    Player.create(req.body.player)
        .then(player => {
            res.status(201).json({ player : player })
        })
        .catch(next)
})

module.exports = router