import dayjs from "dayjs"
import { client } from "../model/prisma/client"

/**
 * Classe responsável por gerar Refresh Token
 */
class GenerateRefreshToken {
    async execute(userId: string){
        const tempoDeExpiracao = dayjs().add(15, "second").unix();//gera a data numerica
        
        const generateRefreshToken = await client.refreshToken.create({
            data: {
                id_usuario: userId,
                tempoDeExpiracao: tempoDeExpiracao
            },
        });

        return generateRefreshToken;
    }
}

export { GenerateRefreshToken }