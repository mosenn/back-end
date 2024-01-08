import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
@Injectable()
export class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
      // console.log("context swtihttp" , context.switchToHttp().getRequest())
    const {user} = context.switchToHttp().getRequest();
    console.log(user , 'RoleGuard User')
    //* Guards always return true or false , 
    return true;
  }
}
