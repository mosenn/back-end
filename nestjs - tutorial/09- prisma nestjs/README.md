
# swagger api doc 



swagger for prisma in nestjs

<a href='https://app.swaggerhub.com/apis-docs/RIZEMIZEEEE/prisma_nestjs/1.0.0#/default/put_user_update__id_'> swagger api doc <a>


# Prisma in NestJs




در این قسمت میخوایم prisma رو راه اندازی کنیم برای nestjs . 

البته درون داکیومنت گفته شده که چطوری prisma رو به nestjs اضافه کنیم . 

ctrl + click 😉
<br/>
<a href='https://docs.nestjs.com/recipes/prisma#set-up-prisma'> nestjs document add prisma </a>

# install nestjs 

اول از همه نیاز به ایجاد یک پروژه nestjs داریم . 

```javascript
 npm install -g @nestjs/cli
 nest new nestjsPrisma
```

**نکته** : اگر قبلا nestjs/cli رو قبلا نصب کردیم دیگه نیاز به نصب دوباره نیست .

فقط دستور nest new رو اجرا می کنیم و یک اسم برای پروژه خودمون می زاریم که اینجا اسم پروژه رو گذاشتیم nestjsPrisma . 

بعد از نصب nestjs فایل های زیر رو داریم : 

![image](https://github.com/mosenn/nestjs/assets/91747908/6cacca72-6574-40c9-a2fe-096f54c4f938)


# install prisma 

حالا با دستور زیر میایم prisma رو نصب می کنیم . 

```javascript
cd nestjs-prisma
npm install prisma
```
بعد از نصب فایل package.json رو نگاه کنیم . 

می بینیم که prisma دورن dependencies اضافه شده . 

```javascript
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "prisma": "^5.6.0",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.1"
  },
```

# add prisma 

بعد از نصب با دستورات npx می تونیم prisma رو اضافه کنیم . 

```javascript
npx prisma
```
وقتی دستور npx prisma رو بزنیم یک لیست از دستورات به ما میده که می تونیم ازشون استفاده کنیم . 

```
  Set up a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format

  Display Prisma version info
  $ prisma version

  Display Prisma debug info
  $ prisma debug

```

اولین دستوری که نیاز داریم init هستش : 

```javascript
npx prisma init
```

میاد یک prisma برای ما ایجاد می کنه . 

که بعد از زدن این دستور یک سری توضیحات درون vscode به ما میده برای راه اندازی . 

اما چیزی که مهم هست یک فولدر به اسم prisma درون پروژه اضافه میکنه . 

![image](https://github.com/mosenn/nestjs/assets/91747908/13405416-303b-4a3b-8e9c-ffe2d46ac52d)

همینطور یک فایل env. هم اضافه می کنه که درون این فایل نیاز هست ادرس دیتابیس رو وارد کنیم . 


![image](https://github.com/mosenn/nestjs/assets/91747908/8f527608-4b31-4d3f-8953-8567ecb7ddfc)

درون این env. یک  DATABASE_URL وجود داره که درونش ادرس دیتابیس رو همراه با user , password می زاریم . 

```javascript
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

در ادامه وارد فولدر prisma میشیم که ساخته شده 

![image](https://github.com/mosenn/nestjs/assets/91747908/13405416-303b-4a3b-8e9c-ffe2d46ac52d)


درون این فولدر یک فایل به اسم schema.prisma وجود داره 

![image](https://github.com/mosenn/nestjs/assets/91747908/aa9f9d7c-3a89-45f1-9e18-d429150f2991)


درون این فایل تنظیمات مربوط به دیتابیس و همینطور مدل مد نظر خودمون رو ایجاد می کنیم 

کد های که به صورت پیش فرض درون فایل schema.prisma وجود دارند به صورت زیر هستش : 

```javascript
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

به وسیله datasource db میایم دیتابیس خودمون رو ست می کنیم . 

در قسمت provider دیتابیسی که می خوایم رو ست می کنیم . 

**نکته ** : در اینجا صرفا از دیفالت خوده فایل رو مثال زدیم ولی درون کد  از mongodb استفاده کردیم . 

```
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

# Create Model 

نوبت به ساخت model میرسه . 


قبل ایجاد model حتما ادرس دیتابیس   در فایل env. ست شده باشه 

نوع دیتابیس در datasource db انتخاب شده باشه . 

در این پروژه datasource db به صورت زیر هست همونطور که بالاتر اشاره شده از mongodb استفاده می کنیم . 

```javascript
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

ادرس دیتابیس mongodb atals  رو هم درون env. گذاشتیم . 



درون فایل schema.prisma  یک model ایجاد می کنیم . 

![image](https://github.com/mosenn/nestjs/assets/91747908/456631b4-a867-4971-901f-d71c633b7669)



هدف اینکه صرفا به prisma متصل شیم و یک crud ساده باهاش داشته باشیم . 

صرفا یک مدل ایجاد می کنیم به اسم User . 

یک enum داریم برای به اسم Role که در واقع role کاربر رو مشخص می کنه . 

```javascript
enum Role {
  USER
  ADMIN
}

model User {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  email    String @unique
  role     Role
  name     String
  password String
}

```

**نکته قابل توجه:** در دیتابیس های SQL و noSQL نوع id تعریف کردن برای model prisma متفاوت هست . 

برای mongodb به صورت کد بالا تعریف میشه 

, در زیر باز می تونیم نحوه تعریف id رو برای monodb ببینیم : 

```javascript
  id      String   @id @default(auto()) @map("_id") @db.ObjectId

```

برای SQL به صورت زیر : 

```javascript
  id      Int      @id @default(autoincrement())
```

که این موارد رو درون داکیومنت prisma میشه دید با سرچ prisma model درون گوگل میشه پیدا کرد این موضوع رو . 

همینطور به طور مستقیم از لینک زیر میشه مراجعه کرد : 
ctrl + click 😉
<br/>
<a href='https://www.prisma.io/docs/concepts/components/prisma-schema/data-model'> data model in prisma</a>

**نکته:** در صورت اپدیت سایت prisma و تغییر ادرس یا ui ممکنه لینک بالا تغییر پیدا کنه  اما با سرچ prisma model در گوگل میشه بهش رسید .


# prisma generate

بعد از ساخت model ها و realtion های مورد نیازمون نوبت به  prisma generate میرسه . 

دقت داشته باشید بعد از ساخت model می تونیم  generate رو داشته باشیم . 

اگر قبل از ساخت model اینکارو انجام بدیم با ارور مواجه میشیم , میگه که نیاز به model هست . 

```
npx prisma generate

```

مدت زمانی طول میکشه و بعد از generate شدن این پیام رو درون ترمینال vscode مشاهده می کنیم : 


```
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()
```

به این منظور که می تونیم از prisma client استفاده کنیم . 

در اصل prisma clinet به ما این اجازه رو میده که از دستورات prisma یا همون queries ها استفاده کنیم . 

لیست queries های مربوط به prisma رو می تونید از لینک بخونید : 


https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries


# prisma module & prisma service

برای اینکه بتونیم از prisma استفاده کنیم نیاز داریم که prisma service و prisma module داشته باشیم . 

می تونیم در همین فولدر prisma که schema قرار داره اینکارو انجام بدیم . 

یا می تونیم فولدر های جدا ایجاد کنیم برای اینکار . 

که در این پروژه فولدر های جداگانه ای برای prisma module و prisma service ایجاد شده . 

که این فلودر ها درون src هست . 

![image](https://github.com/mosenn/nestjs/assets/91747908/986e19f2-81cb-4235-9b3a-5c2cd6f1482a)

خب حالا نوبت به ایجاد کد های prisma service هست . 


برای ایجاد prisma service نیاز به import یک سری موارد از nestjs/comman داریم .

```javascript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
```

از injectabale استفاده می کنیم

برای اینکه بتونیم از این service در جای دیگه استفاده کنیم . 

از OnModuleInit استفاده می کنیم برای اینکه به دیتابیس connect شیم 

از onModuleDestory استفاده می کنیم برای dissconnect شدن دیتابیس 

در ادامه prismaClient رو داریم . 

برای اینکه می خوایم هر جای که نیاز شد بتونیم از دستوارت prisma

استفاده کنیم نیاز به prisma clinet هم داریم . 

پس میایم import می کنیم .
```javascript
import { PrismaClient } from '@prisma/client';
```
اینجور هر موقع خواستیم کافیه PrismaService رو صدا بزنیم . 

و بعد از صدا زدن بیایم از دستورات prisma استفاده کنیم . 

در ادامه یک کلاس به اسم PrismaService ایجاد می کنیم . 

کلاس PrismaService رو export می کنیم .

```javascript
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{

}
```

گفتیم نیاز هست از Injectabale استفاده کنیم . 

هر موقع خواستیم از service یا controller در جای دیگه استفاده کنیم . 

نیاز هست از Injectabale استفاده شه . 

در درون کلاس extends  و implements رو داریم . 

وقتی extends می کنیم تمامی خصوصیات رو میگیره 

مثل این می مونه که شما یک کپی از یک فایل گرفته باشید . 

الان PrismaService که extends شده از PrismaClient . 

در اصل PrismaService شده همون PrismaClinet . 

به تمامی مواردی که درون PrismaClinet هست دستسری داره . 

انگار یک کپی گرفته شده . 

خب اینجاimplements رو داریم 

در اصل implements به ما اجازه میده از مواردی که می خوایم درون کلاس خودمون استفاده کنیم . 

که اینجا اون موارد OnModuleInit و OnModuleDestory هستند .
```javascript
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{

}
```

در کلاس بالا OnmoduleInit , OnmoduleDestory  رو داریم که در اصل به ما اجازه میدن به یک سری فانکشن درونی دسترسی داشته باشیم . 

به کد زیر نگاه کنیم : 

```javascript
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

```

در کد بالا 2 تا متد داریم یکی برای connect شدن یکی برای disconnect شدن . 

که onModuleInit برای connect شدن داره استفاده میشه 

همینطور onModuleDestory برای dissconnect شدن داره استفاده میشه 

که این onModuleInit و onModuleDestory در واقع از implements که شدهدارند میان. 

و اجازهدسترسی داریم و می تونیم استفاده کنیم. 

در متد onModuleInit کد زیر رو داریم : 

```
  async onModuleInit() {
    await this.$connect();
  }
```


در متد onModuleDestroy کد زیر رو داریم : 


```
  async onModuleDestroy() {
    await this.$disconnect();
  }
```

خب کار ما با service به اتمام رسید . 

نوب به prisma.module هست : 

![image](https://github.com/mosenn/nestjs/assets/91747908/ae643f8d-248d-4a34-b2bd-ae059ac30e62)

در prisma.module.ts میایم PrismaService که ایجاد کردیم رو import میکنیم . 

بعد از import درون providers قرار میدیم . 

فراموش نکنیم که حتما نیازهست PrismaService رو **exports** کنیم . 

کد درون prisma module : 

```javascript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

به این دلیل export می کنیم که می خوایم در جاهای دیگه 

به این prisma service دسترسی داشته باشیم . 

چون PrismaService الان در واقع PrismaClinet ما هست . 

که به متد های درونی prisma دسترسی داره .

# user 

با دستورات زیر یک فولدر به اسم user ایجاد میشه : 

```
nest g module user
nest g service user
nest g controller user
```

درون این فولدر controller , service , moudle رو داریم . 

که به وسیله دستورات بالا ایجاد شدن . 

![image](https://github.com/mosenn/nestjs/assets/91747908/fcc327ec-742f-4ed4-a91e-8ce4e9f88772)




### user.module.ts

اول از همه به سراغ user.module میریم : 

درون module user نیاز هست بیایم moudle مربوط به PrismaService رو import کنیم . 

دقت کنید درون prisma.module.ts امدیم PrismaService رو exports کردیم . 

حالا برای اینکه بتونیم درون controller , services مربوط به user بهش دسترسی داشته باشم 

نیاز هست که بیام درون user.module.ts بیام prisma.module رو import کنیم . 

اینتطور به PrismaService دسترسی داشته باشیم . 

**نکته:** module ها همیشه import میشن نه خوده service یا controller . 

```javascript
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

```

درون imports می بینیم که PrismaModule رو import کردیم . 
```
  imports: [PrismaModule],
```

الان دیگه می تونیم درون controller و services مربوط به user به PrismaService دسترسی داشته باشیم . 

### user.controller.ts

![image](https://github.com/mosenn/nestjs/assets/91747908/46aff5f1-db55-42bc-a57e-a901f62bae84)

درون user.controller میایم متد های مربوط به HTTP Requset رو مشخص می کنیم . 

یک crud میخوایم انجام بدیم مربوط به user به وسیله prisma که ایجاد کردیم . 

اول import های که نیاز داریم رو انجام میدیم : 
```javascript

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Request,
  Delete,
} from '@nestjs/common';


import { createDto } from './dto/createuser.dto';
import { UserService } from './user.service';
```



اول decorator های مورد نیازمون رو import کردیم . 

جلو تر در مورد dto و UserService صحبت می کنیم . 

فولدر dto برای ولیدیشن استفاده میشه 

و service هم برای بخش logic های مربوط به route های که داریم استفاده میشه . 


#### create dto for user 
در ادامه نیاز به یک فایل dto داریم برای ولید کردن body .

که dto در اصل مخفف Data Transfer Object هست . 

می تونیم برای مثال برای update شدن یا ساختن موارد جدید که از body ارسال میشن . 

یک ولیدیشن بنویسیم . که اینکارو به وسیله dto های که ایجاد می کنیم انجام میدیم . 

برای ساخت dto به دوتا module نیاز داریم نیاز هست نصب شون کنیم : 

```
npm i class-validator
npm i class-transformer
```

در این پروژه از ورژن های زیر استفاده شده که درون package.json  قابل مشاهده هست : 

```
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.0",
```

#### add ValidationPipe in main.ts
بعد از نصب نیاز هست که یک pip به main.ts اضافه کنیم تا بتونیم به صورت گلوبال بتوین از ValidationPipe استفاده کنیم . 

اگر درون main.ts اضافه نکنیم

نیاز هست برای هر بار استفاده از dto بیایم برای همون یدون route بیایم یدونه ValidationPipe ایجاد کنیم .

پس به صورت گلوبال درون main.ts میایم از ValidationPipe استفاده می کنیم . 

وارد main.ts میشیم : 

![image](https://github.com/mosenn/nestjs/assets/91747908/c7bb50a6-fa19-4c7c-a700-3c35ce50d6ac)


میایم ValidationPipe رو import می کنیم : 

```javascript
import { ValidationPipe } from '@nestjs/common/pipes';
```

درون فانکشن bootstrap میایم صداش می زنیم : 

```javascript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
```

این یه تیکه کد رو قبل از listen اضافه کردیم : 

```
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```
از خوده app که به وسیله nestFactory ایجاد شده استفاده کردیم . 

در قدم بدی از متد درونی خوده app به اسم useGlobalPipes استفاده کردیم . 

که متد useGlobalPipes همونطور که از اسمش پیداست

این امکان رو به ما میده که از pip های که داریم به صورت گلوبال در پروژه استفاده کنیم . 

درونش یک ValidationPipe ایجاد کردیم . 

الان می تونیم در سرتاسر پروژه از dto های که ساختیم استفاده کنیم برای هر route که هر جا هست بیایم dto ایجاد کنیم . 

##### whitelist option

خوده ValidationPipe خودش یک سری متد های درونی رو میگیره که یکی از این متد ها `whitelist:true` هست .

کار متد whitelist اینه که فقط مواردی که درون prisma.schema تعریف شده رو به ما اجازه میده ارسال شه .

به schema که برای user ایجاد کردیم نگاه کنیم تا بهتر بتونیم whitelist رو توضیح بدیم : 

```javascript
model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  password  String
  name      String
  role      Role     @default(USER)
  updatedAt DateTime @updatedAt
  createdAt DateTime @default(now())
}
```

درون model مربوط به user مواری مثل name , password , email و role رو داریم که از سمت فرانت ارسال میشه . 

حالا اگر یه مورد دیگه درون postman اضافه کنیم درون body مثلا age رو اضافه کنیم اجازه ارسال رو نمیده . 

برای این اجازه ارسال نمیده چون whitelist مقدارش true هست . 

اگر whitelist رو برداریم یا مقدارش رو false بزاریم . 

هر مقدار اضافی که در postman اضافه کنیم درون body و ارسال کنیم . ارسال میشه .. 

پس همیشه نیاز هست whitelist رو تعریف کنیم و مقدارش رو true قرار بدیم . 


# continue user.controller.ts 

خب بعد اضافه کردن PipeValdiation بر می گردیم به user.controller 

![image](https://github.com/mosenn/nestjs/assets/91747908/43943f64-69a9-482d-a85b-f8f3080b920c)


در مورد فولدر dto جلو تر صحبت می کنیم اما نصب ها و کانفیگ های که نیاز بود بالا تر انجام دادیم . 

```javascript
@Controller('user')
```

اول از همه Controller@ رو داریم که میاد مسیر api رو به طور کلی تعریف می کنه . 

یعنی الان یدون user/ به ادرس اصلی سرور ما اضافه شده 

```
localhost:3000/user
```

در ادامه یک کلاس داریم برای controller مربوط به user فرامش نشه که کلاس رو **export** کنیم : 

```javascript
@Controller('user')
export class UserController {  }
```

درون این کلاس یک constractor داریم برای تعریف user.service : 

```javascript
@Controller('user')
export class UserController {  constructor(private readonly userService: UserService) {}}
```

اینجا UserService رو تعریف کردیم . 

که در اینده تعریف میشه . 

گفتیم کار service نوشتن کدهای لاجیک مروبط به route ها هستش . 

هنوز ایجاد نشد در ادامه ایجاد میشه . 

میام درون کلاس از decorator های که import کردیم استفاده می کنیم . 

که در واقع همون HTTP method هست . 

##### Post in user.controller.ts

```javascript
  @Post('register')
  create(@Body() body: createDto) {
    return this.userService.create(body);
  }
```

در متد بالا به اسم create از Post@ استفاده کردیم برای ساخت و ایجاد یک user . 

که درون Post امدیم 'register' رو قرار دادیم که میشه ادرس api برای ساخت کاربر . 

درون Body@ برای ولدیدشن شدنش از createDto استفاده کردیم . 

که این createDto درون فولدر dto ساخته شده : 

![image](https://github.com/mosenn/nestjs/assets/91747908/b967108b-0656-4e48-bde7-246fbdd62db7)


در ادامه reutrn شده یک متد به اسم ()create که از userService امده . 

که درونش body پاس داده شده توسط فرانت داره ارسال میشه . 

```javascript
  create(@Body() body: createDto) {
    return this.userService.create(body);
  }
```

که درون service این body در دیتابیس ذخیره خواهد شد به وسیله کد های که نوشته میشه  . 


ادرس api ما برای ساخت کاربر به صورت زیر میشه : 

```
localhost:3000/user/register
```

##### Get in user.controller.ts 

یک متد برای گرفتن تمامی کاربر ها داریم درون کلاس UserController . 

اسم این متد ()users هست . 


```javascript
  @Get()
  users() {
    return this.userService.users();
  }
  ```

که در اصل تمامی متد ها return می کنند یک متد دیگه رو که درون userService تعریف شده . 

که بعد از controller به سراغش میریم . 
ادرس api به صورت زیر میشه : 


```
localhost:3000/user
```
چون درون get ادرسی تعریف نکردیم به صورت کلی همین user میشه که درون controller@ تعریف کردیم .


##### Get single user in user.controller.ts 

برای گرفتن یک user نیاز داریم به id کاربر . 

که این id رو به وسیله param گرفتیم . 

درون ()Get@ یک 'id:' تعریف کردیم در واقع یک param هست که از url میاد . 

در ادامه یک متد داریم به اسم ()user  که درونش از Param@ استفاده کردیم . 

که این Param داره id رو میگیره که بهش درون url پاس دادیم . 

نوع id رو هم string قرار دادیم . 
```javacript
  @Get('/:id')
  user(@Param('id') id: string) {
    return this.userService.user(id);
  }
```

در نهایت مثل متد های قبلی reutrn می کنه یک متد دیگه رو به اسم ()user. 

که این متد دیگه درون userService تعریف شده . 

با این تفاوت که داریم id رو به این متدی که درون userSErvice هست پاس میدیم که بعدا درون UserService در متد user از این ایدی استفاده می کنیم 

برای query زدن به کاربری که مد نظرمون هستش . 

ادرس api ما به صورت زیر میشه : 

```
localhost:3000/user/:id
```

که به جای id: نیاز هست ایدی کاربر مد نظرمون رو قرار بدیم . 


##### Put  in user.controller.ts 

از ()Put@ برای اپدیت شدن استفاده می کنیم . 

برا اپدیت شدن نیاز به id کاربر داریم . 

که id رو به وسیله Param گرفتیم . 
```javascript
  @Put('update/:id')
  update(@Param('id') id: string, @Request() req) {
    return this.userService.update(req.body, id);
  }
```

در ادامه نیاز به body هم داریم که از سمت فرانت میاد . 

مقداری که قرار هست اپدیت شه . 

در نهایت return رو داریم که داره متد update رو برگشت میده 

که این ()update یک متد هست درون service هست . 

که id و req.body رو گرفته . 

**نکته:** برای اپدیت نیاز هست که از متد requset استفاده کنیم

برای اپدیت تمامی فیلد ها اینکار در اینجا برای اپدیت Role صورت گرفته 

```
 @Request() req
```

بدون Requset اپدیت Role مربوط به user صورت نمی گرفت . 



#####  Delete in user.controller.ts 

برای جذف کردن دیتا از delete@ استفاده می کنیم . 

همینطور برای حذف کردن نیاز به id داریم . 



```javascript
  @Delete('delete/:id')
  Userdeleted(@Param('id') id: string) {
    return this.userService.Userdeleted(id);
  }
```
در ادامه متد ()UserDeleted رو داریم  return می کنیم 

که id رو داریم از param می گیریم و پاس میدیم به متد ()UserDeleted . 

به وسیله id میایم کاربر مد نظر مون رو جذف می کنیم . 

خب user.controller.ts به اتمام رسید بریم سراغ درست کردن فایل dto . 

# dto file 

یک فولدر داریم به اسم dto . 

هر ماژول که ایجاد می کنیم با توجه به نیاز می تونه یک فایل dto داشته باشه . 

برای ماژول user دو تا dto تعریف کردیم :

![image](https://github.com/mosenn/nestjs/assets/91747908/c19cb9cf-41d6-4736-93e8-aa134f8a80d2)

یکی برای ساخت user و یکی برای update user . 

**یاداوری : برای استفاده از dto نیاز بود که 2 تا پکیج نصب کنیم . 
یکی class-validator و class-transformer . همینطور نیاز بود که به main.ts بیایم new ValdationPipe رو اضافه کنیم به صورت گلوبال**


### createuser dto

خب بریم به فایل createuserDto : 

![image](https://github.com/mosenn/nestjs/assets/91747908/751e8b03-b3ac-4e26-b93b-bf4bcc30c0eb)


همونطور که از اسمش پیداست برای ساختن کاربر یک dto ساختیم . 

که میاد body مربوط به ایجاد کاربر رو ولید می کنه . 

از `class-validator` که قبلا نصب کردیم میایم موارد رو با توجه به نیازمون import می کنیم 

```javascript
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
```

در ادامه به Role هم نیاز داریم که از prisma clinet می تونیم بهش دسترسی داشته باشیم . 

این Role یک enum هست که در shcema.prisma تعریف شده . 

```javascript
import { Role } from '@prisma/client';
```

در ادامه یک کلاس داریم به اسم createDto که این کلاس رو میایم export  می کنیم . 

```javascript
export class createDto {
  role: Role;
  @IsString()
  name: string;
  @IsString()
  @IsNotEmpty({ message: 'set  email' })
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty({ message: 'set  password' })
  password: string;
}
```

به وسیله decorator های که از `class-validator` امدیم import کردیم ولدیدشن خودمون رو انجام دادیم . 

**نکته: برای بعضی مثل IsNotEmpty می تونیم یک message تعریف کنیم اما فقط برای اونای که option message رو دارند**

حالا از این createDto داخل user.controller.ts ازش استفاده می کنیم برای body که میاد ولیدیشن رو انجام میده . 

که یه بار دیگه کد ساختن user رو نگاه کنیم که درون user.controller هست تا متوجه استفاده از createDto بشیم . 

```javascript
  @Post('register')
  create(@Body() body: createDto) {
    return this.userService.create(body);
  }
```

### update dto


![image](https://github.com/mosenn/nestjs/assets/91747908/0038b48a-f301-461c-91eb-ef3812833132)

فایل updateUser.dto.ts هم مثل createuserDto هست با این تفاوت که برای update شدن استفاده میشه  

چون صرفا مقادیرش متفاوت هست تا حد کمی . 

**نکته: هر فایل dto می تونه با توجه به نیاز ساخته و ولید شه**

کد ها شو نگاه کنیم : 

```javascript

import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from '@prisma/client';
export class updateUserDto {
  role: Role;
  @IsString()
  name: string;
  @IsString()
  @IsNotEmpty({ message: 'set  email' })
  @IsEmail()
  email: string;
}

```

درون user.service.ts برای اپدیت شدن ازش استفاده می کنیم . 

```javascript
  async update(body: updateUserDto, id: string) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { name: body.name, email: body.email, role: body.role },
    });
```
اگر دقت  کنید برای  body تعریف شده.

الان وقتی requset از سمت فرانت به سمت بک اند میاد . 

اینجا ولیدیشن با توجه به updateUserDto چک میشه .

اگر موردی باشه به صورت یک ابجکت درون postman خواهیم داشت . که حاوی message هستش و میگه ارور ها رو . 


# user.service.ts 

خب جای که لاجیک های مروبط به user کنترل میشه به وسیله متد های که ایجاد میشه . 

و این متد های ایجاد شده درون user.controller.ts استفاده میشن . 

الان می خوایم بریم سراغ service . 

![image](https://github.com/mosenn/nestjs/assets/91747908/98a8b7dd-f828-479f-8757-6c17223e6b3e)


ایمپورت های که درون service داریم به صورت زیر هستش : 

```javascript
import { Injectable, NotFoundException } from '@nestjs/common';
import { createDto } from './dto/createuser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';
import { updateUserDto } from './dto/updateUser.dto';
```
که هر دو تا dto رو داریم . 

همینطور Role رو داریم . 

مهم تر از همه PrismaService رو داریم که ایجاد کردیم برای کار با متد های prisma . 

و NotFoundException که در واقع یک ارور ایجاد می کنه برای ما . 

درون nestjs یک سری   exception filters داریم که می تونیم ازشون استفاده کنیم . 

می تونید از لینک زیر که مربوط به داکیومنت nestjs هست 

در مورد exception های درون nestjs اطلاعات بیشتری کسب کنید .  
ctrl + click 😉
<br/>
<a href='https://docs.nestjs.com/exception-filters'> nestjs exception filters</a>


درون user.service.ts یک کلاس داریم : 



```javascript

@Injectable()
export class UserService { } 
```

یک constractor داریم که درون این constractor امدیم PrismaService رو قرار دادیم . 


```javascript

@Injectable()
export class UserService {   constructor(private readonly prismaService: PrismaService) {}} 
```

**یاداوری : در واقع الان PrismaService همون PrismaClinet هستش که الان به وسیله PrismaService می توینم به  queries های prisma دسترسی داشته باشیم**

از لینک زیر می تونید درون داکیومنت prisma لیست queries و نحوه استفاده اونها رو ببنید : 

ctrl + click 😉
<br/>
<a href="https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries"> prisma queries </a> 



درون کلاس که تعریف کردیم میایم متد هامون رو می نویسیم . 

**دقت کنید تمامی متد ها درون کلا UserService تعریف شدن**

که درون این متد ها میایم از queries های prisma استفاده می کنیم . 



#### Create User in user.service

```javascript
  async create(body: createDto) {
    const createUser = await this.prismaService.user.create({
      data: { ...body, role: Role.USER },
    });
    console.log(createUser);
    return { message: 'user is created', createUser };
  }
```

خب در کد بالا متد create رو داریم که برای ایجاد کاربر استفاده میشه . 

داره body رو دریافت می کنه این دریافت body از داخل controller میاد . 

**یاداوری : تمامی این متد ها درون user.controller.ts استفاده شدن**

ولیدیشن به وسیله createDto انجام شده . 

از this.prismaService استفاده کردیم و model user که ساختیم رو صدا زدیم 

```javascript
    const createUser = await this.prismaService.user.create({
      data: { ...body, role: Role.USER },
    });
```

در ادامه data رو داریم و body رو که به سمت دیتابیس ارسال کردیم . 

همینطور role رو داریم که به صورت دیفالت روی USER تنظیم کردیم تمامی کاربر هارو . 

تغییر Role رو بعدا اگر خواستیم داخل update انجام میدیم به ADMIN تبدیل می کنیم . 

اما به طور پیش فرض تمامی کاربر ها USER هستند . 

در نهایت return رو داریم : 
```
 return { message: 'user is created', createUser };
```

یک بار دیگه method create رو با هم دیگه ببینیم : 

```javascript
  async create(body: createDto) {
    const createUser = await this.prismaService.user.create({
      data: { ...body, role: Role.USER },
    });
    console.log(createUser);
    return { message: 'user is created', createUser };
  }
```

#### Get Users in user.service

```javascript
  async users() {
    const users = await this.prismaService.user.findMany();
    return { message: 'all user is here', users };
  }
```

گرفتن تمامی کاربر ها رو داریم به وسیله مد users . 

این از  `findMany` برای اینکار استفاده کردایم که یکی از querie های مربوط به prisma هست . 

```javascript
const users = await this.prismaService.user.findMany();
```

که یکی از querie های prisma هست . 

در نهایت یک return داریم حاوی object که یک message و دیتای مربوط کاربرها رو برگشت میده . 

```javascript
return { message: 'all user is here', users };
```


#### Get Single User in user.service

```javascript
  async user(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) {
      const NotFoundUser = new NotFoundException(
        'this user is not exist in data base',
      );
      //   if wanna return full object just return new NotFoundException
      return NotFoundUser.message;
    }
    return { message: 'user with Id', user };
  }
```


به وسیله id کاربر امدیم صرفا یک user رو گرفتیم . 

این ایدی به وسیله params گرفته شده درون user.controller.ts . 

که به متد user اینجا پاس داده شده . 

به وسیله  querie به اسم `findUnique` این کارو انجام میدیم . 

```javascript
const user = await this.prismaService.user.findUnique({ where: { id } });
```

که این findUnique یک object درونی داره . 

که درون این ابجکت می تونیم از کلید `where` استفاده کنیم . 

که خوده where یک object هست و درونش مقداری که می خوایم بر اساسش find انجام شه قرار میدیم . 

در ادامه یک if داریم که اگر user مورد نظر پیدا نشد به وسیله اون id . 

بیاد یک exception برای ما برگشت بده که فرانت بتونه از این اررور استفاده کنه اگر خواست 

```
    if (!user) {
      const NotFoundUser = new NotFoundException(
        'this user is not exist in data base',
      );
      //   if wanna return full object just return new NotFoundException
      return NotFoundUser.message;
    }
```

که در کل یک ابجکت برگشت میده که صرفا در کد بالا گفتیم از داخل اون object فقط بیاد message رو بفرسته به فرانت .


در ادامه  return رو داریم که user که به وسیله id پیدا کرده برگشت میده . 

```javascript
    return { message: 'user with Id', user };
```


#### update User in user.service

```javascript
  async update(body: updateUserDto, id: string) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { name: body.name, email: body.email, role: body.role },
    });

    return { message: 'user is updated', user };
  }
```

متد update رو داریم که هم نیاز به id و body هست . 

که id رو داره به وسیله param میگیره از داخل user.controller.ts میاد . 

و دیتا body رو هم که فرانت اند ارسال می کنه . که این body هم از داخل user.controller داره پاس داده میشه به متد update . 

به وسیله querie  به اسم `update` که از prismaService میاد . 

میایم فیلد مورد نظرمون رو update می کنیم . 

درون update هم یک ابجکت داریم . 

```javascript
    const user = await this.prismaService.user.update({
      where: { id },
      data: { name: body.name, email: body.email, role: body.role },
    });
```

درون ابجکت data , where رو داریم . 

که where میاد به وسیله id دیتای که می خوایم اپدیت کنیم رو پیدا می کنیم . 

در ادامه data که می خوایم تغییرات روش اعمال شه رو دارم که همون body هست که از سمت فرانت میاد . 

در نهایت return رو داریم که دیتای که اپدیت شده رو ارسال می کنیم به سمت فرانت اند .


```javascript
 return { message: 'user is updated', user };
```

#### delete User in user.service

```javascript
  async Userdeleted(id: string) {
    const user = await this.prismaService.user.delete({ where: { id } });
    return { message: 'user is deleted', user };
  }
```

برای اینکه بتونیم کاربر رو حذف کنیم نیاز به id کاربر داریم . 

که id کاربر به وسیله param گرفته شده درون user.controller.ts و به متد delete پاس داده شده . 

به وسیله `delete` که یکی دیگه از querie های perisma هست میام حذف رو انجام میدیم . 

درون delete یک ابجکت داریم که درون ابجکت where رو داریم که id کاربر گرفته . 

```javascript
    const user = await this.prismaService.user.delete({ where: { id } });

```

کاربری که می خوایم حذف کنیم به وسیله where پیدا می کنه در نهایت حذفش می کنه . 


در نهایت return رو داریم که یک ابجکت سمت فرانت اند ارسال می کنه که حاوی message و مشخصات کاربری هست که delete شده . 


بریم سراغ prisma studio . 

# prisma studio 

خوده prisma یک محیط شبیه سازی مثل دیتابیس داره که می تونیم روی لوکال باهاش کار کنیم . 

دیتاهای مربوط به model های مختلفی که داریم رو ببنیم . 

حتی به صورت دستی بیام دیتا هارو حذف کنیم یا اضافه کنیم همینطور اپدیت کنیم . 

دقیقا انگار یک دیتابیس . 

**نکته: برای اینکه بتونیم prisma studio رو ران کنیم و به مشکل نخوریم نیاز هست که حتما model ساخته باشیم و ترجیحا genereate کرده باشیم prisma رو**


داخل ترمینال خودمون کافیه دستور زیر رو وارد کنیم تا prisma studio بیاد بالا . 

```
npx prisma studio
```

بعد از زدن دستور روی یک port local برای ما prisma studio میاد بالا . 


![image](https://github.com/mosenn/nestjs/assets/91747908/5c21e09e-e128-4a73-888f-fca4df6f1fc6)

در ادامه اگر وارد port شده صحفه زیر رو می تونیم ببینم که محیط prisma studio هستش : 



![image](https://github.com/mosenn/nestjs/assets/91747908/0e1572b5-e803-4b50-9ed2-7bb6548b3a5a)


خب حالا می تونیم روی mode user کلیک کنیم واردش شیم و ببنیم مدل خودمون رو . 

![image](https://github.com/mosenn/nestjs/assets/91747908/5e454cf5-5ba8-4998-b936-3075bff99717)


اینجا می تونیم هر فیلدی رو که خواستیم update کنیم یا delete کنیم یا حتی یک فیلد جدید اضافه کنیم . 



# end 

<h1 align="center">   prisma in nestjs  پایان داکیومنت</h1>

