import { Request, Response } from "express";
import { BuscarTrabalhosUseCase } from "./BuscarTrabalhosUseCase";

class BuscarTrabalhosControler {
    async handle(request: Request, response: Response){
        
        try {
            const { idUsuario } = request.params;
            const buscarTrabalhosUseCase : BuscarTrabalhosUseCase = new BuscarTrabalhosUseCase();
            const trabalhos = await buscarTrabalhosUseCase.execute({
                idUsuario: idUsuario
            });
            return response.json(trabalhos);       
        } catch (error) {
            return response.json({
                status: "Erro ao buscar trabalhos",
                message: error
            });
        }
    }
}   

export { BuscarTrabalhosControler };