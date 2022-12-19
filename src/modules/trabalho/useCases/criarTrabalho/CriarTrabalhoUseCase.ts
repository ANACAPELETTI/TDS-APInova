import { client } from "../../../../model/prisma/client";

interface ICriarTrabalhoRequest {
    tema: string,
    descricao: string,
    idAluno: string,
    idCoorientador?: string,
    idOrientador: string
}

class CriarTrabalhoUseCase {
    async execute({tema, descricao, idAluno, idCoorientador, idOrientador}: ICriarTrabalhoRequest){
        if(idCoorientador == ""){
            return await client.trabalho.create({
                data:{
                    tema: tema,
                    descricao: descricao,
                    trabalhoPessoa:{
                        create:{
                            trabalhoAluno:{
                                connect:{id:idAluno}
                            },
                            trabalhoOrientador:{
                                connect:{id:idOrientador}
                            }
                        }
                    }
                }
            });
        }
        return await client.trabalho.create({
            data:{
                tema: tema,
                descricao: descricao,
                trabalhoPessoa:{
                    create:{
                        trabalhoAluno:{
                            connect:{id:idAluno}
                        },
                        trabalhoCoorientador:{
                            connect:{id:idCoorientador}
                        },
                        trabalhoOrientador:{
                            connect:{id:idOrientador}
                        }
                    }
                }
            }
        });
    }   
}

export { CriarTrabalhoUseCase };