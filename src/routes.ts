import express from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { asyncHandler } from "./asyncHandler";
import { CreateDeliverymanController } from "./deliveryman/useCases/createDeliveryman/CreateDeliverymanController";


const routes = express.Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();


routes.post("/authenticate", authenticateClientController.handle);

routes.post("/client", asyncHandler(createClientController.handle));

routes.post("/deliveryman", asyncHandler(createDeliverymanController.handle))

export { routes }
