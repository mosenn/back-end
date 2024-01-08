import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(public readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    //* reflector added
    //* roles name same name in role.decorator
    //* context.getHandler() => return methods (post , get , update, delete) - ( return roles we used for methods)
    const rolesHandler = this.reflector.get<String[]>(
      'roles',
      context.getHandler(),
    );
    //* context.getClass() => return type @Controller('user') or other Controller - (return  role  we used in controller)
    const rolesClass = this.reflector.get<String[]>(
      'roles',
      context.getClass(),
    );

    //* can combine use both getClass and getHandler with getAllAndOverride
    //* not work
    // const roles = this.reflector.getAllAndOverride('role', [

    //   context.getClass(),
    //   context.getHandler()
    // ]

    // );
    //* set array
    const roles = [...rolesHandler, ...rolesClass];

    const { user } = context.switchToHttp().getRequest();
    console.log(rolesHandler, 'rolesHandler');
    console.log(rolesClass, 'rolesClass');
    console.log(user.role, 'RoleGuard User');

    //* use some metthod array for check role we define and user.role
    console.log(
      roles.some((role: string) => {
        console.log(roles , user.role)
       return role == user.role;
      }),
    );

    //* Guards always return true or false ,
    // return true;
   return roles.some((role: string) => {
      console.log(role , user.role)
     return  role == user.role;
    })
  }
}
