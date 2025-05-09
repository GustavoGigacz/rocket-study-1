import { prisma } from "../../../../database/prismaClient";



export class FindAllDeliveriesUseCase {
    async handle(id_client: string) {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client
            },
            include: {
                deliveries: true,
            }
        })

        return deliveries
    }
}