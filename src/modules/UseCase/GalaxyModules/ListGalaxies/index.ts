import { GalaxiesRepository } from '../../../Repository/GalaxiesRepositories/GalaxiesRepository';;
import { ListGalaxiesServices } from './ListGalaxiesService';
import { ListGalaxiesControllers } from './ListGalaxiesControllers';

const galaxiesRepository = GalaxiesRepository.getInstance();
const listGalaxiesService = new ListGalaxiesServices(galaxiesRepository);

export const listGalaxiesControllers = new ListGalaxiesControllers(listGalaxiesService);

