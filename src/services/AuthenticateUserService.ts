import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../repository/UsersRepository";

interface IAuth {
    email: string;
    senha: string;
}

class AuthenticateUserService {
    async execute({ email, senha }: IAuth){
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({ email });

        if(!user){
            throw new Error("Email ou senha incorretos!")
        }

        const senhaCorreta = await compare(senha, user.senha);

        if(!senhaCorreta){
            throw new Error("Email ou senha incorretos!")
        }

        const token = sign(
            { email: user.email, nome: user.nome },
            process.env.JWT_SECRET || "seu_segredo_aqui",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return {
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email
            },
            token
        };
    }
}

export  { AuthenticateUserService }