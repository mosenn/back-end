# Reflectro 

در بخش قبلی امدیم یک role guard ایجاد کردیم 

که اون صدا زدیم درون user.controller.ts ولی کامل نشده بود

با هر role که به api در خواست زده میشد response رو میداد 

حالا در این بخش به کمک reflector در nestjs می خوایم  role کاربر رو 

بگیریم و دستسرسی ها رو محدود کنیم و role guard  که نوشتیم تکمیل کنیم 

 می خوایم به اون 2 تا string که در role تعریف کردیم دسترسی بگیریم به

وسیله reflector


## why need reflector

در واقع در این قسمت قرار هست که اطلاعات رو از درون decorator Role که 

همون seteMetadata ما هست تعریف کردیم درون role guard بهش دسترسی بگیریم . 

**چطوری می تونیم این دسترسی رو داشته باشیم ؟** 

به وسیله reflector که درون nestjs هست . 

**چرا می خوایم دسترسی داشته باشیم ؟**

چون قرار هست درون role guard بیام role user رو با role setMetadata 

مقایسه کنیم که اجازه دسترسی به api رو بدیم یا نه . 

## used
درون role.guard.ts ازش استفاده می کنیم

![image](https://github.com/mosenn/back-end/assets/91747908/f6882f8f-1360-48de-9af0-a8e24eabf98c)

 میایم reflector رو import می کنیم , از  `@nestjs/core` 
 


```javascript
import { Reflector } from '@nestjs/core';
```

یک  constructor اضافه می کنیم ,  در نهایت درون constructor صداش می زنیم 


```javascript
export class RoleGuard implements CanActivate {
  constructor(readonly public reflector:Reflector) {}
}
```
این Reflector یک سری متد داره یک متد داره به اسم get که می تونیم ازش 

استفاده کنیم و اطلاعات رو ازش بگیریم 

در ادامه درون canActivate که داشتیم میایم از reflector رو صدا می زنیم 

و از متد هاش استفاده می کنیم .


**نکته : context.getHandler در واقع اشاره به route ها داره role های که برای متد ها set شده برگشت میده**

**اگر بخوایم به role های که برای route ها تعریف شده دسترسی داشته باشیم از getHandler استفاده می کنیم**

**نکته : context.getClass به controller ها اشاره داره  و role های که برای controller گذاشته شده برکشت میده**

**اگر بخوایم به role های که برای controller تعریف شده دسترسی داشته باشیم از getClass استفاده می کنیم**


```javascript
    const rolesHandler = this.reflector.get<String[]>(
      'roles',
      context.getHandler(),
    );
    const rolesClass = this.reflector.get<String[]>(
      'roles',
      context.getClass(),
    );
```

**نکته : می تونیم هر دوتا رو با هم داشته باشیم که تست شد جواب نگرفتیم یعنی در یک فانکشن از getClass , getHandler استفاده کنیم که برای ما جواب نداد**

```javascript 
   //* not work
    const roles = this.reflector.getAllAndOverride('role', [
     context.getClass(),
     context.getHandler()
   ]
   );
```


**نکته اسم roles که اینجا نوشته شده به صورت string درون reflector دقیقا باید همون اسمی باشه که برای decorator Roles تعریف کردیم**


**در غیر اینصورت با مشکل مواجه میشیم**
```
 return SetMetadata('roles' ,roles )
```
یاداوری کد role decorator در پوشه user در فولدر decorator : 
```javascript
// role decorator
import { SetMetadata } from "@nestjs/common"
export const Roles = (...roles:string[])=> {
    console.log(roles)
    return SetMetadata('roles' ,roles )
}
```


در ادامه کد میایم متغییر های که دارند role های route و controller ها رو برگشت میدن رو درون یک array قرار میدیم 

```javascript
  //* set array
    const roles = [...rolesHandler, ...rolesClass];
```

خب حالا به role که درون setMetadata قرار دادیم دسترسی داریم . 

در فایل قبل هم که به وسیله Swtihtohttp.getRequset به role های مربوط به کاربرها دسترسی گرفته بودیم . 

```javascript
  const { user } = context.switchToHttp().getRequest();
```

حالا میایم این دوتا رو با هم دیگه به وسیله متد some مقایسه می کنیم :

```javascript
    //* Guards always return true or false ,
    // return true;
   return roles.some((role: string) => {
      console.log(role , user.role)
     return  role == user.role;
    })
  }
```

چرا با some میایم این مقایسه رو انجام میدیدم ؟ 

چون به طور کلی canActivate یا کلا guard ها می تونن مقدار true / false 

رو برگشت بدن و مقداری که متد some که یک متد ارایه javascript هست 

مقدار true در صورت == بودن رو برگشت میده و در غیر اینصورت مقدار false رو 


**نکته درون کد مروبط به Role.guard.ts در این بخش کلی console.log هست برای یادگیری و اطلاعات بیشتر که اونها رو در اینجا حذف کردیم اکثر شون رو**

یک نگاه کلی به کل کد role.guard.ts بندازیم که امدیم refleactor بهش اضافه کردیم برای دسترسی گرفتن به setMetadata : 

```javascript
import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(public readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    //* reflector added
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

    //* set array
    const roles = [...rolesHandler, ...rolesClass];

    //* switchToHttp().getRequest() get user 
    const { user } = context.switchToHttp().getRequest();

    //* use some metthod array for check role we define and user.role
    //* Guards always return true or false ,
    // some return true or false;
   return roles.some((role: string) => {
      console.log(role , user.role)
     return  role == user.role;
    })
  }
}
```

# casl package 

برای بحث  , authorization  و دسترسی می تونیم از package های مثل casl استفاده کنیم .

البته package های دیگه ای هم هست  .

# Summary 

در این بخش از reflector استفاده کردیم که بتونیم به role های که برای setMetadata تعریف کرده بودیم دسترسی داشته باشیم . 

تمامی تغییرات در این بخش در role.guard.ts که درون فولدر user هست اتفاق افتاد . 

در ادامه  switchToHttp.getRequest داشتیم که به user دسترسی داشتیم و role مربوط به کاربر رو گرفتیم .

به وسیله reflector هم role های که درون setMetadata داشتیم دسترسی گرفتیم به وسیله متد های که داشت . 

امدیم هر دو رو به وسیله متد some مربوط به ارایه جاوا اسکریپت مقایسه کردیم .

در صورت اینکه role های یکی باشن true در غیر اینصورت false رو به ما برگشت میده . 

چون guard و canAtviated می تونه صرفا true / false رو برگشت بده . 

حالا اگر role ها == بودن اجازه درخواست رو به کاربری که login هست رو میده 

در غیر اینصورت اجازه دسترسی به کاربر نمیده . 

# END 

`پایان بخش اضافه کردن reflector به role.guard.ts برای دسرتسی به role های که درون setMetadata قرار دادیم`
