import { Request, Response } from "express";
import { RemoverOrientadorUseCase } from "./RemoverOrientadorUseCase";

class RemoverOrientadorController {
    async handle(request: Request, response: Response){
        
        try {
            const { idOrientador } = request.params;

            const removerOrientadorUseCase : RemoverOrientadorUseCase = new RemoverOrientadorUseCase();
            const orientadores = await removerOrientadorUseCase.execute({
                idOrientador: idOrientador
            });
            return response.json(orientadores);       
        } catch (error) {
            return response.json({
                status: "Erro ao remover orientador "+error,
                message: error
            });
        }
    }
}   

export { RemoverOrientadorController };