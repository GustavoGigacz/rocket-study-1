import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface IAuthenticateClient {
    username: string;
    password: string
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
         // Receber username e password

         // Verificar se username está cadastrado
         const client = await prisma.clients.findFirst({
            where: {
                username
            }
         })

         if(!client) {
            throw new Error("Username or password invalid!")
         }

         // Verificar se senha corresponde ao username

         const passwordMatch = await compare(password, client.password)

         if(!passwordMatch) {
            throw new Error("Username or password invalid!")
         }

         // Gerar token
         const token = sign({username}, "82438ca3f7bcbb60cee84742c84b4f85", {
            subject: client.id,
            expiresIn: "1d"
         })

         return token
    }
}