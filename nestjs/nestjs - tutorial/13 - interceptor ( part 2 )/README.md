# interceptor part 2

به ادامه interceptor صحبت می کنیم . 

در مورد handle می خوایم صحبت کنیم . 

**نکته : مقداری که handle برگشت میده به صورت observe هست که مربوط به پکیج rjx  میشه**

اگر بخوایم از دیتای بعد از handle دسترسی داشته باشیم

میایم از `pipe` استفاده می کنیم 


```javascript
return next.handle().pipe()
```

که این pipe مربوط به package rjx هست , که می تونیم از operator درونی map که داره 

استفاده کنیم اول میایم import می کنیم map رو از rxjs بصورت زیر : 

```javascript
import { map } from 'rxjs/operators';
```

در ادامه میایم درون pipe از map استفاده می کنیم : 

```javascript
    return next.handle().pipe(map((data)=>{})); // here access to response;
```

که درون map یک callback function داریم که data رو گرفته . 

خب درون `map` که داریم یا در اصل درون pipe این قسمت میاد بعداز route handler اجرا میشه . 

و بیرون از pipe میاد قبل از route handler اجرا میشه . 

یک بار دیگه با هم کل کد interceptor رو ببینیم : 

```javascript
import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { map } from 'rxjs/operators';
export class userTransfrom implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('before route handler work on with requset');
    return next.handle().pipe(
      map((data) => {
        console.log('after route handler');
        console.log('DATA : ', data);
        return data;
      }),
    ); // here access to response;
  }
}
```

همونطور که گفتیم درون `map` کد های ما بعد از route handler یا همون controller اجرا میشه . 


# use interceptor


## use interceptor for route
خب می خوایم از interceptor که ساختیم استفاده کنیم . 

به درون controller user وارد میشیم 

![image](https://github.com/mosenn/nestjs/assets/91747908/4927fabb-902c-411e-a02b-9d5c21101b0e)

در ادامه نیاز به یک decorator جدید داریم به اسم `Useinterceptor` که از درون nestjs/comman میاد import میشه . 

```javascript
import {  UseInterceptors
} from '@nestjs/common';
```

که interceptor که ساختیم میاد درون این decorator قرار میگیره . 

حالا میایم مثلا برای route که مد نظرمون هست بالای سر route میایم decorator Useinterceptor رو استفاده می کنیم 

در نهایت interceptor که ساختیم رو import می کنیم و درون Useinterceptor قرار میدیم . 

```javascript
import {
  UseInterceptors,
} from '@nestjs/common';
import { userTransfrom } from './interceptor/transform.interceptor';
```

درون route که مد نظرمون هست میایم UseInterceptors رو قرار میدیم ما برای route user که با id کار می کنه قرار دادیم : 

```javascript
  @UseInterceptors(userTransfrom)
  @Get('/:id')
  user(@Param('id') id: string) {
    return this.userService.user(id);
  }
```

خب 2 تا لاگ داشتیم که یکی قبل و یکی بعد از controller ما اجرا میشد .

حالا اگر درون postman به route مد نظرمون درخواست بزنیم لاگ زیر رو درون ترمینال خواهیم داشت : 


![image](https://github.com/mosenn/nestjs/assets/91747908/56d5d838-7897-44c9-a00f-6749f38e5b5a)

ادرسی که درون postman بهش درخواست زدیم : 


ادرس مربوط  http://localhost:3000/user/6565c3789fb8834511737c46   .


![image](https://github.com/mosenn/nestjs/assets/91747908/e238df7c-aa79-4c7f-80b2-1f8b8c28c04d)


## define response
خب الان کل دیتا رو درون postman داشتیم به عنوان response  به عکس بالا نگاه کنید . 

حالا اگر می خوایم یک سری موارد رو داخل response داشته باشیم و یک سری موارد رو نداشته باشیم . 

یک object تعریف می کنیم . که اینجا اسم object ما response هست  . 

```javascript
    return next.handle().pipe(
      map((data) => {
        console.log('after route handler');
        console.log('DATA : ', data);
        const response = {
          name: data.user.name,
          id: data.user.id,
          email: data.user.email,
          role: data.user.role,
        };
        return response;
      }),
    );
```

که const response ابجکت ما هست امدیم مقادیر مورد نیازی که می خوایم برگشت داده شه رو براش تعریف کردیم . 

الان صرفا email , role , name , id , به عنوان response خواهیم داشت درون postman . 

و مقادیر password , create_at , update_at رو درون reponse نخواهیم داشت . 

یک بار دیگه وارد postman شیم و در خواست بزنیم : 


![image](https://github.com/mosenn/nestjs/assets/91747908/aaf9742a-ea9a-465d-9fcd-d3f0258a5d26)

خب همونطور که میبینید response ما شامل مقادیری هست که خودمون فرستادیم به عنوان response . 

اگر این response رو با response قبلی چک کنید می بینید درون postman کل دیتا رو داریم . 



**نکته : اگر درون ترمینال vscode نگاه کنیم می بینیم که کل دیتا داره برگشت میده این ماله (data)console.log که درون map داریم هست**


![image](https://github.com/mosenn/nestjs/assets/91747908/56d5d838-7897-44c9-a00f-6749f38e5b5a)


به کد های زیر دقت کنید لاگ که در ترمینال بالا داریم مربوط به console.log مربوط به data هست که درون کد زیر قرار داره .
```javascript
map((data) => {
console.log('after route handler');
console.log('DATA : ', data);}
```

```javascript
      map((data) => {
        console.log('after route handler');
        console.log('DATA : ', data);
        const response = {
          name: data.user.name,
          id: data.user.id,
          email: data.user.email,
          role: data.user.role,
        };
        return response;
      }),
```

## use interceptor for controller
می تونیم درون یک controller به طور کلی بیایم interceptor رو استفاده کنیم . 

وقتی برای controller اعمال می کنیم interceptor میاد برای کل route های اون controller اجرا میشه . 


```javascript
@UseInterceptors(userTransfrom)
@Controller('user')
```

## use interceptor in app.module

می تونیم داخل app.module بیایم interceptor رو قرار بدیم 

![image](https://github.com/mosenn/nestjs/assets/91747908/794c6636-f085-40af-92ad-4198ba552abb)

اگر بیایم درون app.module.ts اینکارو انجام بدیم برای کل controller ها که درون پروژه داریم این interceptor میاد اجرامیشه . 

در واقع interceptor برای کل server ما اجرا میشه برای هر controller و برای هر route که درون پروژه داریم . 

برای که interceptor رو درون app.module داشته باشیم اول میایم import انجام میدیم : 

```javacript
import { userTransfrom } from './user/interceptor/transform.interceptor';
```

حتما به این نکته توجه داشته باشید باید injectabale رو برای interceptor استفاده کرده باشیم : 

```javascript
@Injectable()
export class userTransfrom implements NestInterceptor { }
```

درون app.module برای اینکه بتونیم از interceptor userTransfrom استفاده کنیم نیاز داریم که از provider استفاده کنیم . 

به طور عادی نمی تونیم استفاده کنیم نیاز داریم از provider برای شناختن interceptor به app.module استفاده کنیم . 

```javascript
@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: userTransfrom },
  ],
})
export class AppModule {}
```

اگر در کد بالا نگاه کنیم درون providers یک object قرار گرفته که درون این object از provide استفاده کردیم . 

بخاطر اینکه از نوع intercept هست نیاز داریم که درون `provide` قرارش بدیم . 

در ادامه APP_INTERCEPTOR رو داریم که مثدار ثابت درون nestjs هست برای تعریف کردن interceptor استفاده میشه . 

که این APP_INTERCEPTOR داره از nestjs/core میاد import میشه .

```javascript
import { APP_INTERCEPTOR } from '@nestjs/core';

```

که میایم مشخص می کنیم که class که می خوایم استفاده کنیم از نوع interceptor هستش 

بعدش امدیم useClass رو استفاده کردیم که userTransfrom رو درونش قرار دادیم  .

که برای useClass میایم میگیم کلاسی که قراره به عنوان interceptor بشناسی userTransform هستش. 

به اینصورت می تونیم از interceptor درون app.module استفاده کنیم که کل پروژه بیاد اون interceptor رو ران کنه برای تمام controller ها و route های که درون پروژه داریم . 

**نکته مهم : برای اینکه برای تمامی route ها این interceptor بیاد کار کنه نیاز هست که نوع response درون interceptor هست رو تغییر بدیم مثلا الان توی این مثال اگر برای تمام user ها 

درخواست بزنیم با ارور درون ترمینال vscode رو به رو میشیم که این موضوع نیاز به اصلاح interceptor داره که بهش پرداخته شده**



# Summary

در مورد handle صحبت کردیم . 

در مورد متد pipe که از rxjs میاد صحبت کردیم . 

درون متد map صحبت کردیم که data رو میگره . 

نوع response رو با توجه به نیازمون تغییر دادیم . 

فهمیدم که interceptor رو می تونیم برای controller و route یا حتی یک module میشه تعریف کرد حتی app.module.ts

که وقتی برای app.module.ts اتفاق می افته برای کل پروژه میاد این interceptor اجرا میشه . 

# END 

**پایان interceptor part 2**
