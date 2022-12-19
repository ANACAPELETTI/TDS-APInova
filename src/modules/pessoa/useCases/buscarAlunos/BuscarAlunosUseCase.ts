import { client } from "../../../../model/prisma/client";

class BuscarAlunosUseCase {
    async execute(){
        return await client.usuario.findMany({
            where:{
                usuarioCargo:{
                    every:{
                        id_cargo: '1'
                    }
                }
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
                        id:true,
                        descricao:true,
                        nome:true,
                        pontuacao:true,
                        imagemCaminho: true,
                        telefone: true,
                    },
                },
            }
        });
    }   
}

export { BuscarAlunosUseCase };