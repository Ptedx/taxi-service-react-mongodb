import { Request, Response } from 'express'
import user from "../models/user.js"

interface userProps {
    _id: string,
    name: string,
    email: string,
    cellphone: number,
    creationDate: Date,
    _v?:number
}


export async function getUser(req:Request<{},{},userProps>, res: Response) {
    console.log(res)
    const listUsers = await user.find()
    return res.status(200).json(listUsers)
}

export async function sendUser(req:Request<{},{},userProps>, res:Response){
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
}