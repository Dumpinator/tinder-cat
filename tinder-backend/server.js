import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan'
import Card from './models/cardModel.js'

// App Config
const app = express()
const port = process.env.PORT || 8001
const ENV = dotenv.config({ silent: true })
const connection_DB = `mongodb+srv://admin:${ENV.parsed.PASSWORD_DB}@tindercatscluster.hstbm.mongodb.net/${ENV.parsed.NAME_DB}?retryWrites=true&w=majority`

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
// DB Config
mongoose.connect(connection_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection successful !')
  })
  .catch((err) => {
    console.log('DB connection Rejected :' + err)
  });

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
app.listen(port, () => console.log(`Listening on localhost : ${port}`))