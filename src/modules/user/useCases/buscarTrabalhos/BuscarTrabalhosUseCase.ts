import { client } from "../../../../model/prisma/client";

interface IBuscarTrabalhosRequest {
    idUsuario: string
}

class BuscarTrabalhosUseCase {
    async execute({idUsuario}: IBuscarTrabalhosRequest){
        return await client.usuario.findMany({
            where:{
                id:idUsuario
            },
            select:{
                pessoa:{
                    select:{
                        id:true,
                        ativo:true,
                        nome:true,
                        OrientadorTrabalho:{
                            select:{
                                trabalho:{
                                    select:{
                                        id:true,
                                        tema:true,
                                        descricao:true,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }   
}

export { BuscarTrabalhosUseCase };