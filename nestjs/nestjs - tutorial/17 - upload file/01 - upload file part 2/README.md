# compelete upload 

در قسمت قبل یک form-data ارسال کردیم و مشخصات شو گرفتیم , در این بخش میخوایم که form-data خودمون رو ذخیره کنیم .

برای ذخیره سازی میایم از multer استفاده می کنیم . 

**نکته: تمامی اتفاقات درون app.controller.ts اتفاق می افته**

## compelete route upload

یک route داشتیم که وظیفه اپلود رو به عهده داشت و به صورت زیر هستش
```javascript
  @Post('/upload')
  uploadFile(
    @Body() body: any,
    @UploadedFile()
    image: Express.Multer.File,
  ) {
    console.log(body, image);
    return { message: 'your file is uploaded' };
  }
```

میایم به این route یک useInterceptor اضافه می کنیم , که از nestjs/comman میاد import میشه 

```javascript
{
  UseInterceptors,
} from '@nestjs/common';
  @UseInterceptors()
```

درون این UseInterceptors از یک interceptor به اسم FileInterceptor استفاده می کنیم که از @nestjs/platform-express میایم import می کنیم :

وردی اول FileInterceptor اسمی هست که از form-data قرار ارسال شه که اینجا image هست . 

وردی دومی که میگیره یک ابجکت هست که در واقع option های مربوط به multer هست . 
```javascript
import {
  FileInterceptor,
} from '@nestjs/platform-express';
FileInterceptor('image')
```
به صورت زیر از دو موردی که گفتیم استفاده می کنیم : 

```javascript
  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('image')
    }),
  )
  uploadFile(
    @Body() body: any,
    @UploadedFile()
    image: Express.Multer.File,
  ) {
    console.log(body, image);
    return { message: 'your file is uploaded' };
  }
```

## FileInterceptor storage

حالا برای اینکه بتونیم از multer استفاده کنیم میایم option های برای multer قرار میدیم . 

این option به صورت یک object درون FileInterceptor قرار میگیره . 

```javascript
    FileInterceptor('image', {
      //* storge for save image
      storage: diskStorage({
        destination: resolve(__dirname, '../', 'uploads'),
        filename: (req, file, cb) => {
          const filename = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          return cb(null, `${filename}-${Date.now()}${extension}`);
        },
      }),
```

خوب حالا این option که داریم گفتیم به صورت یک object هست . 

اولین موردی که تعیین کردیم storage هست که در واقع یک key درونی مربوط به option multer هست . 

که برای ذخیره سازی فایل استفاده میشه در ادامه از diskStroage استفاده کردیم که از multer گرفته میشه : 

```
import { diskStorage } from 'multer';
```

درون diskStorage یک key به اسم destination داریم که محل ذخیره ساز فایل رو مشخص می کنه : 

```javascript
   storage: diskStorage({
        destination: resolve(__dirname, '../', 'uploads'), }
```

که اینجا از `resolve` خوده nodejs استفاده کردیم و از dirname که بیایم ادرس تعیین کنیم .

این `reslove` از درون nodejs از ماژول path گرفته میشه :

```
import { resolve } from 'path';
```
در واقع ادرسی که مشخص کردیم یک فولدر به اسم uploads درون directory اصلی کد ما ایجاد می کنه . 

که درون این فولدر uploads فایل های عکس ما که قرار هست ذخیره کنیم قرار می گیرند . 

در ادامه فانکشن برای اینکه فایل های که ذخیره می کنیم که اینجا عکس هستند برای اینکه هم نام و هم اسم نباشند . 

نیاز هست چیزی اضافه کنیم که اگر عکس یا فایل هم اسمی upload شد روی هم copy نشن . 

برای اینکه از هم دیگه متفاوت شن می تونیم یک uniq id بیایم ایجاد کنیم و براشون قرار بدیم . 

که در این مثال از new Date استفاده کردیم که بتونیم uniq بودن اسم فایل رو داشته باشیم . 

برای اینکار در ادامه storge از یک فانکشن استفاده می کنیم که یک key به اسم filename داریم : 

```javascript
      storage: diskStorage({
        destination: resolve(__dirname, '../', 'uploads'),
        filename: (req, file, cb) => {
          const filename = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          return cb(null, `${filename}-${Date.now()}${extension}`);
        },
      }),
```

درون فانکشن req رو داریم که به همون requset اشاره می کنه , file رو داریم که به مشخصات خوده file اشاره می کنه . 

در ادامه cb رو داریم که یک call back هست که می تونیم مقدار true / false رو بگیم برگشت بده همچنین یک error ست کنیم براش . 

برای parse کردن نیاز هست از `path` درون nodejs استفاده کنیم : 

```
import path = require('path');
```

از درون file از orginalname میایم اسم فایل  و پسوند فایل رو میگیریم . 

که پسوند فایل در واقع `ext` هست . 


```javascript
 const filename = path.parse(file.originalname).name;
 const extension = path.parse(file.originalname).ext;
```

برای اینکه ذخیره سازی فایل ما انجام شه `cb` فانکشن رو صدا می زنیم وردی اول که ارور هست رو null می زاریم 

و یک new Date برای متفاوت شدن اسم فایل قرار میدیم در نهایت return می کنیم : 



```javascript
 return cb(null, `${filename}-${Date.now()}${extension}`);
```

یک بار دیگه کد مربوط به storge رو با هم ببینیم که درون FileInterceptor به عنوان option قرار گرفته : 


```javascript
    FileInterceptor('image', {
      //* storge for save image
      storage: diskStorage({
        destination: resolve(__dirname, '../', 'uploads'),
        filename: (req, file, cb) => {
          const filename = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          return cb(null, `${filename}-${Date.now()}${extension}`);
        },
      }),
```


## FileInterceptor fileFilter

برای اینکه بتونیم filter انجام بدیم مشخص کنیم که چه فایلی با چه پسوندی می تونه upload شه 

میایم از fileFilter درون FileInterceptor استفاده می کنیم , fileFilter مثل filename یک فانکشن هست .
```
fileFilter: (req, file, cb) => {}
```

باز نیاز داریم که بیایم `ext` مربوط به file رو بگیریم  و همینطور به وسیله path بیایم parse کنیم . 

درون فانکشن fileFilter کد زیر رو داریم : 

```javascript
      fileFilter: (req, file, cb) => {
        const extension = path.parse(file.originalname).ext;
        if (extension !== '.png') {
          return cb(new BadRequestException('must be pngs'), false);
        }
        return cb(null, true);
      },
```

در کد بالا یک `if` تعریف کردیم که گفتیم اگر ext که میشه پسوند فایل اگر که `png.` نبود . 

فانکشن `cb` ما بیاد یک error داشته باشه به اسم BadRequestException و همینطور false رو برگشت بده . 

اما اگر عکس ما پسوند `png.` بود ارور نداشته باشیم null باشه و همینطور true برگشت داده شه . 

در واقع فقط عکس های با پسوند 'png.' اجازه اپلود شدن دارند . 

**نکته حتما باید دات یا همون نقطه رو برای پسوند ها قرار بدیم file.orginalname.ext با دات پسوند فایل رو میگیره**

یک بار کل کد fileInterceptor به همراه stroge و fileFilter نگاه کنیم : 


```javascript
  @UseInterceptors(
    FileInterceptor('image', {
      //* storge for save image
      storage: diskStorage({
        destination: resolve(__dirname, '../', 'uploads'),
        filename: (req, file, cb) => {
          const filename = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          return cb(null, `${filename}-${Date.now()}${extension}`);
        },
      }),
      //* fileFilter for (.png , .pdf , .jpeg) and so on ..
      fileFilter: (req, file, cb) => {
        const extension = path.parse(file.originalname).ext;

        if (extension !== '.png') {
          return cb(new BadRequestException('must be pngs'), false);
        }
        return cb(null, true);
      },
    }),
  )
```


## FileInterceptor limit

در ادامه می تونیم تعیین کنیم حجم فایل اپلود شده چه مقدار باشه . 

برای اینکه حجم فایل رو مشخص کنیم و محدود کنیم کافیه از limits استفاده کنیم . 

که limit هم درون FileInterceptor استفاده میشه : 

```
  @UseInterceptors(
    FileInterceptor('image', {
      limits: { fileSize: 2000000 },
    }),
  )
```

**نکته : در کد  limits اخر قرار گرفته در واقع بعد از storge و fileFilter برای شلوغ نشدن صرفا اینجا limits رو قرار دادیم**


# Get Image

برای دیدن عکس های که ذخیره کردیم یک route از نوع Get ایجاد می کنیم . 

که این route به وسیله Param به اسم عکس ذخیره شده دسترسی میگیریم و می تونیم اونو ببنیم . 

```javascript
  @Get('/image/:imagename')
  showImage(@Param('imagename') imgename: string, @Res() res) {
    const imagePath = join(__dirname, '..', 'uploads', imgename);
    return res.sendFile(imagePath);
  }
```
یک ادرس ست کردیم به اسم `image/` که یک param داره به اسم `imagename:/` .

در ادامه  یک showImage داریم درونش از decorator @Param استفاده کردیم param که `imagename` هست رو گرفتیم نوعش رو string قرار دادیم . 

در ادامه برای ارسال عکس از decorator Res استفاده کردیم . 

درون route یک const داریم به اسم imagePath ;که از `join` استفاده می کنیم برای گرفتن ادرس عکس که در فولدر uploads قرار دارند . 

در واقع join از دورن nodejs گرفته میشه . 

```
import { join } from 'path';
```

هیمنطور param رو پاس میدیم که اسم عکسی هست که می خوایم در response ببینیم . 

در نهایت return رو داریم که یک sendFile هست که عکس گرفته شده به وسیله params رو ارسال می کنه . 

به صورت زیر درون postman در خواست می زنیم : 


![image](https://github.com/mosenn/back-end/assets/91747908/199f46fa-7298-4e66-a03b-d901823bfa0f)


# multie upload image 

در واقع مثل upload file تکی هست و stroge , fileFilter , limits همون کدی هست که برای اپلود تکی استفاده کردیم . 

اما تفاوتش یکی اش این هست که از به جای FileInterceptor از FileFieldsInterceptor استفاده می کنیم .

که از همون @nestjs/platform-express  میاد import میشه . 

```
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
```

مورد بعدی به جای اینکه صرفا یک وردی و یک اسم بگیره یک ارایه [] میگیره . 

می تونیم فیلد های مختلفی از فایل رو تعریف کنیم : 

```javascript
  FileFieldsInterceptor(
      [
        { name: 'avatar', maxCount: 1 },
        { name: 'background', maxCount: 1 },
      ],
```

**نکته اسم که قرار گرفته در واقع اسم form-data هست که از سمت فرانت یا درون postman قرار میگیره نیاز هست به همین اسامی باشه**

مقدار maxCount یعنی به تعداد 1 می تونیم background یا avatar اضافه کنیم . 


## fileFilter multi upload

تمامی کد های fileFilter و stroge و limits مثل قبل هست . 

ولی تفاوتی که اینجا داره درون `if` مربوط به fileFilter که امدیم علاوه بر 'png.'

یک فرمت عکس دیگه 'jpeg.' رو هم اجازه اپلود بهش دادیم : 

```javascript
       if (extension === '.png' || extension === '.jpeg') {
            return cb(null, true);
          }
       return cb(new BadRequestException('must be png or jpeg'), false);
```

## route for multi upload 

یک route دارییم از نوع post برای اپلود multi file . 
```javascript
  @Post('/Multiupload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'avatar', maxCount: 1 },
        { name: 'background', maxCount: 1 },
      ],
      {
         // multer options
      },
    ),
  )
  uploadMultiFiles(
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    console.log(files);
  }
}
```

**نکته : در کد بالا موارد storge, fileFilter , limits به دلیل تکراری بودن و تغییر اندک جذف شدن درون فایل کد می تونید مشاهده کنید**

در ادامه متد uploadMultiFiles رو داریم که درونش یک object به اسم files داریم : 
```javascript
  uploadMultiFiles(
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
```

که گفتیم avatar , background در واقع اسم form-data هستند که از سمت فرانت یا درون postman قرار می گیرند . 

در نهایت یک log ساده از چیزی که ارسال شده و upload میشه خواهیم داشت . 

```javascript
  uploadMultiFiles(
    // @UploadedFiles()
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    console.log(files);
  }
```

**نکته: برای گرفتن عکس ها به طور تکی می تونیم از متد Get که داشتیم استفاده کنیم . گرفتن تمامی عکس ها در این فایل کار نشده**

# Summary 

در این بخش upload مربوط به عکس رو کامل کردیم به وسیله multer . 

که storge رو برای ذخیره سازی در اختیار ما قرار میداد . 

برای filter کردن پسوند اپلود fileFilter رو برای ما قرار میداد . 

برای اینکه بتونیم حجم فایل اپلودی رو محدود کنیم limits رو در اختیار ما قرار میداد . 

یک route get نوشتیم که به وسیله params می تونستیم به عکس های که اپلود کردیم به طور تکی بتونیم ارسال کنیم 

به وسیله sendFile و درون postman مشاهده کنیم . 

اپلود رو به صورت multi داشتیم که 2 تا عکس رو با 2 پسوند متفاوت به طور همزمان اپلود کردیم . 

برای اینکار از FileFieldsInterceptor استفاده کردیم که یک ارایه [] می گرفت و درون این ارایه object قرار دادیم . 


# END 

`پایان بخش اپلود پارت دوم که عکس اپلود کردیم در پوشه uploads و درون postman به وسیله متد get نمایش دادیم`
