import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    cellphone:{
        type: Number,
        required: true
    },
    creationDate:{ 
        type: Date, 
        default: Date.now 
    }
})

export default mongoose.model('user', schema)