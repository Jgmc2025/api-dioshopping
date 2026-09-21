import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UsersRepository } from "../repository/UsersRepository";

interface IUser {
    nome: string;
    email: string;
    senha: string;
}

class CreateUserService {
    async execute({ nome, email, senha }: IUser){
        const usersRepository = getCustomRepository(UsersRepository);

        if(!nome){
            throw new Error("Por favor informe um nome!")
        }

        if(!email){
            throw new Error("Por favor informe um email!")
        }

        if(!senha){
            throw new Error("Por favor informe uma senha!")
        }

        const userExists = await usersRepository.findOne({ email });

        if(userExists){
            throw new Error("Este email já está cadastrado!")
        }

        const senhaHash = await hash(senha, 8);

        const newUser = usersRepository.create({ nome, email, senha: senhaHash })

        await usersRepository.save(newUser);

        const { senha: _, ...userSemSenha } = newUser;

        return userSemSenha;
    }
}

export  { CreateUserService }