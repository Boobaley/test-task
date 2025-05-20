import { Request, Response } from 'express';
import { GroupService } from '../service/group.service';

export class GroupController {
   static async getAllGroups(req: Request, res: Response) {
      const users = await GroupService.getAllGroups({
         limit: req.pagination.limit,
         offset: req.pagination.offset,
      });

      res.status(200).json(users);
   }
}
