import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface ICreateDeliveryman {
    username: string;
    password: string; 
}

export class CreateDeliverymanUseCase {
    async execute({username, password}: ICreateDeliveryman) {
        const clientExist = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                    equals: username
                }
            }
         })

         if(clientExist) {
            throw new Error("Client already exists")
         }

         // Cryptografar a senha
         const hashPassword = await hash(password, 10)

         // Salvar o client
         const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
         })

         return deliveryman;
    }
}