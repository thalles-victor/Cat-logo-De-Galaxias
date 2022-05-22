import { IGalaxiesRepositories } from '../../../Repository/GalaxiesRepositories/IGalaxiesRepositories';

export class ListGalaxiesServices {
  constructor(private readonly galaxyRepository: IGalaxiesRepositories) {}
  execute() {
    const galaxies = this.galaxyRepository.list();
    return galaxies;
  }
}