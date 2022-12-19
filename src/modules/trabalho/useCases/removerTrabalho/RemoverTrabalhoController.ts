import { Request, Response } from "express";
import { RemoverTrabalhoUseCase } from "./RemoverTrabalhoUseCase";

class RemoverTrabalhoController {
    async handle(request: Request, response: Response){
        
        try {
            const {idTrabalho} = request.body;

            const removerTrabalhoUseCase : RemoverTrabalhoUseCase = new RemoverTrabalhoUseCase();

            const trabalhoRemovido = await removerTrabalhoUseCase.execute({
                idTrabalho: idTrabalho
            });
            return response.json(trabalhoRemovido);       
        } catch (error) {
            return response.json({
                status: "Erro ao remover trabalho "+error,
                message: error
            });
        }
    }
}   

export { RemoverTrabalhoController };