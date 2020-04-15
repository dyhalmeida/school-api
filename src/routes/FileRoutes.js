import { Router } from 'express';
import FileController from '../controllers/FileController';
import LoginRequired from '../middlewares/LoginRequired';

const fileRoutes = new Router();

fileRoutes.post('/', LoginRequired, FileController.store);

export default fileRoutes;
