// import {
//   NestInterceptor,
//   CallHandler,
//   ExecutionContext,
//   Injectable,
// } from '@nestjs/common';
// import { map } from 'rxjs/operators';
// @Injectable()
// export class userTransfrom implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler) {
//     console.log('before route handler work on with requset');
//     return next.handle().pipe(
//       map((data) => {
//         console.log('after route handler');
//         console.log('DATA : ', data);
//         const response = {
//           name: data.user.name,
//           id: data.user.id,
//           email: data.user.email,
//           role: data.user.role,
//         };
//         return response;
//       }),
//     ); // here access to response;
//   }
// }
