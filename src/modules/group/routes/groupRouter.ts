import { Router } from 'express';
import { paginationFromQueryMiddleware } from '../../../middlewares/paginationFromQueryMiddleware';
import { GroupController } from '../controller/group.controller';

const router = Router();

router.get('/', paginationFromQueryMiddleware, GroupController.getAllGroups);

export default router;
