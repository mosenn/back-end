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


اگر یک route دیگه اضافه کنیم مثل کد زیر : 

```javascript
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

  @Get('/profile')
  user() {
    return 'version-2';
  }
```

الان یک route دیگه داریم به اسم 'profile' این روت خنثی هست و می تونیم درون swagger ببینم اش و مشکلی پیش نمیاد . 

![image](https://github.com/mosenn/back-end/assets/91747908/4ce213b0-e592-4923-8107-4cc2acfd93b5)


اما می تونیم decorator هم بهش اضافه کنیم برای این خنثی بودنش : 

```javascript
  @Version(VERSION_NEUTRAL)
    @Get('/profile')
  user() {
    return 'version-2';
  }
```

این معنی رو میده که کلا ارتباطی به ورژن خاصی نداره و مجزا هست . 


## Header Versioning

می تونیم ورژن رو درون header ست کنیم و از فرانت یا کلاینت بخوایم برای دسترسی به api درون header ورژن رو ست کنه .

درون main.ts میایم اول option که روی URI هست رو تفییر میدیم به header . 

در ادامه اسم header رو تعیین می کنیم که چه header از سمت فرانت یا کلاینت ارسال شه  .

```javascript
  app.enableVersioning({
    type: VersioningType.HEADER,
    header:"version"
  });
```
که اسمی که برای header گذاشتیم به اسم `version` می تونه هر چی باشه کاملا به دلخواه و costume هست . 

خب حالا برای اینکه بتونیم header ست کنیم و ارسال کنیم که به version های متفاوت api دسترسی داشته باشیم . 

از postman استفاده می کنیم و اسم `version` رو که برای hedaer گذاشتیم . 
```
    header:"version"
```

درون postman به در header به عنوان key قرار میدیم و value هم میشه همون 1 و 2 که برای decorator version که برای route ها تعریف کردیم . 

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

داخل postman : 

![image](https://github.com/mosenn/back-end/assets/91747908/47d5aa47-ea3b-46cf-9b6e-a7af3fdd31fa)


اگر دقت کنید version رو داخل hedaer گذاشتیم ولی active نیست و اگر active نباشه 404 رو میگیریم . 


![image](https://github.com/mosenn/back-end/assets/91747908/9babe8d4-da85-496f-bc2e-ff265500a83b)


ولی اگر مقدار version که برای header ست کردیم active باشه . 

![image](https://github.com/mosenn/back-end/assets/91747908/962c612e-4ee6-40da-97b0-f5358202eced)


با توجه مقدار value که براش تعیین می کنیم 1 یا 2 باشه به api همون ورژن دسترسی داریم .

در عکس زیر value ما 2 به api ورژن 2  دسترسی داریم ور response ما version-2 هست . 

![image](https://github.com/mosenn/back-end/assets/91747908/4e8be9c4-9d38-4e5e-8702-bcb85d739df9)

اگر به 1 تغییر بدیم به api ورژن 1 دسترسی داریم . 

**نکته : در تمامی روش ها نیاز هست که یا برای controller ورژن رو تعریف کرده باشیم یا برای method یا همون route ها**

## diffrent uri vs header 

در روش URI ما باید به 2 تا api در خواست بزنیم یکی برای ورژن 1 و یکی برای ورژن 2 . 

```
// version 1 url
http://localhost:3000/v1/user/users
```


```
// version 2 url
http://localhost:3000/v2/user/users
```

درون swagger همم اینجوری داریم api ها رو  برای URI : 

![image](https://github.com/mosenn/back-end/assets/91747908/3d62ec62-336b-4522-9fb4-78a4539c5e25)


اما در روش header . صرفا یک api هست 

```
http://localhost:3000/user/users
```

و درون header میایم تعیین می کنیم که می خوایم به چه ورژنی از api دسترسی داشته باشیم که بالا تر با هم بررسی کردیم : 

![image](https://github.com/mosenn/back-end/assets/91747908/d9b391d6-0da1-468c-914f-186a520ca786)


**نکته : در تمامی روش ها نیاز هست که یا برای controller ورژن رو تعریف کرده باشیم یا برای method یا همون route ها**

## Media Type Versioning

درون main.ts میریم و option رو روی media t قرار میدیم در ادامه نیاز هست که یک key تعریف کنیم 
```javascrip
  app.enableVersioning({
    type: VersioningType.MEDIA_TYPE,
    key:'v'
  });
```

این key که تعریف کردیم به اسم `v` هر اسمی می تونه باشه . 

و از این اسم درون application/json استفاده می کنیم و تعیین می کنیم که چه ورژن api باشه .

به postman میریم بازش می کنیم درون header یک Accpet قرار میدیم . 

**یاداوری : Accpet نوع دیتای که قرار هست ارسال و دریافت شه رو مشخص می کنه که می تونه هر چیزی باشه و مقادیر دیگه هم بهش اضافه کنیم**

![image](https://github.com/mosenn/back-end/assets/91747908/0f5021d3-a684-48dd-93c3-1f7c6f43dedd)

حالا اسم `v` رو که تعریف کرده بودیم به انتهای application/json اضافه می کنیم . 

**مهم : سمی کالن فراموش نشه اخر ;application/json  بعد از سمی کالن v رو می نویسیم حالا اگر 1 رو بزاریم ورژن 1 api دسترسی داریم**

**اگر 2 بزاریم به ورژن 2 api دسترسی داریم خروجی تصویر زیر دقت کنید :**

به ورژن 2 api دسترسی گرفتم و `v2` ست شده بعد از ;application/json درون `header` :

![image](https://github.com/mosenn/back-end/assets/91747908/5e900e02-a936-402a-8bde-52bd3ceb06ef)

به ورژن 1 api دسترسی گرفتم و `v1` ست شده بعد از ;application/json درون `header` :

![image](https://github.com/mosenn/back-end/assets/91747908/4dc542ad-1719-4663-a0ed-44e77be9aef5)

**نکته : در تمامی روش ها نیاز هست که یا برای controller ورژن رو تعریف کرده باشیم یا برای method یا همون route ها**



## setup version on Controller 

برای اینکه ببینیم version روی controller چطوری کار می کنه . 

یک controller دیگه ایجاد می کنیم تا برای هر controller یک version api تعریف کنیم . 

یک app.-two.controller.ts ایجاد می کنیم : 

![image](https://github.com/mosenn/back-end/assets/91747908/5d900f39-b014-4066-9275-916953f95457)

درون app.module هم اضافه می کنیم این app.-two.controller : 


![image](https://github.com/mosenn/back-end/assets/91747908/3e813885-330b-4266-971d-0b2798de5c7c)

```javascript
@Module({
  imports: [],
  controllers: [AppController , AppTwoController],
  providers: [AppService],
})
```

حالا در هر controller یک route قرار میدیم route با ادرس api مشابه : 

درون app.controller.ts کد زیر رو داریم : 

```javascript
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/users')
  users() {
    return 'version-1';
  }
}
```

درون app-two.controller.ts کد زیر رو داریم : 


![image](https://github.com/mosenn/back-end/assets/91747908/85ac0470-c249-4761-a0fb-8db16d7634f2)



```
@Controller('user')
export class AppTwoController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  usersv2() {
    return 'version-2';
  }
}
```

حالا برای هر controller که داریم درون decorator @Controller میایم یک path و یک version قرار میدیم . 

که path میشه همون مسیر کلی api که داریم که میشه همون 'user' , با version هم میایم میگیم version 1 هست یا version 2 . 

به کد زیر دقت کنید که اینکارو انجام دادیم برای app.two-controller.ts : 

```
@Controller({path:'user' , version:'2'})
export class AppTwoController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  usersv2() {
    return 'version-2';
  }
}
```

درون Controller@ یک {} ادد کردیم و گفتیم که version 2 باشه و همینطور path ادرس کلی api رو مشخص کردیم : 

```
@Controller({path:'user' , version:'2'})
```

برای app.controller.ts هم همین option رو اضافه می کنیم منتها بهش میگیم که version 1 باشه : 

![image](https://github.com/mosenn/back-end/assets/91747908/4d3546f6-5a6c-41e6-9129-349fbf4da407)

کد زیر رو برای app.controller.ts داریم : 

```javascript
@Controller({path:'user' , version:'1'})
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/users')
  users() {
    return 'version-1';
  }
}
```

اگر که کد رو save کنیم و swagger رو نگاه کنیم هر دو route رو داریم با v1 و v2 .

دقیقا مثل زمانی که برای method version رو ست کردیم همون عکس باید باشه . 

و هر api ورژن خودشو داشته باشه , تفاوت قضیه اینجاست که سری قبل رو method ورژن رو قرار دادیم . 

این دفعه روی controller امدیم version رو قرار دادیم . 

![image](https://github.com/mosenn/back-end/assets/91747908/5d59f83b-4198-4ca3-86e0-ad21e125318d)


**نکته : در کد بخش کنترل کامنت شده و نیاز هست کد ها رو تغییر بدید تا بتونید مثال controller رو ببنید** 

**اول کد های خوده app.tow-controller از کامنت در بیارید در ادامه درون App.module اضافه کنید app.tow-controller**

**قدم بعدی یک route درون app.controller داشته باشید و بقیه کد ها رو کامنت کنید و یک route درون app.tow-controller**

# Summary 

در این بخش در مورد version control api صحبت کردیم و از اهمیت ان صحبت کردیم . 

که برای اپدیت شدن یا تغییرات api استفاده میشه برای بیزنسی که در حالت پروداکت هست . 

و نیاز به اضافه یا اپدیت شدن api ها هست . 

چند روش داشتیم دورن nestjs که 4 روش هست و 3 روش اون رو بررسی کردیم . 

URI Versioning
Header Versioning
Media Type Versioning
Custom Versioning

پر استفاده ترین روش و معمول ترین روش استفاده از URI هست . 

البته از header و Media هم استفاده میشه . 

مورد اخر که custom هست در این بخش صحبت نکردیم . 

گفتیم می تونیم version api روی controller ها ست کنیم و داشته باشیم و هم می تونیم روی method ها اینکارو انجام بدیم . 

برای method ها از decorator Version استفاده میشه . 

```
  @Version('2')
  @Get('/users')
  usersv2() {
    return 'version-2';
  }
```
برای controller ها درون خوده decorotor Controller این اتفاق می افته . 

```
@Controller({path:'user' , version:'1'})
```

در مورد تفاوت header و url صحبت کردیم که url نسبت به هر ورژن یک api صدا می زنه . 

اما در header صرفا یک api صدا زده میشه اما header متفاوتی پاس داده میشه . 

# END 

`پایان این بخش که در مورد version controller در nestjs بود `
