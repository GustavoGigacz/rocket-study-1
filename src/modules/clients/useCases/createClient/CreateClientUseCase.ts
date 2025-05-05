import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt";

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {

    async execute({username, password}: ICreateClient) {
         // Validar se o usuário existe
         const clientExist = await prisma.clients.findFirst({
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
         const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
         })

         return client;
    }
}