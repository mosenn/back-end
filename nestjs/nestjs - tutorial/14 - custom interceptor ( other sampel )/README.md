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


# intro 

در بخش قبل با ماهیت `interceptor` اشنا شدیم . 

در واقع `interceptor` مثل یک لابه عمل می کنه , 

بین `response` , `requset` قرار میگیره . 

در این بخش می خوایم یک `custom interceptor` ایجاد کنیم . 

و ازش استفاده کنیم .

# custom.interceptor.ts 

یک فایل ایجاد می کنیم به اسم `custom.interceptor`

<image src="https://github.com/mosenn/nestjs/assets/91747908/442e1222-11ab-40fa-a0bb-68754b2c584b" alt="interceptor in nestjs" />

درون این فایل قرار که بیایم `interceptor`  خودمون رو ایجاد کنیم.

قدم اول اینه که بیایم `NestInterceptor` رو `import` کنیم . 

```javascript
import { NestInterceptor} from "@nestjs/common";
```

این `NestInterceptor` در واقع یک `class` درونی خوده `nestjs` هست . 

که باهاش می تونیم `interceptor` بسازیم و استفاده کنیم . 

**نکته:** این کلاس یک سری متد های درونی داره که نیاز داره از اون متد ها استفاده کنیم برای ساخت `interceptor` که این متد ها تعریف شده درون خوده `NestInterceptor` هست . 

 داکیومنت : https://docs.nestjs.com/interceptors#interceptors


قدم بعد ایجاد یک `class` جدید هست که از  `NestInterceptor` میاد `implements` میشه . 

```javasript
export class CustomInterceptor implements NestInterceptor {
}
```

اشاره کردیم که `NestInterceptor` یک کلاس هست . 

در نتیجه متد های درونی خودش رو داره که نیاز هست از این متد ها استفاده کنیم . 

یکی از این متد ها `intercept` هست . 

```javascript
import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs";
export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {

  }
}

```
متد `intercept` دو پارامتر میگیره `context` , `hanler` . 

که `context` حاوی اطلاعات مربوط به `requset`هست , مثل `params` 

و `handle` میایم قسمت `response` رو کنترل می کنیم . 

هر دو تایپ مروبط به خودشون رو دارند : 

```javascript

import { NestInterceptor, ExecutionContext, CallHandler } from 
```

که دورن `intercept` تایپ `ExecutionContext` برای `context` , تایپ `CallHandler` برای `handler` : 

```javascript
  intercept(context: ExecutionContext, handler: CallHandler) {
  }
```

دورن `intercept` که متد درونی `NestInterceptor` هست میایم کد های که می خوایم بین `requset` و `response` قرار بگیر می نویسیم . 

بریم کل کد روببینیم : 

```javascript
import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs";
export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log("This is intercepting the requset");
    console.log({ context });

    return handler.handle().pipe(
      map((data) => {
        // data is response
        console.log("This is intercepting the response");
        console.log(data);
        const response = { ...data, createdAt: data.created_at };
        delete response.updated_at;
        delete response.created_at;
        return response;
        return data;
      }),
    );
  }
}

```

در کد بالا یک `map` داریم که از `rxjs` ایپورت شده . 

```javascript
import { map } from "rxjs";
```

کاربردش مثل `map` درون جاوا اسکریپت هست ولی درون `nest` به این صورت استفاده میشه . 

دو تا  `console.log` داریم  : 

```javascritp
  console.log("This is intercepting the requset");
    console.log({ context });
```

این دو `log` مربوط میشه به `requset` . 

در ادامه یک `return`  داریم که فانکشن `handler` رو داره برگشت میشده : 

```javascript
 return handler.handle().pipe(
      map((data) => {
        // data is response
        console.log("This is intercepting the response");
        console.log(data);
        const response = { ...data, createdAt: data.created_at };
        delete response.updated_at;
        delete response.created_at;
        delete response.amount;
        return response;
        return data;
      }),
    );
```
هر اتفاقی که درون `()pipe` بیوفته مربوط به بخش `response` میشه . 
داده ای که به سمت فرانت ارسال میشه . 

که اینجا ما امدیم اطلاعاتی که قرار ارسال شه رو دست کاری کردیم . 

مقادیر `updated_at` , `created_at` رو `delete` کردیم . 

در نهایت `response` رو برگشت دادیم . 

اون `return` مربوط به `data` اگر که ابجکت `response` رو و کد های مربط بهش رو پاک کنیم . 

در واقع کل دیتا رو به ما برگشت میده . 

در واقع `custom interceptor`  رو ایجاد کردیم بریم ازش استفاده کنیم. 

**یادتون نره که کلاس که ایجاد شده رو `export` کنید** 

چون قرار در `app.module.ts` ازش استفاده کنیم . 

# app.module.ts 

به فایل `app.module.ts`  میریم . 

<image src="https://github.com/mosenn/nestjs/assets/91747908/560f4879-9af1-416b-ae55-32bdde5130ff" alt="custom interceptor in nestjs" />

کاری که انجام میدیم کلاس که ایجاد کردیم رو `import` می کنیم . 

```javascript
import { CustomInterceptor } from "./custom.interceptor";
```
و میایم درون `useClass` قرارش میدیم : 

```javascript
useClass: CustomInterceptor,
```
**نکته:** این `custom interceptor` که ساختیم دقیقا کار `ClassSerializerInterceptor` 
رو انجام میده که یک `interceptor` درونی `nestjs` هست و ما می تونیم ازش استفاده کنیم . 

صرفا یدونه ساختیم که با ساخت `custom interceptor` اشنا شیم . 
```javascript
import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CustomInterceptor } from "./custom.interceptor";
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomInterceptor,
    },
  ],
})
export class AppModule {}
```
کار ما تموم شد حالا بریم پروژه رو ران کنیم . 

با Postman ببنیم چه `response` به ما میده . 
# test


![image](https://github.com/mosenn/nestjs/assets/91747908/b65db792-ee9e-4c9e-88ca-bbf3186eebb3)

همونطور که در عکس بالا مشخص هست `created_at` به `createdAt` تبدیل شده . 

و مقادیر `updated_at , amount , created_at` رو هم نداریم درون `response` . 
```
{
    "id": "2c41f8b2-e326-49c7-aad8-c05141b95802",
    "source": "nestjs",
    "type": "income",
    "createdAt": "2023-09-29T11:55:18.303Z"
}
```
چون درون `handler` که مربوط به `interceptor` که ساختیم گفته بودیم که پاک شن . 

```javascript
    return handler.handle().pipe(
      map((data) => {
        // data is response
        console.log("This is intercepting the response");
        console.log(data);
        const response = { ...data, createdAt: data.created_at };
        delete response.updated_at;
        delete response.created_at;
        delete response.amount;
        return response;
        return data;
      }),
    );
```

# summery : 

با ساخت یک `interceptor` به طور `custom` اشنا شدیم . 

که به وسیله کلاس درونی خوده `nestjs` 

به اسم `NestInterceptor` می تونیم یک `interceptor` ایجاد کنیم . 

که یک متد درونی داشت به اسم `intercept` . 

که این متد دوتا پارامتر میگیره به اسم `context` و `handler` . 

که بخش `context` مربوط به `requset` میشه . 

 بخش `hanlder` مربوط به `response `
