const { carsModel } = require("../model/carSchma");
const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  // sort perfect working with number - id is number in mongodb
  const data = await carsModel.find().sort({ id: 1 });
  res.status(200).send("here cars");
});

router.get("/:id", async (req, res) => {
  try {
    const data = await carsModel.findById(req.params.id);
    if (!data) {
      return res.status(404).send("this id dont have a data");
    }
    res.send(data);
  } catch (err) {
    res.status(404).send(`
      برای گرفتن با ایدی  
      _id این ایدی رو نیاز هست داخل ادرس مروگر بزارید 
   ایدی زیر  رو تست کنید 
   63cec5a551274c1e84832d9d
    `);
  }
});

router.post("/", async (req, res) => {
  // use try catch cuz send error message, because using shcma valid not joi
  try {
    let newCars = new carsModel({
      name: req.body.name,
      sort: req.body.sort,
      typeCar: req.body.typeCar,
      fuel: req.body.fuel,
      capacity: req.body.capacity,
      price: req.body.price,
      fav: req.body.fav,
      img: req.body.img,
      caption: req.body.caption,
      reviewer: req.body.reviewer,
      views: req.body.views,
      reviews: req.body.reviews,
    });
    const data = await carsModel.find();
    const findName = data.find(
      (items) => items.name === req.body.name
    );
    if (findName) {
      res.status(404).send(`این اسمی که برای کی
      name 
      گذاشتید داخل دیتابیس هست یک اسم دیگه انتخاب کنید`);
      return null;
    }
    newCars = await newCars.save();
    res.send(newCars);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const data = await carsModel.findByIdAndDelete(req.params.id);
  if (!data) {
    return res.status(404).send(`
      برای پاک کردن 
      _id این ایدی رو نیاز هست داخل ادرس مروگر بزارید 
 ایدی زیر  رو تست کنید 
 63cec5a551274c1e84832d9d
  `);
  }
  res.send(data);
});

router.put("/:id", async (req, res) => {
  // console.log(req.body);

  try {
    const data = await carsModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        sort: req.body.sort,
        typeCar: req.body.typeCar,
        fav: req.body.fav,
        price: req.body.price,
        caption: req.body.caption,
      },
      {
        new: true,
      }
    );
    if (
      !req.body.sort ||
      !req.body.name ||
      !req.body.typeCar ||
      !req.body.fav ||
      !req.body.price ||
      !req.body.caption
    ) {
      return res.status(400).send(`
      برای اپدیت کردن مثل مثال زیر عمل کنید
      ایدی رو داخل ادرس فراموش نکنید بزارید
      _id
     { "name":"test" , 
      "sort":"popularCar",
      "typeCar":"bmw2012" , "fav":"true" , "price":200 , "caption":"lorem lorem" }`);
    }

    if (!data) {
      return res.status(400).send(`
      برای اپدیت کردن مثل مثال زیر عمل کنید
      ایدی رو داخل ادرس فراموش نکنید بزارید
      _id
     { "name":"test" , 
      "sort":"popularCar",
      "typeCar":"bmw2012" , "fav":"true" , "price":200 , "caption":"lorem lorem" }`);
    }

    res.send(data);
  } catch (err) {
    err.reason.message;
    res.send(
      `
    برای اپدیت کردن مثل مثال زیر عمل کنید
    ایدی رو داخل ادرس فراموش نکنید بزارید
    _id
   { "name":"test" , 
    "sort":"popularCar",
    "typeCar":"bmw2012" , "fav":"true" , "price":200 , "caption":"lorem lorem" } ,   ${err.reason.message}`
    );
  }
});

module.exports = router;
