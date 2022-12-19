import { Request, request, Response, response } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { BuscarOrientadoresController } from "../modules/pessoa/useCases/buscarOrientadores/BuscarOrientadoresController";
import { BuscarTrabalhosControler } from "../modules/trabalho/useCases/buscarTrabalhos/BuscarTrabalhosController";
import { BuscarTrabalhosControler as BuscarTrabalhosUserController } from "../modules/user/useCases/buscarTrabalhos/BuscarTrabalhosController";
import { CriarTrabalhoController } from "../modules/trabalho/useCases/criarTrabalho/CriarTrabalhoController";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { GetUserController } from "../modules/user/useCases/getUser/GetUserController";
import { RefreshTokenUserController } from "../modules/user/useCases/refreshTokenUser/RefreshTokenUserController";

var express = require('express');
var router = express.Router();


//Register
const createUserController = new CreateUserController();
router.post('/register', createUserController.handle);

//Login
const authenticateUserController = new AuthenticateUserController();
router.post('/login', authenticateUserController.handle);

//RefreshToken
const refreshTokenUserController = new RefreshTokenUserController();
router.post('/refresh-token', refreshTokenUserController.handle);

//test
router.get('/dados', ensureAuthenticated, (request: Request, response: Response)=>{
    return response.json([
        {id: 1, name: "NodeJS"}
    ]);
});

//Usuario
const getUserController : GetUserController = new GetUserController();
router.get('/usuario:id', ensureAuthenticated, getUserController.handle);

//Criar trabalho
const criarTrabalhoController : CriarTrabalhoController = new CriarTrabalhoController();
router.post('/trabalho', ensureAuthenticated, criarTrabalhoController.handle);

//Bucar trabalho do usuario
const buscarTrabalhosUserControler : BuscarTrabalhosUserController = new BuscarTrabalhosUserController();
router.get('/trabalho:idUsuario', buscarTrabalhosUserControler.handle);

//Buscar trabalho
const buscarTrabalhosControler : BuscarTrabalhosControler = new BuscarTrabalhosControler();
router.get('/trabalho', ensureAuthenticated, buscarTrabalhosControler.handle);

//Buscar orientadores
const buscarOrientadoresController : BuscarOrientadoresController = new BuscarOrientadoresController();
router.get('/orientadores', buscarOrientadoresController.handle);

export { router };