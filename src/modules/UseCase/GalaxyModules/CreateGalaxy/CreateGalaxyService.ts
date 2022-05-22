import { IGalaxiesRepositories } from '../../../Repository/GalaxiesRepositories/IGalaxiesRepositories';
import { IGalaxiesRepositoriesDTO } from '../../../Repository/GalaxiesRepositories/DOTs';

export class CreateGalaxyService {
  constructor(private readonly galaxiesRepositories: IGalaxiesRepositories) {}

  execute({
    name,
    description,
    uncovered,
    numberOfBlackHoles,
    numberOfSuperMassiveBlackHoles,
    numberOfStars
  }: IGalaxiesRepositoriesDTO) {
    this.galaxiesRepositories.create({
      name,
      description,
      uncovered,
      numberOfBlackHoles,
      numberOfSuperMassiveBlackHoles,
      numberOfStars,
    })
  }
}