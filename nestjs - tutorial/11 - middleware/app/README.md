<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Midellware

می خوایم در مورد middleware درون nestjs صحبت کنیم 

در بخش diagram nestjs اشاره شد که middleware زمانی اتفاق می افته که یک requset به سمت سرور زده شه و قبل از route handler میاد اجرا میشه  . 

منطور از route handler همون controller هستش ,  می تونیم درون middleware یک سر وظایف تعریف کنیم که برای ما انجام بده . 

در اینجا صرفا یک middleware logger ایجاد می کنیم , که این Logger صرفا یک سری log رو در ترمینال vscode به ما نشون بده زمانی که requset زده میشه . 

برای ایجاد middleware یک فولدر درون پوشه src به اسم middleware ایجاد می کنیم . 

![image](https://github.com/mosenn/nestjs/assets/91747908/2e6b81d5-1f66-42e5-90bf-eae71106a945)


تمای middleware های پروژه رو درون این فولدر می تونیم قرار بدیم . 

هر middleware می تونه فایل جداگانه خودش رو داشته باشه . 

یک middleware به اسم log ایجاد می کنیم : 

![image](https://github.com/mosenn/nestjs/assets/91747908/f5760311-3bff-413d-9abc-a98acdb82135)


میدل ور می تونه کلاس باشه یا یک فانکشن باشه که جلو تر صحبت می کنیم .

# define middelware

هر middleware به طور معول یک class هست که  از `NestMiddleware` میاد implements میشه . 

درون NestMiddleware یک method به اسم use داریم . 

```javascript
export class Logger implements NestMiddleware {
  use() {}
}
```

زمانی که کلاسی رو implements کنیم نیاز داریم از method های درونی 

چیزی که implements  شده استفاده کنیم اینجا نیاز که از use که method 

درونی NestMiddleware هست استفاده کنیم .

## use method

متد use میاد 3 تا parametr می گیره . 

که req , res , next هستند . 

که  req همون Requset درون express هست 

که  res همون Response درون express هست 

 و next هم همون NextFunction درون express هستش . 

که این موارد رو import می کنیم از express . 

```javascript
import { Response, Request, NextFunction } from 'express';

```
درون method use  از req , res , next استفاده می کنیم به عنوان parameter :
```javascript
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) { }
}
```
**نکته: جاهای مقدارها باید به ترتیب باشه اول req رو داریم بعد res و در نهایت next**

یک سری console.log تعریف می کنیم   در متد use . 

زمانی که requset زده میشه این middleware log میاد log های که ایجاد کردیم نشون میده . 

```javascript
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middle ware is run');
    // Log request details
    console.log('Request method:', req.method);
    console.log('Request original url:', req.originalUrl);
    // Log response details
    console.log('Response status code:', res.statusCode);
    next();
  }
}
```
در انتها next رو صدا می زنیم . 
### next

زمانی که در متد use میگیم نکست  اجرا شه . 

بعد از اینکه کد های ما اجرا شد بره سراغ ادامه مراحل ران شدن پروژه

که در diagram nestjs توضیح دادیم مراحل اجرا شدن nestjs رو .

بودن next درون middlware نیاز هست گذاشتنش نباید فراموش شه 

که nestjs بتونه ادامه ران شدنش رو داشته باشه .

**یاداوری: در diagram که صحبت کردیم بعد از اتمام middleware**

**به سراغ Guards خواهد رفت nestjs.**

# add middelware to module

حالا که middleware ور خودمون رو ساختیم می خوایم  برای کل پروژه استفاده کنیم . 

برای اینکه در کل پروژه middleware ما برای تمامی route ها با هر requset اجرا شه 

به app.module.ts اضافه می کنیم middleware که ایجاد کردیم . 

به app.module.ts میریم . 

![image](https://github.com/mosenn/nestjs/assets/91747908/1a7b5e09-f1d4-4513-8d58-4710cd790dbe)

میایم middleware Logger رو که ایجاد کردیم import می کنیم : 

```javascript
import { Logger } from './middleware/log.middleware';
```

درون Module@ نمی تونیم import کنیم . 

باید درون   class AppModule  بیام استفاده کنیم ازش . 

برای این کار نیاز هست که class AppModule رو implements از `NestModule` کنیم . 

```javascript
export class AppModule implements NestModule {}
```

زمانی که implements می کنیم از method های درونی که هست نیاز هست استفاده کنیم . 

اینجا NestModule یک method به اسم configure داره . 

## configure

 این configure یک متد درونی هستش که وقتی implements می کنیم اضافه می کنیم

درون configure یک method دیگه داریم به اسم `consumer` . 

```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

  }
}
```

کار این consumer قبول کردن middleware هست که ایجاد کردیم . 

به وسیله متد `apply` که درون خودش داره این کارو انجام میده . 

```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      
  }
}
```
درون apply میایم middleware Logger که ایجاد کردیم قرار میدیم .

الان اگر به وسیله postman به سرور خودمون در خواست بزنیم . 

می تونیم درون ترمینال vscode لاگ های که ایجاد کردیم ببنیم . 

که این یعنی middleware Logger ما داره کار می کنه . 

![image](https://github.com/mosenn/nestjs/assets/91747908/86cbe456-156f-4f4e-bd4d-ab4e6c39c404)


## forRoutes

حتی می تونیم به وسیله متد forRoutes بگیم برای چه ادرس controller بیاد middlware اجرا شه . 

که در کد پایین گفتیم صرفا فقط برای ادرس 'user'  بیاد این middlware logger اجرا شه . 

```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes('user');
  }
}
```

می تونیم به وسیله `path` ادرس تعیین کنیم .

بگیم برای چه route این middleware  اجرا شه . 

وقتی path رو تعریف می کنیم به تنهای کار نمی کنه . 

نیاز هست که `method` رو هم تعریف کنیم . 

در method از RequsetMethod استفاده می کنیم که از درون nestjs/comman@ میاد import میشه . 
```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      .forRoutes({ path: 'user/id', method: RequestMethod.GET });
  }
```

کد بالا الان فقط برای user/:id میاد middleware Logger رو اجرا می کنه .

و همینطور در قسمت method نیاز هست که روی GET بزاریم . 

اگر RequstMethod رو Post بزاریم middleware میاد فقط زمان POST اجرا میشه . 

برای path می تونیم ادرس  "*/user" رو قرار بدیم : 
```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      .forRoutes({ path: 'user/*', method: RequestMethod.GET });
  }
}
```

اینجوری برای تمام route ها که متد GET دارند middleware Logger اجرا میشه . 

**نکته:البته ادرس های دیگه ای هم می تونیم تعریف کنیم به جای star مثلا user/:id که نمونه شو در بالا دیدیم** 

**یا هر ادرس دیگه ای می تونیم اضافه کنیم**
# function middelware

زمانی که میدل ور ما ساده هست dependencies خاصی نداره .

 یعنی چیزی از فایل های دیگه نیاز نیست بهش اضافه شه

می تونیم به جای کلاس از فانکشن استفاده کنیم

```javascript
export function Logger2(req: Request, res: Response, next: NextFunction) {
  console.log('middle ware is run');
  // Log request details
  console.log('Request method:', req.method);
  console.log('Request original url:', req.originalUrl);
  // Log response details
  console.log('Response status code:', res.statusCode);
  next();
}
```

## function middelware in main.ts

داخل فایل main.ts می تونیم به صورت گلوبال بیایم میدل وری که ایجاد کردیم رو اضافه کنیم

![image](https://github.com/mosenn/nestjs/assets/91747908/94f42ab1-82e8-48f4-af0b-baa94e354b33)


منتها نکته مهمی که داره اینه که صرفا باید فانکشن باشه تا بتونیم درون `()app.use` بزاریم

در واقع middleware های که class هستند  رو نمی تونیم درون `()app.use` قرار بدیم .

```javascript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(Logger2);
  await app.listen(3000);
}
bootstrap();
```

مورد دیگه زمانی که درون main.ts میایم  middleware رو قرار میدیم , دیگه درون app.module نباید middleware رو  داشته باشیم


![image](https://github.com/mosenn/nestjs/assets/91747908/319fc5ab-48cf-482b-9bc9-8977e34756ac)

باید به حال نرمال قبلی خودش باشه app.module صرفا کلاس خالی از میدل ور باشه .

```javascript
export class AppModule {}

```

زمانی که یک middleware درون main.ts اضافه میشه روی تمامی درخواست های پروژه ما اعمال میشه

اون middleware که اضافه شده روی تمامی کنترلر ها و روت ها کار می کنه

مثل زمانی که میایم از middleware های مثل cors استفاده می کنیم یا parser ها . 

# Summary

در این بخش در مورد middleware درون nestjs صحبت کردیم . 

که گفتیم یک middleware فقط قابلیت اجرا شدن قبل از route handler رو داره . 

همینطور می تونیم خودمون middleware تعریف کنیم که معمولا یک class هست اما می تونه function هم باشه . 

اگر که class باشه درون app.module.ts میایم ازش استفاده می کنیم . 

اگر فانکشن باشه درون main.ts درون app.use می تونیم ازش استفاده کنیم .

# END 

**پایان middleware**
