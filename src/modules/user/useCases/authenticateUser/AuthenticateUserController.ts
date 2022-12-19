import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response){
        const { RA, senha } = request.body;

        const authenticateUserUseCase = new AuthenticateUserUseCase();

        try {
            const token = await authenticateUserUseCase.execute({
                RA: RA,
                senha: senha
            });
    
            return response.json(token);
        } catch (error) {
            return response.json({
                status: "Error ao autentica usuario",
                message: error
            });
        }
        
    }
}

export { AuthenticateUserController };