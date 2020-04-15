import { Router } from 'express';
import StudentController from '../controllers/StudentController';
import LoginRequired from '../middlewares/LoginRequired';

const studentRoutes = new Router();

studentRoutes.get('/', StudentController.index);
studentRoutes.get('/:id', StudentController.show);
studentRoutes.post('/', LoginRequired, StudentController.store);
studentRoutes.put('/:id', LoginRequired, StudentController.update);
studentRoutes.delete('/:id', LoginRequired, StudentController.delete);

export default studentRoutes;
