import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateClientController = new AuthenticateClientUseCase()
        const result = await authenticateClientController.execute({
            username,
            password
        })

        response.json(result)
    }
}