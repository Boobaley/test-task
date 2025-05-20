import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { paginationFromQueryMiddleware } from '../../../middlewares/paginationFromQueryMiddleware';

const router = Router();

router.get('/', paginationFromQueryMiddleware, UserController.getAllUsers);
router.delete('/:userId/groups/:groupId', UserController.removeFromGroup);

export default router;
