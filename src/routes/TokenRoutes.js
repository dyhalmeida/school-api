import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const tokenRoutes = new Router();

tokenRoutes.post('/', TokenController.store);

export default tokenRoutes;
