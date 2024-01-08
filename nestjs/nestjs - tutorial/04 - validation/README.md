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

در این بخش می خوایم در مورد `validation` صحبت کنیم . 

ولیدیشن در nestjs می تونیم به چند صورت انجام بدیم . 

از Pipe استفاده کنیم . از interceptor استفاده کنیم یا از پکیح های  که هستند مثل zod . 

در اینجا ولیدیش رو به وسیله pipe انجام دادیم .





# Pipe 
به وسیله `pipe` می تونیم ولیدیشن روداشته باشیم . 

که به صورت global می تونیم pipe داشته باشیم . 

که برای استفاده global در main.ts نیاز هست از app.useGlobal و ValidationPipe استفاده کنیم .

از Pipe برای ولید کردن پارمتر ها استفاده می کنیم :






```javascript
import {
  ParseUUIDPipe,
  ParseEnumPipe,
} from "@nestjs/common";
```



در کد بالا داریم `ParseUUIDPipe` , `ParseEnumPipe` این دو `pipe` رو از درون `nestjs/common@` امدیم `import` کردیم . 

که کار `validation` رو برای ما انجام میدن در کد زیر ازشون استفاده کردیم . 


بیایم `parmeter` های رو که داریم رو `typeshon` رو مشخص کنیم که صرفا فقط همون `type` باشند که مشخص کردیم . 

در غیر اینصورت اگر هر نوع تایپی به غیر از اون چیزی که مشخص شده باشه . فرستاده شه از سمت فرانت اند با ارور مواجه خواهد شد . 

```javascript
@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getRequsetWithParam(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
  ) {
    return this.appService.getRequsetWithParam(type);
  }
}
```
در کد بالا درون `Param@` یک `new ParseEnumPipe` داریم که مقدار `enum` رو درون خودش قرار داده . 

این `ReportType` یک `enum` هست که درون فایل `data.ts` قرار داره .  

اگر هر مقدار دیگه ای به جای اون `enum` که درون `data.ts` داریم بخواد درون `api` گذاشته شه با ارور مواجه خواهد شد . 

به عبارتی دیگه ما `type:` که به عنوان `paramter` درون `api` قرار میگیره رو `valid` کردیم. 

ارور رو با هم ببنیم درون Postman : 

![image](https://github.com/mosenn/nestjs/assets/91747908/3925f35d-0a5d-4f3c-8464-6215c115941d)

با جای `income` و `expense` یک پارامتر دیگه درون `api` ادرس گذاشتیم `more` . 

همونطور که می بینید  ریسپانس به ما ارور داده و میگه که این `parameter` رو نمیشانه 

این یعنی اینکه `paramter` مربوط به `api` ما `valid` شده به وسیله `ParseEnumPipe` . 

```
{
    "message": "Validation failed (enum string is expected)",
    "error": "Bad Request",
    "statusCode": 400
}
```
مورد دیگه که استفاده کردیم `ParseUUIDPipe` هستش 

```javascript
  @Param("id", ParseUUIDPipe) id: string,
```

این `Pipe` میاد ایدی که داره تولید میشه رو حتما باید به وسیله  `uuid` باشه 

و هر چیزی دیگه ای به غیر از `id` که توسط `uuid` تولید شده باشه `valid` نخواهد بود و قطعا ارور خوایم گرفت . 

```javascript
  @Put(":id")
  updateReport(
    @Body() body: dtoUpdateReport,
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Param("id", ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.appService.updateReport(type, id, body);
  }
```
بریم تست کنیم ببینم چه اروری می گیریم موقع اپدیت کردن اگر ایدی `uuid` نباشه . 

![image](https://github.com/mosenn/nestjs/assets/91747908/ce8fff03-c04b-4de3-b213-f575dd0b9ef2)

همونطور که درون `response` می بنید به ما گفته که انتظار داشته که `id` ماله `uuid` باشه . 

```javascript
{
    "message": "Validation failed (uuid is expected)",
    "error": "Bad Request",
    "statusCode": 400
}
```

**نکته :** می تونیم `custom pipe` ایجاد کنیم و ازش استفاده کنیم . 

که درون داکیومنت توضیحات بیشتری دادهش شده : https://docs.nestjs.com/pipes

```javascript
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
```

هر `custom pipe` که ایجا دمیشه دو مورد رو خواهد داشت `()transfrom()` , `PipeTransform `

که `transform` در واقع دو تا `parameter` میگیره `value` و `metadata` . 

که `value` مقدار مورد نظر ما هستش در واقع که می خوایم روش کار کنیم . 

و `metadata` مقدار `object` هست که برای انجام `process` که داره صورت میگیره بهش نیاز داریم . 

که مقادیر `metadata` به صورت زیر هستش : 

```javascript
export interface ArgumentMetadata {
  type: 'body' | 'query' | 'param' | 'custom';
  metatype?: Type<unknown>;
  data?: string;
}
```


# class-validator 

خیلی راحت `class-validator` میاد `decorator` های  ولیدیش رو در اختیار ما قرار میده .

با توجه به نیازمون می تونیم ازشون استفاده کنیم و ولیدیشن رو انجام بدیم . 

یک dto ایجاد می کنیم . dto مخفف data transfer object هست . 

برای ایجاد dto اول نیاز هست درون main.ts بیایم ValidationPipe رو قرار بدیم .

```javascript
import {
  IsNumber,
  IsPositive,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDate,
} from "class-validator";
```

همونطور از اسم شون پیداست هر کدوم برای ولیدیشن های مربوط به خودشون استفاده میشن . 

برای نمونه `IsPositive` برای اینکه بگیم فقط مورد نظر ما در دیتا فقط عدد مثبت باس باشه . 

مورد بعد `IsNotEmpty` برای این استفاده میشه که بگیم مورد نظر ما نباید خالی باشه حتما باید دارای مقادیری باشه . 

مورد دیگه `IsOptional` زمانی که بخوایم بگیم که دیتای مد نظر ما می تونه باشه . می تونه نباشه استفاده میشه . 

بریم توی کد کارکرد و کاربرد شون رو ببنیم . 



نیاز داریم که `ReportType` که `enum` ما هست در فایل `data.ts` رو هم `import` کنیم . 


```javascript
import { ReportType } from "./data";
```

در این فایل 2 تا `class` میایم ایجاد می کنیم

یکی برای `update` یک برای `create` که در `end point` ها مربوط به خودشون استفاده میشن . 

که البته بهتره هر کدوم به طور جداگانه در فایل های جداگانه تعریف شن . 

 با هم ببنیم : 

```javascrtip
export class dtoCreateReport {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}
```

در کد بالا یک `class` ایجاد شده به اسم `dtoCreateReport` . 

که امدیم یک سری موارد رو `validation` کردیم با استفاده از `decorator` های که درون `calss-validation` هست . 

اگر به `amount` نگاه کنیم . گفتیم که هم `IsNumber@` باشه هم عددش باید مثبت باشه که به وسیله `IsPositive@` مشخص کردیم این موضوع رو . 

```javascript
  @IsNumber()
  @IsPositive()
  amount: number;
```

برای `source` مشخص کردیم که نیاز هست حتما `string` باشه به وسیله `IsString@` . 

هم گفتیم `source` حتما باید در دیتای ارسال وجودد اشته باشه به وسیله `IsNotEmpty@` .

```javascript
  @IsString()
  @IsNotEmpty()
  source: string;
```

یک کلاس دیگه داریم به اسم `dtoUpdateReport` . 

که وظیفه `validation` کردن `end point` مربوط به `update` رو داره . 


```javascript
export class dtoUpdateReport {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}
```
که صرفا امدیم از  `IsOptional@` استفاده کردیم .

و موقعی که قرار یک دیتا اپدیت شه گفتیم مقدار های `source` , `amount` 

می تونن باشند می تونند نباشند بودنشون الزامی نیست . یا همون `optional` هستند . 

خب در این بخش دیتای که می خواستیم رو `validation`  کردیم . 

در واقع چیزی که از سمت فرانت اند به ما ارسال میشه رو امدیم کنترل کردیم . 

برای اینکه از این `validation` که نوشتیم بتونیم استفاده کنیم . 

یک سری تغییراتی نیاز داریم . 

# dfine validationPipe in main.ts

به فایل `main.ts` میریم  : 


<img src="https://github.com/mosenn/nestjs/assets/91747908/917435a8-4b81-4453-b07e-27085cee780b" alt='class-validator ins nestjs'>

نیاز داریم که یک `option` اضافه کنیم . 

اول میایم `ValidtionPipe` رو از درون `nestjs/comman` ایمپورت می کنیم . 

```javascript
import { ValidationPipe } from "@nestjs/common";

```
قدم بعدی استفاده از `useGlobalPipes` هست . 

قبل از `app.listen` میایم ازش استفاده می کنیم . 


```javascript
  app.useGlobalPipes(
  );
```

در واقع ` app.useGlobalPipes` به ما این امکان رو میده که موارد مورد نیازمون رو در کل پروژه استفاده کنیم 

که در این مثال ValidationPipe رو درون app.useGlobalPipes گذاشتیم . 

اینکار برای این هست که از dto های که ساختیم بتونیم با توجه به نیازمون در کل پروژه استفاده کنیم .




```javascript
  app.useGlobalPipes(
    new ValidationPipe({
    }),
  );
```
که دقت شه حتما `new` رو نیاز هست بزاریم . 

در نهایت یک سری `option` قبول می کنه `ValidationPipe` . 

که برای اینکه بتونیم از اون `dto validation report` که ایجاد کردیم . 


# whiteList
بخوایم استفاده کنیم نیاز داریم `option whiteList` رو قرار بدیم 

```javascript
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    }),
  );
```
به طور `default` مثدار `whiteList` برابر با `false` هست . 

نیاز هست که حتما در پروژه های خودمون بیایم `whiteList` رو `true` قرار بدیم . 

کار که `whiteList` انجام میده اینه که نمی زاره دیتای اضافی به سمت سرور ارسال شه . 

حتما باید همون مقادیری که درون `data` تعریف شده در model ارسال شه 

اگر هم چیز اضافی ارسال شه نادیده گرفته میشه . 

![image](https://github.com/mosenn/nestjs/assets/91747908/3bb0c4cf-236b-4fe5-836e-042ac83f219a)

الان در عکس بالا می بینیم یک `report` جدید ایجاد کردیم و مقدار `test` رو گذاشتیم . 

اما موقع ایجاد شدن دیتا اون مقدار `test` نادیده گرفته شده . 

بخاطره این هستش که `whiteList` روی `true` قرار داره 

```
{
    "id": "39a8b6dc-568a-4e44-aab4-efb9857dcd91",
    "source": "test12222",
    "amount": 1223213555,
    "created_at": "2023-09-28T13:22:20.385Z",
    "updated_at": "2023-09-28T13:22:20.385Z",
    "type": "income"
}
```

ولی اگر بیایم `whiteList` رو فالس کنیم یا اصلا تعریف اش نکنیم , ببینیم چه اتفاقی می افته .

**نکته:** مقدار `whiteList` به طور `default` برابر با `false` هست . 

```javascript
   new ValidationPipe({
      // whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
```
امدیم `whiteList` رو کامنت کردیم . 

در این شرایط هر اطلاعات اضافی فرستاده شه میاد سمت سرور . 

همه چی اماده است که بریم از `validtion` های که درست کردیم استفاده کنیم . 

# app.controller.ts
به `app.controller.ts` میریم 

<image src="https://github.com/mosenn/nestjs/assets/91747908/16a238eb-6175-4104-b2ef-3c8986f19333" alt="nestjs controller" />

اول میایم `class` های که در `report.dtos.ts` ایجاد کردیم رو `import` می کنیم . 


```javascript
import {
  dtoCreateReport,
  dtoUpdateReport,
} from "./report.dtos";
```
از `dtoCreateReport` برای `end point` مربوط به `create` استفاده می کنیم . 

```javascript
  @Post("add-report")
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Body() { amount, source }: dtoCreateReport,
  ): ReportResponseDto {
    return this.appService.createNewReport(type, { amount, source });
  }
```

در کد بالا در جلوی `Body@` میایم از `dtoCreateReport` استفاده می کنیم . 

```javascript
@Body() { amount, source }: dtoCreateReport,
```

که الان مقادیر  `amount , source` که از سمت فرانت ارسال میشن . 

مورد `validation` که در فایل `report.dtos.ts` انجاد دادیم قرار میگیرند . 

برای اپدیتم به همین صورت عمل می کنیم : 

```javascript
  @Put(":id")
  updateReport(
    @Body() body: dtoUpdateReport,
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Param("id", ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.appService.updateReport(type, id, body);
  }
```
که باز جلوی `Body@` امیدم `dtoUpdateReport` قرار دادیم . 

```javascript
    @Body() body: dtoUpdateReport
```

و موقع `update` شدن `data` مقادیر `source , amount` با توجه 

به `validation` که انجام دادیم در `repoert.dtos.ts` اپشنال شدند . 

در واقع می تونند هر دو مورد اپدیت قرار بگیرند . یا صرفا یکی شون اپدیت شه . 


# test validation
خب بریم ببنیم ولید های که انجام دادیم کار می کنند یا نه  . 

سرور رو ران می کنیم با دستور `npm run start:dev` . 

در ادامه برنامه Postman رو اجرا می کنیم . 

بیایم یک `data` جدید `Post` کنیم ولی یکی از مقادیر رو قرار ندیم ببنیم جه اتفاقی می افته . 

کلا کاری کنیم که با `validation` که اتجام دادیم جور نباشه . 

<image src="https://github.com/mosenn/nestjs/assets/91747908/67578f6d-2887-4f82-8b89-475fe103a92b" alt="validation in nestjs"/>


همونطور که می بنید در قسمت `response`  به ما `error` داده که هاکی از `validation` ما هستش : 

```
{
    "message": [
        "source should not be empty",
        "source must be a string"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```

که ما `source` رو قرار ندادیم و به ما گفته که نیاز هست حتما باشه و از نوع `string` باشه . 

پس `validtion` ما کار می کنه . 

اگر `validation` که نوشتیم رعایت نشه ارور های مربوط به همون `validation` به ما نمایش داده میشه . 


بریم سراغ اپدیت کردن دیتا : 


<image src="https://github.com/mosenn/nestjs/assets/91747908/f123deb1-57f1-40c8-9750-169a70d6351c" alt="nestjs validation" />


گفته بودیم که عددی که ارسال میشه باس `IsPositive@` باشه  . 

درون فایل `report.dtos.ts` :


```javascript
export class dtoUpdateReport {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}
```



الان یک عدد منفی داریم می فرستیم برای `update` شدن دیتای مد نظرمون که در `message` کامل به ما ارور رو نمایش داده : 

```
{
    "message": [
        "amount must be a positive number"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```


# summary : 

در این بخش با `Pipe` و `class-validator` اشنا شدیم . 

که `Pipe` های در واقع `decorator` های درونی `nestjs` هستند . 

و حتی مای تونیم `Pipe` های رو به طور `custom` ایجاد کنیم . 

که درون داکیومنت توضیحات بیشتری دادهش شده : https://docs.nestjs.com/pipes

 که با  استفاده از `class-validator`  می تونستیم `requset` های که از سمت فرانت اند زده  میشه رو کنترل کنیم . 

استفاده از `class-validator ` نیازمند چند مرحله بود : 

 نصب `npm i class-validator`

 ایجاد یک فایل به اسم `report.dtos.ts` .

 ایجاد کلاس و ولید کردن مقادیر مورد نظر به وسیله `class-validator` .

 اضافه کردن `new ValidationPipe ` در  فایل `main.ts` .

 

در فایل بعد در مورد `class-transform` صحبت می کنیم . 



