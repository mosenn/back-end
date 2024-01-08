
# Blog Project 
## Technologies

Reactjs ,  Typescript , Tailwindcss  , expressjs , mongodb ,

<p align="left"> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


# clinet key for search in README file 
CLIENT , PACKAGE.JSON , APP.TSX , COMPONENT :  ,PAGES , API FOLDER , BASE URL AXIOS OPTION , 

FUNCTION REGISTER USER ,PARAMETER USERREGISTERDATA , TYPE USERREGISTERDATA , 

COUNTINUE REGISTER USER FUNCTION , CATCH BLOCK REGISTER USER FUNCTION , FUNCTION LOGINUSER ,

LOGINUSER PARAMETER , LOGINUSER PARAMETER TYPE , FUNCTION PROFILEUSER , FUNCTION LOGOUTUSER ,

FUNCTION UPLOADREGISTERIMAGE , PAREMETER UPLOADREGISTERIMAGE , COMPONENTS & PAGES , 

REGISTER.TSX PAGE , SUBMIT FUNCTION REGISTER.TSX , CONTINUE REGISTER.TSX PAGE , 

TOAST COMPONET ,  LOGIN.TSX PAGE , HEADER.TSX COMPONET , BACK TO HEADER.TSX ,

LOGOUT FUNCTION , POSTS IN CLINET , POST API , API POST FUNCTIONS , CREATEPOST FUNCTION IN API , 

GET ALL POSTS FUNCTION IN API , GET POST WITH USER , PUT EDIT POST , DELETE POST FUNCTION , 

CREATE POST COMMPONENT , SHOW POSTS IN HOME PAGE , DETAIL POST COMPONET , 

SEND COMMENTS IN DETAIL PAGE , TAKEALLCOMMENTS FUNCTION (GET ALL POST FOR DETAIL ) ,

LIKES POST IN DETAIL PAGE , LIKES POST IN DETAIL PAGE , POST LIKE , 

TAKEALLLIKES FUNCTION IN DETAIL.TSX , GET TAKESAVES FUNCTION IN DETAIL.TSX , 

RUN TAKEALLLIKES , TAKESAVES , TAKEALLCOMMENTS ,

 hook UserCheckingLogin , takeUserPost in panel , deletePostUser in panel.tsx , 
panel page , button component , Loading component , comment.tsx in api folder , userIntraction.tsx in api folder
 postLike, getLikes , postSave , getSave







# Server key for search in README file 

 #Server  , #Run Clinet & Server , #Server Packages : ,  ### cors , ###bcryptjs 
 
###body-parser , ### cookie-parser , ### dotenv , ### expressjs , ### jsonwebtoken 

###mongoose , ### yup , # Create Server , # Index.js File , ### Define app , 

###middelware use , ### Saving Image In Server , ### define cors , ### listen , 

###run server , ###define test route , # Connect to mongodb , # Server Folders , 

###model folder , ###user.js, ### has password , ### create model connect to collection , 

#Midelware Folder , # Validation Middleware , # Controller Folder , ## user.js controller , 

###registerUser Controller , ### LoginUser Controller , ### profileUser Controller , 

###logoutUser controller , ### exports all controller , # Routes Folder , # Posts , 

###Post Schema , ### Post controller , ### Create post controller , ## Get all post controller , 

###User post controller , ### Edit post controller , ### Delete post , # Post Router ,

#create comment schmea and model , #comment controller , ###createComment function in controller comment
###getCommentsByPost function in controller comment , #route comments controller , 
###toggelLikePost controller userInteraction , ###getLikes controller userInteraction
###toggelSavePost controller userInteraction , ###getSave controller userInteraction






# summery 

یک پروژه بلاگ که کاربران قابلیت لاگین کردن - ایجاد پست و کامنت گذاری و هر قابلیت که یک بلاگ داره. 

همچنین هر نویسنده پست می تونه پست خودش رو ویرایش کنه اما اجازه ویرایش پست دیگران رو نداره . 

قابلیت کامنت گذاشتن و لایکن کردن  هر پست به وسیله کاربران . 




# directory : 

2 فولدر وجود داره به اسم های clinet و server که درون فولدر clinet فایل های مربوط به فرانت هست 

درون فولدر server فایل های مربوط به server . سرور به وسیله nodemon روی port 2023 لوکال ران میشه . 

در بخش فرانت reactjs به وسیله vitejs +typescript + swc ساخته شده . 

که با دستور `npm run dev` ران خواهد شد .

# Client

درون پوشه client فایل بندی ها مون به صورت زیر هست : 
<div align='center'>
  <img src='https://github.com/mosenn/MERN/assets/91747908/81ba2f5d-4718-485e-9f99-2491f2f9a4f2' alt='blog with react and expressjs'/>
</div>



  
# package.json 

پکیج های که سمت فرانت پروژه استفاده میشه : 

```javascript 
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "axios": "^1.4.0",
    "cloudinary-react": "^1.8.1",
    "jsdom": "^22.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.12.1"
  },
```

و همینطور Devdependencies : 
```javascript
  "devDependencies": {
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.59.0",
    "@typescript-eslint/parser": "^5.59.0",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.38.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.2",
    "vite": "^4.3.9",
    "vitest": "^0.32.0"
  } 
```

# App.tsx

درون فایل app امدیم route بندی ها رو انجام دادیم به وسیله react-router-dom 

کامپونت ها import شده و با توجه به نیاز پروژه route بندی ها انجام شده . 
```javascript 
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

# component : 

در فولدر `component` کامپونت های مورد نیاز و تکرار شدنی  قرار داده شده . 


<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/0a083629-ef75-4ff3-8527-c0c621ba6f70' alt='react component'/>
</div>

درون `toast` یک پیام به ما نشون میده . و می تونیم از این کامپونت هر جا خواستیم استفاده کنیم . 

درون پروژه در بخش های login , register از این componet استفاده کردیم . 

درون `header` که همونظور که از اسمش مشخص هست header سایت رو قرار دادیم و در app.tsx قرار دادیم 

به این دلیل که  header رو درون تمای بخش های پروژه می خوایم که باشه . 

کامپونت داریم به اسم `button`  که دکمه های سایت ما رو تشکیل میده و هر جا نیاز به `button` درون پروژه باشه 

از کامپونت `button` استفاده می کنیم .

یک کامپونت `loading` داریم که هر جای نیاز به `loading` داشته باشیم از این کامپونت استفاده می کنیم . 


# Loading component

در کامپونت `loading` امدیم از `react-spinner` استفاده کردیم . 

```javascript
import { HashLoader } from "react-spinners";

```
از `Hashloader` یک نوع لودینگ هست که داریم در پروژه ازش استفاده می کنیم . 

زمانی که کاربر عکس می خواد اپلود کنه یا برای لودینگ صحفات ازش استفاده کردیم . 

درون  کامپونت `loading` کد زیر رو `return` می کنیم . 
```javascript
const Loading = ({ size, color }: loadingProps) => {
  return <HashLoader size={size} color={color} />;
};

export default Loading;
```

نوع تایپ `props` های کامپونت `loading` هم به صورت زیر هست : 

```javascript
interface loadingProps {
  size?: string | number;
  color?: string;
}
```

# button component 

یک کامپونت داریم برای `button` های که می خوایم استفاده کنیم . 

که به صورت زیر تعریف کردیم . 

```javascript
export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
  icon,
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      {" "}
      <span className="p-2"> {text}</span>
      <p>{icon}</p>
    </button>
  );
}
```

هر جای نیاز داشته باشیم که `button` استفاده کنیم ترجیحا از این `component button` استفاده می کنیم . 

نوع تایپ `props` این کامپونت به صورت زیر هستش : 

```javascript
interface buttonProps {
  text?: string | any;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  // onClick?: () => Promise<void>;
  onClick?: () => void;
  icon: any;
}
```
# pages

<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/e7a2aba5-bd2d-427a-92f2-34689c65275d' alt='react component'/>
</div>



درون فولدر `pages` در واقع صحفات وب رو داریم .  

 
 
 # Api Folder



<div algin='center'>
<img src='https://github.com/mosenn/MERN/assets/91747908/6f19569b-0a6b-4d7b-a0ad-39c04a37a463' alt='reactjs api'/>
</div>



### users.tsx 
درون فولدر `api` کار های مروبط به api رو انجام میدیم  . 

در فایل users.tsx به وسیله axios مراحل ثبت نام کاربر و لاگین شدن کاربر انجام میشه . 

در مرحله اول axios ایمپورت میشه . 

```javascript 
import axios from "axios";

```

### Credentials in client with axios
به دلیل اینکه در سمت سرور coockie رو ست میشه و ارسال میشه به وسیله یک api که نوشته شده . 

در سمت client نیاز هست از `Credentials` استفاده کنیم . 

نحوه سست کردن `Credentials` : 
```javascript
axios.defaults.withCredentials = true;
```

در axios اپشن credentials به صورت پیش فرض false هست بنابراین نیاز داریم که به true تغییرش بدیم .

### Base url axios option

می تونیم از اپشن baseUrl axios استفاده کنیم برای ست کردن ادرس api مد نظرمون . 

```javascript
const baseUrl = axios.defaults.baseURL = "http://localhost:2023"
```
در واقع کد بالا شبیه کد پایین هست : 

```javascript
const url = "http://localhost:2023"
```

### Function register user 
فانشن `registerUser` کار ثبت نام کاربر رو انجام میده . 

در واقع اطلاعات کاربر رو میگیره و به سمت server ارسال می کنه . 

```javascript
export const registerUser = async (

};
```
**نکته** : تمامی فانکشن های مربوط به api از نوع async هستند و همینطور export شدن 



### register user function parameters

- UserRegisterData


```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
) => {
};
``` 
#### Parameter UserRegisterData

خب parameter userRegisterData در واقع یک state هست . 

که این state تمامی value های مربوط به input های ثبت نام رو دورن خودش ذخیره کرده . 

به طور خلاصه اطلاعات کاربری که ثبت نام کرده رو درون خودش داره . 


#### Type UserRegisterData

از اونجای که از تایپ اسکریپت استفاده می کنیم . 

نوع تایپ parameter مشخص شده . 

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

) => {
};
```

نوع تایپ parameter UserRegisterData برابر شده با registeruserType . 

```typescript
interface registeruserType {
  username?: string;
  password: string;
  confirmPassword: string;
  pic: {};
}

```

که در واقع یک `interface` تعریف شده هست . 


**نکته**: برای تعریف کردن نوع تایپ ها از قابلیت interface تایپ اسکریپت استفاده شده .   

که همونطور که مشاهده میشه اطلاعات مربوط به کاربر هست که برار با `string` . 




فانکشن  registerUser میشه کد زیر : 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
  
) => {
};
```

**نکته**: علامت ؟ در کد interface بالا به این معنی optional بودن هست . 


در واقع ؟ چک می کنه اگر مقادیر ما وجود داشتند  `undefinde` نبودند .

نوع تایپ شون `string` هست . 

دقیقا همون کار که در javascript انجام میدیم . 

مثلا : 
```javascript
data?.users.map((user)=> return <p>{user}</p>)
```
در کد بالا از ؟ استفاده کردیم و گفتیم اگر که data وجود داشت . 

بیاد users ها رو map کنه . 

# countinue register user function

خب پارامتر های فانکشن registerUser رو توضیح داده شد . 

درون فانکشن به value input ها دسترسی داریم  . 

```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,
) => {
try {}
  catch(err) {}
};
```

برای اینکه بتونیم error هارو هم داشته باشیم بلاک catch رو تعریف کردیم . 

در کل error هارو handle کنیم از block try / catch استفاده می کنیم . 
```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

) => {

  try {
  } catch (err: any & { response?: unknown }) {
  }
};
```
درون بلاک try میایم اطلاعات خودمون رو به وسیله axios می فرستیم .

چون به ادرس api خودمون rigster/ میایم اطلاعات کاربر رو ارسال می کنیم . 

قبلا هم که [baseUrl](#base-url-axios-option) بالا تر توضیح دادیم 


```javascript
export const registerUser = async (
  UserRegisterData: registeruserType,

) => {

  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {

    });
    );

  } catch (err: any & { response?: unknown }) {
  }
};
```
در واقع userRegisterData اطلاعات کاربری هست که ثیت نام کرده رو می فرستیم . 

که  userRegisterData یک state هست درون کامپونت Register.tsx که اطلاعات input هارو ذخیره می کنه .

 



در ادامه `headers` ست شده . 


```javascript
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
```
در نهایت متغیری که برای ارسال اطلاعات به اسم `register` تعریف شده . 

درون بلاک try میایم return می کنیم . 

به این دلیل که می خوایم اطلاعاتی که api به ما response میده رو درون کامپونت [Register.tsx](#function-register-user)

دسترسی داشته باشیم . response که api /register به ما میده در واقع اطلاعات کاربری هست که ثبت نام کرده . 

در نهایت درون بلاک try کد زیر رو خواهیم داشت : 
```javascript
export const registerUser = async (UserRegisterData: registeruserType) => {
  // console.log(UserRegisterData);
  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {

  }
};
```
**نکته**: می تونیم برای اطمینان بیشتر که `data` رو داریم یا خیر یک `console.log` داشته باشیم

قبل از `return` 

```javascript
 console.log(register, "response user is register");
```

### catch block register user function

درون بلاک `catch` میایم ارور های مربوط به register error کنترل می کنیم . 

اگر یادتون باشه یک [setErrorRegister](#parameter-seterrorregister) به عنوان parameter داشتیم . 

که وظیفه این set state در واقع ذخیره کردن ارور های مربوط به ثبت نام کاربر هست  . 

در نتیجه این ارور هارو درون یک state به اسم errorRegister خواهیم داشت . 

که این state در کامپونت Register.tsx ایجاد شده . 

از اونجای که ارور های ما از سمت سرور به صورت ابجکت ارسال میشه . 

در نتیجه state errorRegister به صورت ابجکت است . 

بلاک catch : 

```javascript
catch (err: any & { response?: unknown }) {
    const errors = err?.response?.data;
    return errors;
  }
```

نوع تایپ err رو روی any گذاشتیم و نوع response رو گفتیم اگر `undefinde` نبود بیاد `unknown` باشه

به این دلیل که نمی تونیم تشخیص بدیم که نوع تایپ err دقیقا چی می تونه باشه . 

خب در نهایت کد کامل register function به صورت زیر هست : 

```javascript
export const registerUser = async (UserRegisterData: registeruserType) => {
  // console.log(UserRegisterData);
  try {
    const register = await axios.post(`${baseUrl}/register`, UserRegisterData, {
      headers: { "Content-Type": "application/json" },
    });
    // console.log(register, "response user is register");
    return register;
  } catch (err: any & { response?: unknown }) {
    const errors = err?.response?.data;
    return errors;
  }
};
```
که اطلاعات کاربر رو میگیره و به سمت `server` ارسال می کنه . 

در نهایت `server` اطلاعات کاربر رو در دیتا بیس ذخیره می کنه . 

# Function LoginUser 

درون فولدر [api](#base-url-axios-option) در فایل user.tsx یک فانکشن برای login شدن کاربران داریم . 

کار این فانکشن ارسال اطلاعات کاربرانی که قصد لاگین کردن رو دارند به سمت `server` . 

برای این مورد server یک api در نظر داره . 

متد api از نوع `post`  . 

ادرس api مد نظر ما برای لاگین login/ . 

**نکته** : قبل تر اشاره کرده بودیم که تمامی فانکشن ها از نوع `async` هستند و همینطور `export` شدند .

```javascript
export const loginUser = async (userLoginData: loginValue) => {

};
```
یه نگاهی به import های درون login.tsx بندازیم . 


```javascript
   const { setUserInforOnline, userInfoOnline } = useGlobalContext();
  const navigate = useNavigate();
  const [toast, setToast] = useState<Boolean>(false);
```

یک state داریم که از useGlobalContext داره گرفته میشه . 

که در بخش [Header.tsx](#headertsx-componet) ساخت  [context](#create-context) گفته شده . 

### loginUser parameter 

فانکشن loginUser یک parameter داره به اسم userLoginData که در واقع یک state .

درون این state یک ابجکت قرار گرفته به صورت default . 

این state درو کاممپونت Login.tsx تعریف شده و همونجا هم به فانکشن loginUser پاس داده شده . 

### loginUser parameter type 

تایپ این پارامتر که گفتیم یک ابجکته و حاوی دو تا key به اسم `username` و `password` . 

این دوتا درواقع value اینپوت هست که کاربر برای login شدن وارد می کنه . 

هر دو `string` هستند   , `interface` پارامتر  : 

```typescript
interface loginValue {
  username: string;
  password: string;
}
```

**نکته** : هر فانکشن مربوط به کار با api یک بلاک try / catch داره . 

که درون بلاک try سعی بر گرفتن response میشه . 

و در صورت هر گونه error بلاک catch اجرا میشه . 

درون بلاک catch می تونیم ارور هامون رو کنترل کنیم . 


کد فانکشن loginUser : 
```javascript
export const loginUser = async (userLoginData: loginValue) => {
  try {
    const user = await axios.post(`${baseUrl}/login`, userLoginData);
    console.log("User Data in api LoginUser Function", user);
    return user;
  } catch (err) {
    console.log(" login api err ", err);
     return err;
  }
};
```
در بلاک try به وسیله axios دیتا مد نظرمون 

که  اطلاعات کاربر که قصد لاگین هست رو فرستادیم . 

در ادامه `user` که لاگین شده رو return شده .
```javascript
return user;
```

به این دلیل که می خوایم بعدا در جای دیگه از این data که داریم استفاده کنیم . 


# Function profileUser 

فانکشن profileUser در واقع برای نشون دادن اطلاعات کاربر استفاده میشه . 

کاربری که لاگین کرده اطلاعات کاربر لاگین شده در فانکشن profileUser برگشت داده میشه . 

اطلاعات کاربر رو میگیریم و ذخیره می کنیم که جلو تر بررسی می کنیم . 

در نهایت هر جا خواستیم نشون میدیم . 

```javascript
export const profileUser = async () => {
  try {
    const user = await axios.get(`${baseUrl}/profile`);
    return user.data;
  } catch (err) {
    console.log(" profile api err", err);
        return err;
  }
};
```

# Function logoutUser 

این فانکشن در فرانت اند در فولدر api کار logout شدن کاربر انجام میده . 

یک api برای اینکار نوشته شده که به محض ران شدن این فانکشن کاربر مد نظر logout میشه . 

```javascript 
export const logoutUser = async () => {
  try {
    const user = axios.post(`${baseUrl}/logout`);
    return user;
  } catch (err) {
    console.log(" logoutUser api err", err);
    return err;
  }
};
```
# Function uploadRegisterImage 

اخرین فانکشنی که در بخش api داریم مربوط به اپلود شدن عکس پرفایل کاربر هست . 

کاربر در زمان ثبت نام می تونه یک عکس رو به عنوان پرفایل خودش انتخاب کنه . 

ایتجا از یک سایت خارجی که فضای ابری در اختیار ما قرار میده استفاده کردیم . 

اسم سایت `coludinary` هست که می تونیم فایل درونش اپلود کنیم . 

در نهایت به عنوان ریسپانس یک لینک انلاین برای دانلود فایل مد نظر مون میده . 

``` javascript
const cloudinaryApi = `https://api.cloudinary.com/v1_1/cloud_name/image/upload`;

export const uploadRegisterImage = async (pic: {} | any) => {
  try {
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "****");
    data.append("cloud_name", "****");
    const res = await axios.post(cloudinaryApi, data, {
      withCredentials: false,
    });
    console.log(res, "response");
    return res;
  } catch (err:any) {
    console.log(err);
    return err;
  }
};
```

### Paremeter uploadRegisterImage

یک parameter به اسم pic هست .

 عکسی هست که کاربر به عنوان عکس پرفایل انتخاب می کنه . 

 این عکس از روی سیستم کاربر گرفته میشه . 

 برای اینکه بتونیم این عکس ارسال کنیم به api سایت `cloudinary`  . 

 نیاز هست که از `FormData` درون `javascript` استفاده کنیم . 

 3 مورد رو append می کنیم درون FormData که مورد اول file هست . 

 مقدار file رو برابر با pic قرار میدیم عکسی که کاربر گذاشته . 

 2 مقدار بعد مربوط به api سایت `cloudinary` هست . 

این 2 مقدار نیاز هست که ست شن یکی `upload_preset` هست که از خوده سایت باید بگیریم 

یکی `cloud_name` هست که اینو هم از داخل dashboard سایت `cloudinary` بر میداریم . 

**نکته** : cloud_name هم نیازه که append شه هم اینکه در ادرس api استفاده شه 

```javascript 
const cloudinaryApi = `https://api.cloudinary.com/v1_1/cloud_name/image/upload`;
```
```javascript 
  data.append("cloud_name", "*****");
  ```

از موارد cloud_name و upload_preset نیاز هست که به صورت secret باشند .

از دسترس دیگران خارج باشن تا شخصی از این دو مورد و اکانت شما نتونه استفاده کنه .

در ادامه فانکشن داریم دیتای خودمون رو که در واقع عکس کاربر هست رو پست می کنیم . 

به سایت `cloudinary` که یک api در اختیار ما قرار داده برای اپلود فایل . 

اینجا عکس که درون فرم دیتا قرار دادیم و موارد مربوط به api رو ست کردیم 

ارسال می کنیم به api cloudinary 

```javascript
  const res = await axios.post(cloudinaryApi, data, {
    withCredentials: false,
  });
```
**نکته** :
در اینجا options [withCredentials](#credentials-in-client-with-axios) روی false گذاشتیم . 

از لینک بالا می تونید section مربوط به withCredentials رو بخونید . 

به این دلیل که قبلا برای تمامی api ها گفتیم withCrednetials":true باشه . 

اما وقتی که می خوایم با یک api دیگه کار کنیم ممکنه به ما ارور `cors policy` بده . 

و api ما به درستی کار نکنه . 

به همین دلیل برای کار با api cloudnariy نیاز داریم

که `withCredentials` رو روی false بزاریم 

تا با ارور cors policy مواجه نشیم . 

در ادامه `response` که در یافت می کنیم return شده . 

یک بار دیگه به کل فانکشن نگاه کنیم : 

```javascript 
 const cloudinaryApi = `https://api.cloudinary.com/v1_1/cloud_name/image/upload`;
export const uploadRegisterImage = async (pic: {} | any) => {
  const data = new FormData();
  data.append("file", pic);
  data.append("upload_preset", "*****");
  data.append("cloud_name", "*****");
  const res = await axios.post(cloudinaryApi, data, {
    withCredentials: false,
  });
  return res;
};
  ```
ریسپانسی که api سایت `cloudinary` به ما برگشت میده . 

لینک انلاین عکس اپلود شده هست . 

در نهایت لینک انلاین عکس رو به سمت `server` درون کامپونت Register.tsx پاس میدیم . 

و از عکسی که کاربر اپلود کرده و ما به لینک اش دسترسی داریم . 

به عنوان عکس پرفایل استفاده می کنیم . 


تا به اینجا در مورد فولدر [api](#api-folder) درون clinet صحبت کردیم . 

می خوایم بریم سراغ کامپونت ها . 

# Components & pages

### Register.tsx page

درون این کامپونت مراحل ثبت نام کاربر انجام میشه . 

یک فرم داریم که درونش input های مربوط به ثبت نام کاربر هست . 

که value های اینپوت هارو ذخیره می کنیم و به سمت سرور ارسال می کنیم . 

و البته `validation` سمت server انجام شده  . 

اگر error مربوط به register باشه به عنوان response می گیریم . 

در نهایت هنگام submit شدن form به کاربری که قصد register داره نمایش میدیم . 


صحفات رو درون `pages` قرار دادیم  . 

کامپونت Register.tsx درون pages هست . 


![image](https://github.com/mosenn/MERN/assets/91747908/a4d89f51-b53f-4612-8e73-2bae7c410898)


درون کامپونت Register.tsx  یک فروم return میشه به همراه input ها و یک toast .

```javascript
  return (
    <div className="h-[90vh]  justify-center items-center flex">
      <img
        src="https://www.file.io/mF2X/download/PYCrjx1HYrkG.men-1.jpg"
        alt="test"
      />
      {toast && (
        <Toast text={"register is success redirect to login"} toast={toast} />
      )}

      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>

        {errorRegister?.username}
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        {errorRegister?.password}

        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <label
          className="ml-2 font-semibold text-gray-900"
          htmlFor="confirmPassword"
        >
          confirm password
        </label>
        {errorRegister?.confirmPassword}
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="confirmPassword"
          name="confirmPassword"
        />
        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          upload profile picture
        </label>
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="file"
          id="pic"
          name="pic"
          accept=".png, .jpg, .jpeg .webp"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Register"
            type="submit"
          />

          <button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            type="button"
            onClick={Uploadimage}
          >
            upload image
          </button>
        </div>
      </form>
    </div>
  );
```

درون `form` یک فانکشن داریم برای `submit` شدن فرم . 

به اسم handleSubmit . 

```javascript
      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
```

در input ها فانکشن `onChangehandle` رو داریم . 

دقت کنید که name هر input منحصر به فرد خودش هست . 

و نیاز هست با state که value های اینپوت رو ذخیره می کنه یکی باشه . 

```javascript
    <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>

        {errorRegister?.username}
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        /> 
```
هر input درونش یک فانشکن به اسم `handleOnChange` اتفاق می افته . 

که این فانکشن وظیفه گرفتن value اینپوت ها رو داره . 

و value اینپوت ها رو ذخیره می کنه درون یک state . 

در ادامه ارور های مربوط به هر input رو در پایین label تعریف شده . 

```javascript
  {errorRegister?.username}
```

خب نوبت به گرفتن تمامی value های input ها میشه برای اینکار نیاز به یک state داریم . 

```javascript
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: {},
    //* default image set
    // pic: "https://i.postimg.cc/PfvxsgPB/woman-2.png",
  });
```

همونطور که در کد بالا مشاهده میشه state تعریف شده یک object هست . 

مقادیری که می خوایم ذخیره کنیم `key` ها رو درون object تعریف می کنیم . 

فقط یک مورد از این key ها متفاوت هست که `pic` هست . 

نوع `pic` یک ابجکت گذاشتیم جلو تر دلیل اینکار مشخص میشه . 

اگر خواستیم به صورت default عکس کاربر رو ست کنیم می تونیم یک عکس upload کنیم و ادرس شو درون pic قرار بدیم . 

البته این موضوع رو در سمت `server` هم می تونیم هندل کنیم . بازم جلو تر بررسی می کنیم . 

خب حالا نوبت به تعریف فانکشن `handleOnChange` می رسه که این فانکشن رو برای تمامی اینپوت ها تعریف می کنیم . 

```javascript
 const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setRegister({ ...register, pic: file });
      }
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", register);
  };
```
پارامتر `e` در واقع event هست که به input ها اشاره داره . 

به دلیل اینکه از `type script` استفاده می کنیم . 

نوع type هر event و هر parameter رو مشخص می کنیم . 

در اینجا نوع این event در واقع `<React.ChangeEvent<HTMLInputElement` هست . 

نوع هر event نسبت به کاری که انجام میدن نوع type شون متفاوت هست . 

در قدم اول  یک `if` داریم برای چک کردن `name` که اگر pic بود . 

بیاد مقدار `[0].?files` رو بگیره و درون state که register که تعریف کردیم ذخیره کنه . 

اینکار به این دلیل هست که value pic با بقیه input ها متفاوت هست . 

و `[0].?files` به اولین عکسی که انتخاب شده توسط کاربر اشاره داره . 

```javascript 
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setRegister({ ...register, pic: file });
      }
```

یک if درونش گفتم اگر name === pic بود  . 

یک متفییر به اسم file ایجاد شه `[0].?files` رو درونش خودش نگه داره . 

همچنین باز نیاز هست که نوع typesh مشخص شه که اینجا یک `as HTMLInputElement` تعریف شده برای type

در نهایت باز یک if گفتیم اگر که file بود . 

و state تعریف شده register بیاد set شه تمامی مقادیر قبلی خودش رو حفظ کنه . 

اما مقدار `pic` که ابجکت بوده برابر شه با مقدار file . 

که قبل تر درون یک متغییر ذخیره کردیم . 

یک بار دیگه به کد نگاه کنیم : 


```javascript 
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setRegister({ ...register, pic: file });
      }
```

در ادامه یک else داریم که میایم مقادیر دیگه رو هم که `string` هستند ذخیره می کنیم . 

```javascript
 else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
```
تمامی مقادیر قبلی state register رو ذخیره کردیم به وسیله `spread operator`  . 

**نکته** : کل state که تعریف کرده بودیم یک ابجکت هست . در نتیجه زمان set شدن . 

کل شو درون یک ابجکت  {}  قرار میدیم . 

و درون یک ارایه `key` رو می زاریم name که برای input ها تعریف کردیم . 

در نهایت value هر input رو ذخیره می کنیم . 

**نکته** : نیازه هست name که برای input ها تعریف می کنیم با key که برای state ابجکت تعریف کردیم در ابتدا 

یکی باشند . 
```javascript
        <input
          onChange={handleOnChange}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
      /> 
```
```javascript
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: {},
  });
```

مقدار name که برای input تعریف کردیم `username` هست . 

مقدار key ابتدایی برای `state` هم username هست . 

فانکشن `handleOnchange` رو نوشتیم و تموم شد . 

کل کاری که انجام میده گرفتن مقدار value اینپوت ها و ذخیره اونها درون state هست . 

زمانی که , فانکشن `handleOnchange` رو زمانی که برای input ها event Onchange اتفاق می افته اعمال میشه .


```javascript
        <input
          onChange={handleOnChange}
          type="text"
          id="username"
          name="username"
      /> 
```

# Submit Function Register.tsx 

یک فانکشن به اسم `handleSubmit` داریم در کامپونت `Register.tsx` . 

این فانکشن زمانی که from ثبت نام ما submit میشه اتفاق می افته . 

```javascript
     <form
        onSubmit={handleSubmit}
        action=""
      >
```

درون این فانکشن اول نوع type ایونتی که داره رخ میده رو مشخص می کنیم . 

درون فانکشن e.preventDefault رو داریم . 

```javascript
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
```

در ادامه می تونیم یک لاگ بگیریم از state که وظیفه ذخیره کردن value های input رو داشت . 

که ببینم به درستی اینکار انجام میشه یا نه . 

```javascript
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
  };
```
بعد از اینکه input ها رو درون صحفه پر کردیم و فروم خودمون رو submit کردیم . 

**نکته** : نیاز هست یک button درون فروم داشته باشیم که نوع type button ما از نوع submit باشه . 

که button تعریف شده یک `component` هست . 

```javascript
   <Button
            text="Register"
            type="submit"
          />
```

### Button Component 

![image](https://github.com/mosenn/MERN/assets/91747908/001b61a0-c9a8-4fad-ab80-70163e092092)

یک کامپونت `Button` داریم که هر جا نیاز شد از button استفاده کنیم می تونیم از این کامپونت استفاده کنیم . 

یک سری props که نیاز هست برای button پاس دادیم به کامپونت `Button` : 

```javascript
export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
}: buttonProps) {
```
نوع type props مربوط به کامپونت `Button` رو مشخص می کنیم  : 


```javascript
interface buttonProps {
  text?: string | any;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => Promise<void>;
}
```

در نهایت کامپونت ما یک button میاد return می کنه و از این button هر جا که خواستیم استفاده می کنیم . 

و props های مورد نیازش رو بهش پاس میدیم . 


```javascript

export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      <span className="p-2"> {text}</span>
    </button>
  );
}
```
هر جا که خواستیم می تونید صدا بزنیم `Componen Button` رو و ازش استفاده کنیم .

و حتی function های متفاوتی بهش پاس بدیم . 

### continue Register.tsx page

بعد از لاگ گرفتن و مظمئن شدن از value های input های خودمون نوبت به ارسال اونها به سمت سرور میشه . 

یاد اوری : یک فولدر api داشتیم که تمامی کار با [api](#api-folder) رو درونش قرار دادیم . 

```javascript
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);

  };
  ```

فانکشن registerUser رو از api فولدر و فایل user.tsx امدیم import کردیم 

و درون فانکشن handleSubmit داریم صداش می زنیم . 

مقدار های input ها رو که درون state register ذخیره کرده بودیم رو داریم بهش پاس میدیم 

فانکشن `registerUser` رو در این [بخش](#function-register-user) بررسی کردیم 

درون api فولدر یک فایل به اسم [user.tsx](#userstsx) داریم که api ها مربوط به user رو انجام میده . 

مثل register / login و ... 


در ادامه reponse که فانکشن `registerUser` به ما میده اطلاعات کاربری هست که ثبت نام کرده . 

می تونیم یک لاگ داشته باشیم . 

```javascript
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
 console.log(user, "user");
  };
  ```

بعد از اینکه دیتا ها رو داشتیم یک فانکشن به اسم handleError داریم . 

که وظیفه اش هندل کردن ارور های مربوط به ثبت نام کاربر هست 


```javascript 
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
    console.log(user, "user");
    handleError(user);
  };
```

در واقع اگر موقع ثبت نام error داشته باشیم باز به عنوان دیتا خواهیم داشت . 

به این دلیل که ارور ها از سمت سرور دارند میان . 

پس کار فانکشن handleError کنترل کردن ارور های ثبت نام هست . 

```javascript
  const handleError = (err: {}) => {
    setErrorRegister(err);
  };
```
مقدار err که به عنوان parameter گرفته فانکشن handleError در واقع ارور های ثبت نام کاربر هستند . 

که از بلاک catch فانکشن `registerUser` داره گرفته میشه که این فانکشن  در فولدر api در فایل user.tsx قرار داره . 

که درون فانکشن یک state برای error ها set میشه که این state هم یک ابجکت هست 

به این دلیل ارور های که از سمت سرور میاد به صورت ابجکت هستند . 

```javascript 
  const [errorRegister, setErrorRegister] = useState<ErrorRegister>({});
```

در نهایت اگر ارور داشته باشیم درون این state ذخیره میشه و می تونیم نشون بدیم درون صحفه 

گفتیم که در زیر هر label مربطو به هر input ارور های مربوط به همون input رو نمایش میدیم . 


```javascript 
 <label  htmlFor="username">
          username
        </label>
        {errorRegister?.username}
        <input
          onChange={handleOnChange}
          type="text"
          id="username"
          name="username"
        />
```

حالا می خوایم بعد از داشتن اطلاعات اگر که بود یک `toast` نمایش بدیم . 

که به کاربر بگیم ثبت نام که انجام داده موفقیت امیز بوده . 

و بعد از چند ثانیه کاربر رو به صحفه login ریداریکت کنیم . 

نیاز به یک if داریم که چک کنه ببینیم ایا دیتا و user هست . 

که اینکارو با status انجام شده . 

```javascript 
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register state in submit form", register);
    const user = await registerUser(register);
    console.log(user, "user");
    handleError(user);
    if (user?.status === 201) {
      setToast(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
```

چک کردیم اگر status ما برابر با `201` بود بیاد یک state رو true کنه که این state وظیفه نشون دادن toast رو بر عهده داره . 

در صورت اینکه state toast true باشه یک پیام نمایش داده میشه درون صحفه . 

و بعد از اون یک `setTimeout` اتفاق بیوفته که درونش `navigate` کنه به login/ که در واقع ادرس صحفه login هست . 

در مدت زمان 3000 که میشه 3 ثانیه . 

در اینجا navigate در واقع hook درونی react-router-dom هست . 

```javascript
import { useNavigate } from "react-router-dom";
const Register = () => { 
  const navigate = useNavigate();
} 
  ```


برای ست کردن `toast` می تونیم به صورت دستی با animation css یک باکس طراحی شه . 

و بعد از true شدن یک state نمایش داده شه .

```javascript
const Register = () => { 
  const [toast, setToast] = useState<Boolean>(false);
       {toast && (
        <Toast text={"register is success redirect to login"} toast={toast} />
      )}
} 
```

# Toast Componet
که toast درواقع یک کامپونت مجزا هست . از این کامپونت برای login هم استفاده می کنیم . 

در واقع نمایش داده شه یا نه به وسیله یک state boolean تعریف شده . 

که به وسیله `props` مشخص شده . 

همینطور `text` که نمایش میده هم به وسیله props مشخص میشه . 

که type props های پاس داده شده درون یک interface مشخص شده . 
```javascript
interface propsToast {
  text: string;
  toast: Boolean;
}
const Toast = ({ text, toast }: propsToast) => {
  return (
    <div
      className={` bg-green-300 w-[250px] fixed text-center  p-[10px] rounded font-semibold text-[#6f6f6f]  ${
        toast && "showToast"
      } `}
    >
      <p>
        <span>🎉</span> {text}
      </p>
      <div
        className={`absolute bg-blue-300 w- h-[3px] bottom-[-3px] left-0 rounded-sm ${
          toast && "loadingRedirect"
        }`}
      ></div>
    </div>
  );
};
export default Toast;
```

# Login.tsx Page . 

بعد از ثبت نام کردن کاربر لاگین شدن کاربر رو داریم . 

که بتونه با اکانتی که ساخته لاگین کنه . 

برای اینکار مثل Register.tsx یک فروم داریم که حاوی 2 input هست . 

که مشخصات کاربری که قصد لاگین رو داره میگیره و به سمت `server` ارسال می کنه . 



```javascript
  return (
    <div className="h-[90vh]  justify-center items-center flex ">
      {toast && <Toast toast={toast} text={"you are login"} />}
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-[90%] bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>
        <input
          onChange={onchangeHandle}
          value={loginValue.username}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        <input
          onChange={onchangeHandle}
          value={loginValue.password}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Login"
            type="submit"
          />
        </div>
      </form>
    </div>
  ); 
```

درون فرم  login.tsx فانکشن handleSubmit  رو داریم . 
```javascript
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-[90%] bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
```

درون هر دو input فانکشن handleOnchange رو داریم . 
```javascript
     <input
          onChange={onChangeHandle}
          value={loginValue.password}
          type="text"
          id="password"
          name="password"
        />
```



که برای state مد نظر یک interface type script تعریف شده 


```typescript
interface loginValue {
  username: string;
  password: string;
}
```

این state وظیفه ذخیره سازی value دو input فرم login رو بر عهده داره . 
```javascript
  const [loginValue, setLoginValue] = useState<loginValue>({
    username: "",
    password: "",
  });
```
که فانکشن onChangeHandle کار ذخیره کردن value های input هارو درون یک state انجام میده . 

```javascript 
 const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
```


فانکش handleSubmit کار ارسال value های گرفته شده input هارو به سمت سرور انجام میده . 

```javascript 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await loginUser(loginValue);
  }
```
فانکشن [loignUser](#function-loginuser) درون فولدر api در فایل user.tsx تعریف شده . 

که اینجا state مربوط که وظیفه ذخیره سازی value input ها فرم لاگین رو داره به loginUser پاس داده شده . 

در نهایت response که میده مشخصات کاربر هست که لاگین شده . 

یک if داریم درون فانکشن که status کد رو چک می کنه . 

گفته شده اگر `user.status === 200`  بیاد state مربوط به toast رو true کنه . 

یک state گلوبال به اسم `setUserInforOnline(user.data)`

وسیله `context` تعریف کردیم که مشخصات کاربری که لاگین کرده رو ذخیره می کنه . 

همینطور `navigate` کنه به صحفه home/ . درون یک `()setTimeout`

```javascript 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await loginUser(loginValue);
        if (user?.status === 200) {
      console.log("User Info In If Login.tsx componet", user);
      setToast(true);
      console.log(user, "user is login.jsx");
      setUserInforOnline(user.data);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }
```

**یاد اوری**:  route بندی ها درون App.tsx به وسیله react-router-dom انجام شده . 

```javascript 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
```


# Header.tsx Componet 

یک کامپونت داریم به اسم `Header.tsx` که این کامپونت header وب سایت ما هست و قرار در تمامی صحفات نمایش داده شه . 

و مشخصات کاربری که لاگین کرده رو نشون بده مثل عکس پرفایل و همینطور `username` . 

درون `Header.tsx` ایمپورت های زیر رو داریم . 

```javascript 
import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";
```

دو تا فانکشن مربوط به api به اسم profileUser و همینطور logoutUser داریم . 

زمانی که کاربر لاگین می کنه سمت `server` یک token درون cookie ذخیره میشه . 

مشخصات درون این token وریفای شده و درون api مربوط به profileUser ارسال میشه . 

که در بخش سرور بیشتر بهش می پردازیم . 

در حال حاضر فانکشن profileUser حاوی اطلاعات کاربری هست که لاگین شده توسط token . 


**نکته** : این توکن سمت server ذخیره میشه 

### create context

<img src='https://github.com/mosenn/MERN/assets/91747908/a0f88736-0fdc-4834-a2eb-1cff7f5ccc99' alt='context in react'/>

یک فولدر به اسم context داریم و یک فایل به اسم context.tsx داریم . 

که میایم درونش context رو ایجاد می کنیم . 

به createContext , useContext , نیاز داریم از درون `react` میایم import رو انجام میدیم . 

```javascript
import { createContext, useContext, useState } from "react";
```

یک متغییر ایجاد می کنیم . 

به دلیل اینکه از type script داریم استفاده می کنیم .

نیاز هست  `default value`  مربوط به `createContext` رو تعریف کنیم . 

```javascript
const AppContext = createContext<MyContextValue>({
  name: "",
  setUserInforOnline: () => {},
  userInfoOnline: {},
});
```


یک interface به اسم `MyContextValue` داریم . 

که در وافع نوع تایپ های `default value` رو مشخص می کنه . 

```typescript 
interface MyContextValue {
  name: string;
  setUserInforOnline: React.Dispatch<React.SetStateAction<{}>>;
  userInfoOnline: {} | any;
}
```

در ادامه `appProvider` رو داریم که در واقع یک فانکشن هست . 

یک parameter به اسم `children` می گیره . 

**نکته** : این  children حتما باید به همین اسم باشه . با همین حروف کوچیک در غیر اینصورت context به مشکل می خوره . 

```javascript 
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  return (
    <AppContext.Provider
    >
    </AppContext.Provider>
  );
};
```

درونش یک state تعریف کردیم از این state برای ذخیره سازی دیتای مربوط به کاربر لاگین شده استفاده می کنیم . 

خب از `AppContext` که در واقع createContext رو درون خودش داره استفاده می کنیم . 

یدونه `Provider` بهش اضافه می کنیم . 

میام children  رو قرار میدیم بین 2 provider که تعریف کردیم  . 



```javascript 
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  return (
    <AppContext.Provider
    >
    {children}
    </AppContext.Provider>
  );
};
```

در ادامه یک value تعریف می کنیم .

مقادیری که نیاز داریم که به صورت گلوبال در کامپونت های دیگه دسترسی داشته باشیم . 

تعریف می کنیم 
```javascript 
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  return (
    <AppContext.Provider
      value={{
        name: "mohsen",
        setUserInforOnline,
        userInfoOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
```

حالا appProvider که ایجاد کردیم رو export می کنیم . 

```javascript 
export { AppProvider }; 
```

این appPorvider رو درون main.tsx میایم import می کنیم و کل کامپونت <App> رو درونش قرار میدیم . 


<img src='https://github.com/mosenn/MERN/assets/91747908/ee7abd4d-1fb3-4b22-80e3-6678b147c2f3' alt='context in react'>


```javascript
import { AppProvider } from "./context/context.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
```

بر می گردیم دورن فایل context 


<img src='https://github.com/mosenn/MERN/assets/91747908/a0f88736-0fdc-4834-a2eb-1cff7f5ccc99' alt='context in react'/>


یک arrow function ایجاد می کنیم و از `useContext` استفاده می کنیم . 


```javascript
export const useGlobalContext = () => {
  return useContext(AppContext);
};
```

حالا می تونیم از useGlobalContext هر جا که خواستیم استفاده کنیم . 

و مقادیر که به عنوان value به `AppContext.Provider` پاس دادیم . 

در هر کامپونتی که نیاز داشتیم به مقادیری که set کردیم استفاده می کنیم . 

# back to Header.tsx 

بعد از اینکه context خودمون رو تعریف کردیم . 

بر می گردیم به کامپونت Header.tsx . 

یک بار دیگه  import های این کامپونت رو ببینیم .
```javascript

import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";
```

خب useGlobalContext رو داریم می بینیم از درون context . 

میایم state که تعریف کردیم   رو از درون useGlobalContext می گیریم . 

```javascript
const Header = () => {
  let { userInfoOnline, setUserInforOnline } = useGlobalContext();
  }
```

**یاداوری** : از این state userInfoOnline درون کامپونت[Login.tsx](#function-loginuser) هم استفاده کردیم . 

### logout function 

فانکشن `logout` رو داریم .

که کاربر می تونه logout کنه در صورت لاگین بودن . 

این فانکشن در اصل یک api رو کال می کنه سمت `server` . 

که این api در واقع همون توکنی که برای لاگین شدن کاربر ست میشه . 

از cookie درون server پاک می کنه در نهایت کاربر logout میشه . 

یک window.reload برای رفرش شدن صحفه استفاده شده . 

که میشه یک لودینگ یا یک پیام به کاربر برای logout شدن نمایش داد . 

```javascript
  const logOut = async () => {
    await logoutUser();
    //* can set loading for logout take effect
    window.location.reload();
  };
```

فانکشن بعدی `takeUser` هست که در واقع اطلاعات کاربری که لاگین می کنه رو درون state گلوبال خودمون ذخیره می کنیم . 

```javascript
  const takeUser = async () => {
    const user = await profileUser();
    setUserInforOnline(user);
  };
```

**نکته** : اگر که براتون سواله که چرا در هر دو کامپونت هم Header.tsx و هم Login.tsx 

امدیم از state گلوبال استفاده کردیم و دیتای مربوط به user رو درون state userInforOnline ذخیره کردیم ! 

به این دلیل هست که برای اینکه صحفه رو نخوایم رفرش کنیم تا دیتای مربوط به کاربر رو به ما نشون بده . 

امدیم به اینصورت کار کردیم . که کاربر به محض اینکه لاگین کرد اطلاعاتش درون hedaer نمایش داده شه . 

اگر یکی از setState های مربوط به userInforOnline رو برداریم . 

به محض اینکه کاربر لاگین شه اطلاعات نمایش داده نمیشه و نیاز به رفرش به صورت دستی هست تا اطلاعات نمایش داده شه . 


در نهایت بعد از تعریف فانکشن `takeUser` درون ()useEffect میایم این فانکشن رو ران می کنیم . 

اینکار باعث میشه با هر بار ران شدن کامپونت Header.tsx اطلاعات کاربر از state گلوبال خونده میشه و نمایش داده میشه .

```javascript 
  useEffect(() => {
    takeUser();
  }, []);
```

کامپونت Header.tsx میاد اطلاعات کاربر رو نمایش میده اگر که لاگین باشه . 

در غیر اینضورت یک ul دیگه رو نمایش میده که link های مربوط به login شدن و ثبت نام درونش قرار دارند . 

و اگر کاربر لاگین بود اسم کاربر و عکس پرفایل رو در header نمایش میده به همراه یک button که مسئول logout شدن کاربر هست . 

در واقع button فانکشن [logout](#logout-function) رو اجرا می کنه . 

در نهایت کامپونت Header.tsx میاد jsx زیر رو return می کنه : 


```javascript 
  return (
    <header className="bg-zinc-200 flex justify-between p-4 text-lg font-bold">
      <div className="flex items-center justify-center">logo</div>
      <nav>
        {userInfoOnline?.username ? (
          <ul className="flex items-center justify-end">
            <li className="mr-4">
              <img
                className="rounded-full w-[50px] h-[50px] border-2 border-blue-950"
                src={userInfoOnline.pic}
                alt={`profile image ${userInfoOnline?.username}`}
              />
            </li>
            <li className="mr-4">{userInfoOnline?.username}</li>

            <li className="mr-4">
              <button onClick={logOut}>logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end items-center">
            <li className="mr-4">
              <Link to="/login">login</Link>
            </li>
            <li className="mr-4">
              <Link to="/register">register</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
```

# Posts in clinet 

در این قسمت از کلاینت می خوایم بخش ساخت پست رو ایجاد کنیم . 

بخش پنل کاربری رو ایجاد کنیم که هر کاربری که لاگین هست بتونه در بخش پنل خودش پست های که ایجاد کرده ببینه . 


بخش اپدیت شدن پست رو در پنل کاربری داشته باشیم به وسیله نویسنده خوده پست 

همینطور بخش پاک کردن پست رو داشته باشیم . 

و در نهایت تمامی پست هارو نمایش بدیم در صحفه اصلی  که در هر پست نشون دهنده این باشه که چه تاریخی ساخته شده . 

و به وسیله چه کاربری ایجاد شده . 

**نکته** : تمامی این موارد گفته در بالا در سمت سرور انجام شده و `api` مربوط به تمامی کار های مربوط نوشته شده . 

**نکته** : برای `update` کردن  و `delete` کردن همیشه نیاز به `objectId` از سمت دیتا بیس هست . 


# Post api 

قدم اول درون فولدر `api` در کلاینت امدیم یک فایل به اسم `post` ساختیم . 

در فایل `post.tsx` امدیم کارهای `api` مربوط به ساخت پست و اپدیت و

همینطور پاکد کردن و گرفتن تمامی پست ها رو انجام دادیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/c1f8b7e4-284f-41d0-8894-2c24849e2be6' alt='axios in react'/>


قدم اول `import` کردن `axios` و تعریف کردن `baseUrl` هست . 

```javascript 
import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");

```

قدم دوم نوشتن فانکشن ها برای کار با `api` که سمت سرور نوشته شده . 

### api post functions 



#### createPost function in api

اولین فانشکن `createpost` هست 

```javscript 
export const createPost = async (data: {}) => {
  try {
  } catch (err: any) {
  }
};
```
**یاداوری** : درون هر فانکشن مروبط به کار با `api` یک `try` داریم و یک بلاک `catch` . 

**یاداوری** : تمامی فانکشن های مربوط به `api` نیاز هست که از نوع `async` و `await` باشن . 

خب یک پارامتر داریم به اسم `data` که نوع اش ابجکت هست . 

در واقع مقادیر یک `state` هست که به این فانکشن پاس داده شده . 

که در `state` مشصخات پست که قرار هست ساخته بشه قرار میگیره مثل `    content , title , cover , summery`  . 

که این موارد در یک `state` قرار میگیرند در نتیجه به به فانکشن `createPost` پاس داده میشن تا درون `api` قرار بیگرن . 

و اطلاعات وارد شده درون دیتا بیس قرار بگیره و پست ایجاد شه . 

**نکته** : کاربر حتما باید `login` باشه تا بتونه ساخت پست رو انجام بده .

فانکشن کامل `careatePost` رو ببینیم . 

```javascript 
export const createPost = async (data: {}) => {
  console.log(data, "data in create post");
  try {
    const post = await axios.post(`${baseUrl}/createpost`, data, {
      // withCredentials: true,
    });
    // console.log(response, "response");
    return post;
  } catch (err: any) {
    // console.log("Create Post Errr", err);
    return err;
  }
};
```
درون بلاگ امیدیم به وسیله `axios.post` اطلاعات مد نظر رو به `end point /createpost` ارسال کردیم . 

در نهایت اطلاعات رو `return` کردیم ریسپانسی که برشگت داده میشه اطلاعات پستی هست که ساخته شده . 

اگر هم `err` داشته باشیم در نهایت `err` رو خواهیم داشت در بلاک `catch` . 

به به وسیله `api`  که ادرس `createpost` رو داره در واقع همون `createpost  end poin` 

امدیم یک `post` رو به سرور فرستادیم و در نهایت در دیتابیس ذخیره میشه . 

#### get all posts function in api

خب حالا که `post` رو ایجاد کردیم بریم سراغ اینکه چطوری تمامی پست ها رو بگیریم . 

اینکارو به وسیله فانکشن `posts` انجام میدیم 

```javascript
export const posts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    // console.log(response, "RESPONSE");
    return response;
  } catch (err: unknown) {
    console.log("All Posts Error", err);
    return err;
  }
};

```

صرفا تمامی پست هارو می گیریم  .

البته سمت سرور طوری این `api` نوشته شده که `response` که این `api` برگشت میده یک `author` هم درونش وجود داره . 

<img src='https://github.com/mosenn/MERN/assets/91747908/850ee6f6-4ae1-442d-8d17-06af894fcadc'
 alt='data in reactjs' />


 اگر به عکس بالا که مربوط به `response` هست که این `api` برگشت میده در واقع تمامی `post` های هستند که ساخته شده . 

 و به همراه خودشون یک `author` دارند که اشاره می کنه به کاربری که این پست رو ایجاد کرده . 

 که این موضوع سمت `server` هندل شده . 

 #### Get post with user 

 در سمت کلاینت یک `panel` کاربری داریم . 

 که کاربری که لاگین شده می تونه وارد این `panel`  شده و تمامی `post` های که خودش ایجاد کرده رو مشاهده کنه . 

 از این رو نیاز به یک `api` برای اینکار داریم که `api` سمت سرور نوشته شده که اینکارو برای ما انجام بده . 

 به وسیله این `api` یک کاربر می تونه در پنل کاربری خودش تمام پست های که توسط خوده کاربر ایجا د شده می تونه ببینه . 

 به عنوان مثال کاربر محسن امده 3 تا پست ایجاد کرده . در سایت . می تونه هر 3 پست که خودش ایجاد کرده در پنل کاربری خودش مشاهده کنه . 

 **یاداوری** : در سمت `clinet` صرفا ما از `api` نوشته شده داریم استفاده می کنم تمامی منطق این قضیه سمت `server` هندل شده .


 بریم فانشکن `userPost` رو ببینیم : 

 ```javascript 
export const userPost = async () => {
  try {
    const response = await axios.get(`${baseUrl}/userposts`);
    console.log(response, "RESPONSE");
    return response;
  } catch (err: unknown) {
    console.log("User Post Error", err);
    return err;
  }
};
```
به `api` مد نظر در خواست زده شده که `end point` در اینجا `userposts` هست . 

در نهایت `response` رو بر گشت میده که حاوی تمامی `post` های هست که کاربر حال حاضر لاگین شده ایجاد کرده . 

در بلاک `catch` هم ارور رو کنترل کردیم و اگر اروری باشه به ما برگشت داده میشه 

**نکته** : تایپ تمامی `err` ها درون بلاک `catch` می تونه `any` یا `unknown` باشه که ترجیجا از `unknown` استفاده شده . 

به وسیله این فانکشن در سمت `clinet` امدیم پست های مروبط به کاربری که `login` هست رو گرفتیم . 

که از این فانکشن در فولدر `page` در فایل `Panel.tsx` ازش استفاده می کنیم . برای گرفتن پست های مربوط به کاربر . 


#### Put edit post

فانکشن بعدی کار `update` شدن یک پست رو برای ما فراهم می کنه . 

می تونیم به وسیله این فانکشن و `api` که هست مقادیر یک پست رو `edit` کنیم . 

منتها برای این کار همونطور که قبلا اشاره شد به `id` نیاز داریم . 

در واقع به `post ObjectId` که درون دیتا هست نیاز داریم .

```javascript 
export const editPost = async (id: string, data: any) => {
};
```

خب  دو تا `parameter` داره این فانکشن . 

پارامتر اول که همون `objectId` مروبط به `post` هست که نوع تایپ اش هم `string` هست . 

پارامتر دوم در واقع یک `state` هست که حاوی اطلاعات جدید هست . 

قرار که پست رو اپدیت کنیم پس نیاز داریم اطلاعاتی رو که می خوایم داشته باشیم . 

تا بتونیم جایگزین اطلاعات قبلی کنیم . 

فانکشن `editPost` رو با هم دیگه کامل ببینیم : 

```javascritp 
export const editPost = async (id: string, data: any) => {
  console.log(id, "ID IN EDITPOST");
  console.log(data, "DATA in editpost");
  const { summery, title, content, cover } = data;
  try {
    const res = await axios.put(
      `${baseUrl}/editpost/${id}`,
      { title, content, summery, cover },
    
    );
    console.log(res, "response edit post in api");
    return res;
  } catch (err:unknown) {
    console.log("edit post err", err);
    return err;
  }
};
```

نکته ای که داره اینجا امدیم `id` که مربوط به `post` ها هم هست بهش پاس دادیم به ادرس `api` . 

که در واقع `params` ادرس `api` ما میشه و در سمت سرور می تونیم این `params` رو بگیریم که در واقع `id` پست هست . 

پستی که دست خوش تغیرر شده به وسیله همین ایدی پیدا کنیم . 

البته `api` که نوشته در سمت سرور یک `id` درون خودش داره . 

در ادامه در بلاک `try` امدیم مقادیر جدید که درون `state` ذخیره کرده بودیم به `api` پاس میدیم . 

```javasript 
  try {
    const res = await axios.put(
      `${baseUrl}/editpost/${id}`,
      { title, content, summery, cover },
    
    );
    console.log(res, "response edit post in api");
    return res;
  }
```

و `return res` رو داریم که در واقع `response` به ما `post` اپدیت شده رو برگشت میده . 

#### Delete post function 

فانکشن بعدی که از اسمش هم مشخص هست کار پاک کردن پست رو انجام میده .

و هر کاربر می تونه پستی رو که ایجاد کرده بیاد پاک کنه . 

**یاداوری** : پاک کردن و اپدیت کردن همیشه نیاز به `ObjectId` داره . 

``` javascript 
export const deleteUserPost = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/deletepostuser/${id}`, {
      method: "delete",
    });
    console.log(response, "response");
    return response;
  } catch (err) {
    console.log("Delete Post Error", err);
    return err;
  }
};

```
اگر نگاه کنید دوباره به عنوان `parameter` درون ادرس `api` ایدی رو داریم که در واقع همون `ObjectId` مربوط به `post` هست . 

ریسپانسی که برگشت میده در واقع مشخصات پستی هست که پاک شده . 

در نهایت اگر `err` داشته باشیم برای پاک کردن پست در بلاک `catch` ارور مربوط رو خواهیم داشت . 

# here 

# comment.tsx in api folder 

<img src='https://github.com/mosenn/MERN/assets/91747908/1a44c107-11bc-4f86-9664-0eaf4e95010f' alt='api in reactjs'/>

برای اینکه بتونیم کامنت هر پست رو داشته باشیم یک فایل به اسم `comment.tsx` داریم . 

که درون این فایل مربوط به  `api` کامنت  ها ساخت کامنت ها رو داریم و گرفتن کامنت ها به وسیله `id` پست ها .

از این فانشن مربوط به `api` میایم در بخش `detail.tsx` استفاده می کنیم . 

جای که محتوای هر پست رو به صورت جداگانه نمایش میدیم و همینطور کامنت های هر پست رو . 




در فایل `comment.tsx` اول میایم `baseUrl` رو مشخص می کنیم ادرس `api` رو . 

در ادامه `axios` رو میایم `import` می کنیم . 

```javascript 
import axios from "axios";
const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");
```



### postUserComments
خب بریم سراغ فانکشن `postUserComments` که وظیفه ساخت کامنت رو بر عهده داره . 

```javascript
export const postUserComments = async (
) => { }
```
در کد پایین مقادیری که نیاز داریم که به `body` پاس داده شه رو داریم به عنوان پارامتر . 

```javascript
export const postUserComments = async (
  data: { comment: string },
  id: string,
  postId: string
) => { } 
```

خب نوبت میرسه به اینکه بیایم `api` مد نظر رو کال کنیم برای ارسال مواردی که به عنوان پارامتر گرفتیم . 

که درون بلاک `try` میایم اینکارو انجام دادیم . 

```javascript
 try {
    console.log(data);
    const response = await axios.post(
      `${baseUrl}/comments`,
      {
        comment: comment,
        author: id,
        postId: postId,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log("response", response);
    return response;
}
```

در نهایت میایم متغییر `response` رو که در واقع `response api` ما رو درون خودش قرار داده رو `return` می کنیم . 

در ادامه یک بلاک `catch` داریم که می تونیم ارور هارو داشته باشیم . 


```javascript
catch (err: unknown) {
    console.log("post user comment Err", err);
    return err;
  }
```
یک بار به طور کلی با هم دیگه به فانکشن `postUserComments` نگاه کنیم که وظیفه ساخت کامنت ها رو بر عهده داره . 

```javascript 
export const postUserComments = async (
  data: { comment: string },
  id: string,
  postId: string
) => {
  const { comment } = data;

  try {
    console.log(data);
    const response = await axios.post(
      `${baseUrl}/comments`,
      {
        comment: comment,
        author: id,
        postId: postId,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log("response", response);
    return response;
  } catch (err: unknown) {
    console.log("post user comment Err", err);
    return err;
  }
};
```

### getAllPostComments

یک فانکشن دیگه به اسم `getAllPostComments` در فایل `comment.tsx` داریم . 

که به وسیله `postId` میاد مشخصات پست رو میگیره به وسیله `id`  . 


```javascript
export const getAllPostComments = async (postId: string) => {};
```

همونطور که می بنید یک `postId` به عنوان پارامز داره می گیره . 

که در واقع `objectId` مربوط به پست هست . 

بلاک `try / catch` رو داریم . 

که درون بلاک `try` صرفا میایم `api` خودمون رو کال می کنیم . 

```javascript
 try {
    const comments = await axios.get(`${baseUrl}/comment/${postId}`);
    // console.log("COMMENTS FROM API", comments);
    return comments;
  } catch (err: any) {
    // console.log("get Comments Err", err);
    return err;
  }
```
منتها `postId` رو به ادرس `api` به عنوان `params` پاس دادیم . 

برای گرفتن کامنت های یک پست مشخص نیاز داریم که `objectId` رو پاس بدیم . 

در بلاک `catch` که ارور ها رو داریم .

کل فانکشن `getAllPostComments` به صورت زیر هست : 


```javascript
export const getAllPostComments = async (postId: string) => {
  // console.log("Id", postId);
  try {
    const comments = await axios.get(`${baseUrl}/comment/${postId}`);
    // console.log("COMMENTS FROM API", comments);
    return comments;
  } catch (err: any) {
    // console.log("get Comments Err", err);
    return err;
  }
};
```



# userIntraction.tsx in api folder 

یک فولدر داریم به اسم `userIntraction.tsx` که وظیفه لایک شدن و سیو شدن رو داره . 

همینطور وظیفه گرفتن لایک و سیو ها رو در این فایل داریم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/0ea8a42a-4b4e-45fa-abcd-99d892d8d0ba' alt='api in reactjs'/>


### postLike

این فانشکن وظیفه ارسال `like` رو بر عهده داره .

```javascript
export const postLike = async (postId: string) => { }
```

به عنوان `parameter` امده `postId` رو گرفته چون برای اینکه بدونیم کدوم `post` لایک شده نیاز به `id` پست ها داریم . 

خب در ادامه یک بلاک `try` داریم . 

```javascript
  try {
    const like = await axios.post(
      `${baseUrl}/likedPost/${postId}`);
    console.log(like, "like in api");
    return like;
  }
```

خب `api` رو کال کردیم و پست `id` رو درون `parmas` پاس دادیم . 

اینجوری می تونیم پست های رو که لایک شده رو مقدار `like` در سمت سرور `true` میشه . 

در واقع با این فانکشن `api` مربوط به `toggel `  شدن لایک انجام میشه . 

یک بار با هم کل فانکشن رو ببنیم : 

```javascript
export const postLike = async (postId: string) => {
  console.log(postId, "postId");
  try {
    const like = await axios.post(`${baseUrl}/likedPost/${postId}`);
    console.log(like, "like in api");
    return like;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.response?.data?.message || "Something went wrong");
  }
};
```


### getLikes

به وسیله این فانکشن میایم `like` مربوط به هر پست رو می گیریم که چه کاربری چه پستی رو لایک کرده . 

و تعداد لایک هر پست چه مقدار هست . این فانکشن یک `response`  که میده یک ارایه هست . 

که مجموع لایک های `true` اون پست مد نظر درونش قرار داره . اینجوری متوجه می شیم که اون پست چه تعداد لایک داره . 

```javascript 
export const getLikes = async (postId: string) => {
  try {
    const likes = await axios.get(`${baseUrl}/likes/${postId}`);
    // console.log("All Likes in get Likes Api", likes);
    return likes;
  } catch (err: any) {
    console.log("Get Likes Error", err);
    return err;
  }
};
```

برای اینکه بدونیم چه پستی چه مقدار لایک داره نیاز به `postId` داریم . 

که اینجا به عنوان `params` در ادرس `api` بهش پاس دادیم  . 

```javascript
    const likes = await axios.get(`${baseUrl}/likes/${postId}`);
```

در نهایت متفیر `like` رو داریم به عنوان `response` داریم `return`  می کنیم . 
```javascript
 return likes;
```

یک بار دیگه کل فانکشن `getLikes` رو با هم ببینیم : 

```javascript
export const getLikes = async (postId: string) => {
  try {
    const likes = await axios.get(`${baseUrl}/likes/${postId}`);
    // console.log("All Likes in get Likes Api", likes);
    return likes;
  } catch (err: any) {
    console.log("Get Likes Error", err);
    return err;
  }
};
```

### postSave

فانکشن دیگه که در فایل `userIntraction.tsx` داریم در فولدر `api` . 

فانکشن `postSave` هست . که دقیقا مثل `getLikes` میاد عمل می کنه . 

که کارش `toggel` شدن `save` مربوط به پست ها هستش . 

```javascript
export const postSave = async (postId: string) => {
  try {
    const save = await axios.post(`${baseUrl}/savedPost/${postId}`);
    return save;
  } catch (err: any) {
    console.log("save post Error", err);
    throw new Error(err.response?.data?.message || "Something went wrong");
  }
};
```
### getSave
این فانکشن هم دقیقا مثل `getLikes` هست . 

فانکشن بعدی `getSave` هست که وظیفه گرفتن `save ` های که `true` شدن رو داره . 

اینجوری یک ارایه به ما میده که حاوی اطلاعات کاربری که پست رو `save` کرده . 

و همینطور می تونیم از تعداد `length` بگیم که پست مد نظر ما چه تعدادی `save` شده . 

کد های فانکشن `getSave` به صورت زیر هستش : 

```javascript
export const getSave = async (postId: string) => {
  try {
    const saves = await axios.get(`${baseUrl}/saves/${postId}`);
    return saves;
  } catch (err: any) {
    console.log(err);
  }
};
```


خب در ادامه تمامی فانکش های نوشته شده در فایل `userIntraction`  رو که `export` کردیم . 

درون `Detail.tsx` میایم این فانکشن ها رو صدا می زنیم .

برای لایک شدن و سیو شدن پست مد نظر . 


```javascript

// in detail.tsx
import {
  getLikes,
  getSave,
  postLike,
  postSave,
} from "../../api/userIntraction";

```



# Create Post Commponent 


خب وقتی که `api` ها رو داریم . نوبت به ساخت کامپونت می رسیه . 

کامپونتی که می خوایم در موردش صحبت کنیم `createPost` هست . 

![image](https://github.com/mosenn/MERN/assets/91747908/4fc085d1-c7d9-4aad-8ef3-16a379e4548d)

در این کامپونت یک `form` داری برای ساخت `post` . 

که این `from` درون خودش `input` های داره. 

هر `input` مقدار مربوط به خودش رو میگیره و درون یک `state` ذخیره میشه . 

دقیقا مثل `form` ثبت نام کاربر . 

مقادیری که برای `post` تعریف شده و درون سرور هم همین مقادیر تعریف شده . 

عکس پست هست . تاتیل پست هست و خالاصه پست هست همینطور محتوای اصلی پست یا همون `contnet` . 

بریم به فروم خودمومن در `createPost` نگاه کنیم : 

``` javascrtip 
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="summery"
            name="summery"
            onChange={handleOnChange}
          />

          <input
            type="file"
            name="cover"
            id="cover-input"
            onChange={handleOnChange}
          />
          <Button
            icon=""
            disabled={uploadBtnDisabel}
            text={
              uploadAnimation ? (
                <Loading size={35} color={"#ECF0F3"} />
              ) : (
                uploadMessage
              )
            }
            className={
              "bg-blue-500 hover:bg-blue-300 w-[96%]   md:w-[180px] md:-translate-x-1 lg:w-[250px] rounded p-3 text-zinc-50 font-semibold"
            }
            type="button"
            onClick={Uploadimage}
          ></Button>

          <ReactQuill
            theme="snow"
            value={postValue.content}
            onChange={(value) => setPostValue({ ...postValue, content: value })}
          />
          <button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            type="submit"
            disabled={disabelSubmitForm}
          >
            create post
          </button>
        </form>
```

هر `input` با `onChange` شدن مقادیرش گرفته میشه و درون یک `state` ذحیره میشه . 

**نکته :** برای گرفتن `content` از یک `package` استفاده شده به اسم `ReactQuill` . 

**نکته** : برای اپلود شدن عکس از همون فانکشن که برای اپدیت عکس پرفایل استفاده میشه استفاده می کنیم . 


ذخیره شدن `state` : 

```javascript
  const [postValue, setPostValue] = useState({
    title: "",
    summery: "",
    cover: {},
    content: "",
  });
  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cover") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setUploadBtnDisabel(false);
        setPostValue({ ...postValue, cover: file });
      }
    } else {
      setPostValue({ ...postValue, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", postValue);
  };

```

قسمتی که داره `cover` رو چک می کنه `e.target.name` اگر `cover` بود بیاد مقدار عکس رو ذخیره کنه در `state` داخل `cover` در غیر اینصورت بیاد `else` اجرا شه . 

زمانی که `form` ما `submit` میشه یک فانکشن `handleSubmit` اتفاق می افته که میاد یک سری کار ها انجام میده . 

فانکشن رو با هم بررسی کنیم : 

```javascript 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postValue);
    setPostValue({ ...postValue, content: content });
    console.log(postValue, "POST VALUE");
    if (postValue) {
      setDisabelSubmitForm(false);
    }
    const post: {} | any = await createPost(postValue);
    console.log("Response Create Post", post);
    if (post?.status === 201) {
      setToast(true);
      //* can set loading then navigate to home page
      setTimeout(() => {
        navigate("/panel");
      }, 3000);
    }
  };
```

قسمت قابل توجه فانکشن جای هست که یک بار دیگه `state postValue` داره `contensh ` ست میشه . 

این اتفاق به این دلیله که `reactQul` متد `onchange` رو قبول نمی کنه . 

و زمانی که `form` ما می خواد `submit` شه ما میایم این مقدار `content` رو از داخل `reactQuill` میگیریم . 

درون `state  postValue` میایم ست می کنیم . 

```javascript
    setPostValue({ ...postValue, content: content }); 
```

درون قانکشن `handleSubmit` یک `condition` داریم که گفتیم اگر که مقادیر `postValue`  بودند که در واقع `state` هست 

که مقادیر`input` ها رو درون خودش ذخیره می کنه . 

اگر که این `postValue` بود . به این معنی که تمامی فیلد های مورد نیاز برای ساخت `post` وجود داشت . 

بیاد یک `state` رو `false` کنه . 

  ```javascript
    if (postValue) {
      setDisabelSubmitForm(false);
    }
```

که این `state` وظیفه `disable` بودن `button` مربوط به `submit` شدن رو مشخص می کنه .

اگر تمامی مقادیر `post` وجود داشت در واقع تمامی فیلد ها پر شده بودند `button` ما امکان `submit` شدن و کلیک شدن داشته باشه . 

در غیر اینصورت اگر هر کدوم از فیلد های مربوط به ساخت `post` خالی بودند `button` در واقع `disable` باشه و امکان کلیک شدن نداشته باشه . 


```javascript

//* state 
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(true);

//* button
          <button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            type="submit"
            disabled={disabelSubmitForm}
          >
            create post
          </button>

```

خب بریم سراغ بقیه فانکشن `handleSubmit` داخل `createPost` . 

```javascript 
    const post: {} | any = await createPost(postValue);
    console.log("Response Create Post", post);
    if (post?.status === 201) {
      setToast(true);
      //* can set loading then navigate to home page
      setTimeout(() => {
        navigate("/panel");
      }, 3000);
    }
```

در کد بالا که ادامه فانکشن `handlesubmit` هست  . 

اول فانکشن `createPost` رو صدا زده شده که در فولدر `api` ساخته شده  در فایلی به اسم `post` . 

در ادامه گفتیم اگر `post` اگر `status` برابر با `201` بود `setToast` رو `true` کنه . 

در ادامه بعد از `3s`  به صحفه `panel` کاربر وارد شه یا همون `navigate`  شه یا `redirect` شه .


**نکته** : هم کامپونت `CreatePost` نیاز هست در `router` قرار بگیره و هم کامپونت `Panel` که در اینده قرار هست ساخته شه . 

دقت داشته باشید که این کامپونت ها نیاز هست در `App.tsx` در `react-router-dom` بیاد یک ادرسی به خودشون اختصاص بدن که ما بتونیم 

این کامپونت ها رو ببنیم و بین شون جا به جا شیم . 

```javascritp 
//* in app.tsx 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/editpost/:id" element={<Editpost />} />
      </Routes>
    </BrowserRouter>
  );
}
```


در ادامه صحفه  `createPost` یک فانکشن دیگه هم وجود داره برای اپلود عکس پست مورد نظرمون . 

که این فانکشن کار انجام `upload` عکس کاور پست رو انجام میده . 

دقیقا مثل فانکشن که اپلود عکس پرفایل کاربر رو انجام میده . 

تفاوتی نداره . 

```javascript 
  const Uploadimage = async () => {
    setUploadAnimation(true);
    const res = await uploadRegisterImage(postValue.cover);
    console.log("response upload pic in submit func", res);
    if (res.status === 200) {
      setTimeout(() => {
        setUploadAnimation(false);
        setuploadMessage("upload is done ✔");
        setDisabelSubmitForm(false);
      }, 3000);
      setPostValue({
        ...postValue,
        cover: res.data.secure_url,
      });
    }
    if (res?.response?.status === 400) {
      console.log("error");
      setUploadAnimation(false);
      setuploadMessage("upload is fail ☹");
    }
    console.log("register state in uplpad image btn", postValue);
  };
```

علاوه بر اینکه درون `state postValue` میاد لینک اپلود رو در `cover` ست می کنه . 

یک سری انیمیشن ها برای دکمه اپلود و یک سری مسیج ها اتفاق می افته و همینطور `submit` شدن هم کنترل میشه 

```javascrtip 
    if (res.status === 200) {
      setTimeout(() => {
        setUploadAnimation(false);
        setuploadMessage("upload is done ✔");
        setDisabelSubmitForm(false);
      }, 3000);
      setPostValue({
        ...postValue,
        cover: res.data.secure_url,
      });
    }
```

اگر که `status ` رسپانس 200 بود بیاد اول انمیشن دکمه رو `false` کنه در واقع یک لودینگ هست . 

دوم بیاد نوشته داخل دکمه رو تغییر بده بگه اقا `upload is done` . 

در ادامه اجازه `submit` شدن رو بده , بیاد `disable` دکمه `submit` رو `false` کنه . 

در اخر هم بیرون از `setTimeout` امدیم `setPostValue` رو مقدار `cover` شو گذاشتیم لینکی که از دیتا می گیریم  .

اما یه شرط دیگه هم داریم اگر که `status === 400` بود بیاد یه سری اتفاقات دیگه بیوتفته  داخل فانکشن `Uploadimage` . 

```javascript
    if (res?.response?.status === 400) {
      console.log("error");
      setUploadAnimation(false);
      setuploadMessage("upload is fail ☹");
    }
    console.log("register state in uplpad image btn", postValue);

```

لودینگی وجود نداشته باشه . همینطور تکست دکمه ما تبدیل شه به `upload is fail`  .


خب درون `button` که مسئول ران کردن فانکشن `Uploadimage` هستش  به صورت زیر هست : 

```javascript 

   <Button
            icon=""
            disabled={uploadBtnDisabel}
            text={
              uploadAnimation ? (
                <Loading size={35} color={"#ECF0F3"} />
              ) : (
                uploadMessage
              )
            }
            className={
              "bg-blue-500 hover:bg-blue-300 w-[96%]   md:w-[180px] md:-translate-x-1 lg:w-[250px] rounded p-3 text-zinc-50 font-semibold"
            }
            type="button"
            onClick={Uploadimage}
          ></Button>
```
که برای `loading` از کامپونت `Loading` استفاده شده . 

برای تکست هم از `state uploadMessage ` استفاده شده 

و کلا برای `text` شرط گذاری شده : 

```javascript
        text={
              uploadAnimation ? (
                <Loading size={35} color={"#ECF0F3"} />
              ) : (
                uploadMessage
              )
            }
```

که `uploadAnimation` هم یک `state` هست داره که  `bolean` هست . 

```javascript 
  const [uploadAnimation, setUploadAnimation] = useState(false);

```

که این `state uploadAnimation` در 3 جا از فانکشن `Uploadimage` استفاده شده . 

یک بار تا فانکشن اجرا میشه . 

یک بار زمانی که `200 === status`  هست . 

یک بار زمانی که `status === 400` هست . 



```javascript 
  const Uploadimage = async () => {
//* at start function 
    setUploadAnimation(true);
    if (res.status === 200) {
      setTimeout(() => {
//* here if status == 200
        setUploadAnimation(false);
      }, 3000);
      setPostValue({
        ...postValue,
        cover: res.data.secure_url,
      });
    }
    if (res?.response?.status === 400) {
//* here if status == 200
      setUploadAnimation(false);
    }
    console.log("register state in uplpad image btn", postValue);
  };
```


خب با `toast` هم اشنا هستید همون کامپونتی که برای `login` و `register` استفاده کردیم .

یک پیامی با توجه به نیاز نشون میده اینجا می خوایم بعد از اینکه کاربر پست خودش رو ایجاد کردی . 

یک پیام مبنی بر اینکه پست اش ایجاد شده نمایش میدیم . 

درون فانکشن `handlesubmit` میایم `toast` رو به `true` تغییر میدیم . 

 
```javascript
  const [toast, setToast] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: {} | any = await createPost(postValue);
    console.log("Response Create Post", post);
    if (post?.status === 201) {
//* here change toast to true , for show message to user
      setToast(true);
      setTimeout(() => {
        navigate("/panel");
      }, 3000);
    }
  };
```

در نهایت درون `return` از کامپونت `toast`  استفاده می کنیم در صورتی که `state toast` به `true` تغییر کرده باشه 

و `state` , `text` رو که به عنوان `props` میگیره پاس میدیم . 

   ```javascript 
      <div>
        <h1> create Post </h1>
        {toast && <Toast text="post is create 😎" toast={toast} />}
        <form action="" onSubmit={handleSubmit}>
</form>
```

خب کامپونت  `createPost` به اتمام رسید . 

بعد از ساخت پست نوبت به نمایش دادن پست های ایجاد شده در صحفه اصلی میشه . 

# Show Posts In Home page 

بعدز از ایجاد `post` توسط کاربر . 

نوبت به نشون دادن پست ها در صحفه اصلی میشه . 

برای این موضوع نیاز به `api` هست که در سمت سرور نوشته شده . 

خب میریم سراغ اینکه پست هارو بگیریم و در صحفه اصلی نشون بدیم . 

فانکشن `posts` در فولدر `api` اینکارو برای ما انجام میده . 

درون پوشه `page` و فولدر `Home` یک فایل به اسم `Home.tsx` داریم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/5f4f23b0-dc84-4c8d-ae8f-78fa3e34770a'  alt='pages in reactjs' />

درون `Home.tsx` یک `state` داریم . 

```javascript
  const [post, setPost] = useState([]);
```
همینطور نیاز داریم فانکشنی که درون فولدر `api` نوشتیم بیایم و `import` کنیم . 

```javascript
import { posts } from "../../api/post";
```
خب میایم یک فانکشن برای گرفتن تمامی پست ها ایجاد می کنیم . 
```javascript
  const takeAllPosts = async () => {
    const response: [] | any = await posts();
    console.log("POSTS", response);
    console.log("hiii");
    setPost(response?.data);
  };
```
درون کد بالا . امدیم درون فانکشن `takeAllPost` فانکشن مربوط به گرفتن تمامی پست ها رو صدا زدیم . 

و یک `response` به ما میده که حاوی اطلاعات تمامی پست ها هست . 

بعد امدیم `response.data` رو درون `state` که تعریف کردیم به اسم `post` ست کردیم . 

در ادامه یک `useEffect` داریم که مسئول ران کردن فانکشن `takeAllPosts` هست . 

به این طریق هر زمان که فانکشن `Home.tsx` رندر میشه فانکشن `posts` که مربوط به`api` هستند صدا زده میشه . 

و دیتا گرفته میشه در `state` به اسم `post` ذخیره میشه . 

این `state` رو میایم `map` می کنیم در `Home.tsx` . 

درون `Home.tsx` یک کامپونت به اسم `Post` داره درون  `map` رندر میشه  و `state` که ست شده رو به عنوان `props` میگیره . 

کار این کامپونت نشون دادن اطلاعات `post` ها هست در قالب یک کامپونت . 

درون `Home.tsx` کد زیر امده `return` شده . 

```javascript 
  return (
    <section className="grid justify-center md:justify-center md:grid-cols-2 lg:grid-cols-3 md:p-2 md:m-2 md:gap-2 lg:gap-">
      {post &&
        post?.map((blog: blogPostData) => {
          return <Post {...blog} key={blog._id} />;
        })}
    </section>
  );
};
```
اگر دقت کنید یک تایپ موقع `map` شدن . به `blog` داده شده . 

در واقع نوع تایپ مقادیر داخلی دیتا رو مشخص کردیم . 

برای `type` های تایپ اسکریپت یک فولدر ایجاد کردیم . 

که با توجه به نیاز تایپ ها رو تعریف می کنیم و استفاده می کنیم . 

![image](https://github.com/mosenn/MERN/assets/91747908/9f8b00eb-26d0-4e54-8fdb-d2e26a2356b6)

بریم سراغ کامپونت `Post` . 

 در کامپونت `Post` اجزای درونی دیتارو که به وسیله `props` گرفته می گیریم . 

 و درون کامپونت نشون میدیم . 

```javascript
const Post = ({ _id, cover, title, createdAt, author, summery }: blogPostData) => {
return ()
}
```

علاوه بر مقادیری که ست شده درون `return` نشون میدیم . 

در همین کامپونت میایم تعداد لایک و سیو هر پست رو هم زیر هر پست نشون میدیم . 

برای اینکار نیاز داریم `api` مربوط به لایک و سیو و کامنت رو صدا بزنیم . 

تا بتونیم به `length` دیتا های لایک و سیو و کامنت دسترسی داشته باشیم . 

در نتیجه هر کدوم از دیتای لایک و سیو و کامنت درون یک `state` مجزا ست شده و زیر هر پست مربوط به خودشون نمایش داده میشه . 

اول `state` های مربوط رو ببینیم : 

```javascript
  const [dataLikes, setDataLikes] = useState<[] | any>([]);
  const [saveData, setSaveData] = useState<[] | any>([]);
  const [comments, setComments] = useState<[] | any>([]);
```

در ادامه فانکشن های داریم برای گرفتن لایک ها و کامنت ها و همینطور سیو کاربر های : 


گرفتن لایک ها : 
```javascript
  //* take likes
  const takeAllLikes = async () => {
    if (_id) {
      const likes = await getLikes(_id as string);
      setDataLikes(likes);
      console.log("Likes in post for homepage", likes.data);
      //* if page is refresh set agin data to setLike
      const checkIntractionUser = likes.data.find((i: any) => {
        return i;
      });
      console.log(
        checkIntractionUser,
        "checkIntractionUser in post for homepage"
      );
      // console.log(checkLiked, "checkLiked");
    }
  };
```

گرفتن `save` های : 

```javascript
  //* take save
  const takeSaves = async () => {
    try {
      if (_id) {
        const saves = await getSave(_id as string);
        setSaveData(saves);
      }
    } catch (err) {
      console.log("takeSaves error in detail", err);
      return err;
    }
  };
```
گرفتن کامنت ها : 

```javascript
  //* take comments
  const takeAllComments = async () => {
    if (_id) {
      const comments = await getAllPostComments(_id as string);
      /** change setComents to global state for show comments number in homepage*/
      setComments(comments.data);
    }
  };
```

در ادامه تمامی این فانکشن ها درون یک `useEffect` اتفاق می افته . 

```
  useEffect(() => {
    takeAllLikes();
    takeSaves();
    takeAllComments();
  }, []);
```

**یاداوری** : فانکشن های که مربوط به `api` هستند برای گرفتن کامنت ها و سیو و لایک . درون فولدر `api` تعریف شده .


خب در ادامه `return` زیر رو برای کامپونت `Post` رو داریم : 

```javascript 
  return (
    <div
      key={_id}
      className="border  lg:p-0 lg:m-0 flex flex-col items-center   m-2  text-left"
    >
      <h2 className=" text-inherit  font-semibold">{title.substring(0, 34)}</h2>
      <figure className="flex flex-col items-center">
        <img
          className="w-72 object-cover h-[250px] lg:w-96 md:w-[70%] rounded-s"
          src={cover}
          alt={title}
        />
        <figcaption className="p-3 md:w-[60%] w-72 lg:w-96 lg:justify-between flex mt-2 justify-between text-gray-400">
          <p>{author.username}</p>
          <p>{format(new Date(createdAt), "yyyy-MM-dd")}</p>
          {dataLikes.data && <p>Likes : {dataLikes?.data.length}</p>}
          {saveData.data && <p>saves : {saveData?.data.length}</p>}
          {comments && <p> comment : {comments.length}</p>}
        </figcaption>
      </figure>
      <div>
        <p
          // dangerouslySetInnerHTML={{ __html: blog.content }}
          className="w-72 md:text-left md:w-[250px] lg:w-96 text-left mt-1 mb-1 p-2 md:p-0 "
        >
          {summery.substring(0, 200)}...
        </p>
        <div className=" mt-3 mb-2 w-[100%] flex justify-start">
          <Link
            className="bg-blue-500 w-[100%] md:w-[40%]   flex justify-center  rounded p-3  text-zinc-50 font-semibold"
            to={`detail/${_id}`}
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
```

در این قسمت تاریخ هر پست رو به وسیله یک کنابخونه به اسم `date-fns` امدیم ست کردیم . 

بعد از نصب `data-fns` امدیم `fromat` رو `import` کردیم . 

```javascript
import { format } from "date-fns";
```

بعد از `import` درون `return` امدیم ازش استفاده کردیم . 

```javascript
  <p>{format(new Date(createdAt), "yyyy-MM-dd")}</p>
```
به وسیله کد بالا تاریخ هر پستی که ایجاد شده توسط کاربر رو نشون دادیم . 

برای نشون دادن تعداد لایک و کامنت و سیو های که توسط کاربران برای اون پست انجام شده کد زیر رو داریم . 

که دیتا شون توسط `state` های مربوط گرفته شده و امدیم به وسیله `length` تعداد لایک و کامنت و سیو رو نشون دادیم . 

```javascript
          {dataLikes.data && <p>Likes : {dataLikes?.data.length}</p>}
          {saveData.data && <p>saves : {saveData?.data.length}</p>}
          {comments && <p> comment : {comments.length}</p>}
```

هر پست یک `Link` داره که درونش نوشته شده `readMore` در واقع روی این لینک کلیک که میشه

وارد یک صحفه `detail`  مربوط به همون `post` میشه . 

اینجا نیاز هست به `id` هر پست زمانی که داره `map` اتفاق می افته دسترسی داشته باشیم . 

```javascript
          <Link
            className="bg-blue-500 w-[100%] md:w-[40%]   flex justify-center  rounded p-3  text-zinc-50 font-semibold"
            to={`detail/${_id}`}
          >
            read more
          </Link>
```


### Detail Post Componet

بعد از اینکه `Link` که ایجاد کردیم و وارد یک کامپونت به اسم `Detail` میشه . 

که این کامپونت درون `App.jsx` ساخته شده و یک `path` براش ست شده . 

با `App.tsx` رو ببینیم و به `path` که برای `Detail` تعریف شده توجه کنید . 

```javascript
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

یک کامپونت داریم به اسم `Detail` که درون `element` جا گرفته . 

یک `path` داریم به ادرس `/detail/:id` که به این `id` نیاز داریم . 

درون کامپونت `Post` یک لینک داریم که به همین ادرس لینک شده . 

و ایدی که گرفته ایدی هر `post`  هست . 

یک بار دیگه به این یه تیکه کد درون کامپونت `Post.tsx` نگاه کنیم . بخش لینک رو : 

```javascript
          <Link
            className="bg-blue-500 w-[100%] md:w-[40%]   flex justify-center  rounded p-3  text-zinc-50 font-semibold"
            to={`detail/${_id}`}
          >
            read more
          </Link>
```
ایدی که گرفته شده در اصل `ObjectId` دیتا هست . 

که به وسیله `props` بهش دسترسی داریم . 

اگر یادتون باشه کامپونت `Post.tsx` درون `Home.tsx` داشت `map` می شد

و اونجا تمامی اطلاعات مربوط به پست رو به وسیله `props` به کامپونت `Post.tsx`پاس داده شده 

که این `id_` از اونجا داره ارسال میشه . 


خب با توسط این ایدی ما می تونیم جزئیات هر پست در یک صحفه جداگانه نمایش بدیم . 

در کامپونت `Detail.tsx` به هوک `useParams` نیاز داریم . 


<img src='https://github.com/mosenn/MERN/assets/91747908/17584cb3-a981-4c3e-a57e-dc541dc9664e' alt='componet in react' />

خب اول میایم `useParams` رو `import` می کنیم از `react-router-dom` . 

در واقع `useParams` یک `Hooke` درون `react-router-dom` هست و برای گرفتن `params` درون `url` استفاده میشه . 

برای ایجاد `detail page` همیشه به مقادر اصلی دیتا اصلی که از خوده `api` داره گرفته میشه نیاز داریم . 

از این رو میایم یک بار دیگه `api` مربوط به کل `post` هارو صدا می زنیم درون `detail page` . 

```javascript
import { posts } from "../../api/post";
```

میایم ایدی که به وسیله درون `path` مربوط به `detail` به عنوان `parmams` ست کردیم می گیریم . 

```javascript 
const { id } = useParams();
```

در ادامه یک فانکشن داریم که این فانکشن `api` مربوط به تمامی `post` هار میاد `call` میکنه .

```javascript
  const takePost = async () => {
    const response: [] | any = await posts();
    // console.log(response);
    setPostData(response?.data);
  };
```
یک `state` درون فانکشن `takePost` داره ست میشه که کل دیتای مربوط به `post` هار و میگیره و ست می کنه . 

در ادامه میایم تمامی پست ها که به وسیله `state` ذخیره کردیم درون فانکشن `takePost` 

 به وسیله این `id` پیدا می کنیم در واقع دیتای اصلی رو میایم روش `find` می زنیم . 

```javascript
  const pos = postData.find((p: Post) => {
    return p?._id === id;
  });
```

در ادامه یک `useEffect` نیاز داریم تا هر بار که صحفه رفرش میشه و کاربر وارد صحفه `detail` میشه بتونه دیتا رو ببینه . 

```javascript
  useEffect(() => {
    takePost();
  }, []);
```

خب اینجوری الان درون کامپونت `detail` به اطلاعات اون پست که روی لینک اش کلیک شده دسترسی داریم . 

در نتیجه می تونیم پست مد نظر رو به وسیله `id` می تونیم نمایش بدیم . 

```javascript
  return (
    <div className="w-[100%]">
      <h1 className="text-4xl m-2 p-2">{pos?.title}</h1>
      <figure className="md:flex justify-center">
        <img
          className=" md:mb-4 md:w-[90%] md:object-cover md:bg-center  md:h-[200px] p-3 rounded-[14px]"
          src={pos?.cover}
          alt={pos?.title}
        />
      </figure>
</div>
```

خب برای اینکه بتونیم لایک و کامنت و سیو برای هر پست داشته باشیم و همینطور نمایش بدیم در صحفه `detail` . 

نیاز داریم که فانکشن های مربوط ب  `api`  که اینکار هارو برای ما انجام میدن رو بیایم `import` کنیم . 

```javascript
import {
  getLikes,
  getSave,
  postLike,
  postSave,
} from "../../api/userIntraction";
```

هیمنطور فانکشن های مربوط به دیتای کامنت ها : 

```javascript
import { postUserComments, getAllPostComments } from "../../api/comment";

```

### Send Comments in Detail page
خب یک فیلد داریم که کاربران می تونند کامنت های خودشون رو بزارن . 

برای این کار به یک `form` نیاز داریم و گرفتن `value` اون `input` . 

پس یک `form` ایجاد می کنیم و یک `state` برای گرفتن `value` . 

همینطور نیاز به دو فانکشن داریم یکی برای `submit` شدن . 

یکی هم برای `onchange` شدن . 

خب `state` که نیاز داریم رو تعریف می کنیم : 
```javascript
  const [Commentvalue, setCommentValue] = useState({
    comment: "",
  });
```
میایم `form` و `input` خودمون رو هم تعریف می کنیم برای گرفتن `comment` کاربر . 

```javascript
      <form action="" onSubmit={handleSubmit} className="p-1 m-1 ">
        <input
          className="rounded-md p-3 h-[90px] w-[100%] border"
          name="comment"
          placeholder="write your comment"
          value={Commentvalue.comment}
          onChange={handleOnchange}
        ></input>
        {/* send comment btn */}
        <Button
          text={"send comment"}
          className="bg-blue-500 hover:bg-blue-300 w-[100%] rounded-md mt-2 md:w-60 p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
          icon=""
        ></Button>
      </form>
```

قطعا یک دکمه هم می خوایم برای اینکه بتونیم `form`  رو `submit` کنیم .
```javascript
       <Button
          text={"send comment"}
          className="bg-blue-500 hover:bg-blue-300 w-[100%] rounded-md mt-2 md:w-60 p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
          icon=""
        ></Button>
```
خب نوبت به نوشتن `onChange` می رسه که مقدار `input` رو بگیریم و بعدش درون `handleSubmit` ارسال کنیم . 

یک بار به `input` نگاه کنیم موقع که `onChange` میشه فانکشن `handleOnchange` اتفاق می افته . 

```javascript
        <input
          className="rounded-md p-3 h-[90px] w-[100%] border"
          name="comment"
          placeholder="write your comment"
          value={Commentvalue.comment}
          onChange={handleOnchange}
        ></input>
```
فانکشن `handleOnchange` طبق معمول مقدار `input` رو درون یک `state` ذخیره می کنه . 

```javascript
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue({ ...Commentvalue, [e.target.name]: e.target.value });
  };
```

بریم سراغ فانکشن `handleSubmit` : 

```javascript
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Commentvalue.comment.trim() !== "") {
      await sendComment();
      await takeAllComments();
      setCommentValue({ comment: " " });
    }
  };
```
یک `if` داریم که میاد چک می کنه که مقدار `input` مربوط به کامنت خالی نباشه . 
```javascript
    if (Commentvalue.comment.trim() !== "") {
      await sendComment();
      await takeAllComments();
      setCommentValue({ comment: " " });
    }
```

درون `if` دوتا فانکشن داریم  `sendComment` و `takeAllComments` .

فانکشن `takeAllComments` که تمامی `comment` ها رو میگیره که درون `handleSubmit` هم صدا زده شده . 

فانکشن `takeAllComments` کمی پایین تر بررسی می کنیم . 

به این دلیل که زمانی که کامنت جدید اراسال میشه بار دیگه `takeAllComments` اتفاق بیوفته و به تمام کامنت ها رو داشته باشیم. 

در نهایت `state` مربوط به کامنت میاد `null` میشه که اینکار باعث میشه `text` درون کامنت بعد از ارسال کامنت پاک شه . 

فانکشن `handleSubmit` رو یک بار دیگه نگاه کنیم : 

```javascript
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Commentvalue.comment.trim() !== "") {
      await sendComment();
      await takeAllComments();
      setCommentValue({ comment: " " });
    }
  };

```
خب درون فانکشن `sendComment` کد زیر رو داریم : 


```javascript
 //* send comment
  const sendComment = async () => {
    if (Commentvalue && pos?._id) {
      const response = await postUserComments(
        Commentvalue,
        userInfoOnline.id,
        pos?._id as string
      );
    } else {
      //*Todo set toast message for user can send empty comment
      console.log("is empty");
    }
  };
```

از نوع `async` هست به این دلیل درونش داره فانکشن مربوط به `api` ساخت کامنت اتفاق می افته . 

اما قبل از اون یک `if` داره که چک می کنه که `state comment` خالی نباشه . دوم اینکه `post_id` وجود داشته باشه . 

```javascript
    if (Commentvalue && pos?._id) {
      const response = await postUserComments(
        Commentvalue,
        userInfoOnline.id,
        pos?._id as string
      );
    }
```

درونش داره فانکشن `postUserComments` اتفاق می افته . 

فانکشن `postUserComments` رو `import` کردیم . 

```javascript
import { postUserComments } from "../../api/comment";
```

که مقدار `input` که تعریف کردیم و `id` کاربری که لاگین هست و همینطور `post_id` ارسال میشه . 

به این دلیل ایدی کاربر و ایدی پست ارسال میشه که متوجه شیم این کامنت برای چه کاربری هست و برای چه پستی هست . 

 کامنت ها رو میگیریم و نشون میدیم . 

 
### takeAllComments function (get all post for detail )
 فانکشن `takeAllComments` داریم که درونش داره فانکشن مربوط به گرفتن `api` کامنت ها اتفاق می افته : 

```javascript 
  const takeAllComments = async () => {
    if (pos?._id) {
      const comments = await getAllPostComments(pos?._id as string);
      /** change setComents to global state for show comments number in homepage*/
      setComments(comments.data);
    }
  };
```

برای اینکه تمامی کامنت های مربوط به همین پست رو بگیریم نیاز به ایدی داریم . 

همینطور نیاز به یک `if` داریم که بررسی کنه اگر دیتای ما لود شد و `post.id` وجود داشت بیاد فانکشن مروبط به گرفتن کامنت ها اجرا شه . 

اگر که `if` نزاریم به این دلیل که این  فانکشن درون یک `useEffect` اتفاق می افته و اگر دیتا هنوز لود نشده باشه . 

و `find` مد نظر ما هنوز اتفاق نیو فتاده باشه . به اررور می خوریم و با مشکل مواجه میشیم . از این جهت به `if` نیاز داریم . 

خب درون این فانکشن یک `state` داره ست میشه به اسم `comments` خب این `state` رو نیاز هست تعریف کنیم . 
```javascript
  const [comments, setComments] = useState([]);
```

خب حالا که درون فانکشن `takeAllComments` تمامی کامنت های مربوط به همین پست رو داریم این اتفاق توسط `id`  صورت میگیره . 

خب میایم کامنت های که گرفتیم و درون `state comment` ذخیره کردیم در صورتی که بودن میایم `map` می زنیم و درون صحفه نمایش میدیم . 

```javascript
    <div className="flex flex-col m-3 justify-center align-cneter">
        {comments &&
          comments.map(
            (com: {
              author: { pic: string; username: string };
              _id: string;
              comment: string;
            }) => {
              // console.log(com, "this is com in map");
              return (
                <div
                  key={com._id}
                  className=" mt-3  rounded-md  border border-zinc-200  flex-col"
                >
                  <div className="flex p-1 m-1  w-[fit-content]">
                    <img src={com?.author?.pic} alt="" className="w-[35px]" />
                    <p className="ml-2">{com?.author?.username}</p>
                  </div>
                  <p className="m-3">{com.comment}</p>
                </div>
              );
            }
          )}
      </div>
```
که در کد بالا داریم اسم کاربری که کامنت رو گذاشته و عکس کاربر رو نمایش میدیم . 

این `map` در صورتی اتفاق می افته که `comment` باشه . 



###  Likes Post in Detail page 

خب همونطور که بالا تر اشاره شد هر پست لایک و پست و کامنت رو داره . 

که کامنت هارو به api ارسال کردیم در نهایت نشون دادیم . 

نوبت به لایک ها میرسه

برای این کار اول میایم فانکشن های مربوط به  `api` برای گرفتن لایک  و ارسال لایک کاربر  رو `import` می کنیم . 

```javascript
import {
  getLikes,
  postLike,
} from "../../api/userIntraction";
```
#### Post Like
خب اول نیاز هست که `post` کنیم لایک کاربر رو . 

برای اینکار میایم اول یک فانکشن ایجاد می کنیم مثل تمامی مراحل قبل . 

```javascript 
  const interactionLikeBtn = async () => {

  };
```

بلاک `try / catch` رو داریم . 

```javascript
    try {
    } catch (error: any) {
    }
```

درون بلاک `try` میایم کد های مربوط به گرفتن دیتای `like` رو انجام میدیم . 

```javascript
    try {
      const like = await postLike(pos?._id as string);
      console.log(like.data.liked.liked, "in btn");
      //* now have realTime like and print user in ui if like or unlike
      setLike(like?.data?.liked?.liked);
      takeAllLikes();
    }
```
که فانکشن `postLike` که از فولدر `api` داره میاد رو اینجا `call` کردیم . 

منتها نیاز هست `post_id` بهش پاس داده شه تا لایک مرتبط با `post` رو داشته باشیم در کامپونت `detail` . 

دیتای که به ما `response` میده به صورت زیر هست . 


```javascript
{_id: '64b1089351bdf15ccc2a69a2', user: {…}, post: '64ad55a85212c7ddaa830f76', liked: true, saved: true, …}
```
که درون ابجکت `user` مشخصات کاربری که لایک رو انجام داده داریم . 

یکی `state` تعریف می کنیم . 

```javascript
 const [like, setLike] = useState(false);
```
که میایم درون یک ` state like ` ذخیره می کنیم . منتها `liked` رو که مقدارش `true` هست . 

```javascript
    try {
      const like = await postLike(pos?._id as string);
      console.log(like.data.liked.liked, "in btn");
      //* now have realTime like and print user in ui if like or unlike
      setLike(like?.data?.liked?.liked);
      takeAllLikes();
    }
```

در ادامه یک فانکشن داریم به اسم `takeAllLikes` داریم . 

کار این فانکشن گرفتن تمامی لایک های مربوط به پستی هست که درونش هستیم . 

اینکارو کردیم که هربار کاربری یک لایکی رو ارسال می کنه در عین حال تمامی لایک های مربوط به پست هم گرفته شه . 

در نهایت در صحفه نمایش داده شه . 

با اینکار به محض اینکه کاربر `like` رو انجام داد یا `unlike` کرد . به صورت `realtime` در صحفه قابل مشاهده هست .

**یاداوری** : درون کامپونت `Detail.tsx` داریم اینکار هارو انجام میدیم . 

یک بار دیگه کل فانکشن `interactionLikeBtn` رو با هم دیگه ببینیم : 

```javascript 
  const interactionLikeBtn = async () => {
    try {
      const like = await postLike(pos?._id as string);
      console.log(like.data.liked.liked, "in btn");
      //* now have realTime like and print user in ui if like or unlike
      setLike(like?.data?.liked?.liked);
      takeAllLikes();
    } catch (error: any) {
      console.error(error?.message);
    }
  };
```

### takeAllLikes Function in Detail.tsx
خب بریم سراغ فانکشن `takeAllLikes` ,  که وظیفه گرفتن تمامی لایک های مربوط به پست رو داره . 

دورن این فانکشن امدیم فانکشن مربوط به گرفتن لایک ها که در فولدر `api` تعریف شده صدا زدیم . 

```javascript
  const takeAllLikes = async () => {
    if (pos?._id) {
      const likes = await getLikes(pos?._id as string);
      setDataLike(likes);
      console.log("Likes in detail", likes.data);
      //* if page is refresh set agin data to setLike
      const checkIntractionUser = likes.data.find((i: any) => {
        return i;
      });
      console.log(checkIntractionUser, "checkIntractionUser");
      // console.log(checkLiked, "checkLiked");
      checkIntractionUser?.liked && setLike(checkIntractionUser?.liked);
    }
  };
```

باز نیاز به `post_id` داریم که به `getLikes` که فانکشن `api` هست پاس بدیم . برای گرفتن تمامی لایک های مربوط به پست مد نظر . 

**یاداوری** : درون کامپونت `Detail.tsx` هستیم . 

درون `if` چک شده اگر که `post_id` بود بیاد `getLikes` اتفاق بیوفته برای اینکه با ارور مواجه نشیم . 

چون اول باید دیتا مد نظر گرفته شه بعد روش `find` زده شه در نهایت به `id` پست مد نظر دسترسی بگیریم . 

و تمامی این مراحل مدت زمانی طول می کشه . 

در ادامه یک `state` به اسم ` dataLikes` داریم که درون خودش دیتای مربوط به `like` رو ست می کنه . 

```javascript
  const [dataLike, setDataLike] = useState<LikeResponse>({
    data: [],
    status: 0,
    statusText: "",
    config: {},
  });
```
درون `if` : 

```javascript
  const takeAllLikes = async () => {
    if (pos?._id) {
      const likes = await getLikes(pos?._id as string);
      setDataLike(likes);
      console.log("Likes in detail", likes.data);
      //* if page is refresh set agin data to setLike
      const checkIntractionUser = likes.data.find((i: any) => {
        return i;
      });
      console.log(checkIntractionUser, "checkIntractionUser");
      // console.log(checkLiked, "checkLiked");

      checkIntractionUser?.liked && setLike(checkIntractionUser?.liked);
    }
  };

```

اتفاق دیگه ای که داره می افته یک `find` هست که روی دیتای اصلی که گرفته شده یک فایند زده شده و مقادیررو `return` می کنه .



در ادامه گفتیم اگر که `checkIntractionUser?.liked` دوباره بیاد `setLike` اتفاق بیوفته 

در واقع برای قرمز شدن لایک مون هست اگر این خط نباشه کد اتفاق می افته ولی قرمز شدن لایکمون خیر . 

چون نیاز داریم دوباره لایک رو ست کنیم برای اینکار . 


```javascript
checkIntractionUser?.liked && setLike(checkIntractionUser?.liked);
```

این کار باعث میشه که وقتی صحفه رفرش میشه دیتا رو داشته باشیم و مشکلی برای لایک پیش نیاد . 

یک بار دیگه به کل فانکشن `takeAllLikes` نگاه کنیم : 

```javascript
```javascript
  const takeAllLikes = async () => {
    if (pos?._id) {
      const likes = await getLikes(pos?._id as string);
      setDataLike(likes);
      console.log("Likes in detail", likes.data);
      //* if page is refresh set agin data to setLike
      const checkIntractionUser = likes.data.find((i: any) => {
        return i;
      });
      console.log(checkIntractionUser, "checkIntractionUser");
      // console.log(checkLiked, "checkLiked");

      checkIntractionUser?.liked && setLike(checkIntractionUser?.liked);
    }
  };
```

دیتای که این فانکشن به ما برگشت میده در واقع `response` که داریم به صورت زیر هست . 

اطلاعات کاربری که لایک کرده در ابجکت `user` هست . 

```javascript
Array(2)
0: 
{_id: '64aa5013ad4a1a0a329d8b6f', user: {…}, post: '64aa4fc2ad4a1a0a329d8b5b', liked: true, saved: true, …}
1: 
createdAt: "2023-07-14T08:42:40.630Z"
liked: true
post: "64aa4fc2ad4a1a0a329d8b5b"
saved: true
updatedAt: "2023-07-14T08:42:43.328Z"
user: { 
pic: "https://res.cloudinary.com/duhpa0txz/image/upload/v1689323553/jnf43fax4pv3td87o14r.png"
username: "user6000"
_id: "64b1082b51bdf15ccc2a694d"
}
_id: "64b10a8051bdf15ccc2a69e2"
```

همینطور `save` و `like` همینطور ایدی پست و کاربر رو هم داریم . 

این موارد سمت `server` کنترل شده در کلاینت صرفا `ObjectId` دیتا ها رو پاس میدیم به `api` و `response` رو می گیریم . 

خب لایک رو فرستادیم و در ادامه لایک رو گرفتیم برای نشون دادن در `return` به صورت زیر میایم لایک رو نمایش میدیم در `Detail.tsx` . 

```javascript
   {dataLike.data &&
        dataLike.data?.map((items: any) => {
          const { user } = items;
          // console.log(user, liked, "in map");
          return (
            <div key={user._id}>
              <p>{user.username}</p>
              <img className="w-[20px]" src={user.pic} alt="" />
            </div>
          );
        })}
```

اینجوری میایم `username` رو نشون میدیم و همینطور میایم عکس کاربر که درون `pic` هست رو نمایش میدیم . 

ایتجوری هر کاربری که لایک کرده عکس اش نمایش داده میشه و همینطور اسمش . 

خب نیاز به یک `button` داریم که بیاد این کار `like` و `unlike` شدن رو انجام بده . 

که در واقع فانکشن `interactionBtnLike` همین کار رو انجام میده . 

```javascript
      <button className="ml-5" type="button" onClick={interactionLikeBtn}>
        {like ? (
          <PiHeartStraightFill size="1.5rem" color="red" />
        ) : (
          <PiHeartStraight size="1.5rem" />
        )}
        {dataLike.data && <p>{dataLike.data.length}</p>}
      </button>
```

درون `return` یک `button` ایجاد کردیم که در صورتی که `like` بود . 

زمانی که `state like` امد `true` شد . بیاد یک ایکون به ما نشون بده . 

در صورتی که `false` بود بیاد یک ایکون نشون بده . 

در ادامه هم درون خوده `button` به عنوان `text` امدیم تعداد دیتای `like` رو نشون دادیم به وسیله `length`

```javascript
  {dataLike.data && <p>{dataLike.data.length}</p>}
```

برای ایکون ها هم از `react-icons` استفاده کردیم . 

که `import` شده . 

```javascript
import { PiHeartStraight, PiHeartStraightFill } from "react-icons/pi";
```
گرفتن `like` و پست کردن `like` کاربر ها به اتمام رسید . 


### Get  takeSaves Function in Detail.tsx

دقیقا مثل `like` هست یک فانکشن داریم برای گرفتن تمامی دیتا های مربطو به `save` . 

که این دیتا ها درون  `  state saveData` ذخیره می شند . 

```javascript
const [saveData, setSaveData] = useState<[] | any>([]);
```

فانکشن `takeSaves` که وظیفه گرفتن `save` های پست مد نظر رو داره . 

منتها باز به `post_id` نیاز داره . 

که پاس بده به فانکشن `getSave` که درون فولدر `api` تعریف شده برای گرفتن `save` های پست با توجه به `id`
```javascript
  const takeSaves = async () => {
    try {
      if (pos?._id) {
        const saves = await getSave(pos?._id as string);
        setSaveData(saves);
        const checkIntractionUser = saves?.data.find((s: any) => {
          return s;
        });
        checkIntractionUser?.saved && setSave(checkIntractionUser?.saved);
      }
    } catch (err) {
      console.log("takeSaves error in detail", err);
      return err;
    }
  };
```
درون `  state saveData` دیتا داره ذخیره میشه : 

```javascript
setSaveData(saves);
```

در ادامه دوباره `find` رو داریم برای اینکه سیو شدن رو بتونیم تغییر ایکون شو ببینم و دوباره `set state` رو داریم . 

```javascript
checkIntractionUser?.saved && setSave(checkIntractionUser?.saved);
```

خب `interactionSavedBtn` رو داریم که کار `save` و `unsave` رو انجام میده . 
```javascript
  const interactionSavedBtn = async () => {
    try {
      const save = await postSave(pos?._id as string);
      console.log(save);
      setSave(save?.data?.saved?.saved);
      takeSaves();
    } catch (err) {
      console.error(err, "saved btn error in detail");
    }
  };
```

درون `return` یک `buton` داریم که با کلیک کردن رو این `button`  میاد فانکشن `interactionSavedBtn` اتفاق می افته . 

```javascript
   <button onClick={interactionSavedBtn}>
        {save ? <AiFillTag size="1.5rem" /> : <AiOutlineTag size="1.5rem" />}
        {saveData.data && <p>{saveData.data.length}</p>}
      </button>
```

که در صورتی که `save` بود که یک `state` هست و یک مقدار `bolean` داره . 

```javascript
 const [save, setSave] = useState(false);
```
که `true / false` میشه . 

اگر `true` بود بیاد یک `icon` نمایش بده . 

اگر که `false` بود بیاد یک `icon` دیگه نمایش داده شه . 

به عنوان `text` برای `button` هم بیاد `length` دیتا رو نشون بده که در واقع تعداد `save` برای اون پست هست . 

زمانی که روی این `button` کلیک میشه میاد فانکشن `interactionSavedBtn` اتفاق می افته . 

### run takeAllLikes , takeSaves , takeAllComments 

یک `useEffect` داریم در کامپونت `Detail.tsx` . که میاد تمامی فانکشن های مربوطی که نوشتیم رو ران می کنه . 

منتها زمانی که `pos` بیاد  اتفاق بیوفته   .

```javascript
  const pos = postData.find((p: Post) => {
    return p?._id === id;
  });
```

```javascript
  useEffect(() => {
    takeAllComments();
    takeAllLikes();
    takeSaves();
    if (userInfoOnline.id) {
      setDisabelSubmitForm(false);
    }
  }, [pos]);
```

در این `useEffect` کار دیگه ای که انجام شده این هست که چک کردیم ببنیم کاربر `login` هست یا  نه . 

اگر که `login` بود بتونه کامنت بزاره و لایک و سیو رو انجام بده . 

درون این `if` امدیم این شرط رو گذاشتیم : 

```javascript
    if (userInfoOnline.id) {
      setDisabelSubmitForm(false);
    }
```
خب `userInfoOnline.id` در واقع داره از `context` میاد . 

```javascript
import { useGlobalContext } from "../../context/context";
```
```javascript
  const { userInfoOnline } = useGlobalContext();
```
یک `state` برای `disbale` کردن `button` مربوط به ارسال کامنت داریم . 

```javascript
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(true);
```

که همین `state` رو امدیم به طور کل `true` گذاشتیم و گفتیم اگر که کاربر `login` بود درون شرط `if` که در `useEffect` گذاشتیم . 

بیاد `state` تغییر کنه و `true` شه .


```javascript
  useEffect(() => {
    takeAllComments();
    takeAllLikes();
    takeSaves();
    if (userInfoOnline.id) {
      setDisabelSubmitForm(false);
    }
  }, [pos]);
```

در ادامه مقدار `disable` رو برای `button` مربوط به `submit` شدن کامنت رو این `state` قرار دادیم . 
```javascript
        <Button
          text={"send comment"}
          className="bg-blue-500 hover:bg-blue-300 w-[100%] rounded-md mt-2 md:w-60 p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
          icon=""
        ></Button>
```

اگر که کاربر `login` نباشه نمی تونه کامنتی رو ارسال کنه . 

خب اگر ادامه اگر کاربر لاکین نباشه نمی تونه `like` کردن پست و همینطور `save` شدن پست رو انجام بده . 

برای اینکار ما از کامپونت `Toast` استفاده کردیم . 

اول `state toast` رو تعریف می کنیم که برای نشون دادن `toast` استفاده میشه . 

یک `state` دیگه هم نیاز داریم برای اینکه `message` مربوط به `like` و `save` رو درونش ذخیره کنیم .



```javascript
  const [toast, setToast] = useState(false);
  const [authInteractionUser, setAuthIntractionUser] = useState("");
```

خب `state toast` که باهاش اشنا هستیم برای نشون دادن کامپونت `Toast` استفاده میشه . 

در ادامه `state authInteractionUser` رو داریم 

که میاد یک پیام رو ذخیره می کنه برای نشون دادن پیام که برای `like` و `save` هست . 

از `state authInteractionUser` میایم درون بلاک `catch`

فانکشن های `interactionSavedBtn` و `interactionLikeBtn`

میایم `state authInteractionUser  ` رو ست می کنیم . 

```javascript
 const interactionLikeBtn = async () => {
    try {
      const like: {} | any = await postLike(pos?._id as string);
      // console.log(like, "like data in btn");
      // console.log(like?.data?.liked?.liked, "in btn");
      //* now have realTime like and print user in ui if like or unlike
      setLike(like?.data?.liked?.liked);
      takeAllLikes();
    } catch (error: any) {
      console.error(error?.message);
      setToast(true);
      setAuthIntractionUser(error?.message);
      setTimeout(() => {
        setToast(false);
      }, 7000);
    }
  };
```
 به بلاک `catch` نگاه کنید  : 

```javascript
 catch (error: any) {
      console.error(error?.message);
      setToast(true);
      setAuthIntractionUser(error?.message);
      setTimeout(() => {
        setToast(false);
      }, 7000);
    }
```

یدونه `state toast` داره درونش `true` میشه در صورتی که `err` داشتیم . 

زمانی که کاربر لاگین نباشه تلاش کنه لایک یا سیو رو انجام بده این بلاک `catch` اتفاق می افته . 

پس در نتیجه `state toast` رو میایم `true` می کنیم . 

در ادامه `state authInteractionUser  ` امدیم `error.message` رو درونش `set` می کنیم . 

در ادامه `setTimeout` رو داریم که گفتیم بعد از 7s بیاد `state toast` ما `false` شه . 

که کامپونت `Toast` از بین بره . 

درون فانکشن `interactionSavedBtn` هم همین اتفاق می افته . 

صرفا بلاک `catch ` فانکشن `interactionSaveBtn`  رو در کد زیر مشاهده می کنید . 

اتفاقی که در بلاک `catch` فانکشن `interactionSaveBtn` می افته دقیقا مثل فانکشن `interactionLikeBtn` هست . 

```javascript
catch (error: any) {
      console.log("saved btn error in detail", error);
      console.error(error?.message);
      setToast(true);
      setAuthIntractionUser(error?.message);
      setTimeout(() => {
        setToast(false);
      }, 7000);
    }
```

# panel page  

یک صحفه داریم به اسم `panel` که هر کاربر سایت می تونه پست های که ایجاد کرده رو درونش مشاهده کنه .

و بتونه پست ها رو `delete` , `edit` و `create` کنه . 

صحفه `createPost` رو که ساختیم از قبل و به اینجا صرفا لینک اش رو می زاریم . 

برای نشون دادن پست هر کاربر نیاز به `ObjecId` داریم و `api` برای اینکار . 

که در فولدر `api`  اینکار انجام شده و `api` برای اینکار نوشته شده . 

زمانی که کاربر `login` هست می تونه که وارد `panel` کاربری وارد بشه . 

خب اول فانکشن های مربوط به `api` رو میایم `import` می کنیم . 

```javascript
import { deleteUserPost, userPost } from "../../api/post";
```

در ادامه یک `hook` داریم که نوشتیم میاد کار چک کردن رو انجام میده . 

که کاربر ما `login` هست یا نه . 
```javascript
import UserCheckingLogin from "../../hooks/UserCheckingLogin";
```
### hook UserCheckingLogin

از این `hook` ما میایم درون صحفه `createPost` و `Panel` استفاده می کنیم .

اینکار باعث میشه اگر کاربر به صورت دستی در `url` یا همون ادرس بار مرورگر خودش ادرس `createPost` یا `Panel` رو وارد کرد .

و لاگین نبود .. به صحفات دسترسی نداشته باشه . 

الان هر جا بخوایم به کاربر دسترسی ندیم قبل از اینکه `login` نشده از این `hook UserCheckingLogin   ` استفاده می کنیم .

و `UserCheckingLogin` به عنوان `parenet` اصلی اون صحفه یا کامپونت قرار میدیم . 

در واقع کامپونت یا صحفه مد نظر مون رو درونش `wrapp` می کنیم . 

مثل صحفات `Panel.tsx` و `Createpost.tsx` . 

در `userCheckLogin` کد زیر رو داریم : 

```javascript
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { AiFillHome } from "react-icons/ai";
```
اول از همه `import` های بالا رو داریم . 

که مهم ترین `import` مربوط به `useGlobalContext` هست . 

که میایم `userInfoOnline` رو از درونش صدا می زنیم . 

```javascript
  const { userInfoOnline } = useGlobalContext();
```

در ادامه یک سری فانکشن داریم برای `navigate` شدن درون صحفات `login` و `register` همینطور `home`
```javascript
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
``` 

یک فانکشن داریم که یک `state auth` رو مقدارش رو میاد `true` و `false` می کنه . 

```javascript
  const [authUser, setAuthUser] = useState(true);
```

با توجه به اینکه `user` لاگین هست یا خیر . 

```javascript
  const CheckingUser = () => {
    if (!userInfoOnline.username) {
      setAuthUser(false);
      // navigate("/login");
    } else {
      setAuthUser(true);
    }
  };
```
در صورتی که کاربر ما درون `state global userInfoOnline` نباشه . 

میاد `state` مربوط به `auth user` رو `false` می کنه . 

در ادامه اگر که `userInfoOnline` مقدار `username` رو درون خودش داشت میاد  `auth user` رو `true` می کنه . 

در ادامه `return` زیر رو درون `UserCheckingLogin` داریم . 

که گفتیم اگر ` state authUser`  مقدارش `true` بود . 

بیاد یک `children` رو `return` کنه . 

که این `children` در واقع کامپونت یا صحفه مد نظر ما هست 

که در صورت که کاربر لاگین بود به این کامپونت یا صحفه دسترسی داشته باشه . 

در ادامه اگر که `state authUser` مقدارش `false` بود یک باکس رو نمایش بده .

که این باکش حاوی لینک های برای ثبت نام کردن و لاگین کردن و برگشت به صحفه اصلی هست یا همون `home page`.

```javascript
  return (
    <>
      {authUser ? (
        children
      ) : (
        <section className="text-center">
          <div>
            <h1>you are not access this page first login 😉</h1>
          </div>
          <div className="p-1 m-1  flex justify-center">
            <Button
              className="p-2 m-3 w-[220px] text-lg border border-gray-300 rounded-lg bg-blue-400 text-white"
              onClick={navigateToLogin}
              text="you have account login here"
              icon=""
            ></Button>
            <Button
              text="register account here"
              className="p-2 m-3 w-[220px] text-lg border border-gray-300 rounded-lg bg-blue-400 text-white"
              onClick={navigateToRegister}
              icon=""
            ></Button>
            <Button
              className="flex justify-center items-center p-2 m-3 w-[220px] text-lg border border-gray-300 rounded-lg bg-blue-400 text-white"
              text={`back to home page `}
              onClick={navigateToHome}
              icon={<AiFillHome />}
            ></Button>
          </div>
        </section>
      )}
    </>
  );
```

خب برگردیم به صحفه `Panel.tsx` . 

خب الان `UserCheckingLogin` که ساختیم در کامپونت `Panel` میایم ازش استفاده می کنم . 

```javascript
import UserCheckingLogin from "../../hooks/UserCheckingLogin";
```
حالا تمامی کامپونت `Panel` رو میایم درون `UserCheckingLogin` قرار میدیم . 

```javascript
  return (
    <div>
      <UserCheckingLogin>
        <h1>Panel</h1>
      </UserCheckingLogin>
    </div>
  );
```

الان کاربر زمانی می تونه دسترسی داشته باشه که صرفا `login` باشه . 

در غیر اینصورت باکسی که در `UserCheckingLogin` طراحی شده نمایش داده میشه . 
### takeUserPost in panel

در ادامه فانکشن `takeUserPost` رو داریم که میاد `api` مربوط به گرفتن پست های کاربری که `login` هست رو انجام میده . 

که البته فانکشن `api` از قبل `import` شده . 

```javascript
import { deleteUserPost, userPost } from "../../api/post";
```

```javascript
 const takeUserPost = async () => {
    const response: {} | any = await userPost();
    console.log(response);
    setUserPosts(response?.data);
  };
```
از اینجهت که ممکنه بعدا به این دیتا بخوایم دسترسی داشته باشیم درون یک `state global` امدیم ذخیره اش کردیم درون `context` . 


```javascript
import { useGlobalContext } from "../../context/context";

```

```javascript
  const { setUserPosts, userPosts } = useGlobalContext();
```

درون فانشکن `takeUserPost` امدیم `state userPosts` که گلوبال هست رو صدا زدیم . 

و دیتای که میگیریم رو ذخیره کردیم . 


```javascript
    setUserPosts(response?.data);
```
فانکشن `takeUserPost` رو درون یک `useEffect` صدا زدیم تا به محض اینکه این کامپونت یا صحفه `panel` رندر شد . 

بیاد فانشکن `takeUserPost` رو اجرا کنه و ما دیتارو داشته باشیم . 

```javascript
  useEffect(() => {
    takeUserPost();
  }, []);
```

در ادامه `return` زیر رو درون `Panel.tsx` داریم . 

که گفتیم اگر `userPosts` بود در واقع `state global` که دیتا رو داره ذخیره می کنه . 


```javascript
  {userPosts?.length > 0 &&
```

اگر که `length` بزرگ تر از 0 بود بیاد دیتارو `map` کنه و نمایش بده . 


```javascript
    {userPosts?.length > 0 &&
          userPosts.map((post: userPostType) => {
            return (
              <section
                key={post._id}
                className=" flex flex-col justify-center items-center   w-[100%]"
              >
```

گفتیم که تمای کامپونت `Panel.tsx` درون `UserCheckingLogin` قرار گرفته . 

برای اینکه `UserCheckingLogin` چک می کنه که ایا کاربر `login`  هست یا نه اگر که `login` بود بتونه به `Panel.tsx` دسترسی داشته باشه . 
```javascript 
  return (
    <div>
      <UserCheckingLogin>
        <h1>Panel</h1>

        <Link to="/createpost">Create Post</Link>
        {userPosts?.length > 0 &&
          userPosts.map((post: userPostType) => {
            return (
              <section
                key={post._id}
                className=" flex flex-col justify-center items-center   w-[100%]"
              >
                <div className="border w-[100%] md:w-[80%] mt-3 ">
                  <section>
                    <div className="flex justify-around  items-center p-2 m-3 md:relative">
                      <figure className="md:w-[15%] flex justify-center">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-[50px] h-[50px] rounded-full"
                        />
                      </figure>
                      <p className="md:w-[15%] text-center">{post.title}</p>

                      <p className="md:w-[15%] text-center">
                        {format(new Date(post.createdAt), "yyyy-MM-dd")}
                      </p>
                      {/* Buttons in tablet scope */}
                      <div className="  hidden md:flex  justify-evenly ml-[50px] w-[fit-content]   items-center ">
                        {toast && (
                          <Toast
                            text="  your post is delete 👀 "
                            toast={toast}
                          />
                        )}
                        <button
                          className="font-semibold m-3 w-[70px] h-[25px] flex justify-center items-center  bg-red-300 p-3 rounded-[5px]"
                          type="button"
                          onClick={() => {
                            deletePostUser(post._id);
                          }}
                        >
                          delete
                        </button>
                        <Link
                          to={`/editpost/${post._id}`}
                          className="m-3  font-semibold bg-green-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center"
                        >
                          edit
                        </Link>
                        <button className="m-3 font-semibold bg-blue-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                          priview
                        </button>
                      </div>
                    </div>
                    {/* Buttons in mobile scope */}
                    <div className="flex md:hidden justify-around items-center p-2 m-3">
                      <button
                        className="font-semibold m-3 w-[70px] h-[25px] flex justify-center items-center  bg-red-300 p-3 rounded-[5px]"
                        type="button"
                        onClick={() => {
                          deletePostUser(post._id);
                        }}
                      >
                        delete
                      </button>
                      <button className="m-3  font-semibold bg-green-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                        edit
                      </button>
                      <button className="m-3 font-semibold bg-blue-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                        preview
                      </button>
                    </div>
                  </section>
                </div>
              </section>
            );
          })}
      </UserCheckingLogin>
    </div>
  );
```

درون `return` یک لینگ داریم که وارد صحفه `createPost` میشه . 

```javascript
<Link to="/createpost">Create Post</Link>
```

در ادامه یک `Link` برای `edit` کردن پست داریم که وارد صحفه `edit` میشه . 

```javascript
<Link to={`/editpost/${post._id}`}>edit</Link>
```

همینطور یک `button` داریم برای `delete` شدن پست . 

که فانکشن `deletePostUser` رو درون خودش اجرا می کنه و `id` پست رو میگیره .
```javasript
 <button type="button"
onClick={() => {
 deletePostUser(post._id);
 }}
>
 delete </button>
```

### deletePostUser in panel.tsx

درون فانکشن `deletePostUser` میایم اول `api` مربوط به `delete` شدن رو صدا می زنیم . 

این `api` یک `response` به ما برگشت میده .

که گفتیم اگر `response.status` برابر با `200` بود . 

بیاد `state userPosts` رو `filter` کنه بر اساس `id` که درون `map` به فانکشن `deletePostUser` پاس داده شده .

مقدار `filter` شده که در واقع پستی هست که حذف شده . درون یک متغییر به اسم`newUserPosts` قرار میگیره . 


```javascript
  const deletePostUser = async (id: string) => {
    const response: {} | any = await deleteUserPost(id);
    console.log("response delete post", response);
    if (response?.status === 200) {
      const newUserPosts = userPosts.filter((post: any) => post._id !== id);
      console.log("newUserPosts", newUserPosts);
      setUserPosts(newUserPosts);
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  };
```
در ادامه `state POsts` که یک `state global` هست دوباره میاد ست میشه . 
```javascript
    if (response?.status === 200) {
      const newUserPosts = userPosts.filter((post: any) => post._id !== id);
      console.log("newUserPosts", newUserPosts);
      setUserPosts(newUserPosts);
      setToast(true);
    }
```

```javascript
      setUserPosts(newUserPosts);

```

بعد از `delete` میایم کامپونت `toast` رو نشون میدیم 

درون `if` یک `setTimeout` هست که میاد اینکارو انجام میده .

مبنی بر اینکه `post` شما `delete` شده . 

```javascript
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
```

یه بار دیگه بیایم کل فانکشن `deletePostUser` رو نگاه کنیم . 

```javascript

```javascript
  const deletePostUser = async (id: string) => {
    const response: {} | any = await deleteUserPost(id);
    console.log("response delete post", response);
    if (response?.status === 200) {
      const newUserPosts = userPosts.filter((post: any) => post._id !== id);
      console.log("newUserPosts", newUserPosts);
      setUserPosts(newUserPosts);
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  };
```
```



# Server 

همونطور که اشاره شد پروژه `blog` یک پروژه فول استک هست . 

بک اند پروژه با nodejs + expressjs و mongodb زده شده . 

برای اینکه بتونیم پروژه رو کامل داشته باشیم نیاز هست که فایل سرور هم در کنار فایل client داشته باشیم . 

و هر دو رو ران کنیم  . 



# Run Clinet & Server 

برای client از دستور : 

```bash
npm i 
npm run dev
```

برای server از دستور : 

```bash
npm i 
nodemon 
```

or 

```bash
node index.js
```

پکیج `nodemon` به ما کمک می کنه سرور رو به صورت `live` ران داشته باشیم . 

در واقع مثل `live server` سمت `client` می مونه . 

که حتما نیاز هست nodejs روی سیستم نصب و ورژن 16 به بالا باشه . 

برای دوسنتن ورژن nodejs کافیه `command prompet` رو باز کنید . 

دستور : 

```bash
node -v 
```

رو وارد کنید اگر nodejs نصب باشه ورژن nodejs رو نمایش میده . 

بریم سراغ ساخت سرور : 

بعد از زدن دستوارت اوله npm i . 


و ساخت package.json : 

![image](https://github.com/mosenn/MERN/assets/91747908/4645db0b-8c5b-493b-ad3b-f72bee1a6078)


اطلاعات درون package.json که درون dependencies پکیج های که برای server استفاده شده می بینیم . 
```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.2.3",
    "yup": "^1.2.0"
  }
}
```


یک فایل به اسم index.js ایجاد می کنیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/1ca859d0-8c6c-4c54-8bb4-8af3414a1fb8' alt ='index.js in express'/>

که در واقع فایل اصلی `server` حساب  میشه . 

و تمامی module های دیگه درون index.js در نهایت import میشه . 

چون در کل یک فایل سمت server ما run میشه و اونم index.js هست . 


# Server Packages : 

### cors 

پکیج `cors`  در واقع cors policy رو کنترل می کنه که چه ادرسی می تونه به سرور دسترسی داشته باشه . 

همینطور یک سری option داره که می تونیم set کنیم . که جلو تر با `credentials` اشنا میشیم . 

### bcryptjs

برای رمز گذاری استفاده میشه . 

برای مثال از `bcryptjs`  برای رمزگذاری روی پسورد کاربر ازش استفاده شده . 


### body-parser 

کمک می کنه که به اطلاعات درون `body` به وسیله `req` دسترسی داشته باشیم . 

برای  `HTTP REQUSET` متد های  `post , put , patch` کمک می کنه که به `req` دسترسی داشته باشیم . 


### cookie-parser 

برای set کردن `cookie` استفاده میشه در واقع می تونیم cookie سمت سرور set کنیم و بخونیم . 

در واقع یک `middelware` هست `cookie-parser` کمک می کنه `cookie` سمت `server` خونده شه . 

و اگر نیاز بود به سمت `client` ارسال شه به صورت یک `object`
### dotenv

برای set کردن فایل env ازش استفاده می کنیم . 

### expressjs 

پکیج `expressjs` در واقع یک `framework` هست که کار رو برای کد نویسی `server` فراهم می کنه . 

### jsonwebtoken 

پکیج `jsonwebtoken` برای ساخت `token` ازش استفاده میشه . 

که `token` ساخته شده می تونه حاوی یک سری اطلاعات باشه . 

برای `Authentication` و `Authorization` ازش استفاده میشه .


### mongoose 


پکیج `mongoose` به ما کمک می کنه تا بهتر بتونیم با `mongodb` ارتباط بگیریم و ازش استفاده کنیم .


### yup 

پکیج `yup`  برای اعتبار سنجی سمت `server` می تونیم ازش استفاده کنیم . 

برای `validation` کردن اطلاعاتی که قرار هست ارسال شه سمت `data base` . 


بعد از اینکه پکیج های مورد نیاز رو نصب شد . 

اگر که پروژه رو `clone` کنید با دستور `npm i` می تونید تمامی پکیج ها رو نصب کنید . 

نوبت به ساخت و ایجاد `server` می رسه . 

# Create Server


# Index.js File

درون فایل `index.js` اول میایم پکیج های موزد نیاز رو `require`  می کنیم . 

**نکته** : در این پروژه از `commonjs` استفاد هشده به جای `es6` 


```javascript
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectToDb = require("./connection/db");
require("dotenv").config({ path: "./config.env" });
```

بعضی از پکیج ها رو می بنید که require شده درون فایل index.js . 

پکیج های که نیستند در module دیگه ای ازشون استفاده شده . 


**نکته** : هر فایل js در واقع یک module هست . 

یک متفیر `connectToDb` داریم که در واقع کار متصل شدن به پایگاه داده رو برای ما انجام میده . 
```javascript
const connectToDb = require("./connection/db");
```

که در اینده توضیح داده میشه نحوه اتصال به `data base`

در این پروژه از `mongodb atlas` استفاده شده . 

که `mongodb atlas` در واقع یک `data base` انلاین `mongodb` هستش . 

و بدون نصب `mongodb` روی سیستم می تونیم از `mongodb atlas` استفاده کنیم . 

 که البته نیاز داریم که حتما درونش یک اکانت ایجاد کنیم و مراحل ساخت `data base` رو انجام بدیم . 


مورد بعدی که کمی با بقیه متفاوت هست `dotEnv` هست . 

```javascript
require("dotenv").config({ path: "./config.env" });
```

که این `dotenv` برای خوندن فایل `env`   استفاده میشه   

نیاز به تعریف کردن متغییر نداره به `path` میایم ادرس فایل env خودمون رو وارد می کنیم . 

که در اینجا اسم فایل ما `config.env` هست و درون `path` به این شکل تعریف شده `{ path: "./config.env" }` به ابجکت بودنش دقت کنید .


### Define app

بعد از import ها که تموم شد . میایم به وسیله `expressjs` یک app تعریف می کنیم . 


```javascript 
const app = express();
```

الان می تونیم از `express` استفاده کنیم . 


### middelware use 

قدم بعدی استفاده از `use` هست , یک متد درونی `express` هست که به عنوان یک `middelware` عمل می کنه . 

 اجازه میده که بتونیم از HTTP METHOD ها استفاده کنیم به وسیله `express` 

در واقع هر جا نیاز داریم که به `server` بگیم یک سری چیز ها رو استفاده کن . 

از `use` استفاده می کنیم . 

```nodejs 
app.use(bodyParser.json());
app.use(cookieParser());
```


در کد بالا امدیم از `parser` ها استفاده کردیم که توضیح شون رو کمی بالا تر گفتیم . 



### Saving Image In Server 

اگر بخوایم عکسی رو درون server ذخیره کنیم . که نخوایم از یک فضای دیگه برای ذخیره سازی عکس استفاده کنیم . 

و بخوایم درون خوده سرور اینکارو انجام بدیم که پیشنهاد نمیشه . 

به دلیل اینکه حجم دیتا بیس و سرور افزایش پیدا می کنه . اما به هر حال نیاز هست 

که از پکیج `multer` استفاده کنیم و همینطور کد های زیر رو درون `index.js` داشته باشیم . 

```javascript
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
```

در واقع برای فایل های `json` که سمت سرور میاد یک `limit` تعیین شده . 

و همینطور برای `urlencoded` که به سمت سرور ارسال میشه باز یک `limit` تعریف شده . 

در نهایت از `multer` استفاده میشه برای ذخیره سازی و ارسال عکس به سمت `data base` . 

**یاداوری** : در این پروژه ما از یک فضای `cloud` سمت `client` استفاده کردیم . 

از سایت `cloudinary` , که عکس فرستاده شده از کاربر رو `upload` می کنه . 

یک لینک اپلود عکس برای ما به عنوان ریسپانس میده 

و `link` ارسال شده که `response api` هست رو درون `data base` دخیره می کنیم . 

**یاداوری** : تمامی مراحل گفته شده برای اپلود عکس سمت  `client` انجام شده . 


بریم سراغ ادامه فایل `index.js` . 

```nodejs 
app.use(bodyParser.json());
app.use(cookieParser());
```

### define cors 

قدم بعدی تعریف کردن `cors` هست . 

که در واقع ادرس های که قرار هست به این server دسترسی داشته باشند . 

مر بوط به `cors policy` که می تونیم یک یا چند دسترسی اعمال کنیم . 

البته برای اینکه بتونیم با `cookie` کار کنیم نیاز هست `credentials` رو روی `true` قرار بدیم . 

که یک option مر بوط به `cors` هست . 

```javascript 
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
```

از `use` استفاده کردیم که توضیح دادیم یک `method` درونی `express` هست . 

از `use` به مکرر استفاده میشه . 

### listen 

مر حله بعدی نوشتن `listen` هست برای اینکه `server` که ایجاد کردیم روی یک port و یک ادرس بیاد `run` شه . 

**نکته** : حتما باید این `listen` تعریف شه حتی اگر می خوایم `server` رو بعدا روی `host` دیپلوی کنیم . 

اگر این کارو انجام ندیم وقتی که `deploy` انجام میشه روی `host` پورت دیفالت اون `host` رو نمی تونه بخونه . 

در نهایت `server` مد نظر ما به طور کامل `deploy` نمیشه .


```javascript
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server is connectin http://localhost:${port}`);
});
```

در اینجا `port` که تعریف شده به صورت `default` گذاشتیم روی 3010 و در نهایت یک متغییر `env` تعریف کردیم . 

که اگر `port` دیفالت که 3010 هست اجرا نشد بره از داخل   متغییر `env`  پورت رو بخونه . 

و موقع `deploy` کردن روی `host` این متغییر رو برای host تعریف می کنیم و host پورت خودش رو اعمال می کنه . 


### run server 

خب حالا اگر با دستور `node index.js` رو بزنیم `server`  اجرا میشه . 

همینطور با اگر دستور `nodemon` رو بزنیم درون `terminal` باز سرور ران میشه . 

پیشنهاد میشه با `nodemon` ران شه به صورت `live` تغییرات رو ببنید . 

که قبل تر گفتیم نیاز هست `nodemon` رو نصب کنید .

### define test route 

برای اینکه متوجه شیم server روی لوکال به درستی run میشه یا نه . 

یک `route` تست تعریف می کنیم تا درون صحفه یک چیزی رو به ما نمایش بده یک پیام ساده .

**نکته** : این `route` ساده که می نویسیم بعد از تست می تونیم کامنت کنیم یا پاک کنیم . 

```javascript 
app.use("/home", async (req, res) => {
  res.status(200).send("server is ok");
});
```

در واقع هر `ROUTE` که نوشته میشه `parameter` های `req` , `res` رو خواهد داشت . 

که با `res` در خواست ها رو به ادرسی که نوشته شده ارسال میشه . 

با `req` می تونیم در خواست های سمت `client` یا `cookie` و .. بگیریم . 

در کد بالا یک پیام حاوی `server is ok` در صحفه اصلی server چاپ کردیم . 

متد `res` درون خودش `status` کد رو داره که با این `status` ها رو ست می کنیم . 

که هر `status code` بیانگر یک پیام هست . 

مثلا `201 status code`  به معنی ساخته شدن هست . 
یا `status 200` به معنی موفقیت امیز بودن هست . 

مثلا `status code 404` به این معنی `bad requset` در خواست بد هست .

می تونیم از `send` یا `json` برای ارسال استفاده کنیم . 

که `json` پیشنهاد میشه . 

# Connect to mongodb 

بعد از ساخت اکانت در mongodb atlas که data base انلاین ما هستش . 

یک ادرس برای متصل شدن ایجاد میشه که به وسیله این ادرس میایم server خودمون رو به `mongodb atlas` متصل می کنیم . 

یک فولدر به اسم `connection` داریم که فایل درونی اون به اسم `db.js`  کار متصل شدن به `data base` رو انحام میده . 

![image](https://github.com/mosenn/MERN/assets/91747908/a91a0d7a-97e8-4b08-91a8-3985ab7c32d3)

درون `db.js` کد زیر رو داریم : 

```javascript
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connecetToDb = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zutazhf.mongodb.net/blog`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "data base cant connect");
    process.exit(1);
  }
};

module.exports = connecetToDb;
```
 نکته ای که وجود داره گفتیم از `mongoose` استفاده می کنیم برای ارتباط گرفتن و کار با `mongodb` . 

 برای connect شدن و ا ستفاده از متد های `mongodb` نیاز هست که از async , await استفاده کنیم . 

ّبه این دلیل که `promise base` هستند . 

فانکشن `connecetToDb` از نوع async هست و درون بلاک `try` امدیم از `await` استفاده کردیم . 

که بتونیم `connect` شیم به `data base` خودمون . 



--- بعد از `mongodb.net` که در ادرس دیتا بیس ما هست یک / می زنیم و اسم `data base` خودمون رو وارد می کنیم . 

که در ادرس زیر اسم `data base` مد نظر ما `blog` هست .

```javascript 
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zutazhf.mongodb.net/blog`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "data base cant connect");
    process.exit(1);
  }
```

درون بلاک `catch` امدیم error مربوط به `connect` شدن رو هندل کردیم . 

که اگر `data base` ما به مشکل خورد و متصل نشد یک `error` داشته باشیم متوجه شیم که مشکل سمت `connect` شدن هست . 

در نهایت فانکشن خودمون رو `export` کردیم و می خوایم از این فانکشن بیام درون `index.js` استفاده کنیم . 

```javascript
module.exports = connecetToDb; 
```

به این دلیل که فقط `index.js` اجرا خواهد شد و تمامی اجزای `server` که ما می نویسیم . 

به طور مستقیم یا غیر مستقیم درون `index.js` قرار میگیره تا `module` مد نظرمون اجرا شه  . 

**یاداوری** : هر فایل `javascript` در واقع یک `module` هستش . 

به `index.js` میریم و `connectToDb` که `export` کردیم میام اول `require` می کنیم و بعد صداش می زنیم . 

```javascript 
const connectToDb = require("./connection/db");
```

و بالا تر از `listen` که نوشتیم صداش می زنیم همینطور بالا تر از `routet test` که ایجاد کردیم . 

```javascript 
connectToDb();
```

**نکته** : در واقع زمانی که سمت `server` میایم با `nodejs` کد می زنیم ترتیب یه جاهای مهمه . 

و اگر این ترتیب بندی بعضی از جاها رعایت نشه ممکنه سرور ما به مشکل بخوره و ران نشه . 


# Server Folders 

![image](https://github.com/mosenn/MERN/assets/91747908/eed7828c-8eee-43b1-b0df-a02fe7509e52)



فولدر های سمت `server` رو معرفی کنیم . 

### model folder 

![image](https://github.com/mosenn/MERN/assets/91747908/4ea96d1c-3a41-4bdd-af20-f1555a63519d)


که یدونه `model` داریم که برای ایجاد `schema` هست که بتونیم با `data base` ارتباط بگیریم . 

در واقع هر `collection` که می خوایم برای `data base` ایجاد کنیم نیاز به یک `schema` و `model`  داریم . 

که در فولدر model برا مثال یک فایل به اسم `user.js` داریم برای ایجاد `model` کاربرانی که در سایت ما هستند . 

### user.js 


اگر بخوایم فایل user.js رو بررسی کنیم به طور کلی نوع دیتای که قرار برای هر کاربر ذخیره شه رو مشخص کردیم . 

بعد به وسیله یک `middelware` که خودمون نوشتیم و ایجاد کردیم کار `validation` رو انجام دادیم . 

و همینطور از `bcrypt` استفاده کردیم برای رمز گذاری پسورد ها . 

در واقع قبل از اینکه دیتای مربوط به `user` ها ثبت شه اول `valid` شده . 

**نکته** : این کار تکراری هست و برای هر پروژه می تونیم انجام ا ش بدیم . 


یه نگاهی به کل کد های مربوط به فایل `user.js` بندازیم : 

اول مواردی که نیاز داریم رو `require`  می کنیم . 

که 2 تا از این موارد مربوط به رمز گذاری پسورد و ولیدیشن هست که بهشون می رسیم  جلو تر . 

```javascript 
const { hash } = require("../middleware/bcrypt");
const mongoose = require("mongoose");
const userRegisterValid = require("../middleware/userValidation");
```

همینطور به `mongoose` نیاز داریم برای ساخت `schema` . 

**یاداوری** : هر `data` که قرار درون `data base` ذخیره شه نیاز به یک `schema` و `model`  داره . 


قدم بعدی ساخت `schema` هست به وسیله `mongoose` : 

```javascript 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    require: true,
    type: String,
  },
  confirmPassword: {
    require: true,
    type: String,
  },
  pic: {
    type: String,
  },
});
```

که نوع type و اینکه اون اطلاعات که داره ارسال میشه نیاز هست `required`  هست  .  

مواردی که `required` قرار داده شده وجود داشتن شون الزامی هست . 


خب می تونیم الان `model` خودمون رو ایجاد کنیم و اسم collection که می خوایم این data درونش ذخیره شه رو اعمال کنیم . 

منتها قبل از اینکه کار ذخیره شدن انجام شه میایم نوع `valid` شدن رو چک می کنیم . 

به وسیله خوده `schema` که ایجاد کردیم 

```javascript 
userSchema.statics
```
**نکته** : مهمه که اخر static یه `s` باشه در غیر اینصورت به مشکل می خوریم . 

در ادامه فانکشنی که برای `validation` نوشتیم و کار `valid` کردن رو انجام میده میایم استفاده می کنیم . 

قبل تر `requiire` کرده بودیم . 


```javascript 
const userRegisterValid = require("../middleware/userValidation");
```

```javascript 
userSchema.statics.userRegisterValid = (reqBody) => {
  return userRegisterValid.validate(reqBody, { abortEarly: false });
};
```
پارامتر `reqBody`  در واقع `req` های هستند که موقع ارسال شدن درون `body` قرار می گیرند . 

و هر `route` یا `controller` این موارد رو داره . که به این فانکشن پاس داده میشه . 

در نهایت درون فانکشن داریم `return` می کنیم `userRegisterValid` که بیاد `validate`  کنه . 

منتها پارامتر `reqBody` رو بهش پاس دادیم در ادامه `option abtortEraly:false` گذاشتیم . 

که اگر `error` وجود داشت بیاد به صورت دسته جمی اون `error` هارو نشون بده نه تک تک . 


### has passowrd 

بعد از validtion رمزگذاری کردن password ها رو داریم که به وسیله `package bcryptjs` انجام میشه .  

که قبل از اینکه بخوایم `model` رو ذخیره کنیم میایم password کاربر های که ثبت نام می کنند . 

رو برای امنیت بیشتر رمز گذاری می کنیم و درون `data base` ذخیره می کنیم . 

برای این کار از `schema` که ساختیم استفاده می کنیم و در ادامه یک فانکشن ایجاد می کنیم . 

```javascript
userSchema.pre("save", async function (next) {

});
```
این فانکشن نیاز هست که از نوع فانکشن معمولی باشه در واقع arrow function نباشه . 

به این دلیل که می خوایم از `keyword this`  استفاده کنیم . 

گفتیم   `userSchema.pre` که در واقع `pre` به این معنی که قبل از اینکه در ادامه `save` رو داریم که یک `string` هست . 

معنی فانکشنی که نوشتیم اینه : قبل از اینکه `userSchema` که ساختیم بیاد `save` شه . 

یک کاری انجام بده بعدش بیاد `save` شه . 

کاری که می خوایم انجام بدیم درون فانکشن انجام میشه . 

```javascript
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

});
```

در قدم اول میایم چک می کنیم به وسیله `if` اگر که `userSchema` ما به هر دلیلی وجود نداشت فانکشن `next` اتفاق بیوفته . 

در واقع `this.isModified` میاد چک می کنه که `userSchema` ما اگر مشکلی نداشت همه چی اوکی بود بره ادامه فانکشن . 

اما اگر مشکلی بود بره روی `error` ها و `error` ها رو نشون بده.

در ادامه فانکشن  `password` , `confrimPassword`  رو قبل از اینکه در `data base` ذخیره شن رمزگذاری می کنیم . 


```javascript 
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model

  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});
```
**نکته** : ممکنه در اول کار به این صورت کد کار نکنه که به صورت `middelware` امدیم `hash` کردیم . 

در واقع اتفاق رمز گذرای درون یک فانکشن که درون فولدر `middelware` هست داره اتفاق می افته . 

اگر که اول کار مشکلی پیش امد با این روش `hash` کردن به وسیله `midelware` تمامی عملیات `hash` کردن رو 

همینجا انجام میدیم بدون `middelware` اما بعد از چند باز که مشکلی نبود می تونیم باز تبدیل اش کنیم به یک فانکشن جدا . 

خب `hash`  در واقع یک فانکشن هست که `require`  شده در یک فایل جدا داره یک سری عملیات مربوط به رمزگذری رو انجام میده . 

```javascript 
const { hash } = require("../middleware/bcrypt");
```

حالا ازش درون فانکشن که تعریف کردیم استفاده می کنیم 

```javascript 
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model

  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});
```
درون فانکشن `this.password` , `this.confrimPassword`  به `userSchema` که ساختیم اشاره می کنند . 

و `hashPassword` , `hashConfirmPassword`  در واقع پسورد کاربر هستند که از `req`  گرفته شده و رمزگذاری شده . 

در نهایت `password` های که درون `schema` هست با پسورد های که `hash`  شده `assignment` میشه

### create model connect to collection 

در نهایت نوبت به ساخت `model` میشه و یک اسم برای `collection` دیتا بیس تعریف می کنیم . 

که این `schema` درون `collection data base` ساخته میشه . 

```javascript
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

``` 

میایم `model`  رو درون یک متغییر قرار میدیم و `export` می کنیم . 

به وسیله `mongoose.model` میایم مدل خودمون رو ایجاد می کنیم . 

که `users` میشه اسم `collection` که داشتیم . 

و `userSchema` در واقع `schema` هست که ساختیم 

و  `userSchema` درون `collection users` در `mongodb atals` ذخیره میشه .

بعدا زمانی که  `controller` رو تعریف کردیم از این userModel استفاده می کنیم . 
# Midelware Folder 

![image](https://github.com/mosenn/MERN/assets/91747908/3ccd86f8-8e02-4271-8527-8b9ee86c1d14)


یک فولدر در پروژه داریم به اسم `midelware`  که فانکشن های که ممکنه زیاد استفاده شه . 

درون این فولدر تعریف می شه . 

مثل hash کردن یا ولیدیشن و ... . 

بریم اول `hash` رو بررسی کنیم که کمی بالا تر ازش استفاده کردیم برای رمزگذاری پسورد ها . 

درون فایل `bcrypt.js` امدیم عملیات `hash` وهمینطور `compare` استفاده کردیم . 

زمانی که passowrd درون `data base` ذخیره میشه به صورت رمزگذاری هست چون خودمون `hash` کردیم . 

و زمانی که بخوایم مثلا برای لاگین شدن همون password رمزگذاری شده رو با پسوردی که کاربر برای لاگین شدن وارد می کنه 

مقایسه کنیم نیاز داریم که `compare` کنیم تا این مقایسه به درستی انجام شه . 

اول پکیج `bcryptjs` رو میایم `require` کنیم 

```javascript 
const bcrypt = require("bcryptjs");
```

قدم بعدی نوشتن فانکشن `hash`  هست . 

```javascript
const hash = async (password, ConfirmPassword) => {

}; 
```

به این دلیل که `bcryptjs` متد های درونش `promise base` هستند نیاز هست از `async / await`  استفاده کنیم 

فانکشن `hash`  از نوع `async`  هست که 2 تا `parameter` می گیره در واقع پسورد های که کاربر وارد کرده. 

از `controller` که نوشته شده و متصل به یک `route` هست و `client`  اطلاعات مروبط به کاربر به `route` تعریف شده ارسال میشه . 


 در ادامه یک `if` تعریف میشه که چک می کنه ببینه `password` هست یا نه اگر بود بیاد پسورد رو به وسیله `bcryptjs` رمزگذار می کنیم . 


 ```javascript 
const hash = async (password, ConfirmPassword) => {
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPassword = await bcrypt.hash(ConfirmPassword, salt);
    return {
      hashPassword,
      hashConfirmPassword,
    };
  }
};
```

درون `if` اول یک `salt` ایجاد می کنیم که یک `string` رندم ایجاد می کنه که گفتیم تا 10 `character` اینکارو انجام بده . 

در نهایت `pasword` , `confirmPassword`  رو گفتیم که بیاد به وسیله  `bcrypt.hash`  که داریم از پکیج `bcryptjs` استفاده کردیم .

و `hash` یک متد درونی `bcryptjs` هست .  

و الان به جای پسورد که کاربر وارد کرده یک `string` داریم با 10 کاراکتر 

و هر دو متغییر `hashPassword` , `hashConfirmPassword`  رو return کردیم  . 

که در نهایت در [model user.js](#has-passowrd) ازش استفاده کردیم .

فانکشن بعدی کار `compare`  کردن رو انجام میده در واقع مفدار رمز گذاری شده درون `data base` رو 

با وردی که کاربر وارد می کنه مقایسه می کنه .  در `controller` مربوط به `login` کاربر ازش استفاده می کنیم 

```javascript 
const compare = async (reqPassowrd, dbPassword) => {
  return await bcrypt.compare(reqPassowrd, dbPassword);
};
```

در نهایت هر دو فانکشن که درون فولدر `midelware` درون فایل `bcrypt.js` هستند رو `export` می کنیم . 

که بتونیم در فایل های دیگه به اونها دسترسی داشته باشیم و ازشون استفاده کنیم . 

```javascript
module.exports = {
  hash,
  compare,
};

```

# Validation Middleware 

درون فولدر `Middleware` یک فایل داریم به اسم `userValidation` که مسئول `valid` کردن اطلاعات دریافتی هستش . 

که درون [model user.js](#model-folder) ازش استفاده کردیم همراه با `statics` قبل از اینکه model رو بسازیم . 

ولیدیشن رو به وسیله  پکیج [yup](#yup) انجام شده . 

یک فایل به اسم `userValidation` درون فولدر `middleware` داریم . 

![image](https://github.com/mosenn/MERN/assets/91747908/1e3c7bf0-38f6-495b-bb67-86bdd96e0586)

درون `userValidation` میایم `yup` رو `require` می کنیم . 

```javascript
const yup = require("yup");
```

قدم بعدی یک متغییر تعریف می کنیم و یک `shape` به وسیله `yup` ایجاد می کنیم . 

```javascript 
const userRegisterValid = yup.object().shape({
});
```
 میایم به وسیله متد های درون `yup` ولیدیشن رو برای `userSchema` انجام میدیم . 

 **نکته** : هر بار که بخوایم یک `schema` رو به وسیله `yup` ولیدیشن کنیم . از همین روش استفاده می کنیم .

 در ادامه میایم `key` های که درون `userSchema` داریم تعریف می کنیم . نوع `type` شون رو مشخص می کنیم . 

 و به وسیله متد های `yup` و `regex` ولیدیشن رو انجام میدیم . 

 
```javascript 
const userRegisterValid = yup.object().shape({
    username: yup.string().trim().required().min(3, "username character +3 "),
});
```

خب اینجا `username` رو داریم که به وسیله `yup` ولیدیشن شده . 

در واقع `shape` که ایجاد کردیم یک `object` هست . 

در ادامه `()username:yup.string` به منظور `string` بودنه . 

از `()trimt` برای از بین بردن فاصله ها استفاده کردیم . 

از `()required` به این معنی که حتما `username` باید وجود داشته باشه . 

از `min` برا مشخص کردن تعداد `charcater` استفاده کردیم . 

در اخر یک `string` برای نشون دادن پیام مربوط به `error` گذاشتیم . 

بقیه موارد هم به همین صورت هست  و برای `password` از `regex` استفاده کردیم . 

که یدونه `hard password` داشته باشیم برای ثبت نام کاربر . 

اگر `email` هم داشتیم می تونیم از  `regex` استفاده کنیم . 

در کل هر جای که نیاز باشه می تونیم از `regex` در `yup` استفاده کنیم . 

کل `userValidation`  به صورت زیر هستش : 

```javascript
const yup = require("yup");
const userRegisterValid = yup.object().shape({
  username: yup.string().trim().required().min(3, "username character +3 "),
  password: yup
    .string()
    .trim()
    .required("pasword 8 charcter a-A-2-@")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "pasword 8 charcter a-A-2-@"
    )
    .min(8),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "passwords is not match")
    .trim()
    .min(8, "passwords is not match"),
  pic: yup.string(),
});
```
در قسمت `password` از `regex` و متد `match` استفاده شده . 

در قسمت `confirmPassword` از `oneOf` استاده کردیم که `ref` زده شده به `password` . 

در واقع `onOf` و `ref` میاد `confrimPassowrd` رو چک می کنه که دقیقا عین خوده `password` باشه . 

در اخر میایم `shape yup` که ایجاد کردیم رو `export` می کنیم . 

```javascript 
module.exports = userRegisterValid;
```

که درون [model user.js](#model-folder) ازش استفاده کرده بودیم قبل از اینکه `schema` درون `data base` ذخیره شه . 

# Controller Folder 

![image](https://github.com/mosenn/MERN/assets/91747908/491c7e3e-9c88-4fb0-ba35-172ce60b4aa7)

**نکته** : از `mvc` استفاده می کنیم . که مخفف `model view controller` هست . 

که تا به اینجا با `model` اشنا شدیم . 

و `view` این پروژه به وسیله `reactjs` هندل میشه و فایل `view` درون `server` نداریم . 

که می تونیم `view` رو داشته باشیم در سمت `server` 

در مورد `controller` هم در همین بخش می خوایم در موردش صحبت کنیم . 

خب یک فولدر داریم به اسم `controller` که درون این فولدر فایل های مربوط به `controller route`  ها قرار داره . 

در واقع هر api یک `route` داره و هر `route` یک `controller` . 

در واقع `route` ها همون ادرس api هستند که می تونیم ازشون `response` بگیریم یا چیزی رو ارسال کنیم به وسیله متد `post`

و `controller` ها فانکشن های هستند که میان برای `route` ها تعریف میشن . که یک سری شرط شاید گذاشته شه . 

در کل درونشون یک سری عملیات اتفاق می افته و `error` ها کنترل میشه . 

در نهایت اطلاعات  رو به `route` مورد نظر ارسال می کنه و `clinet` می تونه `response` رو ببینه . 

## user.js controller 

درون فایل `user.js`  کار های مربوط به کاربران انجام میشه . 

مثل `register` , `login` و ...  

اول ببنیم درون فایل `user.js چه چیزای `require` شده 

```javascript 
const { compare } = require("../middleware/bcrypt");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");
```

 اینجا از `compare` برای مقایسه کردن  پسوردی که کاربر برای لاگین وارد می کنه . 

و پسوردی که درون `data base` هست استفاده می کنیم . 

در ادامه به `userModel` نیاز داریم در واقع  [model](#model-folder)` هست که برای `user` ها ایجاد کردیم . 

در ادامه `jwt` رو داریم که امدیم برای ارسال و ست کردن `token` ازش استفاده می کنیم . 

که درون فانکشن `loginUser` و `profileUser` ازش استفاده شده . 

**یاداوری** : `controller` ها در اصل همگی `function` هستند 

**نکته** : تمامی `controller` ها فانکشن های از نوع `async` هستند 

به این دلیل که  برای کار با `data base` نیاز هست که از `await , async` استفاده کنیم . 

اگر استفاده نشه توی ارسال `data` یا ذخیره کردن در `data base` به مشکل می خوریم . 


### registerUser Controller 

همنوطر کفه گفته شد تمامی `controller` ها یک فانکشن هستند . 

که از نوع `async` هستند . 

```javascript
const registerUser = async (req, res) => {
};
```

در فانکشن `registerUser` میایم عملیات ثبت نام کاربر رو انجام میدیم 

 به `route` و `api` مد نظر مربوط برای ثبت نام ارسال می کنیم .

 در هر `controller` که برای یاداوری یک فانکشن هستند از `try / catch` استفاده می کنیم . 

 ```javascript 
const registerUser = async (req, res) => {
  try {
  } catch (err) {
  }
};
```
هر `controller` رو میایم `export` می کنیم چون می خوایم درون `routes` استفاده کنیم .

```javascript 
module.exports = {
  registerUser,
};
```
در هر `controller`  دو تا `parameter` داریم به اسم `req` , `res` .

که `req` , `res` از  `route`  میان .

یک فولدر به اسم `routes` داریم که در واقع ادرس api ها رو اونجا تعریف کردیم . 

![image](https://github.com/mosenn/MERN/assets/91747908/4f134f0e-fc2d-4295-8cd6-9da7bc8c7fc1)


و   `clinet` این ادرس api ها رو میگیره که در نهایت اگر همه چی خوب پیش بره یک `response` خواهد داشت  . 

که کمی جلوتر فولدر `route` رو توضیح میدیم . 

بر گردیم به `registerUser` فانکشن 

```javascript 
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
  } catch (err) {
  }
};
```

یک متغییر ابجکت به اسم `errors` بیرون از بلاک `try` داریم .

به این دلیل که `message` مربوط به `yup` مربوط به اینکه `username` کاربر وجود داره در `data base` یا نه رو نداریم . 

به همین دلیل این `error` و چک کردن رو به وسیله یک `if` انجام میدیم و `message error` شو درون `errors` ذخیره می کنیم .

در ادامه یک `descracher` داریم که مقادیر که `clinet` در `body` می فرسته رو گرفتیم . 

در واقع `form` که برای `register` شدن کاربر در سمت `clinet` هست یک سری `input` داره . 

که مقادیر اون ارسال میشه به `api` مربوط به `register`




```javascript
  const { username, confirmPassword, password, pic } = req.body;
```

در بلاک `try` ولیدیشنی که به وسیله `yup` ایجاد کردیم داریم .

```javascript

const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);

  } catch (err) {
};
```

در ادامه میایم به وسیله متده `findeOne` چک می کنیم کاربری که در حال ثبت نام هست قبلا ثبت نام کرده ؟ 

اگر قبلا شخصی با اکانت وارد شده درون `data base` وجود داشت  بود یک پیام به عنوان `error` ارسال می کنیم .

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
  } catch (err) {
};
```

یک متفییر به اسم `foundUser` تعریف کردیم و درون `data base` داریم `username` که کاربر وارد کرده برای ثبت نام چک می کنیم . 

ببینیم ایا واقعا این `user` درون `data base` هست یا نه . 

در ادامه یک `if` داریم . 


```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register";
          
    }
  } catch (err) {
};
```

در `if` گفتیم اگر `foundUser` بود بیاد یک پیام مبنی بر اینکه این کاربر قبلا ثبت نام کرده ایجاد شه . 

و در ابجکت `errors` ذخیره شه . 

در ادامه ساخت ذخیره سازی اکانت رو داریم در `data base` . 

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register"; 
    }
   const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
  } catch (err) {
};
```

در ادامه متد `create` رو داریم که برای ساخت یک `document`  هر کاربری که ثبت نام رو انجام میده . 

یک `document` ایجاد میشه درون `collection user` که در واقع `model` هست که ایجاد کردیم . 

در ادامه `users` رو به عنوان `response` ارسال شده . 

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register"; 
    }
   const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    return res.status(201).json(users);
  } catch (err) {
};
```

که از `status code 201` استفاده شده . 

```javascript 
    return res.status(201).json(users);
```

بریم سراغ بلاک `catch` که `error` ها هندل میشه . 

که اگر مشکلی در `register` پیش امد `error` ها و پیام های مروبط به `validation` سمت `client` ارسال میشه .

```javascript
const registerUser = async (req, res) => {
  const errors = {};
  const { username, confirmPassword, password, pic } = req.body;
  try {
    //* validation
    await userModel.userRegisterValid(req.body);
      const foundUser = await userModel.findOne({ username });
        if (foundUser) {
      errors.username = "this user before register"; 
    }
   const users = await userModel.create({
      username,
      password,
      confirmPassword,
      pic,
    });
    return res.status(201).json(users);
  } catch (err) {
    err?.inner?.forEach((e) => {
      errors[e.path] = e.message;
    });
    return res.status(400).json(errors);
};
```
که `err.inner`  در صورتی که وجود داشت ` ? ` یک `forEach` روش زده میشه و تمامی `message` ها ارسال میشه . 

و در نهایت یک `404 status code` ارسال می کنیم مبنی بر اینکه خطای وجود داره .

و درون یک `json` هر انچه درون `errors` داریم ارسال می کنیم .


### LoginUser Controller 

در فانکشن `loginUser` میایم لاگین شدن کاربر رو کنترل می کنیم . 

و اگر کاربر `login` شد  یک `token` حاوی اطلاعات کاربر درون `cookie` ذخیره می شه .


```javascript 
const loginUser = async (req, res) => {
};
```

کاربری که ثبت نام کرده در می تونه به وسیله `username` و `password` لاگین کنه . 

که در اینجا چک کردن اینکه کاربر `username` , `password` رو درست وارد کرده رو چک می کنیم . 

در قدم اول `username` و `password` رو از `req` می گیریم . 
```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });


  } catch (err) {

  }
```
بعد از اینکه `username` و `password` رو گرفتیم از `req.body` میایم چک می کنیم که پسورد وارد شده درست باشه . 

در واقعه با پسوردی که کاربر ثبت نام کرده یکی باشه . 

اینجا میایم از `compare` استفاده می کنیم که در بخش `middelware` توضیح شو داده بودیم .

```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
  } catch (err) {

  }
```
 
که نیاز هست `password` که از سمت `clinet` درون `req.body` داریم و پسوردی که به وسیله `findOne` از `data base` میگیریم رو به `compare` پاس بدیم . 

که `compare` میاد پسورد ها رو مقایسه می کنه . 

که `compare`  یک `boolean` برگشت میده یا `false` یا `true` . 

در نهایت درون `if` گفتیم اگر `passwordIsOky` بود . در واقع اگر `true` بود . 

```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {}
  } catch (err) {

  }
```
درون این `if` میایم یک `token` رو `sign` می کنیم . 

درون `token` اطلاعاتی رو که می خوایم ارسال می کنیم . 

که ایجاد کردن `token` به وسیله `jsonwebtoken` انجام میشه . 



```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {
  const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );

}
  } catch (err) {

  }
```

این `token` رو درون `cookie` سمت `server` ذخیره می کنیم . 

در ادامه اطلاعات رو به وسیله `json` به `client` ارسال می کنیم . 



```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {
  const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );
      return res
        .status(200)
        .cookie("userToken", userToken, {
          secure: "false",
          sameSite: "none",
        })
        .json({
          id: user._id,
          username,
          pic: user.pic,
        });
}
  } catch (err) {

  }
```
 
که یک سری `option` داریم برای `cookie` مثل `secure` و `sameSite` برای ذخیره کردن `cookie` در سمت سرور نیاز هست که `credinatial ` هم ست کنیم . 

که اینکارو در `cors` در فایل `index.js` انجام دادیم . 

در ادامه ` if ` یک `else` داریم که `throw ` می کنه `err` رو . 

```javascript 
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    const passowrdIsOky = await compare(password, user.password);
    if (passowrdIsOky) {
  const userToken = await jwt.sign(
        {
          id: user._id,
          username: user.username,
          pic: user.pic,
        },
        process.env.JWT_SECRET,
        {}
      );
      return res
        .status(200)
        .cookie("userToken", userToken, {
          secure: "false",
          sameSite: "none",
        })
        .json({
          id: user._id,
          username,
          pic: user.pic,
        });
} else {
      throw "err";
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json("user or password is worng");
  }
```
در ادامه بلاک `catch` رو داریم . 

اگر `error` داشته باشیم و `login` کاربر به مشکلی بخوره در بلاک `catch` هندل میشه و به سمت `client` ارسال میشه . 

که اینجا اگر کاربر `username` یا `password` خودشو اشتباه بزنه . 

در بلاک `catch` یک `json` ارسال شده که در واقع یک `string` هست . `user or password is worng` . 

اگر سواله که `username` چطوری چک میشه . 

داریم `username` رو از درون `data base` می گیریم و به پسوردش دسترسی می گیریم .

به `compare` پاس میدیم . 

```javascript
  const user = await userModel.findOne({ username });
   const passowrdIsOky = await compare(password, user.password);
```

اینجاست که اگر `username` که کاربر وارد می کنه درون `data base` نباشه . 

در نهایت `user.password` هم وجود نداره با ارور مواجه میشه 

در نتیجه بلاک `else` اجرا میشه که داره `throw` می کنه یک `error` رو . 

```javascript 
else {
      throw "err";
    }
```

و زمانی که `throw` داریم بلاک catch اجرا میشه . 

```javascript 
catch (err) {
    console.log(err);
    return res.status(400).json("user or password is worng");
  }
```

اینجوری میشه که با متغییر `paswordIsOkey` پسورد کاربر رو چک می کنه . 

و چون داریم `findOne` می زنیم `username` رو اگر نباشه باز به ارور می خوریم .

در نتیجه پیام درون  بلاک `catch` به عنوان یک `error` به سمت `clinet` ارسال میشه .

### profileUser Controller 


فانکشن `profileUser`  میاد اطلاعات کاربری که `login` شده رو از درون `token` که درون `cookie` ذخیره شده میگیره .

در صورتی که کاربر `login` شد و `token` که درون `cookie` ذخیره شده رو 

می گیره و اول `token` رو میاد `verify` می کنه   . 

و `token` حاوی اطلاعات کاربری هست که `login`  شده . 



```javascript 
const profileUser = async (req, res) => {
try {
  } catch (err) {
  } 
};
```

درون بلاک `try` میایم `cookie` که ست کردیم رو میگیریم از داخل `req.cookie`

```javascript 
const profileUser = async (req, res) => {
try {
   const { userToken } = req.cookies;
  } catch (err) {
  } 
};
```

که در واقع توکن ما هست حاوی اطلاعات کاربر که لاگین شده .

برای دسترسی اطلاعات نیاز هست که `token` رو `verify` کنیم .

یک `if` داریم گفتیم اگر که `userToken` وجود داشت . 

بیاد `token` رو `verify` کنه . 

در `jwt.verify` مقدار اول اسم `coockie` هست مقدار دوم `secert` که موقع ست کردن `token` تعیین شده .|

مقدار اخر در واقع یک ` { } ` خالی هست . 

در نهایت به وسیله `res.json` اطلاعات رو ارسال می کنیم . 

```javascript 
const profileUser = async (req, res) => {
try {
   const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      return res.status(200).json(user);
    }
  } catch (err) {
  } 
};
```

در قسمت `catch` در صورتی که `token` وجود نداشت یک ارور ارسال می کنیم . 


```javascript 
const profileUser = async (req, res) => {
try {
   const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      return res.status(200).json(user);
    }
  } catch (err) {
 return res.status(401).json({ error: "Invalid or expired token" });
  } 
};
```

### logoutUser controller 

فانکشن `logoutUser` در واقع `token` رو از درون `cookie` میاید `remove` می کنه در نهایت 

کاربری که `login` هست میاد `logout` میشه , یک پیام مبنی بر `logout` شدن ارسال شده به وسیله `json` .
```javascript
const logoutUser = async (req, res) => {
  try {
    return res.cookie("userToken", "").status(200).json("user is logout");
  } catch (err) {
    console.log("logout controll err", err);
  }
};
```


### exports all controller 

در نهایت تمامی `controller` ها رو `export` می کنیم .

```javascript
module.exports = {
  registerUser,
  loginUser,
  profileUser,
  logoutUser,
};
```


# Routes Folder

![image](https://github.com/mosenn/MERN/assets/91747908/8d19effd-5f86-4020-90e8-0f4eed46bf38)

درون فولدر `routes` میایم از `controller` های که نوشتیم استفاده می کنیم . 

و برای هر `controller` یک ادرس تعیین می کنیم . 

که میشه `api` ریسپانس `controller` هامون رو  درون `api` که می نویسیم  داریم .

در قدم اول نیاز داریم که `Router` رو از دورن `express` صدا بزنیم و استفاده کنیم .

```javascript
const userRoute = require("express").Router();
```

در قدم بعدی تمامی `controller` های که نوشتیم رو `export` می کنیم 

```javascript 
const {
  registerUser,
  loginUser,
  profileUser,
  logoutUser,
} = require("../controller/user");
```

در ادامه میایم `route` هارو می نویسیم و `controller` ها رو بهش پاس میدیم 

```javascript 
//* POST create user (register user)
userRoute.post("/register", registerUser);
//* POST login user
userRoute.post("/login", loginUser);
//* Get user online with cookie ( jwt user token)
userRoute.get("/profile", profileUser);
//* logout
userRoute.post("/logout", logoutUser);
```

در هر ادرسی میاد فانکشن که به عنوان contorller نوشتیم اعمال میشه .

و ریسپانس رو به ما برگشت میده  . 

کافیه که `userRoute` که داریم بیایم `export` کنیم و درون `index.js` ازشون استفاده کنیم . 

```javascript

module.exports = userRoute;
```

درون `index.js` میایم از `route` های که نوشتیم استفاده می کنیم . 

```javascript 
app.use("/", require("./routes/user"));
```

به این شکل ازش استفاده می کنیم . 

# Posts 

در این بخش هر کاربری که لاگین کرده می تونه یک پست ایجاد کنه . 

در واقع ایجاد پست رو سمت سرور داریم به وسیله کاربر . 


### Post Schema

برای اینکه بتونیم ایجاد `post` رو داشته باشیم اول نیاز داریم که یک `schema` پست داشته باشیم . 

میایم درون فولدر `model` و یک فایل به اسم `post` می سازیم : 

<img src='https://github.com/mosenn/MERN/assets/91747908/c327c675-2efb-4e98-ba60-6ea2278e6159' alt='create model in express' />

میایم درون این فایل `model`  مربوط به `post` رو ایجاد می کنیم : 

```javascript 
const mongoose = require("mongoose");
const commentModel = require("./comment");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    summery: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;

```

موقع ساخت `schema post` امدیم 1 `ref` زدیم  به `author` . 

برای اینکه بتونیم متوجه شیم چه کاربری امده `post` رو ساخته . 

این کار به وسیله `ObjectId` انجام میشه . 

به `id` کاربری که پست رو ساخته دسترسی می گیریم و متوجه می شیم که چه کاربری پست رو ایجاد کرده . 

که اینجا موقع ساخت پست نیاز هست که `id` کاربری که `login` هست برای `author` ست کنیم  .

که کمی پایین تر به این موضوع پرداخته شده .  

و گرفتن پست های که ایجاد شده رو براشون api می نویسیم که در سمت کلاینت بتونیم `post` های ساخته شده رو نمایش بدیم . 

### Post controller 


درون `controller` میایم فایل `post.js` رو اضافه می کنیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/d45d0a00-c91c-425d-8408-9a5417240a28' alt='expressjs server'>

درون `controller post` قرار عملیات `crud` رو انجام بدیم . 
.
پست رو بسازیم , پست های ساخته شده درون دیتا بیس رو بگیریم و بفرسیتم سمت کلاینت  ,  اپدیت کنیم , پاک کنیم 

**نکته :** در واقع `crud`  مخفف `create` , `read` , `update` , `delete` هست . 


### Create post controller

اولین کاری که صورت میگیره ساخت `post` هست . 

پس میایم فانکشن که قرار ساخت پست رو انجام بده ایجاد می کنیم در واقع `controller` که قرار هست `controller` رو انجام بده یا همون کنترل کنه . 

```javascript 
const createPost = async (req, res) => {

};
```

در ادامه مقادیر که نیاز هست رو داشته باشیم از `req.body`  میگیریم که این مقادیر از سمت فرانت ارسال میشه . 

و البته درون `schema post` هم همین مقادیر تعریف شده . 

```javascript 
const createPost = async (req, res) => {
  const { content, title, summery, cover } = req.body;
```

خب نیا هست `model post` که ایجاد شده رو درون بلاک  try صدا بزنیم و پست خودمون رو به وسیله متد `create` ایجاد کنیم . 

دقیقا مثل ساخت کاربران در قسمت `register` . 

```javascript 
const createPost = async (req, res) => {
  const { content, title, summery, cover } = req.body;
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const post = await postModel.create({
        content,
        title,
        summery,
        cover,
        author: user.id,
      });
      return res.status(201).json({ data: post, message: "post is create" });
    }
  } catch (err) {
    console.log("Create Post", err);
    return err;
  }
};
```
درون بلاک `try` در کد بالا اول `userToken` رو از `req.cookies` گرفتیم . 

اگر یادتون باشه زمانی که کاربر `login` میشه در سایت یک `token` در `cookie` سرور میاد set میشه . 

که این `cookie` حاوی اطلاعات کاربری هست که `login` شده . 

و بودن این `cookie` نشون دهنده این موضوع هست که کاربر ما لاگین شده . 

برای اینکه در اینجا می خوایم فقط کاربر های که لاگین هستند بتونند post ایجاد کنند . 

```javascript
  try {
    const { userToken } = req.cookies;
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const post = await postModel.create({
        content,
        title,
        summery,
        cover,
        author: user.id,
      });
      return res.status(201).json({ data: post, message: "post is create" });
    }
```

نیاز داریم اول چک کنیم ببینم که کاربر ما لاگین شده یا نه که اینکار رو به وسیله `userToken` انجام دادیم  . 

قدم بعدی نیاز داریم به `id` کاربر که لاگین شده دسترسی داشته باشیم چون می خوایم بدونیم کدوم کاربر داره یک پست رو ایجاد می کنه . 

برای اینکه به `id` کاربری که لاگین شده دسترسی بگیریم نیا داریم توکن خودمون رو `verify` کنیم و `id` رو بکشیم بیرون . 

در اینجا `author` در `schema post` یک `type objectId` هست که `ref` زده شده به `schema users` . 

می تونید `schema post` رو باز چک کنید .

به وسیله `ref` می تونیم متوجه شیم که چه کاربری چه پستی رو ایجاد کرده . 

که از این موضوع استفاده می کنیم و پست های هر کاربری رو در `panel` خودش نشون می دیم . 

و همینطور موقع گرفتن همه ی پست های به وسیله `author` کاربری که ایجاد کرده میایم نشون میدیم . 

در نهایت یک `response` که حاوی اطلاعات پست ساخته شده و همینطور یک `message` هست رو به سمت کلاینت ارسال می کنیم . 

```javascript
return res.status(201).json({ data: post, message: "post is create" });
```

درون بلاک `catch` هم ارور ها رو ارسال می کنیم اگر که مشکلی پیش امده باشه . 

هم لاگ سمت سرور رو داریم که متوجه شیم `error` که درون کنسول هست ماله چه بخشی از کد هست . 

و هم خوده `error` به سمت `client` ارسال شده که `client` هم متوجه `error` شه . 

```javascript
catch (err) {
    console.log("Create Post", err);
    return err;
  }
```

## Get all post controller

بعد از ایجاد `post` توسط کاربر . 

نوبت گرفتن تمامی پست های هست که ایجاد شده . 

پس نیاز به یک `controller` داریم . 

**یاداوری : ** هر `controller` در واقع یک `function` هست که عملیاتی درونش صورت میگیره . 

```javascript 
const posts = async (req, res) => {

};
```

خب `controller posts` رو به طور کامل ببینیم : 

```javascript
const posts = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("author", "username", "pic", "_id")
      .sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (err) {
    console.log("All Post Err", err);
    return res.status(500).json({ message: "server is proplem", err: err });
  }
};
```

در کد بالا داریم از `postModel` به وسیله متد `find` به تمامی پست ها دسترسی می گیریم . 

اما اگر دقت کنید بعد از `find` از یک متد دیگه هم استفاده شده به اسم `populate` .  

متد `populate`  دو تا `parameter`  میگیره . 

پارامتر اول مقداری هست که می خوایم یه همراه `post` ها پیدا شه . 

الان میاد پست ها رو که پیدا کرده میره داخل `collection users` با توجه به `objectId` مشخصات کاربری که پست رو ساخته  پیدا می کنه  . 

پارامتر دوم `populate` به این اشاره داره که از `user` که پیدا شده به همراه پست داره ارسال میشه , چه مقادیری رو داشته باشه . 

که گفتیم `username` و `pic` و همینطور `_id` رو به همراه داشته باشه . 

در ادامه متد `sort` رو  استفاده کردیم 

که دیتا رو بر اساس `createAt`  که درون هر `document post` وجو داره میاد `sort` رو انجام میده . 

در واقع هر پست جدیدی که ساخته میشه به عنوان اولین پست در `response` نمایش داده میشه  . 

### User post controller 

یک `controller` داریم به اسم `userPost` که  این `controller`  میاد `post` ها رو بر اساس `author` می گیره . 

در واقع میاد پست ها رو بر اساس کاربری که اون پست رو ایجاد کرده میگیره . 

یعنی پست های که توسط یک کاربر ایجاد شده رو `response` میده .

به عنوان مثال : 

کاربر محسن میاد 10 تا `post` ایجاد می کنه . 

و می خوایم تمامی پست های که توسط کاربر محسن ایجاد شده رو داشته باشیم . 

و در `panel` کاربری خودش نمایش بدیم . 

برای اینکار و داشتن پست های یک کاربر `controller userPost` رو ایجاد کردیم . 
```javascript
const userPost = async (req, res) => {

};
```
که درونش کد های زیر رو داریم : 

```javascript
//*method Get author post
  const { userToken } = req.cookies;
  try {
    // console.log("User Token", userToken);
    if (userToken) {
      const user = await jwt.verify(userToken, process.env.JWT_SECRET, {});
      const userPost = await postModel.find({ author: user.id });
      return res.status(200).json(userPost);
    }
  }catch (err) {
    console.log("User Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem about user post", err: err });
  }
```

چک کردیم در ادامه که اگر `userToken`  بود بیاد این اتفاق بیوفته . 

اگر کاربر ما لاگین بود . 

اگر که چک نکنیم و بخوایم از `jwt.verify` استفاده کنیم با ارور سمت سرور مواجه می شیم . 

چون داریم `user.id` رو از `token` که در `cookie` ذخیره شده دریافت می کنیم . 

در نتیجه گفتیم `postModel` بیاد `find` شه توسط `author` که یک ابجکت هست . 

میاد `author` رو پیدا میکنه بعدش میاد توسط `user.id` پیدا کردن رو انجام میده .

در نتیجه `post` های که توسط  کاربر  مد نظر ما ایجاد شده پیدا میشه و به سمت کلاینت ارسال میشه . 

اینجوری میشه که تمام پست های که به عنوان مثال توسط کاربر محسن ایجاد شده خواهیم داشت . 

در صورت داشتن ارور هم بلاک `catch` اتفاق می افته 

```javascript
catch (err) {
    console.log("User Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem about user post", err: err });
  }
```

### Edit post controller 

خب شاید کاربر ما خواست پستی که ساخته رو edit کنه . 

برای اینکار هم نیاز به یک `controller` داریم به اسم `editPost` .  

```javascript
//* method Put  edit post
const editPost = async (req, res) => {

};
```

برای `edit` کردن . نیاز هست که مقادیر جدید رو بگیریم و جایگزین مقادیر قبلی کنیم . 

خب میایم مقادیر جدید رو از `req.body` می گیریم . 

خب سوال اینجاست از کجا مشخص میشه که چه پستی رو می خوایم `edit`  کنیم ؟ 

اینکه چطوری متوجه میشیم که چه پستی قرار هست edit شه . اینکار توسط ایدی انجام میگیره . 

```javascript 
//* method Put  edit post
const editPost = async (req, res) => {
  const id = req.params.id;
  // console.log("Edit post Id ", id);
  const { userToken } = req.cookies;
  const { summery, title, content, cover } = req.body;
};
```

اگر دقت کنید  یک `const id = req.params.id` داریم که در واقع `id` پست هستش  به وسیله `req.params.id` این `id` رو گرفتیم . 

خب این `req.params.id` در واقع از مست `client` ارسال میشه درون `address api` که نوشتیم 

که درون `route` اگر نگاه کنیم `id:/` برای `controller editpost` ست شده . 

```javascript 
postRouter.put("/editpost/:id", editPost);
```
**نکته :** همیشه برای `delete` و `edit` نیاز به `ObjectId` داریم 

که به وسیله `id` پست می تونیم بگیم که کدوم پست قرار هست در `data base` بیاد و `edit`  شه . 

خب هر کاربری می تونه فقط پست خودشو رو بیاد اپدیت کنه

پس  به `user.id` هم نیاز داریم که از داخل `token` می گیریم . 

به کل `controller editPost` نگاه کنیم : 

درون بلاک `try` گفتیم اگر که `userToken` بود بع معنی اینکه اگر کاربر `login` بود . 

بیاد درون `postModel`  از متد `findByIdAndUpdate` استفاده کردیم . 

تا به وسیله `id`  که در واقع همون `objectId` هست که از `req.params.id` داره گرفته میشه . 

با `id` بیاد `post` رو پیدا کنه و در نتیجه مقادیر جدید که از `req.body` میاید رو جایگزین مقادیر قبلی شه . 


```javascript 
//* method Put  edit post
const editPost = async (req, res) => {
  const id = req.params.id;
  // console.log("Edit post Id ", id);
  const { userToken } = req.cookies;
  const { summery, title, content, cover } = req.body;
  try {
    if (userToken) {
      const post = await postModel.findByIdAndUpdate(
        id,
        {
          title: title,
          summery: summery,
          content: content,
          cover: cover,
        },
        {
          new: true,
        }
      );
      // console.log(post);
      await post.save();
      return res.status(200).json(post);
    }
  } catch (err) {
    console.log("Edit Post Error Controller", err);
    return res
      .status(400)
      .json({ message: "post is not edit", errMessage: err });
  }
};
```

توجه کنید که به `if` که داره `userToken` رو چک می کنه نیاز داریم در غیر اینصورت سمت سرور به اررور می خوریم . 

```javascript
 if (userToken) {
}
```

در ادامه `post` که تغییر کرده رو  به وسیله متد `save` در دیتا بیس ذخیره کردیم . 

```javascript
  await post.save();
```
در ادامه بعد از ذخیره شدن `post` در دیتا بیس امدیم به سمت `client` فرستادیم . 

```javascript
      await post.save();
      return res.status(200).json(post);
```

در ادامه در بلاک `catch` ارور رو داریم . 

```javascript 
catch (err) {
    console.log("Edit Post Error Controller", err);
    return res
      .status(500)
      .json({ message: "post is not edit", errMessage: err });
  }
```

خب ساخت `controller editpost` رو هم انجام دادیم . 

### Delete post 

بریم سراغ `delete` که دیگه عملیات `crud` رو تکمیل کنیم . 

```javascript 
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
};
```

اینجا هم برای اینکه بتونیم `post` مد نظرو `delete` کنیم که بدونیم چه پستی داره `delete` میشه نیاز به `ObjectId` داریم . 

که این `objectId` به همراه دیتا هست  . 

که به وسیله دیتای که سمت `client` گرفته میشه , `objecetId` رو به سمت `server` درون ادرس `api` فرستاده میشه که در واقع همون `params` هست  . 

```javascript 
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
  try {
    if (userToken) {
      const userPost = await postModel.findByIdAndRemove(id);
      if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("Delete Post Error", err);
  }
};
```

باز دوباره چک می کنیم ببینیم که `userToken` هست یا نه اگر کاربر `login` بود بتونه `delete` رو انجام بده . 

که به وسیله `postModel` , و متد `findByIdAndRemove` کار رو انجام دادیم . 

که متد `findByIdAndRemove`  که صرفا پست رو اول پیدا می کنه و بعد  با توجه به `id` میاد پست رو پاک می کنه . 

یک `if` داریم که اگر `id` مورد نظر اون پست وجود نداشت بیاد یک پیام به سمت `client` ارسال کنه : 

```javascript
     if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
```

درون بلاک `catch` هم ارور زیر رو ارسال می کنیم : 

```javascript 
catch (err) {
    console.log("Delete Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem(delete)", err: err });
  }
```

یک بار دیگه کل `controller` مربوط به `delete` رو ببنیم : 

```javascript
//*method Delete Post
const deleteUserPost = async (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  const { userToken } = req.cookies;
  try {
    if (userToken) {
      const userPost = await postModel.findByIdAndRemove(id);
      if (!userPost) {
        return res.status(404).json("this post is not exist");
      }
      return res.status(200).json(userPost);
    }
  } catch (err) {
    console.log("Delete Post Error", err);
    return res
      .status(500)
      .json({ message: "server is proplem(delete)", err: err });
  }
};
```

# Post Router 

تمامی `controller` های که نوشتیم نیاز هست که برای اجرا شدن یک `address` در واقع یک `api` داشته باشند . 

به همین دلیل یک فایل جدید به اسم `post.js` در فولدر `routes` ایجاد می کنیم . 


<img src='https://github.com/mosenn/MERN/assets/91747908/e4b2ed94-8a27-4615-8cd6-48c93c8e0056' alt='router in expressjs'>


درون فایل خودمون میایم اول `express.Router`  رو `require` می کنیم . 

بعد میایم تمامی `controller `  ها ی که برای `post` ایجاد کردیم رو `require` می کنیم 


```javascript 
const postRouter = require("express").Router();
const {
  createPost,
  posts,
  userPost,
  deleteUserPost,
  editPost,
} = require("../controller/post");
```

حالا میایم `api` خودمون رو برای `controller` ها می نویسیم . 

```javascript
postRouter.post("/createpost", createPost);
postRouter.get("/posts", posts);
postRouter.get("/userposts", userPost);
postRouter.delete("/deletepostuser/:id", deleteUserPost);
postRouter.put("/editpost/:id", editPost);
```
دقت کنید برای `deletepostuser` و `edipost` امدیم یک  `id:/` هم گذاشتیم در ادرس `api` . 

خب این ایدی قرار هست از سمت `clinet` درون ادرس `api` قرار بگیره که در واقع گفتیم همون `objectId` هست . 

برای `delete` , `update` به `objectId` خوده `document`  که در دیتا بیس ایجاد شده نیاز داریم . 

متد ها هم که مشخصه برای ساخت از `post` استفاده شده برای گرفتن یا همون `read` از `get` استفاده شده . 

برای پاک کردن از متد `delete` استفاده شده و برای `update` از متد `put` استفاده شده . 

در نهایت `postRouter` رو `export` می کنیم و در `index.js`  از این `route` استفاده می کنیم . 

```javascript
module.exports = postRouter;
```

داخل `index.js` : 

```javascript 
app.use("/", require("./routes/post"));
```

خب کافیه الان `clinet` بیاد `api` های که نوشته شده رو بگیره و استفاده کنه . البته درون `postman` هم می تونه تست کنه . 

# create comment schmea and model

برای اینکه بتونیم برای هر پست کامنت داشته باشیم نیاز داریم که بیام `model` کامنت رو بسازیم . 

در نهایت `controller` و براش `route` بنویسیم که درون یک `api` بیاد `controller` هارو اجرا کنه . 

خب برای اینکار اول میایم `model` رو ایجاد می کنیم : 

```javascript
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      // required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("comments", commentSchema);

module.exports = commentModel;

```
که درون `author` امدیم `ref` زدیم که ببنیم توسط چه کاربری `comment` ایجاد شده . 

در ادامه `post` رو داریم که داره `ref` می زنه به `post` که مشخص می کنه این کامنت برای چه `post` هست . 

خب `model` رو اجیاد می کنیم . بعد از ساخت `commentSchema` 

```javascript
const commentModel = mongoose.model("comments", commentSchema);
```

در ادامه `export` کردیم . 

```javascript
module.exports = commentModel;
```

**نکته**: اینکه مقدار کامنت خالی ارسال نشه از سمت کلاینت کنترل شده در واقع ولید شده . 


# comment controller 

خب در ادامه نیاز به ایجاد `controller` داریم برای کامنت . 

یک فایل درون فولدر `controller` ایجاد می کنیم . 

<img src='https://github.com/mosenn/MERN/assets/91747908/f0b80767-6a0d-49f2-93fd-ef12e98a8073' />


مدل `comment` که ساختیم رو `require` می کنیم . 

```javascript
const commentModel = require("../model/comment");
```

### createComment function in controller comment

یک فانکشن ایجاد می کنیم برای ساخت `comment` و ذخیره سازی درون دیتا بیس . 

```javascript
const createComment = async (req, res) => {}
```

درون فانکشن بلاک `try` و `catch` رو داریم . 

درون بلاک `try` میام کد های مربوط به ساخت کامنت رو انجام میدیم به وسیله متد `create`.

از `req.body` مقادیر که قرار هست از سمت کلاینت ارسال شه در `body` رو می گیریم . 

```javascript
  try {
    const { comment, author, postId } = req.body;
    const newComment = await commentModel.create({
      comment,
      author,
      post: postId,
    });
    return res.json(newComment);
  }
```
اگر دقت کنید `author` و `postId` هم از `req.body` گرفته شده .

که هر دو در واقع `ObjedId` هستند که از سمت کلاینت دارند ارسال می شن . 

سمت کلاینت ما پست ها رو داریم و همینطور کاربری که انلاین هست و داره کامنت می زاره . 

از این جهت به `ObjecetId` هر دو دسترسی داریم و به عنوان `body` به `api` که مربوط به ساخت کامنت هست پاس میدیم . 

در ادامه یک متغییر داریم به اسم `newComment` که داره کامنت جدیدی به وسیله متد `create` ایجاد می کنه .

و ریسپانس رو همین کامنت جدید رو به ما برگشت میده . که به عنوان یک `json` ارسال شده . 

```javascript
    return res.status(200).json(newComment);
```

درون `catch` هم میایم اگر `err` وجود داشت ارسال می کنیم سمت کلاینت  

```javascript
 catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
```

یک بار دیگه فانکشن `createComment` رو کامل ببینیم : 

```javascript
const createComment = async (req, res) => {
  try {
    const { comment, author, postId } = req.body;
    const newComment = await commentModel.create({
      comment,
      author,
      post: postId,
    });
    return res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};
```
 ### getCommentsByPost function in controller comment
در ادامه فانکشن `getCommentsByPost` رو داریم . 

که این فانکشن میاد کامنت هارو بر اساس پست مد نظر میگیره . 

به وسیله `ObjectId` پست ها . 

```javascript
const getCommentsByPost = async (req, res) => {
  try {
    if (req.params.postId && req.params.postId.trim().length > 0) {
      const comments = await commentModel
        .find({ post: req.params.postId })
        .populate("author");
      return res.status(200).json(comments);
    }

  } catch (err) {
    console.error("Get Comments Error in controller", err);
    res.status(500).send("server err : Get Comments Error in controller", err);
  }
};
```

 درون بلاک `try` میاد چک میشه که اگر `parmas` به اسم `postId` بود و `length` بزرگ تر از 0 داشت بیاد . 

 به وسیله متد `find` کامنت ها رو پیدا کنه . به وسیله `req.params.postId` و درون دیتای که داره پیدا میشه . 

 بیاد اطلاعات `author` یا همون کاربری که کامنت گذاشته هم ارسال شه . این کار به وسیله متد `populate` انجام میشه . 

```javascript
const comments = await commentModel
.find({ post: req.params.postId })
.populate("author");
return res.status(200).json(comments);
```
 در نهایت متغییر `comment` که داره این اتفاقات `find` رو ذخیره می کنه . 

 به عنوان `response` ارسال میشه . 

 ```javascript
 return res.status(200).json(comments);
```
درون بلاک `catch` هم امدیم اگر `server` مشکلی پیدا کرد یا در کل `err` داشتیم یک `status code 500` ارسال کردیم . 

و از ارور ها هم لاگ گرفتیم برای سمت سرور که بتونیم دیباگ کنیم . 

```javascript
catch (err) {
    console.error("Get Comments Error in controller", err);
    res.status(500).send("server err : Get Comments Error in controller", err);
  }
```

در ادامه میایم `controller` های که نوشتیم رو `export` می کنیم تا بتونیم در `route` خودمون ازشون استفاده کنیم . 

```javascript
module.exports = {
  getCommentsByPost,
  createComment,
};
```


# route comments controller

درون فولدر `routes` میایم یک فایل به اسم `comment.js` ایجاد می کنیم . 


<img src='https://github.com/mosenn/MERN/assets/91747908/c2c85dfa-cb09-4b17-aae2-d305f4d4a9c9' alt='routes in expressjs' />


نیاز به `experss router` داریم پس میایم `require` می کنیم . 

```javascript
const commentRouter = require("express").Router();
```

خب درون فایل `comment.js` که ایجاد کردیم میایم  `require` می کنیم `controller` های مربوط به کامنت رو . 

```javascript
const { getCommentsByPost, createComment } = require("../controller/comment");
```

خب حالا میایم ادرس `api` براس ساخت کامنت ها و گرفتن کامنت ها بر اساس `postId` ایجاد می کنیم. 

```javascript
commentRouter.get("/comment/:postId", getCommentsByPost);
commentRouter.post("/comments", createComment);
```
که برای ساختن نیاز به `post` داریم . 

خب برای گرفتن کامنت هر `post` نیاز به `postId` داشتیم در نتیجه `params postId` رو بهش پاس دادیم . 
```javascript
commentRouter.get("/comment/:postId", getCommentsByPost);
```

که این `paramas` از سمت کلاینت درون ادرس `api` ست میشه . 

در واقع `ObjedId post` از سمت کلاینت به این `api` به عنوان `paramas postId` ست میشه .

در نهایت میایم `commentRouter` های که ایجاد کردیم رو `export` می کنیم . 

```javascript
module.exports = commentRouter;
```

کل کد مربوط به `route comment` رو ببینیم : 

```javascript
const commentRouter = require("express").Router();

const { getCommentsByPost, createComment } = require("../controller/comment");
commentRouter.get("/comment/:postId", getCommentsByPost);
commentRouter.post("/comments", createComment);

module.exports = commentRouter;

```

خب بعد از `export` کردن به درون `index.js` میریم و از `route` که برای کامنت ها ایجاد کردیم استفاده می کنیم . 

که میاد `controller` های ما رو درون `api` که نوشتیم میاد اجرا می کنه . 

```javascript
//* in index.js
app.use("/", require("./routes/comment"));
```

# userInteraction model 



<img src='https://github.com/mosenn/MERN/assets/91747908/d0d6499a-2360-4ba9-8580-204737307fd1' alt='model in expressjs' />


برای لایک و سیو های هر پست یک `model` به اسم `userIntercation` داریم .

که بیاد لایک و سیو های هر پست رو داشته باشیم . 

یک `schema` ایجاد می کنیم : 

```javascript
const mongoose = require("mongoose");

const userInteractionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
    liked: {
      type: Boolean,
      default: false,
    },
    saved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userInteractionModel = mongoose.model(
  "userInteractions",
  userInteractionSchema
);

module.exports = userInteractionModel;

```

که برای اینکه ببینیم چه کاربری لایک و سیو رو انجام داده 

همینطور چه پستی سیو و لایک شده نیاز داریم که `ref` بزنیم . 

```javascript
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
```

یک `user` داریم که در واقع `ref` شد به `collection user` . 

یک `post` داریم که اینجا هم `ref` زده شده `collection post` . 

اینجوری می تونیم متوجه شیم چه پستی توسط چه کاربری لایک و سیو شده . 

خب در نهایت میایم `model` رو ایجاد می کنیم . 

```javascript
const userInteractionModel = mongoose.model(
  "userInteractions",
  userInteractionSchema
);
```
خوب `model` که ایجاد کردیم رو میایم `export` می کنیم . 

```javascript
module.exports = userInteractionModel;
```

# controller userInteraction 

میریم سراغ ساخت `controller` برای `like` و `save` ها . 

میایم اول `  model userInteractionModel  ` رو `require` می کنیم . 

```javascript
const userInteractionModel = require("../model/userInteraction");
```

در ادامه برای اینکه چک کنیم ببینم کاربر `login` هست یا نه نیاز به `jwt` داریم . 

```javascript
const jwt = require("jsonwebtoken");
```


### toggelLikePost controller userInteraction
خب فانکشن نیاز داریم برای اینکه لایک های یک پست اعمال شن برای اینکار `toggelLikePost` رو داریم . 

```javascript
const toggelLikePost = async (req, res) => {
};
```

درون این فانشکن بلاک `try` و `catch` رو داریم . 

قبل از بلاک `try` میایم `req.cookies` رو داریم و همینطور `req.params` رو که از `paramas` میایم `id` مربوط به پست رو می گیریم . 

و از `req.coockies` میایم اطلاعات کاربر رو میگیریم . 

اگر یادتون باشه درون `schema` به مقادیر `id` پست و کاربر نیاز داشتیم . 

```javascript
const toggelLikePost = async (req, res) => {
  const { postId } = req.params;
  const { userToken } = req.cookies;
};
```

خب در ادامه بلاک `try` رو داریم : 

```javascript
  try {
    if (userToken) {
    }
    return res.status(401).json({ message: "first login for like post" });
  } 
```

که یک `if` داریم داره چک می کنه ایا کاربر لاگین هست و توکن درون `coockie` هست یا خیر اگر که بود بیاد اجازه بده کاربر لایک رو انجام بده . 

در غیر اینصور بیاد یک `status code 401` ارسال شه و یک `message` به همراه اون که این `message` رو در بخش کلاینت در قسمت `detail.tsx` اگر کاربر لاگین نباشه . 

و قصد لایک کردن داشته باشه به وسیله `Toast` که یک کامپونت سمت کلاینت هست نمایش داده میشه . 

خب درون این `if` که داره `userToken` رو چک می کنه . 

کد های زیر رو داریم و لایک رو یه جورایی `toggel` میشه یعنی `like` و `unlike` رو داریم در این `controller` . 

در کد زیر ردون `if` داریم اول `token` رو می گیریم از `cookie` . 

در نهایت داریم به وسیله متد `findOne` کاربر که لایک کرده و پستی که لایک شده رو پیدا می کنیم . 

و در نهایت اطلاعات کاربر رو به وسیله `populate` پیدا می کنیم و در دیتا خودمون قرار میدیم . 

منتها صرفا گفتیم فقط `username` رو می خوایم از داخل `collection user` . 
```javbascript
   if (userToken) {
      const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
      let userInteraction = await UserInteraction.findOne({
        user: user.id,
        post: postId,
      }).populate("user", "username");

```

در ادامه امدیم یک `if` دیگه قرار دادیم که داره `userInteraction` رو چک می کنه .

که ایا قبلا کاربری که لاگین هست پست رو لایک کرده یا نه ! 

اگر که لایک نکرده بود . 

بیاد یک `create` اتفاق بیوفته و `user.id` و `postId` رو ایجاد کنه . 



```javbascript
   if (userToken) {
      const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
      let userInteraction = await UserInteraction.findOne({
        user: user.id,
        post: postId,
      }).populate("user", "username");
      if (!userInteraction) {
        userInteraction = await UserInteraction.create({
          user: user.id,
          post: postId,
        });
      }
```

اما اگر که کاربر قبلا لایک رو انجام داده بود بعد از `if` که داره `userInteraction` رو چک می کنه . 

بیاد صرفا `like` درون دیتا بیس رو `false` کنه . 

که اینجوری اگر کاربر قبلا یک پست رو لایک کرده و باز بیاد روی لایک کلیک کنه در کلاینت . بیاد این مقدار `false` شه . 

که حالا در سمت کلاینت به وسیله همین `true` / `false` شدن دیتای همین بخش میایم قلب قرمز یا تو پر رو نشون میدیم . 

```javascript
      userInteraction.liked = !userInteraction.liked;
```

```javascript
    if (userToken) {
      const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
      let userInteraction = await UserInteraction.findOne({
        user: user.id,
        post: postId,
      }).populate("user", "username");

      if (!userInteraction) {
        userInteraction = await UserInteraction.create({
          user: user.id,
          post: postId,
        });
      }
      userInteraction.liked = !userInteraction.liked;
      await userInteraction.save();
      return res.json({
        success: true,
        liked: userInteraction,
      });
    }
```

در ادامه امدیم `save` رو انجام دادیم که دیتا با توجه به تغییر بیاد ذخیره شه . 

یعنی هر بار که تغییر می کنه دیتا بیش ما این مقدار `true` یا `false` شدن `like` رو ذخیره میکنه . 

بعد از اینکه `save` شدن داره انجام میشه امدیم `response` رو ارسال کردیم . 

```javascript
      return res.json({
        success: true,
        liked: userInteraction,
      });
```

و کلاینت اینطور می تونه به وسیله `api` که نوشته شده مقدار `true` یا `false` شدن لایک مربوط به پست رو با توجه به `id` پست داشته باشه . 

یک بار دیگه کل فانکشن `toggelLikePost` رو با هم ببینیم . 

```javascript 
const toggelLikePost = async (req, res) => {
  const { postId } = req.params;
  const { userToken } = req.cookies;

  // console.log(user, "user");
  try {
    if (userToken) {
      const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
      let userInteraction = await UserInteraction.findOne({
        user: user.id,
        post: postId,
      }).populate("user", "username");

      if (!userInteraction) {
        userInteraction = await UserInteraction.create({
          user: user.id,
          post: postId,
        });
      }
      userInteraction.liked = !userInteraction.liked;
      await userInteraction.save();
      return res.json({
        success: true,
        liked: userInteraction,
      });
    }
    return res.status(401).json({ message: "first login for like post" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error about saved" });
  }
};
```

### getLikes controller userInteraction

خب برای اینکه بیام صرفا تعداد لایک های یک پست رو داشته باشیم و نمایش بدیم . 

دقت کنید اینجا صرفا تعداد لایک های که `true` هستند رو فقط گرفتیم . و کاربری که لایک رو انجام داده . 
```javascript
const getLikes = async (req, res) => {
  try {
    const Likes = await UserInteraction.find({
      post: req.params.postId,
      liked: true,
    }).populate("user", "username , pic");
    return res.status(200).json(Likes);
  } catch (err) {
    console.log('server is err : getLikes function in userInteraction controller' , err );
    return res.status(500).json('server is err' , err)
  }
};
```

در واقع داریم `populate` انجام میشه روی `user` که در `schema` تعریف شده . 

که `ref` می زد به `collection users` . 

و صرفا گفتیم `username` و `pic` رو می خوایم از `collection user` این دوتا رو برای ما برگشت بده . 

در صورت `err` داشتنم که بلاک `catch` اتفاق می افته . 

```javascript
catch (err) {
    console.log('server is err : getLikes function in userInteraction controller' , err );
    return res.status(500).json('server is err' , err)
  }
```

یک بار دیگه فانکشن `getLikes` رو به طور کلی نگاه کنیم : 

```javascript
//* get all likes
const getLikes = async (req, res) => {
  const { postId } = req.params;
  // console.log("post Id for get Likes", postId);
  try {
    const Likes = await UserInteraction.find({
      post: req.params.postId,
      liked: true,
    }).populate("user", "username , pic");
    return res.status(200).json(Likes);
  } catch (err) {
    console.log('server is err : getLikes function in userInteraction controller' , err );
    return res.status(500).json('server is err' , err)
  }
};
```

### toggelSavePost controller userInteraction

این فانکشن هم دقیقا مثل `toggelLikePost` می مونه صرفا دیگه کد ها رو توضیح ندادیم 

اما کل فانکشن به صورت زیر هستش : 
```javascript
const toggelSavePost = async (req, res) => {
  const { postId } = req.params;
  const { userToken } = req.cookies;

  try {
    if (userToken) {
      const user = jwt.verify(userToken, process.env.JWT_SECRET, {});
      let save = await userInteractionModel.findOne({
        user: user.id,
        post: postId,
      });
      if (!save) {
        save = await userInteractionModel.create({
          user: user.id,
          post: postId,
        });
      }
      save.saved = !save.saved;
      await save.save();
      return res.status(200).json({ message: true, saved: save });
    }
    return res.status(401).json({ message: "first login for save post" });
  } catch (err) {
    console.log('server err :toggelSavePost function in userIntraction controller' , err);
    return res
      .status(500)
      .json({ success: false, message: "server error about saved" });
  }
};
```

### getSave controller userInteraction

 این فانکشن هم دقیقا مثل `getLikes` هست صرفا کد هاشو گذاشتیم و توضیح کد هاش مثل `getLikes` هست منتها `save` هارو میگیره . 

```javascript
const getSave = async (req, res) => {
  const { postId } = req.params;
  // console.log("post Id for get Likes", postId);
  try {
    const save = await UserInteraction.find({
      post: postId,
      saved: true,
      // saved:true,
    }).populate("user", "username , pic");
    return res.status(200).json(save);
  } catch (err) {
    console.log("server err :getSave function in userIntraction controller", err);
    return res.status(500).json({ success: false, message: "server error getSave func" });
  }
};
```
 
