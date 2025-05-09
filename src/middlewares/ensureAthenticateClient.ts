import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({
            message: "Token missing"
        })
    }

    // Bearer
    const [,token ] = authHeader.split(" ")

    try {
       const { sub } = verify(token, "82438ca3f7bcbb60cee84742c84b4f85") as IPayload

       request.id_client = sub;
       
       return next(); 
    } catch(err) {
        return response.status(401).json({
            message: "Invalid token!"
        })
    }
}