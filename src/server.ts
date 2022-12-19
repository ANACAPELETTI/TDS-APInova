import express, { NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import "express-async-errors";
import { Request, request, Response, response } from "express";

const app = express();

import { router } from "./routes/userRoutes";
import { AppError } from './errors/AppError';
import { prisma } from '@prisma/client';

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Rotas
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3000, async()=>{
    console.log("Servidor rodando e pronto para o uso! :D");
});