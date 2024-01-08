![image](https://github.com/mosenn/nestjs/assets/91747908/bb0f4b48-a0c6-49f0-891c-854aca8ec702)# Add Jwt For Login 


<p align="center">
 <img src='https://github.com/mosenn/nestjs/assets/91747908/f7c6e5c3-c272-4966-a843-51ebd10e1fbe' alt='jwt in nestjs' />
</p>

# install @nest/jwt
درون داکیومنت خوده nestjs توضیح داده شده که چطوری از jwt استفاده کنیم . 

که در واقع nestjs این jsonwebtoken رو درون خودش داره . 

در لینک زیر می تونیم ببینیم که چه توضیحاتی داده شده.: 

<a href='https://docs.nestjs.com/security/authentication#jwt-token'>jwt in nestjs</a>

با دستور زیر میایم nestjs/jwt@ رو نصب می کنیم : 

```
npm install --save @nestjs/jwt
```

# create token 

وارد controller.auth میشیم و جای که عملیات login انجام میشه 


<img src='https://github.com/mosenn/nestjs/assets/91747908/192a8cb9-5df2-455e-8e66-790e38c4a1d3' alt='jwt in nestjs' />



## jwtService
درون route login که داریم میایم یک token ایجاد می کنیم به وسیله `JwtService` 

که `JwtService` میاد import میشه از خوده nestjs/JwtService@ . 

```javascript
import { JwtService } from '@nestjs/jwt';
```

درون constractuor این JwtService رو قرار میدیم : 

```javascript
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    public jwtService: JwtService,
  ) {}
```

الان می تونیم از متد `sign` درونی که داره استفاده کنیم و مقادیری که درون requset بهش دسترسی داریم پاس بدیم 

مقادیر که درون requset داریم مربوط به user می تونیم sign کنیم و بهش دسترسی داشته باشیم . 

```javascript
  @Post('/login')
  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  async login(@Body() body: LoginUserDto, @Request() req) {
    return {
      token: this.jwtService.sign({ id: req.user.id, email: req.user.email }),
    };
  }
}
```

همونطور که در کد بالا می بینیم یک return داریم که داره object رو برگشت میده درون object یک key به عنوان token داریم . 

که درون token دارم از jwtService استفاده می کنیم و sign می کنیم مقدار های از کاربر که بهش نیاز داریم .  

که یک مقدار id کاربر رو داریم و یک مقدار email کاربر رو داریم و هر دو داره از request گرفته میشه . 

**نکته به طور عادی به مقادیر Requset دسترسی نداریم الان به این دلیل می تونیم از req.user.id , req.user.email استفاده کنیم 
بخاطره اینکه داریم از AuthGuard استفاده می کنیم و AuthGuard میاد به طور خودکار مقادیر رو درون Requset@ دخیره می کنه و می تونیم از مقادیر استفاده کنیم**


## jwtModule 

خب همونطور وقتی که از یک service می خوایم استفاده می کنیم نیاز هست که module رو هم دروشن import کنیم . 

برای jwtService هم نیاز هست که بیایم اینکارو انجام بدیم و بعد از استفاده میایم از JWTmodule استفاده می کنیم . 

نیاز هست که درون auth.module.ts بیایم jwtModule رو قرار بدیم . 


 <img src='https://github.com/mosenn/nestjs/assets/91747908/d2477933-adf2-452d-8dea-8c3315ca79de' alt='jwt in nestjs'/>


میایم درون imports قرار میدیم قبل از اون میایم import می کنیم JwtModule رو از nestjs/jwt@ :
```javascript
import { JwtModule } from '@nestjs/jwt';
```

در ادامه : 
```javascript
@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule,
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
```

**نکته : اگر قبلا از jwt استفاده کرده باشید تمامی متد ها و روش استفاده یکی هست منتها اینجا از درون خوده nestjs گرفته میشه و استفاده میشه**


نیاز داریم که برای jwt که ایجاد کردیم یک secretKey تعریف کنیم به وسیله `register` ,  همینطور می تونیم مدت زمان اعتبار token رو تعریف کنیم 

که در کد زیر مدت زمان انقضاء token یک روز گذاشته شده به وسیله `expiresIn` تعریف شده . 



```javascript
 JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
```

درون Module@ : 

```javascript
@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
```

**نکته : به دلیل اینکه فایل تمرینی هست صرفا یک تکست ساده به اسم `secrect` قرار دادیم اما بهتره که یک random string ایجاد کنیم و قرار بدیم .**

# result in postman 

بعد از ایجاد token برای route login اگر postman رو باز کنیم و سرور ران باشه . 

به ادرسی که برای login تعریف کردیم در خواست بزنیم :
```
http://localhost:3000/auth/login
```

به عنوان response یک token خواهیم داشت : 


<img src='https://github.com/mosenn/nestjs/assets/91747908/721fc9b0-fea6-4b0e-9b14-6a2f27f64954' alt='jwt in nestjs'/>


که اگر token رو copy کنیم و درون سایت [jwt.io](https://jwt.io/) قرار بدیم 

خواهیم دید مقادیر id و email کاربر که قرار دادیم می تونیم مشاهده کنیم به عنوان payload. 

<img src='https://github.com/mosenn/nestjs/assets/91747908/5547ecd6-c5ee-4ce5-9c95-a8fd141ffe99' alt='create token in nestjs '/>

# use token in front-end

بعد از اینکه توکن ایجاد شد سمت front-end نیاز هست که token ایجاد شده رو ذخیره کنه . 

در ادامه برای درخواست های که نیاز به token دارند درون header گذاشته شه و ارسال شه . 

تا اون عمل مربوط به api انجام شه بعد از اینکه front-end درون header توکن رو به ما برگشت میده 

درون back-end توکن ارسال شده رو که درون header هست رو میگیریم و اطلاعات درونش رو که sign شده استفاده می کنیم . 

برا مثال درون auth.controller.ts میایم یک Get@ قرار میدیم که قرار هست profile کاربر که login کرده رو برگشت بده .

```javascript
  @Get('/profile')
  async userProfile() {
    return 'user login profile';
  }
```

زمانی که از سمت front-end قرار هست به ادرس `profile/` در خواست زده شه . 

درون header نیاز هست بیاد token که دریافت کرده رو قرار بده . 

که درون method userProfile میایم token که از داخل header می گیریم رو verify می کنیم به وسیله jwtService ,

اطلاعات کاربری که login شده دسترسی داریم و به front-end به عنوان response برگشت میدیم . 

اگر token ارسال نشه یا اشتباه باشه به عنوان response می تونیم یک message یا expection برگشت بدیم . 

چون نیاز به token داریم تا بتونیم verify رو انجام بدیم . 

## set token in postman 

بعد از login می تونیم token رو درون Authentication مربوط به postman قرار بدیم : 


<img src='https://github.com/mosenn/nestjs/assets/91747908/f066f59e-6583-464d-a61f-84747a349bb6' alt='add token in postman' />


درون tab auhentication می تونیم در قمست چپ نوع token رو انتخاب کنیم که روی Bearer Token قرار میدیم . 

سمت راست میایم Token رو که گرفتیم قرار میدیم تا بتونیم به ادرس api مد نظرمون در خواست بزنیم و token رو ارسال کنیم . 

در نهایت ادرس api مد نظرما با توجه به نیازمون میاد response رو به ما برگشت میده . 

که این موضوع رو در فلودر jwtstrategy بررسی می کنیم .

# Summary 

از nestjs/jwt@ استفاده کردیم برای ایجاد کردن token . 
```
npm install --save @nestjs/jwt
```
<a href='https://docs.nestjs.com/security/authentication#jwt-token'>jwt in nestjs</a>


 به کمک ,jwtService و JwtModule یک token ایجاد کردیم زمانی که کاربر login رو انجام میده 

این login درون auth.controller.ts انجام میشه , یاداوری شد زمانی که از AuthGuard و localStrategy استفاده می کنیم , 

می تونیم به موارد Requset@ دسترسی داشته باشیم , در نهایت id و email کاربر رو ذخیره کردیم که می تونیم هر چیزی رو نیاز داریم ذخیره کنیم 

اما به این توجه داشته باشیم که موارد حساس رو نیاد درون token قرار بدیم . 

در ادامه برای اینکه بتونیم از secret , expireIn داشته باشیم از method register که به JWtModule مربوط میشه استفاده کردیم 

که خوده JwtModule در  درون auth.module.ts استفاده شده . 


# END 

**پایان این بخش اضافه کردن یک token برای login به وسیله nestjs/jwt@**

