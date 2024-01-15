# open api swagger

در این بخش می خوایم swagger به پروژه اضافه کنیم . 

در اصل swagger امکان به ما میده که بتونیم برای api های که ایجاد کردیم یک داکیومنت بنویسیم . 

درون داکیومنت خوده nestjs توضیح داده که چطوری بیایم اینکارو انجام بدیم 

```
https://docs.nestjs.com/openapi/introduction
```

## install swagger

به وسیله دستور زیر میایم swagger رو نصب می کنیم : 


```
npm install --save @nestjs/swagger
```

## add swagger in main.ts 

درون main.ts نیاز داریم که بیایم از swagger استفاده کنیم . 

![image](https://github.com/mosenn/back-end/assets/91747908/17a10b90-c9d6-4d96-9366-a3199bfc2737)

نیاز داریم که ماژول های زیر رو import کنیم از swagger : 

```javascript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
```

در ادامه یک const config تعریف می کنیم که درونش از DocumentBuilder استفاده کنیم برای ایجاد config مربوط به swagger . 

```javascript
  const config = new DocumentBuilder()
    .setTitle('webblog api')
    .setDescription('The blog API description')
    .setVersion('1.0')
    .addTag('blog')
    .build();
```

در کد بالا به وسیله setTitle میایم title مد نظر خودمون رو قرار میدیم . 

به وسیله setDescription  می تونیم یک description بنویسیم .

در ادامه setVersion رو داریم که به ورژن اشاره می کنه می تونیم تغییر بدیم . 

همینطور addTag رو داریم که یک tag می تونیم قرار بدیم . 

در نهایت به وسیله build. میاد این config رو ایجاد می کنه . 

یک const به اسم document داریم که از SwaggerModule.createDocument استفاده می کنه برای ایجاد یک document .

که app و config که ایجاد کردیم رو درون خودش قرار میده : 

```javascript
  const document = SwaggerModule.createDocument(app, config);
```

**نکته : منظور از app درون main.ts همون core اصلی پروژه هست که توسط NestFactory.create ایجاد شده , به کد زیر دقت کنید :**

```javascript
  const app = await NestFactory.create(AppModule);
```

در اخر به وسیله متد setup که درون SwaggerModule هست میایم میگیم در کجا این document که برای api نوشتیم در چه ادرسی اجرا شه 

در اصل اگر سرور رو ران کنیم و به ادرس `localhost:3000/api` بریم وارد swagger میشیم که برای این سرور ایجاد کردیم .

همینطور const document که یک Document ایجاد می کنه رو درونش قرار دادیم در ادامه خوده app رو هم قرار دادیم . 

```javascript
  SwaggerModule.setup('api', app, document);
```
ادرس که می تونیم به swagger دسترسی داشته باشیم که بالا هم اشاره شده بهش : 

```
localhost:3000/api
```
خب تا به اینجا ما swagger رو نصب کردیم و مواردی که باید درون main.ts اضافه میشد رو اضافه کردیم . 

مرحله بعدی استفاده از decorator های هست که خوده nestjs تعیین کرده برای swagger که درون داکیومنت هم اشاره کرده : 

```
https://docs.nestjs.com/openapi/decorators
```

اگر لینک بالا رو کپی کنید وارد صحفه داکیومنت خوده nestjs شید می بینید decorator های که لیست کرده برای استفاده . 

**نکته : بعضی از decorator ها فقط برای route یا همون Method هستند بعضی ها برای controller / Method و بعضی صرفا برای module**


# swagger decorator 


در این فایل یک پروژه کوچیک داریم که صرفا یک سری متد تعریف کردیم . 

که بتونیم یک swagger ایجاد کنیم و از برخی از decorator ها استفاده کنیم . 

تصویر فایل پروژه رو در عکس زیر مشاهده می کنید و به طور کلی درون app.controller.ts و فولدر dto کار داریم . 

![image](https://github.com/mosenn/back-end/assets/91747908/0af74bf3-2565-4f29-bfb4-33c01ee6007f)

درون app.controller.ts و درون decorator @Controller امدیم به طور پیش فرض 'user' رو قرار دادیم  .

```
@Controller('user')
```

ادرس تمامی api مد نظر ما localhost:3000/user هست . 

## @ApiResponse

```javascript
import { ApiResponse } from '@nestjs/swagger';

```

به وسیله decorator ApiResponse می تونیم status کد و یک description برای api خودمون داشته باشیم . 

که برای register که از نوع Post هست تعریف کردیم . 

**نکته : به طور پیش فرض متد post همیشه status code 201 رو داره ولی اینجا برای اینکه نحوه کار کرد  ApiResponse رو ببینیم به 202 تغییرش دادیم**

```javascript
  @ApiResponse({ status: 202, description: 'create user' })
  // @ApiBody({type:Userdto})
  @Post('register')
  register(@Body() body: Userdto) {
    return { message: 'user is register', data: body };
  }
```
## ApiOkResponse


```javascript
import { ApiOkResponse} from '@nestjs/swagger';
```

به وسیله decorator ApiOkResponse می تونیم صرفا یک description تعریف کنیم و البته status کدش همیشه 201 هست :

```javascript
  @ApiOkResponse({description: 'login user' })
  @Post('login')
  login(@Body() body: Userdto) {
    console.log(body);
    return { message: 'user is login', data: body };
  }
```

## ApiBearerAuth

```javascript
import { ApiBearerAuth} from '@nestjs/swagger';
```

می تونیم برای api های که Bearer token می خوان نیاز به دسترسی دارند از decorator ApiBearerAuth استفاده کنیم : 

```javascript
  @ApiBearerAuth()
  @Get('users')
  users() {
    return 'all users';
  }
```

## in dto 

![image](https://github.com/mosenn/back-end/assets/91747908/eec2809b-770c-40cb-9693-b8b0b29032ca)

درون فایل dto می تونیم بیایم یک سری decorator اضافه کنیم که با اضافه کردن این decorator ها 

در قمست api document به ما schema , json رو نشون میدن : 

```javascript
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class Userdto {
  @IsString()
  @ApiProperty({ type: String, description: 'username' })
  username: string;
  @IsString()
  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  email: string;
}
```

که در کد بالا از ApiProperty استفاده کردیم برای username و email حتی یک description هم قرار دادیم براشون و نوع تایپ String رو گذاشتیم . 

**نکته : این  String در واقع ماله خوده javascript هست با تایپ string که مربوط به typescript هست تفاوت داره**

**نکته : برای استفاده از dto نیاز هست class-validator , class-transformer استفاده شه که در این پروژه نصب شده و استفاده شده**

**حتما نیاز هست new PipeValidation درون main.ts استفاده شه همینطور از transformer**

```
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
```


# Output swagger 

بریم ببینم چه خروچی داریم برای swagger که برای این پروژه ساختیم . 

پروژه رو ران می کنیم : 

```
npm run start:dev 
```

در ادامه وارد ادرس localhost:3000/api میشیم . 

تصویر زیر رو خواهیم داشت و داکیومنتی که ایجاد کردیم رو می تونیم مشاهده کنیم : 

![image](https://github.com/mosenn/back-end/assets/91747908/bcfd48e3-2ea9-4d06-9099-4e2e30a0ca0a)

در عکس زیر اگر دقت کنید یک قفل مشاهده می کنید که این فقل برای استفاده از ApiBearerAuth نمایش داده شده . 

هر جا از این decorator ApiBearerAuth استفاده کنیم این قفل نمایش داده میشه . 

![image](https://github.com/mosenn/back-end/assets/91747908/d7a04e11-8e76-47b0-8a23-420d0192b88f)

![image](https://github.com/mosenn/back-end/assets/91747908/d9f6b559-0e7c-482b-af66-22fcd3901265)

## dto schema 

اگر یادتون باشه در قسمت dto از decorator ApiProperty استفاده کردیم 

خروچی که این decorator به ما میده به صورت زیر هست : 

![image](https://github.com/mosenn/back-end/assets/91747908/2211f783-05fa-41af-b00c-24daa3ee60b2)

در قسمت Example Value می بینیم که username , email رو داریم 

که نوع تایپ رو string قرار داده و متوجه body ارسالی میشیم . 

اگر روی Schema کلیک کنیم حتی می تونیم ببینیم که کدوم فیلد اجبار هست یا نیست : 

![image](https://github.com/mosenn/back-end/assets/91747908/75104c18-6a71-448c-af52-0d41825a3044)

کمی پایین تر status code رو داریم که گفتیم برای بهتر متوجه شدن کار کرد  decorator ApiResponse 

امدیم status code روی 202 گذاشتیم . 

![image](https://github.com/mosenn/back-end/assets/91747908/c270fe03-3855-47c7-8780-d3390c3f4c99)

# ApiBody 

در اخر یک decorator ApiBody  داریم که روی method تنظیم میشه . 

اگر قرارش بدیم می تونیم درون body بگیم چه چیزی باشه مشابه ApiProperty .

به عنوان مثال در کد زیر امدیم گفتیم که string خالی باشه . 

```javascript
  @ApiResponse({ status: 202, description: 'create user' })
  @ApiBody({type:""})
  @Post('register')
  register(@Body() body: Userdto) {
    return { message: 'user is register', data: body };
  }
```
اگر کد رو ذخیره کنیم و صفحه swagger رو refresh کنیم می بینیم که صرفا string رو در قسمت Example value قرار داده . 

![image](https://github.com/mosenn/back-end/assets/91747908/a49dfc9e-aff6-4f39-be81-2ffe7c723083)

# Summary 

در بخش امدیم به وسیله swagger یک document برای Api های که نوشتیم ایجاد کردیم . 

که با برخی از decorator nestjs که برای swagger تعریف شدن اشنا شدیم . 

که با هم دیگه نحوه استفاده شون متفاوت بود برخی برای method / controller بودن 

برخی شون برای method تنها قابلیت استفاده شدن داشتند و برخی شون هم صرفا برای module بودن . 

در لینک زیر می تونید به استفاده swagger در nestjs رو ببنید و بیشتر مطالعه کنید . 

```
https://docs.nestjs.com/openapi/introduction
```

```
https://docs.nestjs.com/openapi/decorators
```

# END 


`پایان این بخش که مربوط به استفاده و اتصال swagger در nestjs بود `
