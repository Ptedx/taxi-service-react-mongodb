import { Router } from "express";
import { getUser, sendUser } from "../handlers/user.js";

const userRouter = Router()

userRouter.get('/',getUser)
userRouter.post('/',sendUser)

export default userRouter