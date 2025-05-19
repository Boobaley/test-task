import 'express-serve-static-core';

declare module 'express-serve-static-core' {
   interface Request {
      pagination?: {
         limit: number;
         offset: number;
      };
   }
}
