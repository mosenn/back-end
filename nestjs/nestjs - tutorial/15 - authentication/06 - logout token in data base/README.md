# Logout with data base 

 کردیم logout داخل این فایل کاربری که لاگین هست رو  
 به وسیله توکن این اتفاق افتاد . توکن داخل دیتابیس ذخیره شد 
 و برای خارج شدن کاربر توکن از داخل دیتا بیس پاک شد 
 در  removeToken به وسیله 

زمانی که از http استفاده می کنیم در واقع state les هست و جای درخواستی که زده میشه ذخیره نمیشه برای همین از jwt استفاده می کنیم . 


که در فایل های قبلی یک توکن ایجاد کردیم و اطلاعات مربوط به کاربر که مورد نیاز ما بود درونش ذخیره کردیم .

دو روش هست برای لوگات کردن می تونیم از سمت front توکن رو پاک کنه 

که در واقع کاربر logout میشه و همینطور زمانی که توکن نیست نباید 

بتونه در خواست بزنه از سمت front . 

سمت بک اند جای که توکن ذخیره شده رو باز میایم پاک می کنیم که در این مثال درون دیتابیس توکن رو ذخیره کردیم . 

که اینکار باعث میشه هر logout یک درخواست به بک اند زده میشه . 

حتی می تونیم یک مقدار hash شده استفاده کنیم یا همین توکن رو hash کنیم 

که در این مثال این کارو نکردیم 

 ## prisma 

<img src='https://github.com/mosenn/back-end/assets/91747908/15d81635-7090-49d5-8eb9-75154ee1c57b' alt='logout in nestjs' />
 میایم درون prisma.schema یک فیلد token اضافه می کنیم برای کاربر ها 

 که قرار هست token رو درونش ذخیره کنیم . 

 ```javascript
model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  password  String
  name      String
  role      Role     @default(USER)
      //* saved token in the data base

  token String?
  updatedAt DateTime @updatedAt
  createdAt DateTime @default(now())
}
```

که token رو اضافه می کنیم نیاز هست باز generate کنیم prisma رو 


```
npx prisma generate
```

در ضمن token از نوع String هست و optional هست 

```
  token String?
```

 ## authController 


نکته : درون خوده داکیومنت نست این مورد گفته نشده 
در واقع خارج شدن کاربر درون داکیومنت نست وجود نداره


زمانی که کاربر login می کنه یک token ساخته میشه . 

همینطور حالا میایم update می کنیم که مفدار token که در schema.prisma ست 

کردیم پر شه با این توکنی که ساخته میشه 

```javascript
  async login(@Body() body: LoginUserDto, @Request() req) {
    const token = this.jwtService.sign({
      id: req.user.id,
      email: req.user.email,
    });
    //* saved token in the data base
    await this.authService.updateToken(token, req.user.id);
    return {
      token: token,
    };
  }
```
درون متد updateToken که درون authService ایجاد شده میاد توکن رو از 

اینجا میگیره و درون دیتابیس قرار میده 

## auth.service

![image](https://github.com/mosenn/back-end/assets/91747908/ab025f0a-a1e2-48a1-87a4-1d0d01e5a688)


در کد زیر متد updateTokenرو داریم که وسیله update داره توکنی که 

دریافت کرده از auth.controller اینجا درون دیتا بیس ذخیره اش می کنه

```javascript
  //* saved toke in the data base
  async updateToken(token: string, id: string) {
    const userToken = await this.prismaService.user.update({
      where: { id },
      data: { token },
    });
    // return userToken;
    return token;
  }
```

یک متد دیگه نیاز داریم که بیاد اعتبار سنجی کنه توکن رو ببینه هست یا

نه اگر هست درست هست توکنی که وارد شده یا نه . 

```javascript
  // * check user is exist and have token or not !
  async validateUserByToken(id:string) {
    const user = await this.prismaService.user.findUnique({ where: {id}});
    if (!user || user.token === null) {
      throw new UnauthorizedException();
    }
    return user;
  }
```

که درون این متد به وسیله `id` داره کاربر رو پیدا می کنه 

این id رو از درون  JWT strategy میگیره .

کاربر که پیدا کرد اول خوده کاربر رو چک می کنه که باشه دوم توکن رو

چک می کنه که null نباشه 

اگر همه چیز درست بود خوده user رو return می کنه . 

در غیر اینصورت یک Exception برگشت میده 


## JWTstrategy 

![image](https://github.com/mosenn/back-end/assets/91747908/7e600a46-771e-4292-9a9d-1e0975b8261d)


یک متد صدا می زنیم که درون auth.service ایجاد کردیم 

کارش این هست که میاد چک میکنه ببینه token و user وجود دارند یا نه 

```javascript
  async validate(payload:{id:string , email:string}) {
    const user = await this.Authservice.validateUserByToken(payload.id)
    return { id: payload.id, email: payload.email };
  }
```

## logout method 

![image](https://github.com/mosenn/back-end/assets/91747908/c397f873-a594-4d32-9fef-5966fa903e63)

درون auth.controller یک متد داریم به اسم logout که می تونه از نوع post یا get باشه 

```
  // * need guard for know that who is user  logout
  @UseGuards(JwtAuthGuard)
  //* logout - logout can be Post method and Get method
  @Post('/logout')
  async logout(@Request() req) {
//* update token again for logout */
 const user = await this.authService.removeToken(req.user.id)
 return {Messeage:`this user ${req.user.email} is logout`}
  }
```

کاری که متد logout انجام میده در اصل پاک کردن token از داخل data base 

هست اینجوری کاربر مد نظر ما logout میشه 

**نکته حتما نیاز به JWtAuthGuard هست برای دسترسی به `req.user` بدونیم چه کاربری قرار هست logout کنه**

در ادامه return رو داریم که ایمیل کاربری که logout شده رو به ما نشون میده

البته متد removeToken درون auth.service اتفاق می افته . 

## removeToken 

![image](https://github.com/mosenn/back-end/assets/91747908/c92284b7-2428-4861-8d1e-2fd471945647)

متد removeToken در  اصل میاد کاربری که در خواست زده برای logout رو پیدا می کنه بعدش token که ذخیره شده رو update می کنه و توکن رو null می کنه اینجوری کاربر مد نظر logout میشه 

```javascript
  async removeToken(id: string) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { token: null },
    });
    return { Message: `this ${user} come from removeTOken` };
  }
```
در کد بالا `id` رو از درون auth.controller گرفته .

همینطور در قسمت data امدیم token رو null کردیم که توکن خالی میشه .

**نکته : برای logout کردن حتما به token که موقع login داشتیم نیاز داریم باید برای logout ست کنیم تا بتونیم logout کنیم**

**نکته: و زمانی که logout می کنیم کاربر دیگه نمی تونه به profile 
دسترسی داشته باشه و مشخصات خودشو ببینه چون logout هست**
