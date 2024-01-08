#  Diagram in nestjs 

می خوایم ببینمی middleware و interceptor در کجای nestjs ران میشن . 

هینتطور به طور کلی با روند اجرا شدن nestjs اشنا شیم .

به عکس زیر یک نگاه کلی داشته باشیم . 


<p align="center">
  <img src='https://github.com/mosenn/nestjs/assets/91747908/4bb1ee00-b3e6-4a9b-b29c-4bde7fd775d9' alt ='digram nestjs , middleware and interceptor in nestjs' />
</p>


در تصویر بالا یک requset به nestjs زده شده می خوایم روند این requset رو بررسی کنیم . 

ببینیم چه مسیری طی میشه تا این requset به response میرسه و از چه چیزای در طی مسیر رد میشه . 


# Middleware

اولین مورد middelware هستش . 

زمان اجرای middelware در nestjs بلافاصله بعد از requset هست . 

استفاده از middelware ها در nestjs مشابه expressjs هستش . 

**نکته: middelware بعد از اینکه requset ازش عبور کرد دیگه اجرا نمیشه 
 بر خلاف interceptor که هم زمان requset اجرا میشه هم response که بهش میرسیم**

 بعد از چک شدن middelware به قسمت Guards میرسیم . 

 # Guards

وظیفه Guard در nestjs

برای یک route به تنهای می تونه استفاده شه برای یک متد خاص  

برای یک controller  استفاده میشه که میاد کل  روت های مربوط به کنترل رو هندل می کنه . 

اگر role های مختلفی داشته باشیم برای دسترسی به وسیله guard می تونیم کنترل کنیم دسترسی ها رو . 

به وسیله guard می تونیم برخی از authCheck های که نوشتیم رو skip کنیم این قابلیت رو هم داره . 

می تونیم چند تا guard مختلف داشته باشیم با توجه به نیازمون برای route , controller های مختلف . 


بعد از midellware گارد اتفاق می افته . 

قبل از route , controller اتفاق می افته .

همونطور که گفته شد می تونیم به چند صورت guard رو تعریف کنیم : 

Global
Controller
Route (method) scope

به طول کلی برای کل پروژه 

فقط برای یک controller . 

فقط براز یک route خاص با یک متد خاص . 



# Interceptor 


خب interceptor  مشابه middelware عمل می کنه . 

تفاوت interceptor با middelware اینه که , interceptor هم زمان requset دسترسی داره هم بعد زمان response . 

در واقع interceptor قبل و بعد از اینکه route ها صدا زده میشن همچنان دسترسی داره . 

اما middelware صرفا قبل از اینکه route صدا زده شه عمل می کنه و بعدش دیگه middelware دسترسی نداره . 
### use case interceptor


برای اینکه بتونیم loggin رو داشته باشیم از interceptor استفاده می کنیم .

برای اینکه قبل یا بعد بیایم data که داریم رو تغییر بدیم می تونیم از interceptor استفاده کنیم (transformer ) 

می تونیم validation رو داشته باشیم به وسیله interceptor . 

برای  Authentication و Authorization استفاده میشه . 

همینطور برای    exception mapping که می تونیم بیایم exception بنویسیم و ازش درون route , controller استفاده کنیم . 

### define interceptor way 
هم به صورت global امکانش هست در main.ts

هم برای یک controller به طور کلی تعریف شن 

هم اینکه صرفا برای یک route به تنهای  تعریف شن . 

# Pipe 

بعد از اجرا شدن inteceptor نوبت به اجرا شدن pip های که تعریف کردیم میرسه . 

از pipe ها برای ولیدیشن استفاده می کنیم . 

سوال پیش میاد که به وسیله pipe ولیدیشن رو انجام بدیم یا به وسیله interceptor . 

برای validation و transformation از pipe استفاده کنیم . 

از interceptor برای response  mapping , caching , logging استفاده کنیم . 

بعد از pipe نوبت به ران شدن controller میرسه 

### define pipe 

تعریف کردن pipe هم به صورت global می تونه باشه . 

هم برای یک controller که در برگیرنده route هاست . 

هم فقط برای یک route تعریف شه  . 
# Controller

بعد از اینکه pipe انجام شد نوبت به controller میرسه . 

اول controller اجرا میشه و بعدش method های که درونش هستند اجرا میشن . 

در نهایت service اجرا میشه .


# Requset ( post requst ) 

در عکسی که داریم method post رو مثال زده . 

در نهایت بعد از controller اگر همه چی اوکی باشه متد post اجرا میشه . 

# Interceptor if have 

اینجا اگر interceptor برای بعد از اینکه requset انجام شه . 

اگر interceptor وجود داشته باشه بر می گیرده اونو اجرا می کنه . 

# Exception filter 

در نهایت قبل از اینکه response رو ارسال کنه nestjs 

میاد ببینه Exception filter وجود داره یانه . 

که این exception filter ها رو درون logic کد قرار دادیم . 

با توجه به نیازمون . 

# Response


اینجا اگر همه چی اوکی باشه response رو داریم . 

که می تونه شامل exception filter باشه یا message یا data . 

یا هر چیزی دیگه ای که به عنوان response به سمت فرانت اند فرستادیم . 


# End 

<h1 align='center'>پایان diagram nestjs </h1>
