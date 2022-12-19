import { client } from "../../../../model/prisma/client";

interface IRemoverOrientadorRequest {
    idOrientador: string;
}

class RemoverOrientadorUseCase {
    async execute({idOrientador}:IRemoverOrientadorRequest){
        const orientador = await client.usuario.findFirst({
            where:{
                id: idOrientador,
            },
            select:{
                pessoa:{
                    select:{
                        id:true,
                        telefone:{
                            select:{
                                id:true,
                            }
                        }
                    }
                },
            }
        })

        
        
        await client.telefone.deleteMany({
            where:{
                pessoa:{
                    id:orientador!.pessoa.id
                }
            }
        })
        
        await client.trabalhoPessoa.deleteMany({
            where:{
                OR:[
                    {
                        trabalhoOrientador:{
                            id: orientador!.pessoa.id
                        },
                        trabalhoCoorientador:{
                            id: orientador!.pessoa.id
                        }
                    }
                ]
            }
        })

        await client.usuarioCargo.deleteMany({
            where:{
                id_usuario:idOrientador
            }
        });

        await client.pessoa.deleteMany({
            where:{
                usuario:{
                    every:{
                        id:idOrientador
                    }
                }
            }
        })
        
        return await client.usuario.delete({
            where:{
                id: idOrientador
            },
        });
    }   
}

export { RemoverOrientadorUseCase };