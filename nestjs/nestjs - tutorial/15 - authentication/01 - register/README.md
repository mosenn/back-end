# register

در بخش می خوایم مراحل register user رو با هم داشته باشیم درون nestjs . 

ترمینال vscode رو باز می کنیم دستوارت زیر وارد می کنیم تا یک module جدید برای ما ساخته شه به اسم auth . 

درون این moudle auth میایم مراحل register کاربر رو انجام میدیم . 

```
nest g module auth
```

```
nest g service auth
```
```
nest g controller auth
```
بعد از اینکه دستورات رو وارد کردیم یک فولدر به اسم auth برای ما درون پروژه اضافه میشه : 


<img src='https://github.com/mosenn/nestjs/assets/91747908/0ba52256-37f5-4fa1-8e93-f72b10547042' alt='nestjs authentication'/>


# auth folder

درون این auth folder فایل های که ایجاد کردیم رو دار که 3 تا فایل هستند . 
<img src='https://github.com/mosenn/nestjs/assets/91747908/00acbe95-9058-48ea-aa48-0bc48b0a4e7a' alt='nestjs authentication' />


## auth dto

<img src='https://github.com/mosenn/nestjs/assets/91747908/78e2c4e0-4b39-4897-bbb7-b8ea88e585fa' alt='nestjs authentication'/>

خب یک فایل dto هم داریم که درونش امدیم نوع تایپ های که قرار هست به عنوان body از سمت فرانت اند ارسال شه رو مشخص کردیم به وسیله `class-validator` . 

هیمنطور به Role هم طبعا نیاز داریم که یک enum هست درون schema.prisma .

یک class به اسم authUser داریم و export کردیم . 
```javascript
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Role } from '@prisma/client';
export class authUser {
  role: Role;
  @IsString()
  @IsNotEmpty()
  name: String;
  @IsString()
  @IsNotEmpty()
  password: String;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: String;
}
```


## auth controller

<img src='https://github.com/mosenn/nestjs/assets/91747908/b8cd0816-6ddc-4420-8fa0-1f1dc12eac86' alt='nestjs authentication'>

اول به import های که داریم نگاه کنیم : 

```javascript
import { AuthService } from './auth.service';
import { authUser } from './dto/createUser.dto';
import { Controller, Post, Body } from '@nestjs/common';
```
درون auth.controller.ts یک route از نوع Post@ داریم . 

```javascript
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  createUser(@Body() body: authUser) {
    return this.authService.createUser(body);
  }
}
```

که ادرس کلی ما درون controller مشخص کردیم که `auth` هست در ادامه یک constractor داریم که `AuthService` رو در بر گرفته . 

متد `Post@` رو داریم که درونش register/ قرار گرفته در واقع ادرس ثبت نام کاربر ما الان شده : 

```
http://localhost:3000/auth/register
```
در ادامه CreateUser رو داریم که decorator @Body رو گرفته که این اشاره می کنه به مقداری که فرانت اند به عنوان body ارسال میکنه . 

نوع تایپ شو برابر با dto که ساختیم قرار دادیم که authUser هستش در ادامه یک return داریم درون CreateUser که از `authService` متد createUser رو صدا می زنه 

و همینطور body رو گرفته که مقادیر ارسالی از سمت فرانت هست . 
## auth service

<img src='https://github.com/mosenn/nestjs/assets/91747908/210060b1-bafb-48df-b207-df18c57785e6' alt='nestjs authentication'>

اول import ها : 

```javascript
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
```
از bcrypt برای hash کردن پسورد استفاده می کنیم .

**نکته : هر چیز مهمی رو می تونیم hash کنیم . hash کردن پسورد یکی از دلیل هاش اگر database یک زمانی هک شد پسورد ها تا حدی در امان باشند و رمزگذاری شده باشند**

نیاز به Role داریم که از درون schema.prisma داره میاد که موقع ساخت user باید role رو از Role بگیریم و قرار بدیم به عنوان role کاربر . 

در ادامه PrismaService رو داریم که می تونیم به متد های prisma دسترسی داشته باشیم برای  ساخت کاربر . 

در ادامه class AuthService رو داریم که export شده , برای این که درون auth.module.ts استفاده شده به عنوان provider . 

یک constructor داریم که درونش PrismaService رو داریم که بتونیم از متد های prisma استفاده کنیم .

**نکته : حتما نیاز هست که prisma.module.ts درون auth.module.ts بیاد imports شه که بتونیم از PrismaService استفاده کنیم درون AuthService که جلو تر بررسی می کنیم**

```javascript
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
}
```
### createUser method


```javascript
  async createUser(data) {
    const hashPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: hashPassword,
        role: Role.USER,
      },
      select: { name: true, id: true, email: true },
    });
    return user;
  }
```

درون AuthService یک متد داریم به اسم createUser که اطلاعاتی که از body میاد رو درون database به وسیله متد create مربوط به prisma میاد ذخیره میکنه 

نوع method createUser که داریم از نوع async هست که data که گرفته در واقع body هست که در auth.controller.ts داره بهش پای داده میشه . 

برای اینکه بتونیم hash کردن password رو داشته باشیم قبل از اینکه عملیات create انجام بدیم میایم hash می کنیم . 

یک const hashPassword داریم که در واقع مقدار hash شده password رو درون خودش ذخیره می کنه . 

**نکته: پارامتر دوم که bcrypt.hash گرفته نیاز هست یک عدد باشه که عدد 10 رو بهش پاس دادیم ولی می تونه به وسیله genSlat هم ایجاد شه**

```javascript
    const hashPassword = await bcrypt.hash(data.password, 10);
```
بعد از hash به وسیلیه prismaService به model user دسترسی گرفتیم و متد create رو صدا زدیم : 

```javascript
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: hashPassword,
        role: Role.USER,
      },
      select: { name: true, id: true, email: true },
    });
```
که درون create نیاز هست data رو پاس بدیم syntax خوده prisma هست که این data در اصل یک object هست . 

درون object امدیم کل data که از سمت فرانت اند داریم میگیریم پاس میدیم فقط مقدار password رو برابر با hashPassword قرار دادیم 

که بیاد password که hash شده رو قرار بده درون دیتابیس ما . 

همینطور نیاز هست که role رو هم مشخص کنیم که گذاشتیم Role.User گفتیم این Role از داخل prisma.schema میاد . 

به وسیله select مشخص کردیم که response که نیاز داریم چی باشه که مقدار password رو دیگه نفرستادیم . 

```javascript
 select: { name: true, id: true, email: true },
```
در نهایت return رو داریم : 

```javascript
  return user;
```

نیاز هست به auth module بریم و prismaModule رو بهش اضافه کنیم تا بتونیم از PrismaService در authService استفاده کنیم که به constructor اضافه شده .

## auth module

<img src='https://github.com/mosenn/nestjs/assets/91747908/62a67874-756f-4a09-8a6e-9dacd82d58da' alt='nestjs authentication'>


خب یک نگاهی بندازیم به auth.module.ts اول ببنیم چیا نیاز هست import شن : 

```javascript
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
```

در ادامه حتما نیاز داریم که PrismaModule رو بیایم import کنیم و درون imports قرار بدیم که بتونیم از PrismaService درون auth.service.ts استفاده کنیم . 

```
  imports: [PrismaModule],
```

```javascript
@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [PrismaModule],
})
export class AuthModule {}
```

# response result : 

<img src='https://github.com/mosenn/nestjs/assets/91747908/f715fa81-66f3-48fb-b934-c8ddccac3151' alt='nestjs auth'>


همونطور که می بینید response که هست رو داریم صرفا همونای هستند که در select کردیم که درون auth.service.ts این selecet رو استفاده شده  . 

# in prisma studio 

با دستور `npx prisma studio` میایم prisma studio رو ران می کنیم که روی لوکال ران میشه . 

```
npx prisma studio
```
در نهایت چک می کنیم ببینم password که hash کردیم به درستی hash شده یا نه . 

که معمولا روی localhost زیر میاد بالا prisma studio . 

```
http://localhost:5556/
```

اگر وارد model user شیم که تصویر شو در زیر مشاهده می کنید : 


<img src='https://github.com/mosenn/nestjs/assets/91747908/109b32a1-4aaf-46a4-8d1d-38f4ad9e48ec' alt='nestjs authentication'/>


تمامی user های که تا به الان ساختیم مشاهده می کنیم که چک می کنیم کاربری که به همراه hash ساختیم 

پسوردش hash شده یا خیر که در تصویر زیر user که ایجاد کردیم می بینیم که پسوردش hash شده در اصل رمزگذاری شده 


<img src='https://github.com/mosenn/nestjs/assets/91747908/a76cb4e8-e083-4536-8641-972d5ea71cde' alt='nestjs authentication'/>


# Summary 

در اینجا امدیم یک module auth ایجاد کردیم که کار وظیفه این auth module ثبت نام کردن کاربر هست . 

که 4 تا فایل service , controller , module , dto رو درون فولدر auth داریم . 

# END 

**پایان register part authentication**
