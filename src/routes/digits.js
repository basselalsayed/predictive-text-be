'use strict';

import { Router } from 'express';
import digitsController from '../controllers/digits';

const router = Router();

router.post('/', digitsController);

export default router;
