import { client } from "../../../../model/prisma/client";

class BuscarOrientadoresUseCase {
    async execute(){
        return await client.usuario.findMany({
            where:{
                OR:[
                    {
                        usuarioCargo:{
                            every:{
                                id_cargo: '2'
                            }
                        }
                    },
                    {
                        usuarioCargo:{
                            every:{
                                id_cargo: '3'
                            }
                        }
                    }
                ]
            },
            select:{
                id:true,
                RA:true,
                id_pessoa:true,
                email:true,
                usuarioCargo:{
                    select:{
                        cargo:{
                            select:{
                                nome:true,
                                id:true
                            }
                        }
                    }
                },
                pessoa:{
                    select:{
                        nome:true,
                        pontuacao:true,
                    },
                },
            }
        });
    }   
}

export { BuscarOrientadoresUseCase };