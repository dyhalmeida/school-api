import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = new Router();

userRoutes.post('/', UserController.store);

export default userRoutes;
