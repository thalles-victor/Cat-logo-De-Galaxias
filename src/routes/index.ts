import { Router } from "express";

import { galaxiesRouter } from '../modules/UseCase/galaxies.router';

export const router = Router();

router.use("/galaxies", galaxiesRouter);