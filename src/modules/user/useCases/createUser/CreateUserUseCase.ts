import { hash } from "bcryptjs";//Criptografa
import { AppError } from "../../../../errors/AppError";
import { client } from "../../../../model/prisma/client";

interface ICriarUsuarioRequest {
    RA: string,
    nome: string,
    ativa: Boolean,
    email: string,
    senha: string,
    telefone: string,
    idCargo: string,
    imagemCaminho: string,
    descricao: string
}

class CreateUserUseCase {
    async execute({RA, nome, ativa, email, senha, telefone, idCargo, imagemCaminho, descricao}: ICriarUsuarioRequest){

        //Verificar se usuário existe
        const usuarioJaExiste = await client.usuario.findFirst({
            where:{
                RA: RA
            }
        });

        if(usuarioJaExiste){
            throw new AppError("Usuário já existe!");
        }

        //Cadastra o usuário
        const senhaHash = await hash(senha, 8);//Criptografa a senha
        
        const novoUsuario = await client.usuario.create({
            data:{
                RA: RA,
                email: email,
                senha: senhaHash,
                pessoa:{
                    create:{
                        nome: nome,
                        ativo: true,
                        pontuacao: 0,
                        imagemCaminho: imagemCaminho,
                        descricao: descricao,
                        telefone: {
                            create:{
                                numero: telefone,
                            }
                        },
                    }
                },
                usuarioCargo:{
                    create:{
                        cargo:{
                            connect:{
                                id:idCargo
                            }
                        }
                    }
                }
            }
        });

        return novoUsuario;
    }   

    
}

export { CreateUserUseCase };