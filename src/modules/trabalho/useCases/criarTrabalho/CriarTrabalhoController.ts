import { Request, Response } from "express";
import { CriarTrabalhoUseCase } from "./CriarTrabalhoUseCase";

class CriarTrabalhoController {
    async handle(request: Request, response: Response){
        
        try {
            const {tema, descricao, idAluno, idCoorientador, idOrientador} = request.body;

            const criarTrabalhoUseCase : CriarTrabalhoUseCase = new CriarTrabalhoUseCase();

            const user = await criarTrabalhoUseCase.execute({
                tema: tema,
                descricao: descricao,
                idAluno: idAluno,
                idCoorientador: idCoorientador,
                idOrientador: idOrientador
            });
            return response.json(user);       
        } catch (error) {
            return response.json({
                status: "Erro ao criar trabalho",
                message: error
            });
        }
    }
}   

export { CriarTrabalhoController };