import mongoose from "mongoose"
import express from 'express'
import cors from "cors"
import userRouter from "./routes/user"



const app = express()
app.use(express.json())
app.use(cors())

app.use('/', userRouter)

const db = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://taxiservice:taxiservice123@cluster0.7iucivo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Conexão ao banco de dados estabelecida!')

        app.listen(3002, ()=>console.log('Ouvindo na porta 3002'))
    }catch(error){
        return (`Error! ${error}`)
    }
}

db()