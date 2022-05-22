import type { Request, Response } from 'express';

import { ListGalaxiesServices } from "./ListGalaxiesService";

export class ListGalaxiesControllers {
  constructor(private readonly listGalaxiesService: ListGalaxiesServices) {}

  handle(request: Request, response: Response) {
    const allGalaxies = this.listGalaxiesService.execute();
    return response.status(200).json(allGalaxies);
  }
}