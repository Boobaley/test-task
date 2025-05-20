import { Request, Response } from 'express';
import { UserService } from '../service/user.service';
import { RemoveUserFromGroupParamsSchema } from '../schemas/removeUserFromGroupParamsSchema.schema';

export class UserController {
   static async getAllUsers(req: Request, res: Response) {
      const users = await UserService.getAllUsers({
         limit: req.pagination.limit,
         offset: req.pagination.offset,
      });

      res.status(200).json(users);
   }

   static async removeFromGroup(req: Request, res: Response) {
      const parseResult = RemoveUserFromGroupParamsSchema.safeParse(req.params);

      if (!parseResult.success) {
         res.status(400).json({
            error: 'Invalid parameters',
            details: parseResult.error.format(),
         });

         return;
      }

      const { userId, groupId } = parseResult.data;

      try {
         await UserService.removeFromGroup(userId, groupId);

         res.status(200).json({ success: true });
      } catch (error) {
         if (error instanceof Error && error.message === 'User not in group') {
            res.status(404).json({ error: error.message });

            return;
         }

         res.status(500).json({ error: 'Internal server error' });
      }
   }
}
