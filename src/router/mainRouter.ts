import { Router } from 'express';
import userRouter from '../modules/user/routes/userRouter';
import groupRouter from '../modules/group/routes/groupRouter';

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/groups', groupRouter);

export default rootRouter;
