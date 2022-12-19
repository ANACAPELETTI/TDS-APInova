import { Request, Response } from "express";
import { BuscarAlunosUseCase } from "./BuscarAlunosUseCase";

class BuscarAlunosController {
    async handle(request: Request, response: Response){
        
        try {
            const buscarAlunosUseCase : BuscarAlunosUseCase = new BuscarAlunosUseCase();
            const alunos = await buscarAlunosUseCase.execute();
            return response.json(alunos);       
        } catch (error) {
            return response.json({
                status: "Erro ao buscar alunos",
                message: error
            });
        }
    }
}   

export { BuscarAlunosController };