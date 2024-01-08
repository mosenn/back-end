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

در این قسمت می خوایم با  `strcture`  که می تونیم درون `nestjs` داشته باشیم اشنا شیم . 

می خوایم یک فولدر برای `report` ایجاد کنیم . 

و تمامی بخش های کدی که تا به الان داشتیم کار می کردیم رو به فولدر `report` انتقال بدیم .

به این دلیل که پروژه قرار که قمست های مختلفی رو داشته باشه . 

فرض کنید ما `user` , `report ` , `summary`  رودرون پروژه داریم . 

هر 3 بخش مجزا از هم دیگه بخش های مربوط به خودشون رو دارند . 

و هر بخش از پروژه   `module` , `controller` , `services` مربوط به خودش رو داره .

# nest g 

با دستور `nest g controller report` خوده `nest` یک فولدر `report` ایجاد می کنه . 


<image src="https://github.com/mosenn/nestjs/assets/91747908/586eaa66-da4c-4279-a8ff-9b34d65f4fa6" alt="nestjs stracture" />

درون اون فولدر یک `controller` قرار میده . 

حرف `g` در اینجا مخفف `generate` هستش . 

با دستور `nest g service report` فایل `service` رو ایجاد می کنه درون فولدر `report` . 

<image src="https://github.com/mosenn/nestjs/assets/91747908/3bcf7bd3-f410-4b91-8ab7-faa77721ef65" alt="nestjs stracture" />

با دستور `nest g module report` فایل `module` برای `report` ایجاد میشه . 

<image src="https://github.com/mosenn/nestjs/assets/91747908/4bb7085e-8950-4b32-a9cb-a9fe61094efe" alt="nestjs stracture" />

در نهایت تمامی کد های که درون `app.controller ` , `app.service` , `app.module` داشتیم

رو به `report` انتقال میدیم . 

که درون خوده فایل های که هست میشه دید انتقال کد ها رو . 


# app.module.ts 

نیاز هست به درون فایل `app.module.ts` بریم . 


<img src="https://github.com/mosenn/nestjs/assets/91747908/fbff81df-0088-458b-9752-3c82d2806bd2" alt="app.module nestjs" />

و `ReportModule` رو `import` کنیم . 

```javascript
import { ReportModule } from "./report/report.module";
```

به صورت زیر درون `app.module.ts` استفاده اش می کنیم : 

```javascript
  import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CustomInterceptor } from "./custom.interceptor";

import { ReportModule } from "./report/report.module";
@Module({
  imports: [ReportModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
```

در قسمت `imports` یک ارایه هست که در اینده تمامی `module` های که برای پروژه ایجاد میشه

درون `imports`  قرار می گیرند . 


```javcascript
  imports: [ReportModule],
```

# summary :

به این دلیل که در پروژه ماژول ها مختلفی داریم نیاز به فولدر بندی داریم . 

و هر فولدر میاد فایل مخصوص به خودش رو اختصاص میده . 

هر بخش نیاز به `service , module , controller` داره . 

همینطور با   `generate` کردن فایل اشنا شدیم . 

که این امکان رو خوده `nestjs` برای ایجاد فایل های مورد نیاز در اختیار ما قرار داده . 

با دستور  `nest g controller report` می تونیم یک `controller` ایجاد کنیم .

یک فولدر برای ما ایجاد می کنه که فایل های مورد نظر مروبط به `report` درونش قرار خواهد داشت .

```
nest g controller report
nest g service report
nest g module report
```

بریم سراغ قسمت بعدی که یک فولدر `summary` علاوه بر `report` به پروژه اضافه خواهد شد .

در واقع یک `end point` جدید ایجاد می کنیم .
