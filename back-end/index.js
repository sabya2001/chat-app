import express from 'express'
const app = express()
import userApi from './APIs/UserAPIs.js'
import mongoose from 'mongoose';
import 'dotenv/config'
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
async function connection() {

    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log('Connected to DB!!');
    } catch (err) {
        console.log("Error occured - " + err);
    }
}
connection()
.then(()=>{app.listen(process.env.PORT||3000,()=>{console.log("Server Started")})})
app.use('/api',userApi)

