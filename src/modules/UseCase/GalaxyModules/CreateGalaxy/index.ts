import { GalaxiesRepository } from '../../../Repository/GalaxiesRepositories/GalaxiesRepository';
import { CreateGalaxyService } from './CreateGalaxyService';
import { CreateGalaxyControllers } from './CreateGalaxyControllers';

const galaxiesRepository = GalaxiesRepository.getInstance();
const createGalaxyService = new CreateGalaxyService(galaxiesRepository);
export const createGalaxyControllers = new CreateGalaxyControllers(createGalaxyService);