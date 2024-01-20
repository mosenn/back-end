# mvc 

در لینک زیر که مربوط به داکیومنت خوده nestjs هست مراحل mvc رو توضیح داده : 

```
https://docs.nestjs.com/techniques/mvc
```

در این بخش می خوایم در مورد ساختار mvc در nestjs صحبت کنیم . 

در واقع mvc مخفف model view control هست بخش های control و model که ثابت هستیند و در موردشون صحبت شده . 

در این بخش در مورد view صحبت می کنیم در واقع به جای اینکه فرانت اند جدا داشته باشیم . 

صحفات `html` خودمون رو در یک فولدر به اسم view قرار میدیم و درون پرژه nestjs فایل html رو render می کنیم . 

## views folder

در directory اصلی پروژه بیرون از فولدر src میایم یک فولدر به اسم views ایجاد می کنیم . 


![image](https://github.com/mosenn/back-end/assets/91747908/0695ba53-f082-414f-8527-976912bd158d)


درون فولدر views می تونیم فولدر های متعددی رو داشته باشیم که هر کدوم می تونه حاوی صحفات html ما باشه . 

که در تصویر بالا یک فولدر  users درونش قرار دادیم که یک فایل به اسم index.hbs درونش هست . 

که جلوتر توضیح بیشتری میدیم در مودرش که در واقع داریم از یک template engine به اسم handlebar استفاده می کنیم  .

کد درون index.hbs به صورت زیر هست : 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>hbs view nestjs</title>
</head>
<body>
    <h1 class="title">view in nestjs</h1>
    <div>
        <h1>{{name}} - {{work}}</h1>
    </div>

    <figure>
        <img src="img/2lFhd.jpg" width="100" height="100" alt="NestJS Requset/Response Pipeline">
        <figcaption>
            NestJS Requset/Response Pipeline
        </figcaption>
    </figure>
</body>
</html>
```

که کاملا مثل یک سند html هست اما درونش از کد های جاواسکریپت می تونیم استفاده کنیم 

به کمک template engine این اتفاق می افته . 

در ضمن خروجی که اخر خواهیم داشت در مرورگر به صورت html هستش . 

کد پایین در واقع دار مقداری رو چاپ می کنه که در app.controller.ts بهش پاس داده شده . 

اجزای یک object هستند . 

```
   <div>
        <h1>{{name}} - {{work}}</h1>
    </div>
```



## public folder

یک فولدر دیگه ایجاد می کنیم به اسم public درونش میایم فایل های خودمون قرار میدیم 

مثل عکس - ویدو - فونت و موارد دیگه یا حتی می تونیم فایل css خودمون رو درون این فولدر قرار بدیم . 

**نکته : اسم این فولدر دلخواه هست ما می تونیم هر اسمی براش قرار بدیم که در اینجا اسم public رو براش انتخاب کردیم**

این فولدر public هم درون directory اصلی پروژه قرار میگیره : 


![image](https://github.com/mosenn/back-end/assets/91747908/d566eeb6-c65c-42d8-8306-7f4150404816)

درونش یک فولدر برای عکس  گذاشتیم که یک فایل jpg عکس در فولدر img قرار داره . 

و یک فولدر css داریم که فایل به اسم main.css درونش قرار داره . 


## main.ts 

برای اینکه بتونیم view رو داشته باشیم در پروژه nestjs نیاز هست که یک سری موارد به پروژه اضافه کنیم 

به فایل main.ts پروژه میریم که فایل اصلی nestjs هستش : 


![image](https://github.com/mosenn/back-end/assets/91747908/e464263b-0994-4c6f-af7d-5bbe6bd0a4a0)

درون فایل main.ts اولین که انجام میدیم اضافه کردن `NestExpressApplication` هست . 

میایم import می کنیم NestExpressApplication از درون nestjs/platform-express@  . 

```javascript
import { NestExpressApplication } from '@nestjs/platform-express';

```

در ادامه نیاز هست که NestExpressApplication رو به `NestFactory.create` اضافه کنیم : 

```javascript
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

اینکار به این دلیل هست که بتونیم view رو درون nestjs اضافه کنیم و یه یک سری متد دسترسی داشته باشیم . 

اگر اینکارو انجام ندیم و NestExpressApplication اضافه نکنیم به متد ها دسترسی نخواهیم داشت برای اضافه کردن view به پروژه . 


### view option

3 مورد رو اضافه کردیم به پروژه بعد از اینکه NestExpressApplication رو اضافه کردیم به موارد زیر دسترسی خواهیم داشت .

```
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('hbs');
```

**نکته : join از path خوده nodejs امده import شده**

```javascript
import { join } from 'path';
```


#### setBaseViewsDir

خب اولین مورد که `setBaseViewsDir` هست در واقع داره فولدر views رو می خونه فولدری که ایجاد کردیم . 

بهش دسترسی میگیره به وسیله join و dirname که در این ادرس هست  '..' در اخر هم که اسم فولدر یعنی همون views رو نوشتیم . 

**نکته : برای اطمینان بیشتر حتما از ادرس یک log بگیریم که مطئمن شیم ادرس ما درست هستش**

```
  console.log(join(__dirname));
```

خروجی log ما به صورت زیر در ترمینال vscode خواهد بود : 

```
mvc\dist
```

در واقع ادرس فولدر dist رو به ما میده و زمانی که میایم میگیم '..' یعنی 2 تا برگشت به عقب و بعدش وارد فولد view شه . 

به این نکته توجه کنید که ادرس در هر پروژه می تونه متفاوت باشه برای همین در ست کردن ادرس دقت کامل رو انجام بدیم . 

#### useStaticAssets
مورد بعدی `useStaticAssets` که میایم فولدر public رو تعیین می کنیم 

که پروژه به این فولدر دسترسی داشته باشه و فایل ها رو اجازه خوندن رو بهشون بده . 

که حالا می تونه فونت ها , عکس ها , فایل css و .. باشه 

که ما صرفا درون فولدر public یک فولدر img داریم به همراه یک فایل jpg 

و یک فولدر css به همراه فایل main.css برای این مثال .

```javascript
 app.useStaticAssets(join(__dirname, '..', 'public'));
```


#### setViewEngine

```javascript
  app.setViewEngine('hbs');
```

برای اینکه بتونیم صحفات html رو داشته باشیم درون nestjs نیاز داریم از tempalte engine ها استفاده کنیم . 

که template engine متفاوتی رو داریم که در لینک زیر می تونید template engine های مختلفی برای expressjs لیست شده 

```
https://expressjs.com/en/resources/template-engines.html
```

معروف ترین و پر استفاده ترین اونها این موارد هستند 

```
ejs
pug
hbs (Handlebars.js)
```

که ما برای این مثال امدیم از hbs استفاده کردیم که hbs در واقع مخفف handlebars هستش .

تمام template engine ها یک ماهیت دارند اما syntax و روش استفاده از انها متفاوت هست . 

خب میایم hbs رو نصب می کنیم طبق خوده داکیومنت nestjs که گفته شده : 

```
npm install --save hbs
```

لینک داکیومنت : 

```
https://docs.nestjs.com/techniques/mvc
```

بعد از نصب میایم درون setViewEngine در یک string نوع engine که می خوایم استفاده کنیم رو تعریف می کنیم 

که ما hbs رو تصب کردیم برای استفاده : 

```javascript
  app.setViewEngine('hbs');
```

# app.controller.ts 

برای اینکه بتونیم صحفه html که به وسیله template engine  handlebars.js ایجاد کردیم 

بیایم Render رو انجام بدیم و صحفه html رو بتونیم در route مد نظرمون مشاهده کنیم . 

![image](https://github.com/mosenn/back-end/assets/91747908/ac9c0107-5866-4827-bf2c-12c5af1f0eb2)

برای اینکه بتونیم صفحه index.hbs خودمون رو که در views/users داریم نشون بدیم . 

نیاز به یک decorator به اسم Render داریم . 

```javascript
import { Controller, Get, Render, } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('users/index')
  users() {
    return {name:"mohsen" , work:'developer'}
  }
}
```

یک متد Get داریم بعد Render رو داریم که داره ادرس فولدر views/users/index رو میگیره 

**نکته : در ادرس بالا در کد نیاز نیست اسم فولدر views زده شه چون در main.ts ست شده :**

```
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
```

**نکته : همینطور نیاز نیست پسوند فایل index که hbs هست زده شه باز هم درون main.ts ست شده :**

```
  app.setViewEngine('hbs');
```

# Result 

اگر وارد ادرس http://localhost:3000/user شیم خروجی زیر رو خواهیم داشت . 

![image](https://github.com/mosenn/back-end/assets/91747908/9ff347fa-b86c-404a-b5f4-3a2e874eef7f)

که در واقع همون فایل index.hbs ما هست که داره در ادرس مد نظر رندر میشه . 

اگر توجه کنید استایل و عکس هم بهش اضافه شده که از فولدر public داره می خونه . 

همینطور درون index.hbs فایل css رو link کردیم . 

```
// in index.hbs
    <link rel="stylesheet" href="css/main.css">
```

اینجا هم نیاز نیست که ادرس فولدر public زده شه چون درون main.ts گذاشته شده : 

```
  app.useStaticAssets(join(__dirname, '..', 'public'));
```

برای عکس هم کد زیر رو داریم که باز ادزس فولدر public نیاز نیست : 

```
// in index.hbs
   <figure>
        <img src="img/2lFhd.jpg" width="100" height="100" alt="NestJS Requset/Response Pipeline">
        <figcaption>
            NestJS Requset/Response Pipeline
        </figcaption>
    </figure>
```


# Summary 

با mvc اشنا شدیم و قسمت view رو کار کردیم و به پروژه اضافه کردیم . 

از template engine hbs استفاده کردیم handlebars.js بری ایجاد صحفات html . 

با decorator Render اشنا شدیم برای رند کردن صحفات html که به وسیله hbs ساختیم . 

همینطور NestExpressApplication رو به NestFactory اضافه کردیم 

تا بتونیم از موارد زیر استفاده کنیم . 

```
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('hbs');
```


# END 

`پایان بخش mvc در nestjs`
