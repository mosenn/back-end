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


کدی که تعریف می کنیم به صورت زیر هست :

```javascript
  @Post('/upload')
  uploadFile(@Body() body: any) {
    console.log(body);
    return body;
  }
```

خب اگر وارد postman شیم و یک form-data ارسال کنیم می بینیم که به ما {} خالی رو برگشت میده . 

به این دلیل هست که نیاز داریم from-data رو بیایم parse کنیم تا بتونیم به دیتالی که از طریق from-data می فرستیم دسترسی داشته باشیم . 

همونطور که در عکس زیر مربوط به postman مشاهده می کنیم درون response یک ابجکت {} خالی هست . 

![image](https://github.com/mosenn/back-end/assets/91747908/01c34b45-1f3a-4a4c-81b7-296886ccbbcf)


## take form-data with decorator

برای اینکه بتونیم به file دسترسی داشته باشیم نیاز داریم که چندتا مورد استفاده کنیم 

اول نیاز داریم که یک interceptor صدا بزنیم به اسم FileInterceptor برای اینکه بتونیم از FileInterceptor استفاده کنیم 

نیاز داریم از یک UseInterceptors استفاده کنیم .

درون fileInterceptor دقیقا اسمی که درون postman یا فرانت ست کردیم نیاز هست اینجا قرار بدیم که اسم ما در این مثال 'image' هست 

```
  @UseInterceptors(FileInterceptor('image'))
```
در ادامه نیاز داریم برای دسترسی گرفتن به 'image' که درون FileInterceptor هست بیام از decorator @UploadedFile استفاده کنیم . 

که اسم image رو قرار میدیم هر اسمی اینجا می تونیم قرار بدیم در ادامه نوع تایپ شو برابر با Multer.File قرار دادیم .

که از mutler که نصب کردیم گرفته میشه . 

```javascript
  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@Body() body: any, @UploadedFile() image: Express.Multer.File) {
    console.log(body, image);
  }
}
```

حالا اگر درون postman بیایم به localhost:3000/upload یک درخواست از نوع form-data بزنیم و یک عکس بزاریم و بفرستیم : 

![image](https://github.com/mosenn/back-end/assets/91747908/057d3425-020d-4ab7-b5d6-1cb9c61864d7)

درون ترمینال vscode لاگ زیر رو خواهیم داشت : 

![image](https://github.com/mosenn/back-end/assets/91747908/9c626f1d-4e1a-4c51-9a34-5ae3f3e98792)


که هم name که قرار دادیم رو داریم هم اینکه مشخصات اون عکس که قرار دادیم به صورت یک ابجکت داریم . 

در قسمت بعدی میریم سراغ ذخیره سازی عکسی که داریم . 


# Summary 

در این بخش multer رو نصب کردیم و یک route ایجاد کردیم از نوع post . 

که امدیم درونش از UseInterceptor و FileInterceptor همینطور UploadedFile@  استفاده کردیم و نوع تایپ رو قرار دادیم Multer.File . 

خروجی که داشتیم یک ابجکت که مشخصات name درونش بود و یک ابجکت که مشخصات عکس درونش قرار داشت . 

در بخش بعدی میریم که file خودمون رو ذخیره کنیم . 

#  End 

`پایان این بخش که با multer اشنا شدیم و یک decorator به اسم UploadedFile و همینطور interceptor FileInterceptor`

