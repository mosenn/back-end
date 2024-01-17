# helmet

در این بخش می خوایم در مورد helmet در nestjs صحبت کنیم . 

خوده nestjs در بخش security توضیحات رو در مورد helmet گفته : 


```
https://docs.nestjs.com/security/helmet
```

 در واقع helmet یک npm package هست که در expressjs هم ازش استفاده می کردیم . 

 کاری که helmet انجام میده اضافه کردن یک سری header برای امنیت هست . 

 لینک npm helmet : 

 ```
https://www.npmjs.com/package/helmet
```

اگر لینک بالا رو باز کنید متوجه میشید که اشاره کرده چه header های اضافه می کنه : 

```
Content-Security-Policy: A powerful allow-list of what can happen on your page which mitigates many attacks
Cross-Origin-Opener-Policy: Helps process-isolate your page
Cross-Origin-Resource-Policy: Blocks others from loading your resources cross-origin
Origin-Agent-Cluster: Changes process isolation to be origin-based
Referrer-Policy: Controls the Referer header
Strict-Transport-Security: Tells browsers to prefer HTTPS
X-Content-Type-Options: Avoids MIME sniffing
X-DNS-Prefetch-Control: Controls DNS prefetching
X-Download-Options: Forces downloads to be saved (Internet Explorer only)
X-Frame-Options: Legacy header that mitigates clickjacking attacks
X-Permitted-Cross-Domain-Policies: Controls cross-domain behavior for Adobe products, like Acrobat
X-Powered-By: Info about the web server. Removed because it could be used in simple attacks
X-XSS-Protection: Legacy header that tries to mitigate XSS attacks, but makes things worse, so Helmet disables it
```

ولی قابل توجه یک نکته گفته که اشاره کرده helmet برای بخش امنیت تمامی کار ها رو نمی تونه انجام بده . 

ولی بودن helmet می تونه کمک کننده باشه برای امنیت در واقع بودنش بهتر از نبودنش هست 


## use helmet 

برای استفاده اول helmet رو به توسط npm نصب می کنیم : 

```
 npm i --save helmet
```

**نکته: پیشنهاد میشه همیشه از درون خود داکیومنت دستورات نصب انجام شه**

بعد از نصب وارد main.ts میشیم .


![image](https://github.com/mosenn/back-end/assets/91747908/dee7b1f3-4e7d-44d5-b85e-c22ddcbfd46e)


در ادامه import می کنیم helmet رو : 

```javascript
import helmet from 'helmet';
```

در نهایت درون app.use از helmet استفاده می کنیم : 

```javascript
  app.use(helmet());
```


## output helmet 

وارد وب سایت test-cors.org میشیم . 

```
https://www.test-cors.org
```

یک در خواست به api دلخواه خودمون می زنیم که در این مثال به profile در خواست زدیم . 

کنسول رو باز می کنیم وارد tab network میشیم روی tab header کلیک می کنیم . 

در قسمت response headers می بینیم که یک سری header اضافه شده که این header ها رو helmet برا بحث امنیت اضافه کرده . 


![image](https://github.com/mosenn/back-end/assets/91747908/5ba4e121-86e0-45a0-9f7b-56bb07b0e46c)


**یاداوری : helmet صرفا می تونی به امنیت کمک کننده اینجوری نیست کل امنیت رو تضمین کنه**

# Summary 

در این بخش با helmet اشنا شدیم و همینطور با نحوه اضافه کردن helmet به nestjs . 

برای اطلاعات بیشتر می تونید به npm hlemet مراجعه کنید و همینطور به داکیومنت nestjs در بخش security در مورد helmet توضیح داده شده . 

گفتم که helmet بودنش بهتر از نبودنش هست و به امنیت سایت کمک می کنه . 

یک سری header اضافه می کنه که به هدر های که اضافه می کنه هم اشاره کردیم و درون npm هم بهشون اشاره شده . 


# END 

`این بخش در مورد helmet صحبت کردیم و نحوه اضافه کردنش در nestjs`
