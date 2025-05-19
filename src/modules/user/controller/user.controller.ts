import { Request, Response } from 'express';
import { UserService } from '../service/user.service';

export class UserController {
   static async getAllUsers(req: Request, res: Response) {
      const users = await UserService.getAllUsers({
         // @ts-ignore
         limit: req.pagination.limit,
         // @ts-ignore
         offset: req.pagination.offset,
      });

      res.status(200).json(users);
   }
}
