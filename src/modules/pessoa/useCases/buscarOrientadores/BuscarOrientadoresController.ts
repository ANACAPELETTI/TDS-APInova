import { Request, Response } from "express";
import { BuscarOrientadoresUseCase } from "./BuscarOrientadoresUseCase";

class BuscarOrientadoresController {
    async handle(request: Request, response: Response){
        
        try {
            const buscarOrientadoresUseCase : BuscarOrientadoresUseCase = new BuscarOrientadoresUseCase();
            const orientadores = await buscarOrientadoresUseCase.execute();
            return response.json(orientadores);       
        } catch (error) {
            return response.json({
                status: "Erro ao buscar orientadores",
                message: error
            });
        }
    }
}   

export { BuscarOrientadoresController };