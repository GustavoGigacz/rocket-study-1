import express from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = express.Router();

const createClientController = new CreateClientController();

routes.post("/client", createClientController.handle);

export { routes }
