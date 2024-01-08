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


# description

می خوایم یک `crud`  ساده و نحوه تعریف کردن `end point` برای `api` درون `nestjs` داشته باشیم . 


# start crud . 

بعد از نصب و ران کردن پروژه وارد فولدر `src` پروژه میشیم . 

پنج فایل با پسوند`ts` می بینیم . اما فایل های که ما می خوایم روش کار کنیم . 

فایل `app.controller.ts` هست . که درون این فایل عملیات `crud` انجام میشه . 

<img src='https://github.com/mosenn/nestjs/assets/91747908/376f0cb7-adb3-44d4-bccd-0fbd6b0ce29e' alt='crud in nestjs'> 

برای اینکه بتونیم `crud` رو انجام بدیم . 

نیاز داریم که یک سری `Decorator` رو بیایم `import` کنیم توی `nestjs` به این شکل می تونیم `crud` خودمون رو بنویسیم . 

پس اول نیاز داریم `Decorator` های مورد نظرمون رو بیایم `import` کنیم . 

به طور خلاصه `Decorator` یک تابع با پیشوند @ هستش که به هنگام صدا زدن اون تابع به طور خودکار اجرا میشه . 

اولین `Decorator`  که نیاز داریم `Controller` هست . 

```javascript
import { Controller } from "@nestjs/common";
```

کار بعدی که انجام میدیم صدا زدن `Controller` هست . 

```javascript
@Controller()
```

حالا نیاز داریم یک کلاس تعریف کنیم .  

```javascript
@Controller()
export class AppController {
}
```
زمانی که nestjs رو نصب می کنیم به صورت پیش فرض کلاس appController رو ایجاد کرده . 


حالا می خوایم یک `get requset` رو انجام بدیم , برای اینکار نیاز هست `Decorator Get` رو `import` کنیم . 

```javascript
import { Controller, Get } from "@nestjs/common";
```

حالا میایم درون `AppController` یک متد ایجاد می کنیم و از `Decorator Get` استفاده می کنیم . 
```javascript
@Controller()
export class AppController {
  @Get()
  }
```

در ادامه نیاز به یک متد داریم که مواردی رو که می خوایم `return` کنه . 

در کد زیر متد `findUsers` رو داریم که یک ارایه رو `return`  می کنه . 

```javascript
@Controller()
export class AppController {
  @Get()
  findUsers() {
    return ["all user is here"];
  }
}
```


خب حالا اگر که `localhost:3000` رو بر روی مرورگر خودمون باز کنیم . می تونیم درون صحفه `['all user is here']` رو مشاهده کنیم . 


<img src='https://github.com/mosenn/nestjs/assets/91747908/5d1ba9f7-1c52-48e3-8742-141f8a2f9e52' alt='get crud in nestjs'> 


اگر بخوایم `end point` مشخص کنیم می تونیم بیایم به خوده `Controller` یک `string` قرار بدیم که میشه همون `end point` . 



```javascript
@Controller("user")
export class AppController {
  @Get()
  findUsers() {
    return ["all user is here"];
  }
}
```
الان ادرس api ما شده `localhost:3000/user`  که در این ادرس ما می تونیم `[all user is here]` رو مشاهده کنیم . 


<img src='https://github.com/mosenn/nestjs/assets/91747908/bac62d9f-189b-4b96-b702-63b5fd0356c8' alt='get crud in nestjs with end point'> 


اگر به ادرسی بریم که دیتای وجود نداشته باشه با این صحفه روبه رو میشیم به عنوان مثال دیگه درون localhost:3000 دیتای وجود نداره.

, به این دلیل که ` end point /user ` رو تعریف کردیم . 

<img src='https://github.com/mosenn/nestjs/assets/91747908/e5ffc48b-be79-40aa-991a-76b4ba7417f2' alt='get error api nestjs'> 

# Get with id 

خب حالا اگر بخوایم که یک `Get` داشته باشیم بر اساس `id` . 

کافیه درون `Decorator Get` بیام یک `key` قرار بدیم می تونه هر اسمی داشته باشه   که در اینجا `id` رو  قرار دادیم 



```javascript
@Controller("users")
export class AppController {
  @Get()
  findUsers() {
    return ["all user is here"];
  }
  @Get(":id")
  takeSingleUser() {
    return { message: "single user" };
  }
}
```

حالا اکر به ادرس  localhost:3000/users/1 رو درون مرورگر وارد کنیم با `{"message:"single user"}` رو به رو میشیم . 


<img src='https://github.com/mosenn/nestjs/assets/91747908/1485b496-b241-4b68-b1b6-91d382ee42a1' alt='get data with id in nestjs'> 


برای موارد  `Post , Delete , Put` به همین صورت عمل می کنیم . اول نیاز هست `import` کنیم . 

```javascript
import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

```
در ادامه : 

```javascript
@Controller("users")
export class AppController {
  @Get()
  findUsers() {
    return ["all user is here"];
  }
  @Get(":id")
  takeSingleUser() {
    return { message: "single user" };
  }
  @Post("create")
  createUser() {
    return { message: "create user" };
  }
  @Put("update/:id")
  updateUser() {
    return { message: "update user" };
  }

  @Delete("delete/:id")
  deleteUser() {
    return { message: "user is deleted" };
  }
}
```

خب `Delete , Post , Put` رو اضافه کردیم . 

```javascript
  @Post("create")
  createUser() {
    return { message: "create user" };
  }
  @Put("update/:id")
  updateUser() {
    return { message: "update user" };
  }

  @Delete("delete/:id")
  deleteUser() {
    return { message: "user is deleted" };
```

نکته : دقت داشته باشید که بعد از ران کردن `server` درون `Postman` امتحان کنید `end point` های که نوشته شده رو چون درون `browser` ممکنه که درست کار نکنه . 

