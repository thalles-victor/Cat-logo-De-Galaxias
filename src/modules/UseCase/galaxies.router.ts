import { response, Router } from "express";
import type { Request, Response } from 'express';

import { listGalaxiesControllers } from './GalaxyModules/ListGalaxies';
import { createGalaxyControllers } from './GalaxyModules/CreateGalaxy';
import { removeGalaxyController } from './GalaxyModules/RemoveGalaxy';


export const galaxiesRouter = Router();

galaxiesRouter.get("/", (request, reponse) => {
  listGalaxiesControllers.handle(request, reponse);
});

galaxiesRouter.post("/", (request, response) => {
  createGalaxyControllers.handle(request, response)
});

galaxiesRouter.delete("/:id", (request, response) => {
  removeGalaxyController.handle(request, response);
})