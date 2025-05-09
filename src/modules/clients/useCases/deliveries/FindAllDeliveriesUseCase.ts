import { prisma } from "../../../../database/prismaClient";



export class FindAllDeliveriesUseCase {
    async handle(id_client: string) {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client
            },
            select: {
                deliveries: true,
                id: true,
                username: true,
                
            }
        })

        return deliveries
    }
}