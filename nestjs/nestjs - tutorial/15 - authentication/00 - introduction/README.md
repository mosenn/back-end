# Authentication

می خوایم در مورد authentication در nestjs صحبت کنیم . 

در این فایل قرار مراحلی که اتفاق بیوفته برای اینکه بتونیم authentication رو داشته باشیم توضیح میدیم . 


برای اینکار نیاز داریم که اول user ما عملیات register رو داشته باشه در ادامه user نیاز هست بتونه login رو داشته باشه در وب سایت ما . 

که با توجه به هر پروژه اطلاعات register می تونه متفاوت باشه .

اما معمولا username , passowrd هست یا email , password هستش که ما در پروژه از email , password استفاده می کنیم . 

قابل توجه هر چیز مهمی باید hash شه که نیاز هست password رو hash کنیم . 

در واقع hash کردن یک نوع رمزگذاری هست که موارد مهم رو می تونیم hash کنیم

مثل password کاربران , که به صورت رمزگذاری درون data base پسورد ذخیره میشه .  

برای اینکه مراحل رو به طور کلی یک نگاه کنیم به تصویر زیر نگاه کنید 

به طور کلی توضیح داده شده مراحل authentication : 

![image](https://github.com/mosenn/nestjs/assets/91747908/4addd7a9-cb78-4a1d-b868-05a31a652ea4)


# Browser client 

کاربر یک در خواست به سمت سرور می زنه که در تصویر بالا از نوع POST هست این در 

خواست که به یک route در اصل درخواست میزنه در تصویر بالا ادرس authentication/ 

هستش و user میاد اطلاعات مربوط به register رو وارد می کنه . 

وردی های ارسال شده توسط user در server مورد بررسی قرار میگیره . 

# login / register

درون سرور میایم اطلاعاتی که کاربر فرستاده شده رو بررسی می کنیم 

اگر ثبت نام باشه خوب اون اطلاعات ارسال شده باید درون دیتابیس ما ذخیره شن . 

اگر برای لاگین باشه اون اطلاعات دریافتی باید با اطلاعات درون data base تطابق 

داشته باشه که اگر یکی بودند کاربر می تونه login شه . 


# create token 

زمانی که کاربر با موفقیت login شد یک token ایجاد می کنیم , که این token به وسیله jwt که مخفف json web token هست . 

ساخته میشه درون این token میایم اطلاعات مروبوط به کاربری که login شده قرار میدیم

در ادامه هر جای که نیاز داشته باشیم به اطلاعات کاربر دسترسی داشته باشیم از این token که ایجاد کردیم استفاده می کنیم 

برای اینکه چیزای که مربوط به خوده کاربری که لاگین شده رو برگشت بدیم نیاز درایم یک توکن ارسال کنیم تا متوجه شیم چه کاربری با چه مشخصاتی الان لاگین هست 

این کار به این دلیل هست که ارتباط http که بین فرانت و بک اند داریم نوعش  stateless  هست نمی تونیم اطلاعاتی از سمت فرانت درون سرور ذخیره کنیم 

که برای دفعات بعدی که کاربر وارد سایت ما میشه مطئمن شیم .

ایا همون کاربر هست یا یک کاربر دیگه برای همین از token استفاده می کنیم

فرض کنیم لاگین می کنه کاربر و می خواد پرفایل خودشو ببینه طبیعتا نیاز هست که پرفایل خودشو ببینه 

نه شخصی دیگه برای همین از توکن استفاده می کنیم و اطلاعات کاربر رو زمان لاگین شدن ذخیره می کنیم درون token 

حالا هر جا نیاز بود از این اطلاعات استفاده می کنیم  . 

# page accesse
یک سایت وبلاگ رو در نظر بگیرید . 

یک سری صحفات برای همه افراد در دسترس هستند مثل صحفه home page یا about us  . 

اما برخی از صحفات مخصوص خود کاربر هست مثلا صحفه پرفایل کاربر یا صحفه post های که داره اینجا میایم از توکنی که ایجاد کردیم استفاده می کنیم 

# Summary 

اول نیاز هست کاربر بیاد register رو انجام بده اطلاعات کاربر در دیتابیس ذخیره میشه

در ادامه کاربر login رو انجام بده که درون سرور مقدار ورودی که کاربر هنگام لاگین کردن در سمت فرانت اند وارد می کنه 

در بک اند جک میشه اکر این مقدار درون دیتابیس بود login با موفقیت انجام میشه و کاربر لاگین میشه . 

هنگام login یک توکن ایجاد شه که اطلاعات کاربری که لاگین شده رو دربر می گیره  

در ادامه برای درخواست های که نیاز به احراز هویت داره توکن ایجاد شده رو درون header قرار میده در فرانت اند . 

در سمت بک اند چک میشه اگر این hedaer ارسالی اوکی باشه response برگشت داده میشه 

**نکته: روش های دیگه ای هم برای احراز هویت هست که این روش مرسوم ترین روش است
از این روش می تونیم در وب و اپلیکیشن موبایل استفاده کنیم در ادامه همین سبک پیاده سازی میشه**

# END 

**پایان introduction authentication**