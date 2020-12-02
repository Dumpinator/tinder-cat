import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '../tinder-frontend/.env' }, { silent: true })

const connection_DB = `mongodb+srv://admin:${process.env.PASSWORD_DB}@tindercatscluster.hstbm.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`

//mongoose.Promise = global.Promise

const connectToDb = mongoose.connect(connection_DB,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then((res) => {
        console.log('DB connection successful !')
    })
    .catch((err) => {
        console.log('DB connection Rejected :' + err)
    })

export default connectToDb;

// with async / await
/*
const connectToDb = async () => {
    try {
        await mongoose
            .connect(connection_DB, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true})
            console.log('DB connection successful !')
        } catch (err) {
            console.log('DB connection Rejected :' + err)
    }
}
export default connectToDb
*/