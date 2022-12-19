import { client } from "../../../../model/prisma/client";

interface IRemoverOrientadorRequest {
    idOrientador: string;
}

class RemoverOrientadorUseCase {
    async execute({idOrientador}:IRemoverOrientadorRequest){
        return await client.usuario.delete({
            where:{
                id: idOrientador
            },
        });
    }   
}

export { RemoverOrientadorUseCase };