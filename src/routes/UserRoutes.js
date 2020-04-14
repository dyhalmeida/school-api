import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = new Router();

userRoutes.get('/', UserController.index);
userRoutes.get('/:id', UserController.show);
userRoutes.put('/:id', UserController.update);
userRoutes.post('/', UserController.store);

export default userRoutes;
