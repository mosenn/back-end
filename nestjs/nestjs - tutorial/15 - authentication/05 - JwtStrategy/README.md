# JwtStrategy


می خوایم چک کنیم توکنی که ارسال میشه ولید هست ؟ 

برای پرفایل , می خوایم اطلاعات کاربری که لاگین شده رو , به وسیله 'profile/' بگیریم .

برای این کار نیاز به یک strategy و یک guard داریم که بیایم 

توکن رو ولید کنیم و به اطلاعات داخلیش دسترسی بگیریم .

## Create JWT-auth.guard

یک فایل درون فولدر auth ایجاد می کنیم به اسم jwt-auth.guard 

<img src='https://github.com/mosenn/nestjs/assets/91747908/370ad896-f895-4b1a-860c-e7f28e42e124' alt='nestjs auth-guard' />


درون اش میایم از startegy jwt استفاده میکنیم 

**نکته حتما باید نصب کرده باشیم passport jwt  رو تا بتونیم ازش استفاده کنیم و بهش دسترسی داشته باشیم**

```
npm i passport
npm i passport-jwt
```
چون nestjs از typescript استفاده می کنه نیاز هست که typescript شون هم نصب کنیم .
```
npm i @nestjs/passport
npm i @nestjs/jwt
```

درون فایل jwt-auth.guard.ts که ایجاد کردیم کد زیر رو خواهیم داشت : 

```javascript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

به AuthGuard نیاز داریم و همینطور به Injectabale , یک کلاس ایجاد کردیم کلای ایجاد شده رو export کردیم . 

و کلاسی که به اسم JwtAuthGuard ایجاد کردیم extends میشه از AuthGuard که داره از 'jwt' استفاده می کنه . 

**یاداوری : jwt مخفف json web token هستش**

## use

حالا وقتی ایجادش کردیم میایم ازش استفاده می کنیم درون auth.controller.ts برای route profile . 


<img src='https://github.com/mosenn/nestjs/assets/91747908/fcbeb264-9e19-4209-a280-c095e0afc83b' alt='jwt strategy in nestjs' />

از UseGuards@ استفاده می کنیم , اول کلاسی که ایجاد کردیم   به اسم JwtAuthGuard میایم import می کنیم


```javascript
import { JwtAuthGuard } from './jwt-auth.guard';
```
در نهایت درون UseGuards@ قرار میدیم .
```javascript
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async userProfile(@Request() req) {
    // return 'user login profile';
    return req.user;
  }
```

حالا نیاز هست که برای jwt-auth.guard که ایجاد کردیم یک strategy ایجاد کنیم . 

## create strategy 

درون فولدر auth یک فایل ایجاد می کنیم به اسم jwt-strategy.ts 

![image](https://github.com/mosenn/nestjs/assets/91747908/c8588426-ecfc-40f2-adad-5ac250652989)

درون این فایل مثل local-strategy میایم یک strategy ایجاد می کنیم منتها این بار از `jwt` استفاده می کنیم . 

```javascript
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      //* can set options for Strategy
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload:any) {
    return { id: payload.id, email: payload.email };
  }
}
```

کاری که کد بالا برای ما انجام میده این هست که به وسیله strategy jwt میاد توکنی که ارسال میشده داخل header رو 

به وسیله ExtractJwt.fromAuthHeaderAsBearerToken می گیره و veryfi می کنه اینجوری درون متد `validate` به اجزای امضا شده 

توکن که موقع login درون jwt token قرار دادیم می تونیم دسترسی داشته باشیم . 

**نکته حتما باید ExtractJWt رو import کنیم از  `passport-jwt`**

به طور خلاصه توکن رو از داخل header میگیره از سمت فرانت اند , وریفای می کنه و اطلاعات ذخیره شده درون توکن رو برگشت میده . 


**نکته درون super می تونیم اپشن های مورد نظر رو قرار بدیم مرتبط با JWT .**

```
    super({
      //* can set options for Strategy
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
```

## set strategy to module 

بعد از ساخت strategy نیاز هست درون auth.module.ts بیایم در قسمت provider قرارش بدیم 

<img src='https://github.com/mosenn/nestjs/assets/91747908/614be221-0dcb-451c-bf78-27ec160fbf02' alt='jwt-strategy nestjs' />


تا بتونیم ازش استفاده کنیم و توکن که درون هدر از سمت فران ارسال میشه رو وریفای کنیم و به اطلاعات امضا شده دسترسی داشته باشیم 

که موقع `login` شدن کاربر این اطلاعات کاربر میاد درون توکن قرار میگیره در واقع sign میشه . 

درون auth.module.ts میایم import می کنیم : 

```javascript
import { JwtStrategy } from './jwt-strategy';
```
درون provider قرارش میدیم : 

```javascript
  providers: [AuthService, LocalStrategy, JwtStrategy],
```

```javascript
@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
```

## profile route 

درون route profile که در auth.controller.ts هست امدیم از JwtStrategy استفاده کردیم درون UseGuard . 

الان برای استفاده از route /profile حتما نیاز هست که token که موقع login کاربر ایجاد میشه درون header profile ست شه و ارسال شه . 

در ادامه useGuards اتفاق می افته token veryfi میشه مشخصات کاربر درون متد validate که به صورت یک ابجکت برگشت داده میشد 


```javascript
  async validate(payload:any) {
    return { id: payload.id, email: payload.email };
  }
```
اینجا درون route profile درون Requset@ به مشخصات کاربر دسترسی داریم که return کردیم `req.user` .

که در واقع user همون مشخصات کاربر هست که در متد validate به صورت object برگشت داده شده . 


**نکته هر جا که بیایم از یک strategy استفاده کنیم می تونیم به Requset دسترسی داشته باشیم**

```javascript
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async userProfile(@Request() req) {
    return req.user;
  }
```

**نکته این UseGuards که درایم و JwtAuthGuard رو درون خودش گرفته می تونیم برای هر کنترلر و route دیگه ای استفاده کنیم** 

**اگر بیام برای کنترلر های دیگه و روت های دیگه استفاده کنیم اتفاقی که می افته**

**این هست که حتما برای دستسری به اونها هم نیاز داریم توکن ست کنیم درون header**

## response in postman 

بریم ببینیم که چطوری می تونیم به `profile/` در خواست بزنیم و مشخصات کاربر رو ببنیم و اگر توکن نداشته باشیم چه اتفاقی می افته . 

### login 

اول میایم به وسیله یک کاربر که قبلا register شده login رو انجام میدیم : 

<img src='https://github.com/mosenn/nestjs/assets/91747908/968f39c1-86f5-47ec-9af3-cb6e89af6f2a' alt='nestjs jwt-strategy'/>

اگر همه چی درست باشه و کاربر وجود داشته باشه و چیزی اشتباه زده نشده باشه یک token ساخته میشه و به عنوان response برگشت داده میشه . 

<img src='https://github.com/mosenn/nestjs/assets/91747908/0c3e8139-1451-48d2-8ee1-e79b0256faed' alt='nestjs jwt-strategy' />

حالا این توکن رو کپی می کنیم و درون header مربوط به Api profile قرار میدیم تا مشخصات کاربری که login هست رو ببنیم : 

<img src='https://github.com/mosenn/nestjs/assets/91747908/fc39f674-ac43-422c-8cf8-78811c38f693' alt='nestjs jwt-strategy' />

همونطور که در تصویر بالا مشخص هست توکن رو درون header ست کردیم که از نوع breaer توکن هست .

که توکن به وسیله JwtStrategy که ایجاد کردیم میاد وریفای میشه و اطلاعات درون Requset قرار میگیره

و می تونیم به مشخصات کاربری که لاگین کرده در api profile دسترسی داشته باشیم .

اگر توکنی وجود نداشته باشه یا اشتباه باشه با 401 مواجه میشیم یا کلا با ارور مواجه میشیم : 

<img src='https://github.com/mosenn/nestjs/assets/91747908/78bab53b-a981-49c0-9c8f-db6cdb251fe2'  alt='nestjs jwt-strategy'/>


#  Summary 

یک jwt-strategy.ts ایجاد کردیم و یک jwt-auth.guard.ts ایجاد کردیم 

<img src='https://github.com/mosenn/nestjs/assets/91747908/dee6f760-5c79-4ef2-922e-54bb5817bc96'  alt='nestjs jwt-strategy'/>





درون jwt-auth.guard.ts از passport jwt استفاده کردیم 

درون jwt-strategy.ts یک کلاس ساختیم کارش این بود که توکن رو از header میگیرفت

وریفای می کرد و مشخصات دورن توکن رو برگشت میداد که بتونیم بهشون دسترسی داشته باشیم درون Requset@


در نهایت درون auth.module.ts امدیم کلاس ساخته شده که برای jwt-strategy.ts ایجاد کرده بودیم درون provider قرار دادیم .

در نهایت درون auth.controller.ts برای route profile امدیم درون UseGuards@ از کلاس Jwtstrategy که ساخته بودیم استفاده کردیم . 

حالا هر جای از JwtStrategy استفاده کنیم نیاز داریم که حتما توکن ست کنیم تا بتونیم ریسپانس رو ببنیم . 

# END 

`پایان بخش JwtStrategy و گرفتن اطلاعات کاربر برای پرفایل`
