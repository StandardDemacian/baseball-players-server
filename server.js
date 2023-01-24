// command center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const db = require('./config/db')
const PORT = 8000

const playerRoutes = require('./routes/player-routes')
const userRoutes = require('./routes/user-routes')
const sponserRoutes = require('./routes/sponser-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5501` }))


app.use(express.json())



app.use(playerRoutes)
app.use(userRoutes)
app.use(sponserRoutes)



app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app