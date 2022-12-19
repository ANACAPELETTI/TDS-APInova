import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const getUserUseCase = new GetUserUseCase();

        try {
            const user = await getUserUseCase.execute({
                id: id
            });

            return response.json(user);
        } catch (error) {
            return response.json({
                status: "Error "+error,
                message: error
            });
        }
    }

}   
export { GetUserController };