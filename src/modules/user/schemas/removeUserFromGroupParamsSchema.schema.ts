import { z } from 'zod';

export const RemoveUserFromGroupParamsSchema = z.object({
   userId: z.coerce.number().int().positive(),
   groupId: z.coerce.number().int().positive(),
});

export type RemoveUserFromGroupParams = z.infer<
   typeof RemoveUserFromGroupParamsSchema
>;
