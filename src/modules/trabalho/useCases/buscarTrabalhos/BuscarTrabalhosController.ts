import { Request, Response } from "express";
import { BuscarTrabalhosUseCase } from "./BuscarTrabalhosUseCase";

class BuscarTrabalhosControler {
    async handle(request: Request, response: Response){
        
        try {
            const buscarTrabalhosUseCase : BuscarTrabalhosUseCase = new BuscarTrabalhosUseCase();
            const user = await buscarTrabalhosUseCase.execute();
            return response.json(user);       
        } catch (error) {
            return response.json({
                status: "Erro ao buscar trabalhos",
                message: error
            });
        }
    }
}   

export { BuscarTrabalhosControler };