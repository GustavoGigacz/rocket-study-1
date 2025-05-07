import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";
export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateDeliverymanController = new AuthenticateDeliverymanUseCase()
        const result = await authenticateDeliverymanController.execute({
            username,
            password
        })

        response.json(result)
    }
}