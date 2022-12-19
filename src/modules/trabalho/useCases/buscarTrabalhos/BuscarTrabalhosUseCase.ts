import { client } from "../../../../model/prisma/client";

class BuscarTrabalhosUseCase {
    async execute(){
        return await client.trabalho.findMany();
    }   
}

export { BuscarTrabalhosUseCase };