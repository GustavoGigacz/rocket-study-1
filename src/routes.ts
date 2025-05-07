import express from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { asyncHandler } from "./asyncHandler";
import { CreateDeliverymanController } from "./deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryCrontroller } from "./modules/deliveries/createDelivery/CreateDeliveryController";

const routes = express.Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryCrontroller


routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client", asyncHandler(createClientController.handle));
routes.post("/deliveryman", asyncHandler(createDeliverymanController.handle))

routes.post("/delivery", deliveryController.handle)

export { routes }
