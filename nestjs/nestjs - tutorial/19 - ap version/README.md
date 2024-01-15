# api version 

در این بخش می خوایم api های رو که داریم ورژن بندی انجام بدیم . 

به این دلیل که ممکنه به هر دلیل هر api اپدیت شه یا اصلا یک api جدید به پروژه اضافه شه . 

زمانی که Api های ما دارند کار می کنند روی یک بزینس حالا چه موبایل app چه وبسایت . 

نباید api های که قبلا کار می کردن رو پاک کنیم یا ادیت کنیم چون ممکنه پروژه از کار بیوفته . 

نیاز هست ورژن بندی انجام بدیم برای api ها در نهایت فرانت بیاد ورژن جدید از api رو بگیره و درون پروژه استفاده کنه . 

در ادامه website یا application اپدیت میشه و افرادی که دارن از اون برنامه استفاده می کنند .

برنامه رو اپدیت می کنند و به ورژن جدید برنامه دسترسی دارند و کسانی که اپدیت نکردن هم به ورژن قبلی دسترسی دارند . 

## nestjs doc versioning

برای ورژن بندی خوده nestjs درون داکیومنت در قسمت techniques در بخش versioning توضیح داده . 

```
https://docs.nestjs.com/techniques/versioning
```

که ما در این بخش بهش می پردازیم .


# VersioningTypes

ورژن بندی درون nestjs چند روش داره که درون document nestjs توضیح داده شده .

به عکس زیر که از داکیومنت nestjs هست توجه کنید : 

![image](https://github.com/mosenn/back-end/assets/91747908/295baae0-8528-45c0-a1b6-665ac064ab71)


همونطور که در تصویر بالا مشخص هست چند روش برای تعیین version در nestjs داریم . 


URI Versioning
Header Versioning
Media Type Versioning
Custom Versioning

که مورد استفاده ترین این موارد URI Versioning , Header Versioning هست . 

## enableVersioning

برای اینکه بتونیم version بندی رو برای api داشته باشیم خوده nestjs قابلیت های درونی اضافه کرده . 

که این قابلیت enableVersioning هست که درون main.ts اضافه میشه . 

![image](https://github.com/mosenn/back-end/assets/91747908/69fbf3b6-41e2-46cb-b088-1cd3746d4125)

درون main.ts میایم از enableVersioning استفاده می کنیم که بتونیم ورژن بندی رو انجام بدیم : 

```javascript
  app.enableVersioning();
```

## URI Versioning 

برای اینکه بخوایم از  URI Versioning استفاده کنیم نیاز هست که درون   app.enableVersioning به صورت زیر اضافه اش کنیم . 

که درون main.ts این اتفاق می افته . 

```
  app.enableVersioning({
    type: VersioningType.URI,
  });
```

## setup Version on Method 

در ادامه به app.controller.ts میریم . 

![image](https://github.com/mosenn/back-end/assets/91747908/4b9ce9a9-ec1e-4bc3-8a6e-6b5039b136bc)


برای اینکه ورژن بندی رو داشته باشیم 2 تا route تعریف می کنیم که ادرس ها شون یکی باشند . 

```javascript
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/users')
  users() {
     return 'version-1';
  }
  @Get('/users')
  usersv2() {
       return 'version-2';
  }
}
```
زمانی که 2 route با یک ادرس داشته باشیم صرفا یکی از اونها برای ما قابل اجرا هستند . 

اگر swagger رو چک کنیم در این حالت فقط Get که `version-1` هست قابل مشاهده هست . 

![image](https://github.com/mosenn/back-end/assets/91747908/cb73444c-a45c-4883-9fbc-044ff4efa01f)


برای اینکه بتونیم برای این 2 route که تعریف کردیم version بندی رو داشته باشیم میایم از decorator Version استفاده می کنیم . 

اول import می کنیم از nestjs/comman : 

```
import { Version } from '@nestjs/common';
```

به صورت زیر درون کد از `Version` استفاده می کنیم : 

```
  @Version('1')
  @Get('/users')
  users() {
    return 'version-1';
  }
  @Version('2')
  @Get('/users')
  usersv2() {
    return 'version-2';
  }
```

اگر کد رو save کنیم و درون localhost:3000/api بریم و صحفه رو رفرش کنیم . 

می بینیم که هر دو route رو داریم منتها ابتدای هر دو api یک v1 , v2 اضافه شده . 

که در واقع این اضافه شدن v2 , v1 کار همین decorator @Version هست . 

![image](https://github.com/mosenn/back-end/assets/91747908/5d642489-a7b8-4ffa-b4c9-ce6a7f8a423a)


## setup Version on Controller 
