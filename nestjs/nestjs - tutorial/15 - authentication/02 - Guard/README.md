# Guard 

می خوایم در مورد Guard صحبت کنیم که ببنیم چی هست و یک Guard خیلی ساده بنویسیم . 

در واقع Guard یک class هست که بعد از middleware اتفاق می افته , Guard میاد اجازه دسترسی رو تعیین می کنه . 

اگه بخوایم به عبارتی دیگه بگیم guard صرفا یک وظیفه داره اونم این هست که چک کنه درخواستی که زده شده اجازه عبور کردن داره که ادامه مراحل اتفاق بیوفته ! 

یا درخواست اجازه عبور کردن نداره ..

یکبار دیگه به digaram nestjs نگاه کنیم که Guard کجا اتفاق می افته ! که گفتیم بعد از middleware اجرا میشه . 

<p align="center">
  <img src='https://github.com/mosenn/nestjs/assets/91747908/4bb1ee00-b3e6-4a9b-b29c-4bde7fd775d9' alt ='Guard in nestjs' />
</p>

در واقع Guard میاد یا اجازه عبور و ادامه مراحل رو میده یا اجازه عبور رو نمی ده  . 

مقداری که Guard برگشت میده true / false هست , اگر مقدار true باشه اجازه داده میشه اگر false باشه اجازه عبور داده نخواهد شد .  

یک فایل درون فولدر auth ایجاد می کنیم به اسم auth.guard.ts 


<img src='https://github.com/mosenn/nestjs/assets/91747908/5830ac98-f7b9-49b1-a36c-f34b8c01c4fb' alt='guard in nestjs' />

درون فایل auth.guard.ts میام class AuthGuard رو ایجاد می کنیم , همینطور export می کنیم . 

برای اینکه می خوایم از guard که ساختیم در جاهای دیگه استفاده کنیم نیاز هست که injectabale هم باشه . 

```javascript
@Injectable()
export class AuthGuard {  }
```

برای اینکه بتونیم از guard استفاده کنیم میایم از CanActive استفاده می کنیم در واقع class که ایجاد کردیم از CanActive میاد implements میشه  . 


```javascript

import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {}
}
```

که نیاز هست از method canActivate استفاده کنیم که از ExecutionContext استفاده می کنه . 

که در مورد این ExecutionContext صحبت کردیم که گفتیم یکی از مواردش canActive هست . 

لینک داکیومنت مرتبط با ExecutionContext :  

<a href='https://docs.nestjs.com/fundamentals/execution-context' >ExecutionContext</a>


درون canActive در نهایت باید true / false رو بیایم Return کنیم چون گفتیم guard مقدارش یا true هست یا false . 

حتی می تونیم به response  , requset دسترسی داشته باشیم به وسیله context که در واقع همون ExecutionContext هست 

و از داخل context به وسیله switchToHttp می تونیم به requset , response دسترسی داشته باشیم . 

که مقدارشون رو log گرفتیم . همین طور یک log داریم که string هست درونش نوشتیم auth guard is run که نشون دهنده اجرا شدن guard هست . 

در نهایت مقدار true رو return کردیم که اجازه اجرا شدن و رد شدن از guard رو میده که بعدش route مد نظر ما اجرا میشه . 

اگر مقدار رو false بزاریم route که براش guard رو قرار دادیم اجرا نخواهد شد . 

```javascript
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const reponse = context.switchToHttp().getResponse();
    const requset = context.switchToHttp().getRequest();
    console.log(reponse);
    console.log(requset);
    console.log('auth guard is run');
    return true;
  }
}
```

# use guard

درون auth.controller.ts میایم از guard که ساختیم استفاده می کنیم 


<img src='https://github.com/mosenn/nestjs/assets/91747908/18417544-41bd-43cf-a6d1-849f508cc6c7' alt='guard in nestjs' />





## guard for controller

برای تعریف کردن guard نیاز به decorator UseGuards داریم پس میایم import می کنیم  

```
import {  UseGuards } from '@nestjs/common';
```


می تونیم guard رو برای یک controller به طور کلی تعریف کنیم , اینجوری برای تمامی route که درون controller هست guard میاد اجرا میشه 

```javascript
@UseGuards(AuthGuard)
@Controller('auth')
```


## guard for route
می تونیم برای یک route تعریف کنیم که فقط برای اون route بیاد guard اجرا شه . 


```javascript
  @UseGuards(AuthGuard)
  @Get('/users')
  users() {
    return this.authService.users();
  }
```

اگر مقدار guard رو false کنیم با reponse زیر رو به رو میشیم درون postman : 

<img src='https://github.com/mosenn/nestjs/assets/91747908/1cab87c4-0111-4a35-8af1-bdfe841f2c29' alt='guard in nestjs' />



## guard in app.module.ts

<img  src='https://github.com/mosenn/nestjs/assets/91747908/c2ca0576-9a95-489d-8a87-766bb35f8e12' alt='' >

حتی می تونیم درون app.module.ts بیایم guard که نوشتیم رو قرار بدیم اینجوری برای تمام controller و route که درون پروژه داریم guard ما اجرا خواهد شد .

برای استفاده guard درون app.module.ts نیاز داریم بیایم provider تعریف کنیم . 

اول نیاز داریم که APP_GUARD رو بیایم import کنیم که یک مقدار ثابت در nestjs هست . 

همینطور guard که ایجاد کردیم رو از auth.guard میایم import می کنیم . 
```javascript
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
```

در ادامه درون Module@ میایم درون Provides یک object ایجاد می کنیم و از provide استفاده می کنیم 

برای اینکه بتونیم درون app.moudle.ts بیایم از guard که ساختیم استفاده کنیم . 

```javascript
@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }],
})
```
که درون provide میایم مقدار ثابت APP_GUARD رو قرار میدیم . 

درون useClass که اشاره می کنه می خوای از چه class استفاده کنی برای APP_GUARD . 

که AuthGuard رو قرار دادیم  که guard هست که ساختیم . الان guard ما برای تمامی route و controller ها اجرا میشه . 

درون ترمینال vscode می تونیم log رو ببنیم که ایجاد کردیم : 




<img src='https://github.com/mosenn/nestjs/assets/91747908/5843c1af-fecc-48e1-8d1b-7999ca73fa31' alt='guard in nestjs'/>



اگر مقدار guard رو false کنیم برای تمامی controller و route ها در postman ریسپانس زیر رو داریم : 


<img src='https://github.com/mosenn/nestjs/assets/91747908/1cab87c4-0111-4a35-8af1-bdfe841f2c29' alt='guard in nestjs' />

# Summary 

در مورد guard صحبت کردیم یک class هست از ExecutionContext استفاده می کنه . 

از CanActive میاد impelements میشه . 

در واقع guard بعد از middleware اتفاق می افته همیشه مقداری که برگشت میده true / false هست . 

اگر مقدار true بود میاد اجازه عبور و ادامه مراحل رو میده ا گر مقدار false باشه اجازه عبور رو نمی ده  . 


# END 

**پایان Guard**
