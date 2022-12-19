import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
    async execute(userId: string){
        const token = sign({}, "868f6f4b-c149-4c4b-947b-4c995ceeb9d1", {
            subject: userId,
            //expiresIn: "20s"//TODO definir 1 hora
            expiresIn:"10000s"
        });

        return token;
    }
}  

export { GenerateTokenProvider }