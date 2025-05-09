import express from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { asyncHandler } from "./asyncHandler";
import { CreateDeliverymanController } from "./deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthentication } from "./middlewares/ensureAthenticateClient";
import { findAllController } from "./modules/deliveries/useCases/findAllAvailable/findAllWithoutController";
import { ensureAuthenticationDeliveryman } from "./middlewares/ensureAuthenticateDelivery";

const routes = express.Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllUseCase = new findAllController()



routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client", asyncHandler(createClientController.handle));
routes.post("/deliveryman", asyncHandler(createDeliverymanController.handle))

routes.post("/delivery", asyncHandler(ensureAuthentication), deliveryController.handle)

routes.get("/delivery/available", asyncHandler(ensureAuthenticationDeliveryman), asyncHandler(findAllUseCase.handle))

export { routes }
