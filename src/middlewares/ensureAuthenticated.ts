import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

/**
 * Essa é uma função que irá ser intemediário de várias para saber se a pessoa tem o token de acesso válido
 * @param request Requisição
 * @param response Resposta
 * @param next Próxima função
 * @returns 
 */
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;
    if(!authToken){
        return response.status(401).json({
            message: "Token is missing"
        })//Status 401 - Usuário nào tem permissão
    }

    const [, token] = authToken.split(" ");//Ele irá separar em dois, pq oque será recebido é "Bearer 3243435423543", oq importa é só o token

    try {
        verify(token, "868f6f4b-c149-4c4b-947b-4c995ceeb9d1");
        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token Invalid"
        })
    }
}