import { GalaxyEntity } from '../../Entities/GalaxyEntity';
import { IGalaxiesRepositories } from './IGalaxiesRepositories';
import { IGalaxiesRepositoriesDTO } from './DOTs';

export class GalaxiesRepository implements IGalaxiesRepositories {
  private galaxies: GalaxyEntity[] = [];
  private static INSTANCE: GalaxiesRepository;

  private constructor() {
    this.galaxies = this.galaxies;
  }

  public static getInstance(): GalaxiesRepository {
    if (!GalaxiesRepository.INSTANCE) {
      GalaxiesRepository.INSTANCE = new GalaxiesRepository();
    }

    return GalaxiesRepository.INSTANCE;
  }

  list(): GalaxyEntity[] {
    const allGalaxies = this.galaxies;
    return allGalaxies;
  }

  create({
    name,
    description,
    uncovered,
    numberOfStars,
    numberOfBlackHoles,
    numberOfSuperMassiveBlackHoles
  }: IGalaxiesRepositoriesDTO): void {
    const galaxy = new GalaxyEntity();
    Object.assign(galaxy, {
      name,
      description,
      uncovered,
      numberOfStars,
      numberOfBlackHoles,
      numberOfSuperMassiveBlackHoles
    });

    this.galaxies.push(galaxy);
  }

  remove(id: string) {
   
    const index = this.galaxies.findIndex((galaxy) => galaxy.id === id);
    console.log(index);
    if (index < 0) {
      throw new Error("This galaxy not exist!");
    }

    this.galaxies.splice(index, 1);
  }
}