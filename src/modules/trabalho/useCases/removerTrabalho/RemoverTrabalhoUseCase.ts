import { client } from "../../../../model/prisma/client";

interface IRemoverTrabalhoRequest {
    idTrabalho: string
}

class RemoverTrabalhoUseCase {
    async execute({idTrabalho}: IRemoverTrabalhoRequest){
        await client.trabalhoPessoa.deleteMany({ //remove trabalhos em cascata
            where:{
                id_trabalho: idTrabalho
            }
        });
        
        return await client.trabalho.delete({
            where:{
                id: idTrabalho
            }
        });
    }   
}

export { RemoverTrabalhoUseCase };