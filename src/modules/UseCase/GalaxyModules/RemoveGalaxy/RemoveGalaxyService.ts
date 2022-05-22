import { GalaxiesRepository } from "../../../Repository/GalaxiesRepositories/GalaxiesRepository";

class RemoveGalaxyService {
  constructor(private readonly galaxiesRepository: GalaxiesRepository) {}
  
  execute(id: string) {
    return this.galaxiesRepository.remove(id);
  }
};

export { RemoveGalaxyService };