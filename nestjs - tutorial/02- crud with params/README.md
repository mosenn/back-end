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

app is runing at localhost:3000

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

# crud with params 

در `simpel crud` صرفا یک سری end point ساده نوشتیم برای اینکه با نحوه کار nestjs اشنا شیم . 

در این بخش می خوایم یک فایل data.ts ایجاد کنیم . 

در نهایت بیایم عملیات `crud`  رو داشته باشیم . 

منتها با `Param@` و `Body@` اشنا میشیم . 

# data.ts 

فایل data.ts  درون فولدر `src` ایجاد می کنیم : 



<img src='https://github.com/mosenn/nestjs/assets/91747908/34740435-597d-44bb-9ba7-257e2fc609bb' alt='crud in nestjs' />


درون data.ts یک دیتای ایجاد کردیم : 

این Data در واقع یک `interface` هست . 
```javascript
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
```

```javascript
export const data: Data = {
  report: [
    {
      id: "1",
      source: "salary",
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: "2",
      source: "web",
      amount: 7000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },

    {
      id: "3",
      source: "backend",
      amount: 7200,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
```

این دیتای ما در واقع یک ابجکت هست که درونش یک ارایه به اسم `report` داریم . 

که حاوی یک سری اطلاعات هست . و که یکی از این مقادیر type هست . 

این type از یک `enum` داره خونده میشه : 

```javascript
export enum ReportType {
  INCOME = "income",
  EXPENSE = "expense",
}
```

**نکته:** خوده `nestjs` با `typescript` کار می کنه نیاز هست برای دیتا های که تعریف می کنیم تایپ مشخص کنیم . 

**نکته:** هم خوده `enum` رو `export` کردیم هم خوده `data.ts` رو امدیم `export` کردیم . از هر دو می خوایم درون کنترلر استفاده کنیم . 

خب فایل دیتای خودمون رو ایجاد کردیم و می خوایم براش `crud` بنویسیم . 


# start crud with params 

وارد `app.controllers.ts` میشیم . 



<img src='https://github.com/mosenn/nestjs/assets/91747908/afad5085-dc14-4fad-95c6-89ffed9826de' alt='nestjs controllers' />

میایم `decorator`  های مورد نیاز خودمون رو `import` می کنیم  از `nestjs/common@` 

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
  NotFoundException,
} from "@nestjs/common";
```

چند مورد جدید داریم مثل `Param` که برای گرفتن `parameter` استفاده میشه . 

مورد بعدی `Body` هست که برای گرفتن `body` که از سمت کلاینت ارسال میشه استفاده میشه . 

با `HttpCode` می تونیم `status code` مشخص کنیم . 

و در نهایت `NotFoundException` رو داریم که  می تونیم برای مواردی که پیدا نمیشن بیایم یک ارور ایجاد کنیم. 

با بقیه موارد هم که در `simpel crud` که بخش اول بود اشنا شدیم . 

خب یک فایل data.ts داشتیم میایم اونو هم `import` می کنیم . 

```javascript
import { data, ReportType } from "./data";
```

گفتیم هر یک از ابچکت های یک type دارند که از `enum` خونده میشند . `ReportType` در اصل حاوی دو نوع تایپ ما هستند . 

که می خوایم این تایپ ها رو به عنوان `Param` استفاده کنیم . 

یک پکیج نصب داریم به اسم `uuid` که برای ساخت `uniq id` استفاده میشه . 

بعد از نصب میایم این پکیج رو هم `import` می کنیم . 

```javascript
import { v4 as uuid } from "uuid";
```

# Controller

نوبت به ساخت `Controller` میرسه : 

```
@Controller("report/:type") 
```

که اینجا ادرس ما شده `report/:type` که این ادرس کلی تمای `end point` های ما هست . 

یعنی اگر تایپ مشخص نباشه برای هر `end point` . اون method مد نظر ما کار نخواهد کرد . 

و `type:` در اصل `Param` هست که می خوایم روش کار کنیم . 

## Get

اگر بخوایم `get` رو داشته باشیم نیاز هست بیایم `type` رو هم داشته باشیم . 

برای `Controller` خودمون تعریف کردیم که حتما `type:` رو به عنوان `Param` داشته باشه . 

میایم به صورت زیر عمل می کنیم : 

```javascript
@Get()
getRequsetWithParam(@Param("type") type:string) {
const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

}
```
در قدم اول `parameter` که درون `url` ادرس `api` پاس داده میشه رو گرفتیم 

به وسیله `Param("type")@` در ادامه  یک `condition` داریم . 

که در این `condition`  گفتیم اگر تایپ که درون `url` با `income` برابر بود . 

بیاد تایپ `INCOME` رو برگشت بده و اگر هر چیز دیگری وارد شد و `income` نبود 

بیاد تایپ `EXPENSE` رو برگشت بده . 


خب بریم که متد `getResponseWithParam` رو تکمیل کنیم . 

میایم از `filter` استفاده می کنیم  برای اینکه بیایم دیتا ها رو بگیریم بر اساس `type` . 

```javascript
  @Get()
  getRequsetWithParam(@Param("type") type: string) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report.filter((report) => {
      return report.type == reportType;
    });
  }
```
خب الان اگر که وارد `Postman` شیم و ادرس `http://localhost:3000/report/income`

دیتا های که تایپ شون `income` هست رو به ما میده  . 



<img src='https://github.com/mosenn/nestjs/assets/91747908/2348a1ca-0600-47dd-820d-7f2f78a852ea' alt='params in nestjs'/>


و اگر به جای `income` هر چیزه دیگه ای وارد کنیم `http://localhost:3000/report/sometingelse` به عنوان `parameter` 

دیتا های که تایپشون `expense` هست رو خواهیم داشت .

<img src='https://github.com/mosenn/nestjs/assets/91747908/31d51be1-8794-4849-9796-701ee73ad634' alt='params in nestjs'/>



خب متد get رو نوشتیم و تموم شد بریم سراغ بقیه متد ها . 


## Get("id") 

اگر بخوایم یک دیتا رو بر اساس `id` داشته باشیم . 

در واقع الان 2 تا `parameter` داریم یکی `id` یکی `type` به صورت زیر عمل می کنیم : 

```javascript
  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ) {}
```
در کد بالا درون `Get` امدیم `id` رو قرار دادیم . 

که بتونیم دیتا های رو بر اساس ایدی شون داشته باشیم . در اصل یک پارامتر دیگه پاس دادیم . 

که این ایدی به همراه تایپ در ادرس `api` زده میشه  . 

اگر که اید وارد شده و دیتای وارد شده درست باشند دیتا مد نظر رو می تونیم ببینیم . 

نکته ای که وجود داره 2 تا `Param@` استفاده کردیم یکی `id` یکی `type` . 

```javascript
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  )
```


بریم که متد `getRequsetWithParamWithID` رو کامل کنیم : 

```
  @Get(":id")
  getRequsetWithParamWithID(
    @Param("type") type: string,
    @Param("id")
    id: string,
  ) {
    console.log("type", type);
    console.log("id", id);

    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => {
        return report.type == reportType;
      })
      .find((report) => report.id === id);
  }
```


خب 2 تا لاگ داریم که در واقع میان id که وارد شده و type که وارد میشه رو به ما لاگ میدن . 

در ادامه باز `condition` رو داریم که این `condition` رو در اکثر متد ها داریم , 

که میاد تایپ رو مشخص می کنه  و دیگه در موردش صحبت نی می کنیم از این به بعد .  


یک متد `filter` داریم که داره بر اساس `type` وارد شده در  ادرس `api` دیتا ها ی ما رو `filter` می کنه و یک ارایه برگشت میشده . 

اما در ادامه یک `find` داریم که بر اساس ایدی وارد شده میاد یک دیتا رو با همون ایدی به ما برگشت میده . 

ادر api که وارد میشه حاوی 2 تا پارامتر هست به این شکل `http://localhost:3000/report/income/2` . 

توجه داشته باشید اگر هر چیزی به غیر از `income` بزنیم دیتای `expense` برگشت داده میشه به شرطی که اون ایدی وجود داشته باشه . 

به این صورت : `http://localhost:3000/report/test/3` عدد 3 میشه ایدی ما و `test` رو جای `income` نوشتیم  . 

که هر چیزی به جز `income` قرار بدیم دیتای که تایپ اش `expense` هست به ما برگشت میده . 

<img src ='https://github.com/mosenn/nestjs/assets/91747908/5c87b746-fbbf-470f-8f54-7260ac8010f1' alt='parmas in nestjs' />

بریم سراغ متد بعدی . 

# Post 

با متد `Post@` می تونیم بیایم یک دیتای جدید ایجاد کنیم . 

اما اینجا هم نیاز هست که `type` رو داشته باشیم . 

به این دلیل که درون `Controller@` ادرس `report/:type` رو مشخص کردیم که برای تمامی متد ها اعمال میشن . 

از طرفی هر دیتا ما یک `id` داره که بر اساس اون ایدی می تونیم `("id:")Get@` کنیم یا `("id:")Update(":id")` , `@Delete@` رو داشته باشیم . 

پس وقتی می خوایم یک دیتای جدید ایجاد کنیم نیاز هست یک ایدی براش قرار بدیم . 

که به وسیله پکیج `uuid` میایم اینکارو انجام میدیم که قبلا نصب کردیم و `import` کردیم .
```javascript
@Post("add-report")
createReport(@Param("type") type string, @Body {amount , source} : {amount:number; source:string}) {}
```

خب متد `Post@` رو داریم که درونش یک `add-report` قرار گرفته . 

که در اصل میشه `end point` مربوط به ساخت یک دیتای جدید 

ادرس api برای ساخت به این صورت میشه : `http://localhost:3000/report/income/add-report` . 

که اگر دقت کنید اول `type` قرار داره در ادامه `end point add-report` .

2 تا وردی داره متد `createReport` 

اولیش که `Param@` مربوط به `type` هست . 

دومی  `Body@` هست  که در اصل مقادیر مروبط به `body` که از سمت کلاینت 

میاد رو میگیره که اینجا صرفا amount , source هست . 

از اونجای که `nestjs` با `typescript` کار می کنه 

نوع تایپ amount , source  مشصخ شده . 


بریم متد `createReport` رو کامل ببینیم : 

```javascript
  @Post("add-report")
  createReport(
    @Param("type") type: string,
    @Body() { amount, source }: { amount: number; source: string },
  ) {
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
```
خب `condition` رو داریم که باهاش اشنا هستید . 

بعدش یک ابجکت جدید داریم به اسم `newReport` که داره داده های جدید 

رو درون خودش ذخیره می کنه `source ` , `amount` . 

که هر دون دارن از `Body@` گرفته میشن از اونجای که اسم `key` , `value` ها یکی هست جاوااسکریپت این موضوع رو متوجه میشه . 

و کافیه یک بار نوشته شه . 

نیاز به اینجور نوشتن **نیست** : 
 ```javascript
 source:source,
 amount:amount,
```

بعد از اینکه ابجکت `newReport` رو ایجاد کردیم یک `push` داریم که ابجکتی که ایجاد کردیم رو 

داریم به ارایه `report` درون `data` پوش می کنیم . به این صورت : 

```javascript
data.report.push(newReport);
```

در اخر داریم `return` می کنیم ابجکت جدیدی رو که ساختیم به عنوان `result` بتونیم درون `Postman` ببنیم . 

```javascript
    return newReport;
```

بریم سراغ `update` کردن دیتا .

## Put 

برای اپدیت کردن هم نیاز به `id` و تایپ داریم که داریم به وسیله `Param@` می گیریم . 

البته `Body@` رو هم داریم که مقادیر جدید اون دیتا رو میگیره . 


```javascript
  @Put(":id")
  updateReport(
    @Body() body: { source: string; amount: number },
    @Param("type") type: string,
    @Param("id") id: string,
  ) {}
```

اون `condition` معروف هم داریم براش مشخص شدن تایپ . 

```javascript
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

```
برای اپدیت کردن از `map` استفاده کردیم : 

```javascript
    const updatedReport = data.report.map((report) => {
      if (report.id === id && report.type === reportType) {
        return { ...report, ...body };
      }
      return report;
    });
```

متد `updateReport` به طور کامل : 

```
  updateReport(
    @Body() body: { source: string; amount: number },
    @Param("type") type: string,
    @Param("id") id: string,
  ) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const updatedReport = data.report.map((report) => {
      if (report.id === id && report.type === reportType) {
        return { ...report, ...body };
      }
      return report;
    });

    data.report = updatedReport;
    return updatedReport.find((report) => report.id === id);
  }
```

مقادیری که اپدیت شده رو به عنوان `result` درون `Postman` نشون میدیم . 
```javascript
    return updatedReport.find((report) => report.id === id);
```
ادرس `api` برای `update` کردن به این صورت میشه `http://localhost:3000/report/income/1` 

که عدد `1` ایدی ما هست . `income` هم که نوع `type` ما هستش . 



## Delete 

برای `Delete` هم نیاز به `id` داریم . 

```javascript
  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    const reportToDelete = data.report.find((report) => report.id === id);

    if (!reportToDelete) {
      throw new NotFoundException(`Report with ID ${id}  not found.`);
    }

    data.report = data.report.filter((report) => report.id !== id);

    return { deletedReport: reportToDelete };
  }
```

که `id` رو به عنوان `parameter` نیاز هست که پاس بدیم . 

ادرس `api` ما به این صورت میشه : `http://localhost:3000/report/income/2ba7f2d9-823f-4c69-a13d-05f7e5a65231`

برای پاک کردن از متد `find` استفاده کردیم برای اینکه مطمئن شیم `id` وارد شده وجود داره در دیتای ما . 

اگر وجود نداشت که یک ارور ایجاد کردیم . 

اگر وجود داشت به وسیله `filter` امدیم دیتای مد نظر مون رو پاک کردیم .
2 مورد جدید اینجا استفاده شده . 

اولی `HttpCode(204)@` هست که می تونیم ` status code` تعریف کنیم 

الان اگر `delete` با موفقیت انجام شه به جای `status code 200` به ما `status code 204` رو خواهد داد . 



مورد دوم `NotFoundException` هستش که اگر `id` دیتای مورد نظر اشتباه باشه یا کلا نباشه 

میاد اروری که ایجاد کردیم رو به عنوان `response` نشون میده به همراه `status code 404`

## sumery 

در این بخش با `Body@` اشنا شدیم که در واقع `body` رو از سمت کلاینت مگیره . 

کار با `Param@` اشنا شدیم اینکه یک یا چند `Param@` داشته باشیم که کارش گرفتن `paramter url`  هست . 

یک `crud` کامل انجام دادیم . 

با `HttpCode(204)@` اشنا شدیم که برای ست کردن `status code` هست . 

با ``NotFoundException`` اشنا شدیم که می تونیم باهاش ارور ایجاد کنیم برای چیزای که پیدا نمیشن یا اشتباه هستند .
