import { GalaxiesRepository } from '../../../Repository/GalaxiesRepositories/GalaxiesRepository';
import { RemoveGalaxyService } from './RemoveGalaxyService';
import { RemoveGalaxyController } from './RemoveGalaxyController';

const galaxiesRepository = GalaxiesRepository.getInstance();
const removeGalaxyService = new RemoveGalaxyService(galaxiesRepository);
const removeGalaxyController = new RemoveGalaxyController(removeGalaxyService);

export { removeGalaxyController };