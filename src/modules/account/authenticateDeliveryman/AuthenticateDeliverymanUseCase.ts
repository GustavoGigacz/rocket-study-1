import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface IAuthenticateDeliveryman {
    username: string;
    password: string
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
         // Receber username e password

         // Verificar se username está cadastrado
         const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
         })

         if(!deliveryman) {
            throw new Error("Username or password invalid!")
         }

         // Verificar se senha corresponde ao username

         const passwordMatch = await compare(password, deliveryman.password)

         if(!passwordMatch) {
            throw new Error("Username or password invalid!")
         }

         // Gerar token
         const token = sign({username}, "82438ca3f7bcbb60cee84742c84b4f85", {
            subject: deliveryman.id,
            expiresIn: "1d"
         })

         return token
    }
}