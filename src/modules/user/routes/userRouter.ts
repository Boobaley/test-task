import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { paginationFromQueryMiddleware } from '../../../middlewares/paginationFromQueryMiddleware';

const router = Router();

router.get('/', paginationFromQueryMiddleware, UserController.getAllUsers);

export default router;
