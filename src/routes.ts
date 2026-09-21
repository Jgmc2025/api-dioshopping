import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { DeleteMessageController } from "./controllers/DeleteMessageController";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/message', listMessageController.hanle)
router.post('/message', createMessageController.handle)
router.delete('/message', deleteMessageController.handle)
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

export { router }
