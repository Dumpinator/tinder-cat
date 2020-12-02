import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import Card from './models/cardModel.js'

// App Config
dotenv.config({ path: '../tinder-frontend/.env' }, { silent: true })

// DB Connection
import connectToDb from './config/db.js'

const app = express()
const port = process.env.PORT || 8001

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// API Endpoints (route)
app.get('/', (req, res) => res.status(200).send('Hello Server !!!'))

app.post('/cards', (req, res) => {
    const dbCard = req.body

    // create in DB
    Card.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    
    Card.find((err, data) => {

        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening Server on localhost : ${port}`))