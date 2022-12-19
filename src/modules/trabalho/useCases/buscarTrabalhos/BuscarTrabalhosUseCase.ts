import { client } from "../../../../model/prisma/client";

class BuscarTrabalhosUseCase {
    async execute(){
        return await client.trabalho.findMany({
            select:{
                descricao:true,
                id:true,
                tema:true,
                trabalhoPessoa:{
                    select:{
                        trabalhoAluno:{
                            select:{
                                id:true,
                                nome:true
                            }
                        },
                        trabalhoCoorientador:{
                            select:{
                                id:true,
                                nome:true
                            }
                        },
                        trabalhoOrientador:{
                            select:{
                                id:true,
                                nome:true
                            }
                        }
                    }
                }
            }
        });
    }   
}

export { BuscarTrabalhosUseCase };