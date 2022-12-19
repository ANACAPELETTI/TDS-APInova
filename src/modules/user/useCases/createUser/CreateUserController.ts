import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    async handle(request: Request, response: Response){
        const {RA,nome, ativa, email, senha, telefone, idCargo, imagemCaminho, descricao} = request.body;

        const createUserUseCase = new CreateUserUseCase();

        try {
            const novoUsuario = await createUserUseCase.execute({
                ativa: ativa,
                email: email,
                nome: nome,
                RA: RA,
                senha: senha,
                telefone: telefone,
                idCargo: idCargo,
                imagemCaminho: imagemCaminho,
                descricao: descricao
            });

            return response.json(novoUsuario);//Se der bom, retorna o usuário que foi cadastrado
        } catch (error) {
            return response.json({
                status: "Erro ao criar um usuário "+error,
                message: error
            });
        }
        

    }
}   

export { CreateUserController };