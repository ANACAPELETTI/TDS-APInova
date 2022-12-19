import { compare } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";
import { client } from "../../../../model/prisma/client";
import { GenerateRefreshToken } from "../../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../../provider/GenerateTokenProvider";

interface IAuthenticateUserRequest{
    RA: string,
    senha: string,
}

class AuthenticateUserUseCase {
    async execute({RA, senha}: IAuthenticateUserRequest){
        //Verificar se usuário existe
        const usuarioJaExiste = await client.usuario.findFirst({
            where:{
                RA: RA
            }
        })

        if(!usuarioJaExiste){
            throw new AppError("RA ou senha incorreta");
        }

        //Verificar se a senha está correta

        const passwordMatch = await compare(senha, usuarioJaExiste.senha);//Verificar a entrada com a senha criptografada

        if(!passwordMatch){
            throw new AppError("RA ou senha incorreta");
        }

        //Gerar token do usuário
        //chave gerada de https://www.uuidgenerator.net
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(usuarioJaExiste.id);

        //Remover refreshToken do usuário que logou
        await client.refreshToken.deleteMany({
            where:{
                id_usuario: usuarioJaExiste.id,
            },
        });

        const generateRefreshToken = new GenerateRefreshToken();
        const refreshToken = await generateRefreshToken.execute(usuarioJaExiste.id);

        return { token, refreshToken };
    }
}

export { AuthenticateUserUseCase };