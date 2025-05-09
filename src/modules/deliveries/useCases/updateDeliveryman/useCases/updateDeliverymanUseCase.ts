import { prisma } from "../../../../../database/prismaClient"

interface IUpdateDeliveryman {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
    async execute({id_delivery, id_deliveryman}: IUpdateDeliveryman) {

        console.log("IDDELIVERYMAN", id_deliveryman)
        console.log("IDDELIVERY", id_delivery)


        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
            }
        })

        return result;
    }
}