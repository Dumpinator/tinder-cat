import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    statut: String,
})

export default mongoose.model('Card', cardSchema)