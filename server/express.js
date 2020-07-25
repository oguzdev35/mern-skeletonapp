import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

import Template from '../template';

import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(cors());

app.use('/', userRoutes);
app.use('/', authRoutes);

// app.get('/', (req, res) => {
//     res.status(200).send(Template())
// })

app.use((err, req, res, next) => {
    if(err.name === "UnauthorizedError"){
        res.status(401).json({"error": err.name + ": " + err.message})
    } else if (err){
        res.status(400).json({"error": err.name + ": " + err.message})
        console.log(err)
    }
})

export default app;