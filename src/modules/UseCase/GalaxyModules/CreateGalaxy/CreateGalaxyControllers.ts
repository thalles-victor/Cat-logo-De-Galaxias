import type { Request, Response } from 'express';
import { CreateGalaxyService } from './CreateGalaxyService';
import { IGalaxiesRepositoriesDTO } from '../../../Repository/GalaxiesRepositories/DOTs';

export class CreateGalaxyControllers {
  constructor(private readonly createGalaxyService: CreateGalaxyService) {}

  handle(request: Request, response: Response): Response {
    const data: IGalaxiesRepositoriesDTO  =  request.body;

    this.createGalaxyService.execute({ ...data })
      return response.status(201).send();
    }
}