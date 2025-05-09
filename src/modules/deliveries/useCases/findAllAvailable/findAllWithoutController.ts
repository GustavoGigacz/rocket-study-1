import { Request, Response } from "express";
import { FindAllUseCase } from "./findAllWithout";


export class findAllController {
    async handle(request: Request, response: Response) {
        const findAllUseCase = new FindAllUseCase();

        const deliveries = await findAllUseCase.execute()
        return response.json(deliveries)
    }
}