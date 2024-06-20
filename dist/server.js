var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import express from 'express';
import user from "./models/user";
const app = express();
app.use(express.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user.find();
    return res.status(200).json(listUsers);
}));
app.post('/send', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualUser = yield user.findOne({ email: req.body.email });
        if (actualUser) {
            return (res.status(400).json({ message: `Error! Email ${actualUser.email} already registered.` }));
        }
        const newUser = yield user.create(req.body);
        return (res.json(newUser));
    }
    catch (error) {
        return res.status(500).json(`Erro! ${error}`);
    }
}));
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect('mongodb+srv://taxiservice:taxiservice123@cluster0.7iucivo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Conexão ao banco de dados estabelecida!');
        app.listen(3002, () => console.log('Ouvindo na porta 3002'));
    }
    catch (error) {
        return (`Error! ${error}`);
    }
});
db();
