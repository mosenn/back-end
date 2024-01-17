# cors policy 

در این بخش می خوایم در مورد cors policy صحبت کنیم . 

همینطور اینکه درون nestjs ازش استفاده کنیم . 

در nestjs خودش به طور خودکار از پکیج cors که درون expressjs استفاده می کردیم میاد استفاده می کنه . 

تمامی option ها و قابلیت های پکیج cors رو داره در زیر لینک npm package cors رو می تونید ببنید . 


```
https://www.npmjs.com/package/cors
```
## website 

برای اینکه cors policy رو چک کنیم از وبسایت زیر استفاده کردیم . 

```
https://www.test-cors.org
```

منتها فراموش نکنید که tab netowrk رو باید refresh شه و صرفا در خواست زده شه و result رو مشاهده کنید . 


![image](https://github.com/mosenn/back-end/assets/91747908/25c701d2-65e9-4d8b-81ed-1ab23a38e92d)

بعد از در خواست به اسم api که در خواست زدید رو مشاهده می کنید که در این مثال به 'profile' در خواست زدیم 

که این profile در واقع یک route هست که در app.controller.ts ایجاد شده : 


![image](https://github.com/mosenn/back-end/assets/91747908/b8aa9bd1-58f2-4aa8-a270-cd41cf399204)

همونطور که مشاهده می کنید به رنگ قرمز هست اگر cors policy اوکی باشه رنگ اش قرمز نخواهد بود : 

![image](https://github.com/mosenn/back-end/assets/91747908/d36b3f8e-7f5a-4e35-891f-f2dad72d2364)

فراموش نکنید که هر بار که code رو تغییر میدید و ذخیره می کنید سایت test-cors رو رفرش کنید و دوباره درخواست بزنید . 

اگر روی پرفایل کلید کنید مشخصات مربوط به درخواستی که زده شده رو می تونید ببنید : 

![image](https://github.com/mosenn/back-end/assets/91747908/28c40618-e35c-47a0-a94a-d32d4b4fb4f1)


که هر tab مشخصات خودشو داره و tab اول مربوط به header هست . 

در tab سوم response می تونید چیزی که api به ما برگشت داده به عنوان response مشاهده کنیم : 

![image](https://github.com/mosenn/back-end/assets/91747908/0d268183-49f3-4407-afb3-17904d7cd774)




## use cors 

برای اینکه بتونیم از cors استفاده کنیم به داخل main.ts میریم . 



![image](https://github.com/mosenn/back-end/assets/91747908/c06deba1-4628-42ca-9fe3-90278959201c)


در ادامه app.enablecors رو صدا می زنیم . 

```
app.enableCors();
```

زمانی که از app.enableCors استفاده می کنیم در واقع همه می تونن به سرور ما و api های که نوشتیم دسترسی داشته باشند . 

در واقع allow-orgin ما * استار set میشه به طور default درون header . 

به در console به tab network میریم در بخش header در قسمت response headers می تونیم مشاهده کنیم که allow-orgin برابر با * هست . 

![image](https://github.com/mosenn/back-end/assets/91747908/5a42b874-0a02-4e76-931e-b95905e0167b)


این به این معنی هست که api به طور public هست , هر شخصی می تونه به api دسترسی داشته باشه . 

اما برای اینکه دسترسی رو محدود کنیم نیاز هست بیایم ادرس تعیین کنیم . 

می تونیم یک ادرس تعیین کنیم یا مجموعه ای از چند ادرس داشته باشیم . 

که صرفا ادرس های تعیین شده بتونند به سرور و api های که نوشتیم دسترسی داشته باشند . 

کافیه `orgin` تعریف کنیم . 

```javascript
  app.enableCors({origin:'https://www.test-cors.org'});
```

در کد بالا صرفا یک ادرس تعیین کردیم که ادرس وبسایت test-cors.org هست . 

**نکته خیلی مهم : توجه کنید که `/` داشتن یا نداشتن اخر ادرس مهم هست اگر که کم یا زیاد بزاریم cors ما دچار مشکل میشه**

کد پایین الان cors مارو نمیشناسه به دلیل '/' اضافی اخر ادرس :
```javascript
  app.enableCors({origin:'https://www.test-cors.org/'});
```

**نکته : وقتی که orgin تعریف می کنیم حتی اگر خالی باشه از حالت * در میاد و حتما نیاز هست یک ادرس براش تعیین شه تا cors کار کنه .**

در کد زیر حتما نیاز هست یک ادرس ست شه دیگه در کد پایین allow-orgin ما استار نیست در واقع اصلا allow-orgin انگار درون respone header وجود نداره  .

به عکس نگاه کنید : 

![image](https://github.com/mosenn/back-end/assets/91747908/6928c3fb-e89f-4f89-9fab-ea451eaaa8a6)


```javascript
  app.enableCors({origin:''});
```

می تونیم به جای یک ادرس چند ادرس اضافه کنیم : 


```javascript
  app.enableCors({origin:['address-1' , 'https://www.test-cors.org']});
```

در کد بالا صرفا به صورت شماتیک 2 تا ادرس اضافه کردیم می تونیم هر چندتا که بخوایم ادرس اضافه کنیم . 

که سرور ما اجازه دسترسی و requset زدن به ادرس های تعریف شده بده .


# Summary 

در این بخش با cors policy در nestjs اشنا شدیم و روش استفاده که چطوری ازش استفاده کنیم . 

متوجه شدیم که به جای یک ادرس می تونیم چند ادرس داشته باشیم به وسیله orgin که یک ارایه میگیره . 

در ادامه گفتیم اگر orgin رو تعریف می کنیم حتما نیاز داریم یک ادرس برای orgin تعریف کنیم . 

تا cors رو بتونه بشناسه در صورت تعریف نکردن ادرس برای orgin با مشکل مواجه میشه . 

در نهایت اگر orgin تعریف نکنیم به طور کلی api های که نوشتیم به طور public در دسترس همگی قرار داره . 


# END 

`پایان بخش cors policy در nestjs . `
