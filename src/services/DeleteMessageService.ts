import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
    id: string;
}

class DeleteMessageService {
    async execute({id}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);

        const newMessage = messageRepository.delete({ id })

        return newMessage;
    }
}

export  { DeleteMessageService }