import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan'
import Card from './models/cardModel.js'

// App Config
dotenv.config({ path: '../.env' }, { silent: true })
const app = express()
const port = process.env.PORT || 8001
const connection_DB = `mongodb+srv://admin:${process.env.PASSWORD_DB}@tindercatscluster.hstbm.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`
console.log('maco ', connection_DB);
// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// DB Config
mongoose.connect(connection_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then((res) => {
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
app.listen(port, () => console.log(`Listening Server on localhost : ${port}`))