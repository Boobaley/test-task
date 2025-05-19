import { Request, Response, NextFunction } from 'express';

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

export const paginationFromQueryMiddleware = (
   req: Request,
   res: Response,
   next: NextFunction,
): void => {
   let offset = DEFAULT_OFFSET;
   let limit = DEFAULT_LIMIT;

   if (typeof req.query.offset === 'string') {
      const parsedOffset = parseInt(req.query.offset, 10);

      if (!isNaN(parsedOffset) && parsedOffset >= 0) {
         offset = parsedOffset;
      }
   }

   if (typeof req.query.limit === 'string') {
      const parsedLimit = parseInt(req.query.limit, 10);

      if (!isNaN(parsedLimit) && parsedLimit > 0) {
         limit = parsedLimit;
      }
   }

   (req as any).pagination = { limit, offset };

   next();
};
