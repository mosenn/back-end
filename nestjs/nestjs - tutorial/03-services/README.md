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


# intro 

در این بخش می خوایم `logic` های که برای `crud` نوشته بودیم رو انتقال بدیم به `app.services.ts` .  

برای چی باید اینکار کنیم ؟ 

خب قطعا در پروژه ها نیاز هست `api` های متفاوتی داشته باشیم . 

برای همین نیاز داریم هم `controller` و هم `services` جدا برای هر کدوم داشته باشیم . 

به همین دلیل هر چیزی رو تفکیک می کنیم و جدا قرار میدیم تا بتونیم `api` و `logic` های مربوط به اونها رو هندل کنیم . 


# AppService 

داخل این بخش می خوایم در مورد `services` صحبت کنیم . 

داخل `nestjs` یک فایل داریم به اسم `services` . 


<img src="https://github.com/mosenn/nestjs/assets/91747908/0bf5dcce-b5c2-40d3-a586-89b62b6e3bfa" alt='services in nestjs'/>


وظیفه این فایل هندل کردن متد های هست که برای `api` خودمون می نویسیم . 

در واقع `services` مثل فولدر `controller` در `express` هست . 

مواردی که نیاز داریم رو `import` می کنیم . 


```javascript
import { Injectable, NotFoundException } from "@nestjs/common";
import { ReportType, data } from "./data";
import { v4 as uuid } from "uuid";
```

تنهای موردی که جدید هست `Injectabale` هست بقیه موارد رو در قسمت قبلی ازشون استفاده کردیم .

و به این دلیل که قرار که logic های خودمون رو انتقال بدیم به `services` به این موارد نیاز داریم . 

درون `services` یک کلاس ایجاد می کنیم . در اینجا اسم کلاس ما `AppService` هست .  

از `Injectabale@` استفاده می کنیم . 

این `injectabale` یک `decorator` هست که از `nestjs/comman@` میاد و `import` میشه . 

و اینکه `injectabale@` یک ماژول اصلی و دورنی خوده `nestjs` هست . 

زمانی که یک `class` رو میایم میگیم که `injectabale@` باشه . 

 می تونیم درون کلاس های دیگه  یا کنترلرهای دیگه که به آن وابسته هستند بیام از کلاس مورد نظر مون که `injectabale@` هست استفاده کنیم . 

 با این کار می تونیم `depency` ها رو کنترل کنیم و پروژه ما  `modular, reusable ` باشه .

**نکته:** این `injectabale@` همیشه نیاز نیست استفاده شه . زمانی ضررور هست که `class` مورد نظر یک سری `dependencies` های مربوط به خودش رو داشته باشه . 

و ما نیاز داریم که به `dependencies` ها دسترسی داشته باشیم . اگر یک کلاس `dependencies` نداشته باشه نیاز به استفاده `injectabale@` هم نداریم . 


**نکته :**

**در مثالی که ما داریم در واقع نیاز به `injectabale@` نیست چون `dependencies` نداریم .

اما بهتر که تعریف کنیم شاید در اینده خواستیم مواردی اضافه کنیم در کل بودنش بهتر از نبودنش هست 

اما در این مثال می تونیم که از `injectabale@` استفاده نکنیم . **


مثلا یک `class` که نیاز به استفاده از `injectabale@` هست : 

```javascript

import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  private readonly message: string;

  constructor() {
    this.message = 'Hello, World!';
  }

  getMessage(): string {
    return this.message;
  }
}
```





```javascript
@Injectable()
export class AppService {

}
```

خب حالا میریم سراغ اینکه متد های خودمون رو بنویسیم . 


**نکته:** متد ها رو که ازشون صحبت می کنیم در واقع مثل فانکشن ها عمل می کنند . اما در کلاس به اسم متد اونها رو می شناسیم . 




```javascript

@Injectable()
export class AppService {
  // Get ('params')
  getRequsetWithParam(type: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => {
      return report.type === reportType;
    });
  }
}
```

یک متد نوشتیم به اسم `getRequsetWithParam`  درونش داریم دیتا رو بر اساس `param` می گیریم . 

کد جدیدی نیست در واقع همون کدی که قبلا درون `app.controller.ts` بوده مربوط به گرفتن دیتا به وسیله `param` انتقال دادیم به `services` . 


بقه متد ها رو هم به صورت زیر داریم .

می تونید به کد های این بخش هم مراجعه کنید . 


کدی های بخش `app.service.ts` به صورت زیر هست , که تمامی `logic` های مربوط به ` api` رو درون خودش قرار داده . 

```javascript
import { Injectable, NotFoundException } from "@nestjs/common";
import { ReportType, data } from "./data";
import { v4 as uuid } from "uuid";

interface newReport {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {

  getRequsetWithParam(type: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => {
      return report.type === reportType;
    });
  }
  // Get("paramas/:id")
  getRequsetWithParamAndId(type: string, id: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => {
        return report.type == reportType;
      })
      .find((report) => report.id === id);
  }
  // post method
  createNewReport(type: string, { amount, source }: newReport) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    data.report.push(newReport);
    return newReport;
  }

  // put(/params/:id)
  updateReport(type: string, id: string, body: newReport) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const updatedReport = data.report.map((report) => {
      if (report.id === id && report.type === reportType) {
        return { ...report, ...body, updated_at: new Date() };
      }
      return report;
    });

    data.report = updatedReport;
    return updatedReport.find((report) => report.id === id);
  }

  // delete(:id)
  deleteReport(id: string) {
    const reportToDelete = data.report.find((report) => report.id === id);

    if (!reportToDelete) {
      throw new NotFoundException(`Report with ID ${id}  not found.`);
    }

    data.report = data.report.filter((report) => report.id !== id);
    // notghin return in post man just get status code 204
    return { deletedReport: reportToDelete };
  }
}

```



# AppController
حالا از متد `getRequsetWithParam`  میایم در `app.controller.ts` استفاده می کنیم . 

<img src='https://github.com/mosenn/nestjs/assets/91747908/3f5fd32f-8930-4676-8abb-20a555af53fb' alt='services in nestjs'/>


چیز های که نیاز داریم رو که درون `app.controller` میایم `import` می کنیم . 

```javascript
import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  HttpCode,
} from "@nestjs/common";
```

توی `app.controller` وظیفه کنترل کردن متد ها رو داره که چه نوع متدی باشه چه status کدی ارسال شه و .. 

در واقع مثل `route.js` درون `expressjs` عمل می کنه . 

مورد بعدی که نیاز دارم `import` کنیم خوده `app.services` هست . 

```javascript

import { AppService } from "./app.service";

```

# constructor

در ادامه یک کلاس داریم به اسم `AppController` که این کلاس هم `export` شده . 

چون در جای دیگه می خوایم ازش استفاده کنیم یا اگر نیاز شد بتونیم استفاده کنیم . 
```javascript
export class AppController {
  constructor(private readonly appService: AppService) {}
}
```

اینجا یک `constructor` اضافه کردیم . 

می خوایم از `AppServices` درون `AppController` استفاده کنیم . به همین دلیل نیاز به `constructor` داریم . 

درون `constructor` یک `keyword` تعریف می کنیم به اسم  `private` که با اینکار  `appService` فقط قابل استفاده هستش در کلاس `AppController`   . 

و یک `keyword` دیگه به اسم `readonly` داریم که در واقع مشخص می کنه فقط میشه ازش استفاده کرد نمیشه چیزش رو تغییر داد صرفا میشه ازش استفاده کرد . 

میایم برای `AppService` یک اسم مشابه تعریف می کنیم درون `constructor` که می تونه هر اسمی باشه ولی اینجا `appServices` رو گذاشتیم. 

```javascript
appService: AppService
```


# @Get(:type)
در اخر `constractor` خودمون رو می بندیم و میایم شروع می کنیم به نوشتن متد های مورد نیازمون . 


```javascript
@Controller("report/:type")
export class AppController {
constructor(private readonly appServices:AppServices){}
@Get()
getRequsetWithParam(@Param("type") type:string) {
return this.appServices.getRequsetWithParam(type)
}
} 
```

در کد بالا بعدازتعریف کردن `Get@` یک متد داریم به اسم `getRequsetWithParam` که درونش یک متد دیگه داریم که داره از  `appServices` گرفته میشه و `return` میشه . 

موضوعی که باس بهش توجه شه `this` هست 

در اصل داره اشاره می کنه با `constracutor` 

 همون `AppServices` که اسمش رو تغییر دادیم به `appServices` . 

موضوع دیگه متدی که داره `return` میشه

صرفا تشابه اسمی داره و کاملا در فایل `app.services.ts` به همین اسم تعریف شده 

```javascript
return this.appServices.getRequsetWithParam(type)
```

یعنی یک متد درون خوده `AppController` داریم و باس بنویسیم به اسم `getRequsetWithParam` که درونش از `Param@` داره استفاده میشه   . 

که این متدی که می نویسیم یک متد دیگه رو که درون `App.services` هست رو میاد صدا می زنه  . 

که پارامتر `type` رو گرفته . 

```
return this.appServices.getRequsetWithParam(type)
```


صرفا تشابه اسمی دارند به این دقت کنید . هر کدوم کار خودشون رو انجام میدن و یکی نیستند . 

بقیه موارد هم به همین صورت انجام میشه. 

# Get(:id)

```javascript
@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ) {
    return this.appService.getRequsetWithParamAndId(type, id);
  }
}

```

در کد بالا هم `id` رو داریم و هم `type` رو داریم به عنوان پارامتر . 

کد های مربوط به بخش `app.controller.ts` به صورت زیر هست . 

که تمامی متد های که داره `return` میشه و `paramter` گرفته درون `app.services.ts` تعریف شدن . 

باز می تونید به کد های این بخش فایل `app.controller.ts` ببنید . 

```javascript
import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  HttpCode,
} from "@nestjs/common";

import { AppService } from "./app.service";
@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getRequsetWithParam(@Param("type") type: string) {
    return this.appService.getRequsetWithParam(type);
  }
  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ) {
    return this.appService.getRequsetWithParamAndId(type, id);
  }
  @Post("add-report")
  createReport(
    @Param("type") type: string,
    @Body() { amount, source }: { amount: number; source: string },
  ) {
    return this.appService.createNewReport(type, { amount, source });
  }
  @Put(":id")
  updateReport(
    @Body() body: { source: string; amount: number },
    @Param("type") type: string,
    @Param("id") id: string,
  ) {
    return this.appService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    return this.appService.deleteReport(id);
  }
}

```
# Summary 

در مورد `constracutor` صحبت کردیم . 

کد ها مربوط به لاجیک که دورن  `app.controller.ts` داشتیم به `app.services.ts` انتقال دادیم 

در واقع `app.controller = route.js in expressjs`

همینطور `app.services = controller in expressjs`

این بخش هم به پایان رسید بریم سراغ بخش بعدی که قرار هست در مورد `validation` درون `nestjs` صحبت شه . 
