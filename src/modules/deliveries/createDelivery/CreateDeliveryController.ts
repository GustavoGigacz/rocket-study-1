import type { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryCrontroller {
    async handle(request: Request, response: Response) {
        const { id_client, item_name } = request.body;
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const delivery = await createDeliveryUseCase.execute({
            id_client,
            item_name,
        });
        response.json(delivery);
    }
}