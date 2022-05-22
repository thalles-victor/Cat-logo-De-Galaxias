import { GalaxyEntity } from "../../Entities/GalaxyEntity";
import { IGalaxiesRepositoriesDTO } from "./DOTs";


export interface IGalaxiesRepositories {
  list(): GalaxyEntity[];
  create({
    name,
    description,
    uncovered,
    numberOfStars,
    numberOfBlackHoles,
    numberOfSuperMassiveBlackHoles
  }: IGalaxiesRepositoriesDTO): void;
}