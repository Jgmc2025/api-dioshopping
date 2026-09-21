import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    async handle(request: Request, response: Response){
        const { nome, email, senha } = request.body;

        const createUserService = new CreateUserService();

        try {
            const newUser = await createUserService.execute({ nome, email, senha });
            return response.status(201).json(newUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { CreateUserController }