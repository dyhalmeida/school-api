import { Router } from 'express';
import UserController from '../controllers/UserController';
import LoginRequired from '../middlewares/LoginRequired';

const userRoutes = new Router();

// userRoutes.get('/', UserController.index);
// userRoutes.get('/:id', UserController.show);
userRoutes.put('/', LoginRequired, UserController.update);
userRoutes.delete('/', LoginRequired, UserController.delete);
userRoutes.post('/', UserController.store);

export default userRoutes;
