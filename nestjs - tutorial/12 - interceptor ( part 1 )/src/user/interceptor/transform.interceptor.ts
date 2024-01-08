import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';

export class userTransfrom implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('before route handler work on with requset');
    return next.handle(); // here access to response;
  }
}
