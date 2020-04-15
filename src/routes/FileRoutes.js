import { Router } from 'express';
import FileController from '../controllers/FileController';

const fileRoutes = new Router();

fileRoutes.post('/', FileController.store);

export default fileRoutes;
