import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const reponse = context.switchToHttp().getResponse();
    const requset = context.switchToHttp().getRequest();
    console.log(reponse);
    console.log(requset);
    console.log('auth guard is run');
    return false;
  }
}
