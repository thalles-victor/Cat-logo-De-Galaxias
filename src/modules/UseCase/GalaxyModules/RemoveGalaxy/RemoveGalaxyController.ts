import type { Request, Response } from 'express';

import { RemoveGalaxyService }  from './RemoveGalaxyService';

class RemoveGalaxyController {
  constructor(private readonly removeGalaxyService: RemoveGalaxyService) {}
  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.removeGalaxyService.execute(id as string);

    return response.status(200).send();
  }
};

export { RemoveGalaxyController };