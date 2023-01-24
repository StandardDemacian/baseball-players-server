const express = require('express')
const router = express.Router()

const Player = require('../models/players')

const { requireToken } = require('../config/auth')

//CREATE
//POST /notes

router.post('/sponsers' , requireToken, (req,res,next) =>{
    const playerId = req.body.sponser.playerId

    const sponser = req.body.sponser
    console.log(sponser)
    Player.findById(playerId)
        .then(player => {
            player.sponsers.push(sponser)
            return player.save()
        })
        .then(player => {
            res.status(201).json({ player : player })
        })
        .catch(next)
})

//UPDATE
//PATCH /sponsers/:sponserId

router.patch('/sponsers/:sponserId', requireToken, (req,res,next)=>{
    const playerId = req.body.sponser.playerId
     
    const sponserContent = req.body.sponser

    Player.findById(playerId)
        .then(player => {
            const sponser = player.sponsers.id(req.params.sponserId)
            
            sponser.set(sponserContent)
            return player.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DESTROY
//DELETE

router.delete('/sponsers/:sponserId', requireToken, (req,res,next)=>{
    const playerId = req.body.sponser.playerId

    Player.findById(playerId)
        .then(player => {
            player.sponsers.id(req.params.sponserId).remove()
            
            return player.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router