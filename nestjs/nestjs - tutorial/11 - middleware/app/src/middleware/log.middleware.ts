import { Response, Request, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common/interfaces';
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middle ware is run');
    // Log request details
    console.log('Request method:', req.method);
    console.log('Request original url:', req.originalUrl);
    // Log response details
    console.log('Response status code:', res.statusCode);
    next();
  }
}

export function Logger2(req: Request, res: Response, next: NextFunction) {
  console.log('middle ware is run');
  // Log request details
  console.log('Request method:', req.method);
  console.log('Request original url:', req.originalUrl);
  // Log response details
  console.log('Response status code:', res.statusCode);
  next();
}
