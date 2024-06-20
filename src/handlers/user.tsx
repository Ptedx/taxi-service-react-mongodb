import { Request, Response } from 'express'
import user from "../models/user"

export async function getUser(req:Request, res: Response) {
    const listUsers = await user.find()

    return res.status(200).json(listUsers)
}

export async function sendUser(req:Request, res:Response){
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