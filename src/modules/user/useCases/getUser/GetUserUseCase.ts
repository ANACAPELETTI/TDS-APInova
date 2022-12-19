import { connect } from "mongoose";
import { client } from "../../../../model/prisma/client";

interface IGetUserRequest {
    id: string;
}

class GetUserUseCase {
    async execute({id}: IGetUserRequest){

        const user = await client.usuario.findUnique({
            where:{id: id},
            select:{
                email:true,
                RA:true,
                usuarioCargo:{
                    select:{
                        cargo:{
                            select:{
                                nome:true,
                            }
                        }
                    }
                },
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
        
        return user;
    }   
}

export { GetUserUseCase };