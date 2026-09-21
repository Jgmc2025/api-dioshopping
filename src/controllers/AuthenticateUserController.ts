import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const { email, senha } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        try {
            const result = await authenticateUserService.execute({ email, senha });
            return response.status(200).json(result);
        } catch (error) {
            return response.status(401).json({ error: error.message });
        }
    }
}

export { AuthenticateUserController }