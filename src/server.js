import mongoose from "mongoose"
import express from 'express'
import user from "./models/user.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', async (req, res)=>{
    const listUsers = await user.find()

    return res.status(200).json(listUsers)
})

app.post('/send', async (req, res)=>{
    try{
        const actualUser = await user.findOne({email: req.body.email}) 
        if (actualUser){
            return(res.status(400).json({message: `Error! Email ${actualUser.email} already registered.`}))
        }
        const newUser = await user.create(req.body)
        return (res.json(newUser))
    }catch(error){
        return res.status(500).json(`Erro! ${error}`)
    }
})

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