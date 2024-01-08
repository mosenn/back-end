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

می خوایم بریم سراغ `class-transform`  . 

کارش اینه که میاد `response`  که قرار هست ارسال کنیم 

به سمت فرانت اند رو می تونیم تغییر بدیم همینطور  یک سری موارد رو حذف کنیم و بعد ارسال کنیم . 

که هر دو کار رو می خوایم در این فایل انجام بدیم . 

# install 

با دستور `npm i class-transform` نصب رو انجام میدیم
# steps

بعد از نصب نیاز هست چند مرحله رو برای اینکار انجام بدیم : 



-ایجاد یک کلاس در فایل `report.dtos.ts` 

-استفاده از `class` ایجاد شده در `app.services` و `app.controller`

-تغییر در فایل `main.ts` .

-تغییر در فایل `app.module.ts`

# report.dtos.ts
به فایل `report.dtos.ts` میریم 

![image](https://github.com/mosenn/nestjs/assets/91747908/621d4f11-dc89-48ec-957c-9387f906bb03)

نیاز هست که `import` کنیم `class-transform`  رو . 

```javascript
import { Exclude, Expose } from "class-transformer";
```

مقادیر `Exclude` , `Expose` رو نیاز داریم برای ایجاد تغییرات . 

به وسیله `Exclude` می تونیم یک مقدار رو انفرستیم داخل `response` در واقع حذف میشه  . 

به وسیله `Expose` می تونیم تغییرات رو اعمال کنیم . 


خب نیاز داریم یک کلاس جدید در فایل `report.dtos.ts` ایجاد کنیم : 

```javascript
export class ReportResponseDto {
  }
```

که تمامی مقادیری که مربوط به `report data` هست رو قرار میدیم درونش : 

```javascript
export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  type: ReportType;
  // created_at: Date;
  @Exclude()
  updated_at: Date;

  @Expose({ name: "createdAt" })
  @IsDate()
  created_at: Date;
  constructor(parial: Partial<ReportResponseDto>) {
    Object.assign(this, parial);
  }
}
```

در بالا از `Expose` استفاده کردیم و یک `{name:"createAt"}` درونش قرار دادیم. 

در واقع می خوایم که اسم `created_at` رو `rename` کنیم به `createdAt` . 

کار که `class-transform` به وسیله `Expose@` برای ما انجام میده . 

در ادامه هم که خوده `created_at` رو صدا زدیم تایپ شو مشخص کردیم که `isDate@` هست . 

که این `isDate@` داره از `class-validator` میاد که در بخش قبل باهاش کار کردیم . 

یک `constructor` داریم که درونش یک `key` به اسم `parial`  داره که اشاره می کنه به خوده `ReportResponseDto` . 

که این `partial` اضافه شده به اجازه استفاده از `object` که داریم رو میده همچنین می تونیم تغییر بدیم یا یک ابجکت جدید ایجاد کنیم . 

کار ما در این فایل تموم شد . 

ولی برای اینکه بتونیم از این `class` که برای تغییر ایجاد شده استفاده کنیم . 

# main.ts

نیاز داریم درون `main.ts` هم تغییراتی ایجاد کنیم . 

![image](https://github.com/mosenn/nestjs/assets/91747908/95511bb2-f698-47d6-9646-16ce20e09aaf)



```javascript
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // new added transform , transformOptions
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();

```
حالا درون `new ValidationPipe` یک سری `option`  اضافه می کنیم . 

که بتونیم از `transform` درون `nestjs` استفاده کنیم . 

```javascript
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
```

همونطور که مشخص هست مقدار `transform` رو اضافه کردیم و برابر با `true` گذاشتیم . 

مقدار `transformOptions` رو هم قرار دادیم و درونش ` enableImplicitConversion: true`  قرار دادیم . 

که هر دو نیاز هستند باشند تا ما بتونیم `transform` رو درون `nestjs` انجام بدیم. 

# app.module.ts 

درون فایل `app.module.ts` هم نیاز هست که تغییراتی رو داشته باشیم . 

تا بتونیم از `transfrom` استفاده کنیم . 

درون `providers` که یک ارایه هست میایم یک `{}` تعریف می کنیم . 

که درون `{}` یک `provide` داریم و یک `useClass` . 

که `provide` میاد در واقع `APP_INTERCEPTOR` رو میگیره . 

که در مورد `APP_INTERCEPTOR` در اینده صحبت می کنیم . 

و `useClass` همی میاد `ClassSerializerInterceptor`  رو میگیره . 

یه نگاهی به فایل `app.module.ts` بندازیم  : 

```javascript
import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // add new provide and useClass
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}

```


قسمت جدیدی که اضافه شده : 

```javascript
  providers: [
    AppService,
    // add new provide and useClass
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
```



# report.controller.ts

بعد از تغییراتی که درون `main.ts` و `app.module.ts` انجام شد . 

به فایل `report.controller.ts` میریم و از `class` که برای ایجاد `transform` ساخته بودیم در `endpoint` ها مون استفاده می کنیم . 

و اینجوری `response` رو تغییر میدیم . در واقع `transform` رو انجام میدیم . 


اول میایم `class` که ساختیم رو `import` می کنیم : 

```javascript
import {
  ReportResponseDto,
} from "./report.dtos";
```

در ادامه میایم ازش استفاده می کنیم : 


```javascript
  @Get()
  getRequsetWithParam(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    return this.appService.getRequsetWithParam(type);
  }
```

در `Get@` که در بالا داریم چون دیتا به صورت یک ارایه هست در نتیجه `[]` اینو قرار دادیم به دلیل `typescript` . 

برای تمامی `controller` های خودمون می تونیم بیایم `response` که `custom` کردیم رو تغییر بدیم . 

یک نمونه دیگه ببنیم و این عمل رو برای تمامی `end point` که درون `controller.ts` هستند رو انجام دادیم . 

```javascript
  @Post("add-report")
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Body() { amount, source }: dtoCreateReport,
  ): ReportResponseDto {
    return this.appService.createNewReport(type, { amount, source });
  }
```

و چون بقیه موارد ما ریسپانسی که ارسال می کنند صرفا ابجکت هستند نیاز نیست مثل اون بالا بیایم تعیین کنیم نوع تایپ رو. 

# app.services.ts 

بعد از تغییرات درون `app.controller.ts` نیاز هست به فایل `app.services.ts` بریم . 

![image](https://github.com/mosenn/nestjs/assets/91747908/b7eb3681-e5cc-4629-b702-ff090f2a6846)

و از `ReportResponseDto` استفاده کنیم. 

اول میایم `import` رو انجام بدیم . 
```javascript
import { ReportResponseDto } from "./report.dtos";
```

در ادامه ازش استفاده می کنیم . 

```javascript
  getRequsetWithParam(type: string): ReportResponseDto[] {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const filteredReports = data.report.filter((report) => {
      return report.type === reportType;
    });
    return filteredReports.map((report) => new ReportResponseDto(report));
  }
```

نوع تایپش چون در این سرویس نیاز هست که ارایه باشه رو قرار میدیم مثل `app.controller.ts` . 

```javascript
ReportResponseDto[]
```

موقعی که می خوایم `return` رو داشته باشیم از اونجای که دیتای ما ارایه هست یک `map` زدیم در ادامه درون `ReportResponseDto` قرار دادیم . 

```javascript
    return filteredReports.map((report) => new ReportResponseDto(report));
```
اینجا به یک صورت دیگه هم می تونیم اینکارو انجام بدیم موقع `return`  نهایی :

```javascript
import { classToClass } from "class-transformer
```
```javascript
     return filteredReports.map((report) =>
      classToClass(report, { cls: ReportResponseDto }),
     );
```
هر دو کد یک `result` رو دارند .


برای بقیه موارد هم به همین صورت عمل کردیم دیتا نهای رو موقع `return` شدن درون `ReportResponseDto` قرار دادیم . 

```javascript
 getRequsetWithParamAndId(type: string, id: string): ReportResponseDto {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const report = data.report
      .filter((report) => {
        return report.type == reportType;
      })
      .find((report) => report.id === id);
    return new ReportResponseDto(report);
  }
```
**نکته:** نیاز هست `keyword new` رو قبل از اون بنویسیم .

```javascript
new ReportResponseDto(report);
```
# test 

خب بریم با Postman ببنیم چه `response` دریافت می کنیم . 

![image](https://github.com/mosenn/nestjs/assets/91747908/d4db453e-1f94-4434-99e9-230298522ebf)

اگر که این http://localhost:3000/report/income `api`  رو صدا بزنیم درون Postman . 

تمامی دیتای های مربوط به `income` رو خواهیم داشت . 

اما نکته ای که هست درون `response` که داریم دیگه `updated_at` رو نمی بینیم . 

و همینطور `created_at` به `createdAt` تبدیل شده . 

```
    {
        "id": "1",
        "source": "salary",
        "amount": 7500,
        "createdAt": "2023-09-28T12:17:10.590Z",
        "type": "income"
    },
```

در واقع برای هر `end point` که در `app.controller.ts , app.service.ts` امده باشیم 

از `ReportResponseDto` استفاده کرده باشیم . مقدار `created_at` به `createAt` تبدیل شده . 

هچنین `updated_at`  رو نخواهیم داشت . 




# summery 

اگر نیاز باشه که مقداری رو `rename` کنیم یا حذف کنیم از `class-transform` استفاده می کنیم . 

ایجاد یک `class` جدید درون فایل `report.dtos.ts` . 

نیاز هست فایل های `main.ts` , `app.module.ts` , `app.controller , app.services.ts` رو دست خوش تغییر قرار بدیم . 

با `Exclude ` , `@Expose@` اشنا شدیم  . 

که `Expose@` برای تغییر استفاده میشد . 

و `Exclude@` برای حذف کردن استفاده شد . 

هر دو `decorator` مربوط به `class-transform` هستند . 

```javascript
import { Exclude, Expose } from "class-transformer";

```

```javascript
  @Exclude()
  updated_at: Date;

  @Expose({ name: "createdAt" })
  @IsDate()
  created_at: Date;
```

که درون فایل `report.dtos.ts` ازشون استفاده کردیم در کلاس جدیدی که ایجاد شد .  


در فایل بعدی در مورد `inceptor` صحبت می کنیم . 
