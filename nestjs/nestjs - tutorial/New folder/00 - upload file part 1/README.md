# upload file 

در این بخش می خوایم در مورد اپلود کردن file در nestjs صحبت کنیم . 

مثل : عکس , pdf و ..

## init new nestjs


یک nestjs جدید ایجاد می کنیم که صرفا فایل ها و فولدر های اولیه رو داشته باشیم . 


```
new nestjs upload 
```


## multer 

در واقع multer یک package هست که می تونیم به وسیله این package فایل ها رو اپلود کنیم . 

از multer درون expressjs استفاده میشه و درون nestjs هم می تونیم ازش استفاده کنیم . 

برای اپلود فایل در سمت فرانت نیاز هست from که در خواست رو می فرسته نیاز هست فرمتش multipart/form-data باشه 

درون postman هم اگر بخوایم فایلی رو ارسال کنیم نیاز هست در قسمت `body` بیام بگیم که from-data هست . 


![image](https://github.com/mosenn/back-end/assets/91747908/5644bb3a-28eb-43ac-8bab-7eb0e469c10a)


توضیحات خوده داکیومنت nestjs در لینک زیر هست که اپلود فایل رو به وسیله multer توضیح میده : 

```
https://docs.nestjs.com/techniques/file-upload#array-of-files
```

در واقغ multer میاد file مد نظر ما رو parse می کنه و می تونیم ازش استفاده کنیم . 

از اونجای که خوده nestjs داره از expressjs استفاده می کنه می تونیم از multer هم استفاده کنیم . 

## send file with postman 

همنطور که اشاره کردیم برای ارسال فایل در postman میایم form-data رو از بخش body انتخاب می کنیم 


![image](https://github.com/mosenn/back-end/assets/91747908/5644bb3a-28eb-43ac-8bab-7eb0e469c10a)


در ادامه می تونیم که بگیم چه نوع دیتای رو می خوایم بفرستیم یک file یا یک text : 


![image](https://github.com/mosenn/back-end/assets/91747908/fa13a185-cede-4441-8e9f-3742cf0c96e1)


همونطور که می بینیم یک image تعریف کردیم که در واقع یک file عکس هست در ادامه یک text به اسم name تعریف کردیم که هر دو رو داشته باشیم . 


با دستور زیر که درون داکیومنت خوده nestjs هست میام multer رو نصب می کنیم 

```
$ npm i -D @types/multer
```

## create route for upload

یک route ایجاد می کنیم از نوع Post@ که قرار برای ما کار اپلود کردن رو انجام بده . 

درون app.controller.ts میایم یک route از نوع Post ایجاد می کنیم . 

![image](https://github.com/mosenn/back-end/assets/91747908/e54cab1a-9222-42fe-a17c-dc9b9b34c7f4)



